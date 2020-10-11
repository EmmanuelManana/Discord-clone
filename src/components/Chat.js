import React, { useEffect, useState } from "react";
import "../styles/Chat.css";
import { ChatHeader } from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { selectUser } from "../features/userSlice";
import { selectChannelID, selectChannelName } from "../features/appSlice";
import { useSelector } from "react-redux";
import db from "../firebase";
import firebase from "firebase";

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelID);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // place a listener here.
  useEffect(() => {
    //listener
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snaphot) =>
          setMessages(snaphot.docs.map((doc) => doc.data()))
        );
    }

    return () => {
      //cleanup
    };
  }, [channelId]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (channelId) {
      db.collection("channels").doc(channelId).collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user,
      });

      setInput("");
    }
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message 
          timestamp={message.timestamp}
          message ={message.message}
          user ={message.user}
          />
        ))}
      </div>

      <div className="chat_input">
        <AddCircleIcon />
        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={
              channelName ? `Message ${channelName}` : "Send Message"
            }
          />
          <button onClick={sendMessage} className="chat__inputButton">
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
