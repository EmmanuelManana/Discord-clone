import React from "react";
import "../styles/ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth } from "../firebase";

export const ChatHeader = () => {
  return (
    <div className="chatHeader">

      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Test channel name
        </h3>
      </div>

      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <div className="chatHeader__search">
          <input type="text" placeholder="Search" />
          <SearchRoundedIcon />
        </div>

        <SendRoundedIcon />
        <HelpRoundedIcon />
        <ExitToAppIcon  onClick={ () => auth.signOut()}/>
      </div>
      
    </div>
  );
};
