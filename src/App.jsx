import React, { Component } from 'react';
import './App.css';
import Messages from './components/Messages';
import Input from './components/Input';
import { randomColor, randomName } from './utils/RandomUser';

class App extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    },
  };
  constructor() {
    super();

    this.drone = new window.Scaledrone(`vhkmylACL3JfgtpL`, {
      data: this.state.member,
    });
    this.drone.on('open', (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe('observable-room');
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      const timestamp = new Date();
      messages.push({ member, text: data, timestamp });
      this.setState({ messages });
    });
  }

  render() {
    const { messages, member } = this.state;

    return (
      <div className="App">
        <Messages messages={messages} currentMember={member} />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
  onSendMessage = (message) => {
    this.drone.publish({
      room: 'observable-room',
      message,
    });
  };
}

export default App;
