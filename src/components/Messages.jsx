import React from "react";

function Messages(props) {
  const { messages, currentMember } = props;

  const renderMessage = (message) => {
    const { member, text, timestamp } = message;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    let messageTime = "";
    if (timestamp) {
      const dateObj = new Date(timestamp);
      messageTime = dateObj.toLocaleTimeString("en-US", {
        timeZone: "Europe/Zagreb",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    }

    return (
      <li className={className}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
          <div className="time">{messageTime}</div>
        </div>
      </li>
    );
  };

  return (
    <ul className="Messages-list">
      {messages.map((message) => renderMessage(message))}
    </ul>
  );
}

export default Messages;
