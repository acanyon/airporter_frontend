import React, { Component } from 'react';
import {getMessages} from '../mockApi';

const styles = {
  body: {
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '100%',
  },
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  headerWrapper: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '22px',
    padding: '10px 20px',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
  },
  headerEdit: {
    height: '30px',
    width: '30px',
    borderRadius: '5px',
    textAlign: 'center',
    padding: '5px 6px',
    fontSize: '20px',
    cursor: 'pointer',
  },
  messagesWrapper: {
    padding: '0 20px 20px',
    overflow: 'scroll',
  },
  message: {
    borderBottom: '1px solid lightgray',
    cursor: 'pointer',
    padding: '20px 10px',
  },
  sender: {
    fontWeight: 'bold',
  },
  lastMessage: {
    color: 'gray',
  },
};


class MessagesList extends Component {
  constructor(props) {
    super(props);
  }

  renderMessage(message, key) {
    return (
      <div style={styles.message} key={key} onClick={() => this.props.onNavMessage(message.number)}>
        <div style={styles.sender}>
          {message.name ? message.name : <i>{message.number}</i>}
        </div>
        <div style={styles.lastMessage}>
          {message.lastMessage}
        </div>
      </div>
    );
  }

  render() {
    const messages = getMessages();

    return (
      <div style={styles.body}>
        <div style={styles.container}>
          <div style={styles.wrapper}>
            <div style={styles.headerWrapper}>
              Messages
              <div
                style={styles.headerEdit}
                className={'fas fa-edit'}
                onClick={() => this.props.onNavMessage('')}
              ></div>
            </div>
            <div style={styles.messagesWrapper}>
              {messages.map((message, i) => this.renderMessage(message, i))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessagesList;
