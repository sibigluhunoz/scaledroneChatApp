import React, { Component } from 'react';
import './App.css';
import Messages from "./Messages";
import Input from "./Input";
import { randomColor, randomName } from './RandomUser';

class App extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    }
  }
  constructor() {
    super();
    this.drone = new window.Scaledrone("YOUR_CHANNEL_ID", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
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
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  

}

export default App;