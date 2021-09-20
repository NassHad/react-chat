import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import {ChatContainer, ChatMessages, ChatList, ChatTextArea, ChatButton, ReadMe } from './ChatElements';
const ENDPOINT = "http://127.0.0.1:4001";

const Chat = () => {

  const [Message, setMessage] = useState('');

  const handleMsg = () => {
    setMessage(document.getElementById('msg').value);
  }

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("new message", (response) => {
      let li = document.createElement("li");
      li.classList.add('received');
      li.innerHTML = response;
      document.getElementById('messages').appendChild(li);
    });

    if (Message !== '') {
      let msg = document.getElementById('msg').value;
      socket.emit("send Message", msg);
      
      let li = document.createElement("li");
      li.classList.add('sended');
      li.innerHTML = msg;
      document.getElementById('messages').appendChild(li);
      document.getElementById('msg').value = '';
    }

    return () => socket.disconnect();

  }, [Message]);

  return (
    <>
      <ReadMe><h1>Projet en cours :</h1> <br/> Pour tester le chat, il faut accéder à cette url dans 2 onglets différents, ensuite il suffit d'envoyer un message depuis le <span>textarea</span> situé en bas de la page.<br/><br/> Le message envoyé depuis la page 1 devrait apparaître sans reload sur la page 2, et inversement.</ReadMe>
      <ChatContainer>
        <ChatMessages>
          <ChatList id="messages"></ChatList>
        </ChatMessages>
        <ChatTextArea id="msg" onKeyPress={(e) => e.code === "Enter" ?  handleMsg() : null}></ChatTextArea>
        <ChatButton onClick={() => handleMsg()}>Envoyer</ChatButton>
      </ChatContainer>
    </>
  )
}

export default Chat;
