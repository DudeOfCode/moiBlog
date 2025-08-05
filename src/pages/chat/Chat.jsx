
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import React, { useState, useEffect } from 'react';
import { auth } from "../../config/firebaseConfig";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Chat = () => {


  const NAME = "Sabo"
  //...

  // Replace the "TODO: Add mutation hook here." with:
  // const messages = useQuery(api.messages.list) || [];
  const sendChat = useMutation(api.chat.sendChat);
  //...
  const chats = useQuery(api.chat.getMessages);
  // const messages = [
  //   { _id: "1", user: "Alice", body: "Good morning!" },
  //   { _id: "2", user: NAME, body: "Beautiful sunrise today" },
  // ];
  // TODO: Add mutation hook here.

  const [newMessageText, setNewMessageText] = useState("");

  useEffect(() => {
    // Make sure scrollTo works on button click in Chrome
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 0);
  }, [chats]);

  return (

    <Popup
      trigger={<button>Chat</button>}
      modal nested>
      <main className="chat">
        <header>
          <h1>Convex Chat</h1>
          <p>
            Connected as <strong>{auth?.currentUser?.email}</strong>
          </p>
        </header>
        {chats?.map((chat) => (
          <article
            key={chat._id}
            className={chat.user === auth?.currentUser?.email ? "message-mine" : ""}
          >
            <div>{chat.user}</div>

            <p>{chat.body}</p>
          </article>
        ))}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await sendChat({ user: NAME, body: newMessageText });
            setNewMessageText("");
          }}
        >
          <input
            value={newMessageText}
            onChange={async (e) => {
              const text = e.target.value;
              setNewMessageText(text);
            }}
            placeholder="Write a message…"
          />
          <button type="submit" disabled={!newMessageText}>
            Send
          </button>
        </form>
      </main>
    </Popup>

  );
}

export default Chat

