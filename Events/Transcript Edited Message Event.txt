{
  "name": "editedMessage",
  "temp": "oldMessage",
  "event-type": "26",
  "_id": "nKUFv",
  "actions": [
    {
      "message": "1",
      "varName": "oldMessage",
      "info": "4",
      "storage": "1",
      "varName2": "messageChannel",
      "name": "Store Message Info"
    },
    {
      "message": "1",
      "varName": "oldMessage",
      "info": "3",
      "storage": "1",
      "varName2": "messageAuthor",
      "name": "Store Message Info"
    },
    {
      "message": "1",
      "varName": "oldMessage",
      "info": "3",
      "storage": "1",
      "varName2": "messageAuthor",
      "name": "Store Message Info"
    },
    {
      "member": "2",
      "varName": "messageAuthor",
      "info": "2",
      "storage": "1",
      "varName2": "memberUsername",
      "name": "Store Member Info"
    },
    {
      "channel": "3",
      "varName": "messageChannel",
      "info": "2",
      "storage": "1",
      "varName2": "channelName",
      "name": "Store Channel Info"
    },
    {
      "type": "2",
      "storage": "1",
      "varName": "dayVariable",
      "name": "Store Time Info"
    },
    {
      "type": "1",
      "storage": "1",
      "varName": "monthVariable",
      "name": "Store Time Info"
    },
    {
      "type": "0",
      "storage": "1",
      "varName": "yearVariable",
      "name": "Store Time Info"
    },
    {
      "type": "3",
      "storage": "1",
      "varName": "hourVariable",
      "name": "Store Time Info"
    },
    {
      "type": "4",
      "storage": "1",
      "varName": "minuteVariable",
      "name": "Store Time Info"
    },
    {
      "type": "5",
      "storage": "1",
      "varName": "secondVariable",
      "name": "Store Time Info"
    },
    {
      "input": "[${tempVars(\"dayVariable\")}/${tempVars(\"monthVariable\")}/${tempVars(\"yearVariable\")} at ${tempVars(\"hourVariable\")}:${tempVars(\"minuteVariable\")}:${tempVars(\"secondVariable\")}][${tempVars(\"memberUsername\")}] [edited] (Old Message)[${tempVars(\"oldMessage\")}] -> (New Message)[${tempVars(\"newMessage\")}] \\n",
      "format": "",
      "filename": "${tempVars(\"channelName\")}.log",
      "filepath": "./transcripts/",
      "filetask": "2",
      "input2": "",
      "name": "File Control"
    }
  ],
  "temp2": "newMessage"
}