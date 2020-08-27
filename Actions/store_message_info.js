module.exports = {
	//---------------------------------------------------------------------
	// Action Name
	//
	// This is the name of the action displayed in the editor.
	//---------------------------------------------------------------------
	name: "Store Message Info",

	//---------------------------------------------------------------------
	// Action Section
	//
	// This is the section the action will fall into.
	//---------------------------------------------------------------------
	section: "Messaging",

	//---------------------------------------------------------------------
	// Action Subtitle
	//
	// This function generates the subtitle displayed next to the name.
	//---------------------------------------------------------------------
	subtitle: function(data) {
		const message = ["Command Message", "Temp Variable", "Server Variable", "Global Variable"];
		const info = ["Message Object", "Message ID", "Message Text", "Message Author", "Message Channel", "Message Timestamp", "Message is Pinned", "Message is TTS", "Message Attachments List", "Message Edits", "", "", "Messages Reactions Count", "Mentioned Users List", "Mentioned Users Count", "Message URL", "Message Creation Date", "Message Content Length", "Message Attachments Count", "Message Guild", "Message Type", "Message Webhook ID", "Message Embed Object"];
		return `${message[parseInt(data.message)]} - ${info[parseInt(data.info)]}`;
	},

	//---------------------------------------------------------------------
	// Action Storage Function
	//
	// Stores the relevant variable info for the editor.
	//---------------------------------------------------------------------
	variableStorage: function(data, varType) {
		const type = parseInt(data.storage);
		if(type !== varType) return;
		const info = parseInt(data.info);
		let dataType = "Unknown Type";
		switch(info) {
			case 0:
				dataType = "Message";
				break;
			case 1:
				dataType = "Message ID";
				break;
			case 2:
				dataType = "Text";
				break;
			case 3:
				dataType = "Server Member";
				break;
			case 4:
				dataType = "Channel";
				break;
			case 5:
				dataType = "Text";
				break;
			case 6:
			case 7:
				dataType = "Boolean";
				break;
			case 8:
        dataType = "Date";
			case 9:
        dataType = "Messages List";
			case 12:
				dataType = "Number";
				break;
			case 13:
				dataType = "Array";
				break;
			case 14:
				dataType = "Number";
				break;
			case 15:
				dataType = "URL";
				break;
			case 16:
				dataType = "Date";
				break;
			case 17:
			case 18:
				dataType = "Number";
				break;
			case 19:
				dataType = "Guild";
				break;
			case 20:
				dataType = "Message Type";
				break;
			case 21:
				dataType = "Webhook ID";
				break;
			case 22:
				dataType = "Embed Message";
				break;
		}
		return ([data.varName2, dataType]);
	},

	//---------------------------------------------------------------------
	// Action Fields
	//
	// These are the fields for the action. These fields are customized
	// by creating elements with corresponding IDs in the HTML. These
	// are also the names of the fields stored in the action's JSON data.
	//---------------------------------------------------------------------
	fields: ["message", "varName", "info", "storage", "varName2"],

	//---------------------------------------------------------------------
	// Command HTML
	//
	// This function returns a string containing the HTML used for
	// editting actions.
	//
	// The "isEvent" parameter will be true if this action is being used
	// for an event. Due to their nature, events lack certain information,
	// so edit the HTML to reflect this.
	//
	// The "data" parameter stores constants for select elements to use.
	// Each is an array: index 0 for commands, index 1 for events.
	// The names are: sendTargets, members, roles, channels,
	//                messages, servers, variables
	//---------------------------------------------------------------------
	html: function(isEvent, data) {
		return `
<div>
	<div style="float: left; width: 35%;">
		Source Message:<br>
		<select id="message" class="round" onchange="glob.messageChange(this, 'varNameContainer')">
			${data.messages[isEvent ? 1 : 0]}
		</select>
	</div>
	<div id="varNameContainer" style="display: none; float: right; width: 60%;">
		Variable Name:<br>
		<input id="varName" class="round" type="text" list="variableList"><br>
	</div>
</div><br><br><br>
<div>
	<div style="padding-top: 8px; width: 70%;">
		Source Info:<br>
		<select id="info" class="round">
			<option value="0" selected>Message Object</option>
			<option value="1">Message ID</option>
			<option value="2">Message Text</option>
			<option value="3">Message Author</option>
			<option value="4">Message Channel</option>
			<option value="5">Message Timestamp</option>
			<option value="6">Message Is Pinned?</option>
      <option value="7">Message Is TTS?</option>
      <option value="8">Message Attachments List</option>
			<option value="9">Message Edits</option>
			<option value="12">Messages Reactions Count</option>
			<option value="13">Messages Mentioned Users List</option>
			<option value="14">Messages Mentioned Users Count</option>
			<option value="15">Message URL</option>
			<option value="16">Message Creation Date</option>
			<option value="17">Message Content Length</option>
			<option value="18">Message Attachments Count</option>
			<option value="19">Message Guild</option>
			<option value="20">Message Type</option>
			<option value="21">Message Webhook ID</option>
			<option value="22">Message Embed Object</option>
		</select>
	</div>
</div><br>
<div>
	<div style="float: left; width: 35%;">
		Store In:<br>
		<select id="storage" class="round">
			${data.variables[1]}
		</select>
	</div>
	<div id="varNameContainer2" style="float: right; width: 60%;">
		Variable Name:<br>
		<input id="varName2" class="round" type="text"><br>
	</div>
</div>`;
	},

	//---------------------------------------------------------------------
	// Action Editor Init Code
	//
	// When the HTML is first applied to the action editor, this code
	// is also run. This helps add modifications or setup reactionary
	// functions for the DOM elements.
	//---------------------------------------------------------------------
	init: function() {
		const { glob, document } = this;

		glob.messageChange(document.getElementById("message"), "varNameContainer");
	},

	//---------------------------------------------------------------------
	// Action Bot Function
	//
	// This is the function for the action within the Bot's Action class.
	// Keep in mind event calls won't have access to the "msg" parameter,
	// so be sure to provide checks for variable existance.
	//---------------------------------------------------------------------
	action: function(cache) {
		const data = cache.actions[cache.index];
		const message = parseInt(data.message);
		const varName = this.evalMessage(data.varName, cache);
		const info = parseInt(data.info);
		const msg = this.getMessage(message, varName, cache);
		if(!msg) {
			this.callNextAction(cache);
			return;
		}
		let result;
		switch(info) {
			case 0:
				result = msg;
				break;
			case 1:
				result = msg.id;
				break;
			case 2:
				result = msg.content;
				break;
			case 3:
				result = msg.member || msg.author;
				break;
			case 4:
				result = msg.channel;
				break;
			case 5:
				result = msg.createdTimestamp;
				break;
			case 6:
				result = msg.pinned;
				break;
			case 7:
				result = msg.tts;
				break;
			case 8:
				result = msg.attachments.array();
				break;
			case 9:
				result = msg.edits;
				break;
			case 12:
				result = msg.reactions.cache.size;
				break;
			case 13:
				result = msg.mentions.users.array();
				break;
			case 14:
				result = msg.mentions.users.size;
				break;
			case 15:
				result = msg.url;
				break;
			case 16:
				result = msg.createdAt;
				break;
			case 17:
				result = msg.content.length;
				break;
			case 18:
				result = msg.attachments.size;
				break;
			case 19:
				result = msg.guild;
				break;
			case 20:
				result = msg.type;
				break;
			case 21:
				result = msg.webhookID;
				break;
			case 22:
				result = msg.embeds[0];
				break;
			default:
				break;
		}
		if(result !== undefined) {
			const storage = parseInt(data.storage);
			const varName2 = this.evalMessage(data.varName2, cache);
			this.storeValue(result, storage, varName2, cache);
		}
		this.callNextAction(cache);
	},

	//---------------------------------------------------------------------
	// Action Bot Mod
	//
	// Upon initialization of the bot, this code is run. Using the bot's
	// DBM namespace, one can add/modify existing functions if necessary.
	// In order to reduce conflictions between mods, be sure to alias
	// functions you wish to overwrite.
	//---------------------------------------------------------------------
	mod: function() {}
}; // End of module
