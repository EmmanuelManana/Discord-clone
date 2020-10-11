import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../features/appSlice";
import "../styles/SidebarChannel.css";

//pass firebase  ID and collection name.
const SidebarChannel = ({ id, channelName }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChannel"

      onClick={() =>
        // dispatch to App to ne used anywhere.
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
