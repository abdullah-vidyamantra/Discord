import { Avatar } from '@mui/material'
import React from 'react'
import "./features/Messages.css"

export const Messages = ({timestamp, message, user}) => {
  return (
    <div className="message">
        <Avatar src={user.photo}/>
        <div className="message__info">
            <h4>
                @{user.displayName}
                <span className="message__timestamp">{new Date(timestamp && timestamp.toDate()).toLocaleTimeString("en-US", {timeZone: "Asia/Kolkata"})}</span>
            </h4>
            <p>{message}</p>
        </div>
    </div>
  )
}
