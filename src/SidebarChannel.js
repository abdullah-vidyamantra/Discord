import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlice";
import "./features/SidebarChannel.css";

export const SidebarChannel = ({ channel, id}) => {
  const dispatch = useDispatch();
  
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(setChannelInfo({ channelId: id, channelName: channel }))
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channel}
      </h4>
    </div>
  );
};
