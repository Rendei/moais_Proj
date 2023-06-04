import * as menuChatData from "../../data/chats.json";
import * as menuSource from "../templates/menuChat.hbs"
document.getElementById("chat-menu-container").insertAdjacentHTML("afterbegin",menuSource.default(menuChatData));

import * as chatData from "../../data/chat.json";
import * as chatSource from "../templates/chatMessage.hbs"
document.getElementById("chat-messages-container").insertAdjacentHTML("afterbegin",chatSource.default(chatData));

// import * as menuChatTmp from "../../data/chats.json";// assert {type : "json"};
// let menuChatData = menuChatTmp.default;
// console.log(menuChatData);
// let menuChatSource = document.getElementById("menu-chat-template").innerHTML;
// let menuChatResult = Handlebars.compile(menuChatSource);
// document.getElementById("chat-menu-container").innerHTML = menuChatResult(menuChatData);