import React from "react";

function Messages(props) {
  const { messages, currentMember } = props;

  const renderMessage = (message) => {
    const { member, text, timestamp } = message;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    const messageTime = new Date(timestamp).toLocaleTimeString("en-US", {
      timeZone: "Europe/Zagreb",
    });

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
      {messages.map((m) => renderMessage(m))}
    </ul>
  );
}

export default Messages;

