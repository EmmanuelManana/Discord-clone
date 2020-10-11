import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import "../styles/Sidebar.css";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import db,  { auth } from "../firebase";
import ScrollToBottom from "react-scroll-to-bottom"

const Sidebar = () => {
  //pull from the redux layer.
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  // listen to the change in the collection.
  useEffect(() => {
    
    db.collection("channels").onSnapshot(snapshot => {
      // .docs =>  (array of all the changes in the snapshot)
      let docsArray = snapshot.docs;
      setChannels(docsArray.map(doc => ({
        id: doc.id,
        channel: doc.data()
      })))
    })

  }, [])

  //make a change in the collection
  const addChannel = () => {
    let promptChannel = prompt("Type in channel Name");

    if (promptChannel){
      db.collection("channels").add({
        channelName: promptChannel 
      })
    }
  }

  console.log(channels)

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3> Emmanuel's Rooms</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon
          onClick={addChannel} 
          className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsList">
          {
            channels.map(({id, channel}) => (
              // SidebarChannel onClick to populate messages 
              <SidebarChannel 
              key={id}
              id={id}
              channelName = {channel.channelName}
              />
            ))
          }
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />

        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar
          className="sidebar__profileAvatar"
          src={user ? user.photo : ""}
        />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 6)}</p>
        </div>

        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
