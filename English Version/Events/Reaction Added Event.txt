
{
  "name": "reactionAdded",
  "temp": "reactedMessage",
  "event-type": "28",
  "_id": "PTcGJ",
  "actions": [
    {
      "reaction": "1",
      "varName": "reactedMessage",
      "info": "0",
      "storage": "1",
      "varName2": "messageReacted",
      "name": "Store Reaction Info"
    },
    {
      "message": "1",
      "varName": "messageReacted",
      "info": "1",
      "storage": "1",
      "varName2": "reactedMessageID",
      "name": "Store Message Info"
    },
    {
      "message": "2",
      "varName": "Sent.MSG",
      "info": "1",
      "storage": "1",
      "varName2": "storedMessageID",
      "name": "Store Message Info"
    },
    {
      "reaction": "1",
      "varName": "reactedMessage",
      "info": "4",
      "storage": "1",
      "varName2": "checkReactions",
      "name": "Store Reaction Info"
    },
    {
      "reaction": "1",
      "varName": "reactedMessage",
      "info": "7",
      "storage": "1",
      "varName2": "last.Reacted",
      "name": "Store Reaction Info"
    },
    {
      "reaction": "1",
      "varName": "reactedMessage",
      "info": "7",
      "storage": "1",
      "varName2": "last.Reacted",
      "name": "Store Reaction Info"
    },
    {
      "storage": "1",
      "varName": "checkReactions",
      "comparison": "1",
      "value": "1",
      "iftrue": "1",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "reactedMessageID",
      "comparison": "2",
      "value": "tempVars(\"storedMessageID\")",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "reaction": "1",
      "varName": "reactedMessage",
      "member": "2",
      "varName2": "last.Reacted",
      "name": "Remove Reaction"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "Ticket.Number",
      "changeType": "1",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "Ticket.Number",
      "defaultVal": "0",
      "storage": "2",
      "varName2": "Current.Ticket.Number",
      "name": "Store Server Data"
    },
    {
      "storage": "2",
      "varName": "Current.Ticket.Number",
      "name": "Save Variable"
    },
    {
      "channelName": "${serverVars(\"Ticket.Name\")}-${serverVars(\"Current.Ticket.Number\")}",
      "topic": "",
      "position": "",
      "storage": "1",
      "varName": "new.Ticket",
      "categoryID": "${serverVars(\"Ticket.Category\")}",
      "reason": "",
      "name": "Create Text Channel"
    },
    {
      "type": "1",
      "targetType": "2",
      "bitFields": "",
      "storage": "1",
      "varName": "ticketPermissions",
      "ADMINISTRATOR": null,
      "CREATE_INSTANT_INVITE": "Disallow",
      "KICK_MEMBERS": null,
      "BAN_MEMBERS": null,
      "MANAGE_CHANNELS": "Disallow",
      "MANAGE_GUILD": null,
      "ADD_REACTIONS": "Allow",
      "VIEW_AUDIT_LOG": null,
      "PRIORITY_SPEAKER": null,
      "STREAM": null,
      "VIEW_CHANNEL": "Allow",
      "SEND_MESSAGES": "Allow",
      "SEND_TTS_MESSAGES": "Allow",
      "MANAGE_MESSAGES": "Disallow",
      "EMBED_LINKS": "Allow",
      "ATTACH_FILES": "Allow",
      "READ_MESSAGE_HISTORY": "Allow",
      "MENTION_EVERYONE": "Disallow",
      "USE_EXTERNAL_EMOJIS": "Allow",
      "VIEW_GUILD_INSIGHT": null,
      "CONNECT": null,
      "SPEAK": null,
      "MUTE_MEMBERS": null,
      "DEAFEN_MEMBERS": null,
      "MOVE_MEMBERS": null,
      "USE_VAD": null,
      "CHANGE_NICKNAME": null,
      "MANAGE_NICKNAMES": null,
      "MANAGE_ROLES": null,
      "MANAGE_WEBHOOKS": "Disallow",
      "MANAGE_EMOJIS": null,
      "name": "Create Permissions"
    },
    {
      "target": "1",
      "way": "0",
      "storage": "3",
      "varName3": "new.Ticket",
      "role": "2",
      "varName": "",
      "member": "2",
      "varName2": "last.Reacted",
      "storage3": "1",
      "varName4": "ticketPermissions",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Set Channel Permissions"
    },
    {
      "title": "",
      "author": "",
      "color": "#aabbcc",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "ticketEmbedMessage",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "ticketEmbedMessage",
      "message": "${serverVars(\"Ticket.Message\")}\n\n${serverVars(\"Support.Role\")}",
      "name": "Set Embed Description"
    },
    {
      "channel": "3",
      "varName": "new.Ticket",
      "info": "9",
      "storage": "1",
      "varName2": "channelCreated",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "ticketEmbedMessage",
      "fieldName": "Opened By:",
      "message": "${tempVars(\"last.Reacted\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "ticketEmbedMessage",
      "fieldName": "Date Opened:",
      "message": "${tempVars(\"channelCreated\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "ticketEmbedMessage",
      "channel": "5",
      "varName2": "new.Ticket",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "channel": "5",
      "varName": "new.Ticket",
      "message": "${serverVars(\"Support.Role\")}\n${tempVars(\"last.Reacted\")}",
      "storage": "1",
      "varName2": "deleteThis",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "storage": "1",
      "varName": "deleteThis",
      "reason": "",
      "name": "Delete Message"
    },
    {
      "channel": "3",
      "varName": "new.Ticket",
      "info": "2",
      "storage": "1",
      "varName2": "newTicketName",
      "name": "Store Channel Info"
    },
    {
      "input": "",
      "format": ".log",
      "filename": "${tempVars(\"newTicketName\")}",
      "filepath": "./transcripts/",
      "filetask": "0",
      "input2": "",
      "name": "File Control"
    }
  ]
}
