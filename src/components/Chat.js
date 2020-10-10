import React from 'react'
import '../styles/Chat.css'
import { ChatHeader } from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';


const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader />
            {/* chat messages, this could also be a component*/}
            
            <div className="chat__messages">
               <Message />
            </div>

            <div className="chat_input">
                <AddCircleIcon />
                <form>
                    <input placeholder={`Message #TESTCHANNEL`} />
                    <button className="chat__inputButton">
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}
 
export default Chat