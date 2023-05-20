import React, { Component } from 'react';
import './App.css';
import Messages from "./Messages";
import { randomColor, randomName } from './RandomUser';
import Input from "./Input"


class App extends Component {
  state = {
    messages: [
      {
        text: "This is a test message!",
        member: {
          color: "blue",
          username: "bluemoon"
        }
      }
    ],
    member: {
      username: randomName(),
      color: randomColor()
    }
  }
  render() {
    return (
      <div className="App">
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }
  onSendMessage = (message) => {
    const messages = this.state.messages
    messages.push({
      text: message,
      member: this.state.member
    })
    this.setState({messages: messages})
  }
}

export default App;
