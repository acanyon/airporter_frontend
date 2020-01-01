import React, { Component } from 'react';
import {getMessagesForSender, postMessage} from '../mockApi';

const INPUT_HEIGHT = '50px';
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
    flex: '1 1 auto',
  },
  headerWrapper: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '22px',
    padding: '10px 20px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  headerWrapperNoSender: {
    backgroundColor: 'lightgray',
    color: 'black',
  },
  headerNav: {
    paddingRight: '10px',
    cursor: 'pointer',
  },
  headerNewNumber: {
    border: '0px solid lightgray',
    borderRadius: '5px',
    padding: '0 10px',
  },
  messagesWrapper: {
    padding: '20px',
    overflow: 'scroll',
    flex: '1 1 auto',
    height: '100%',
  },
  inputWrapper: {
    borderTop: '1px solid black',
    bottom: '0',
    backgroundColor: 'white',
    height: INPUT_HEIGHT,
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 20px',
    flex: '0 0 auto',
  },
  inputSubmit: {
    alignSelf: 'center',
    paddingLeft: '15px',
    cursor: 'pointer',
  },
  inputContainer: {
    flex: '1 1 auto',
    alignSelf: 'center',
  },
  messageInput: {
    border: '1px solid lightgray',
    height: '70%',
    width: '100%',
    borderRadius: '5px',
    padding: '10px',
    height: '30px',
  },
  message: {
    margin: '0 40px 20px 10px',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    padding: '10px 13px',
  },
  messageSent: {
    backgroundColor: 'pink',
    margin: '0 10px 20px 40px',
  },
}


class MessagesFromSender extends Component {
  constructor(props) {
    super(props);
    const {sender, list} = getMessagesForSender(this.props.number);
    this.state = {
      newMessage: '',
      sender,
      messages: list,
    };
  }

  componentDidMount() {
    this.scrollToBottomOfMessages();
    if (this.senderInputRef) {
      this.senderInputRef.focus();
    } else {
      this.textInputRef && this.textInputRef.focus();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.messages !== prevState.messages) {
      this.scrollToBottomOfMessages();
    }
    if (!prevProps.number && this.props.number) {
      this.textInputRef && this.textInputRef.focus();
      this.refreshMessages();
    }
  }

  scrollToBottomOfMessages() {
    this.messagesRef.scrollTop = this.messagesRef.scrollHeight;
  }

  refreshMessages() {
    const {sender, list} = getMessagesForSender(this.props.number);
    this.setState({
      sender,
      messages: list,
    });
  }

  renderMessage(message, key) {
    return (
      <div style={{...styles.message, ...(message.sent ? styles.messageSent : {})}} key={key}>
        {message.body}
      </div>
    );
  }

  onMessageInputKeyDown(event) {
    if (event.key === 'Enter') {
      this.onSendMessage();
    }
  }

  onSenderEntry(event) {
    this.setState({newSenderNumber: event.currentTarget.value});
  }

  onSendMessage() {
    postMessage(this.props.number, this.state.newMessage);
    this.refreshMessages();
    this.setState({newMessage: ''});
  }

  onTypeMessage(event) {
    this.setState({newMessage: event.currentTarget.value});
  }

  renderHeader() {
    return (
        <div style={{...styles.headerWrapper, ...(!this.props.number && styles.headerWrapperNoSender)}}>
          <div
            style={styles.headerNav}
            className={'fas fa-chevron-left'}
            onClick={this.props.onReturnToMessagesList}
          >
          </div>
          {
            !this.props.number ? (
              <input
                style={styles.headerNewNumber}
                value={this.state.newSenderNumber}
                ref={ref => this.senderInputRef = ref}
                onChange={this.onSenderEntry.bind(this)}
                onBlur={() => this.props.onNavMessage(this.state.newSenderNumber)}
              />
            ) : (
              <div style={styles.headerTitle}>
                {
                  this.state.sender && this.state.sender.name ?
                  this.state.sender.name :
                  <i>{this.props.number}</i>
                }
              </div>
            )
          }
        </div>
    );
  }

  render() {
    return (
      <div style={styles.body}>
        <div style={styles.container}>
          <div style={styles.wrapper}>
            {this.renderHeader()}
            <div style={styles.messagesWrapper} ref={ref => this.messagesRef = ref}>
              {this.state.messages.map((message, i) => this.renderMessage(message, i))}
            </div>
          </div>
          <div style={styles.inputWrapper}>
            <div style={styles.inputContainer}>
              <input
                style={styles.messageInput}
                value={this.state.newMessage}
                ref={ref => this.textInputRef = ref}
                onChange={this.onTypeMessage.bind(this)}
                onKeyDown={this.onMessageInputKeyDown.bind(this)}
              ></input>
            </div>
            <div
              className={"fas fa-arrow-right"}
              style={styles.inputSubmit}
              onClick={this.onSendMessage.bind(this)}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessagesFromSender;
