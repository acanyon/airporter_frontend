import React, { Component } from 'react';
import MessagesList from './MessagesList';
import MessagesFromSender from './MessagesFromSender';


class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
    };
  }

  onReturnToMessagesList() {
    this.setState({number: null});
  }

  onNavMessage(number) {
    this.setState({number});
  }

  render() {
    if (this.state.number !== null) {
      return (
        <MessagesFromSender
          number={this.state.number}
          onReturnToMessagesList={this.onReturnToMessagesList.bind(this)}
          onNavMessage={this.onNavMessage.bind(this)}
        />
      );
    }

    return (<MessagesList onNavMessage={this.onNavMessage.bind(this)} />);
  }
}

export default Messages;
