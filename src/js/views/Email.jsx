import React, { Component } from 'react';

const styles = {
  body: {
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  headerContainer: {
    flex: '0 0 auto',
    backgroundColor: 'lightgray',
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: '22px',
  },
  contentContainer: {
    flex: '1 0 auto',
    margin: '0 10px',
  },
  emailContainer: {
    borderBottom: '1px solid rgba(0, 0, 0, 10%)',
    padding: '10px',
    position: 'relative',
  },
  emailFrom: {
    fontWeight: 'bold',
  },
  emailSubject: {
    fontStyle: 'italic',
  },
  emailBody: {
    opacity: '0.6',
    fontSize: '12px',
  },
  emailUnread: {
    backgroundColor: 'lightgreen',
    borderRadius: '3px',
    bottom: '5px',
    boxSizing: 'border-box',
    left: '0px',
    position: 'absolute',
    top: '5px',
    width: '3px',
  },
};

const EMAILS = [
  {
    to: 'Jane',
    from: 'Alexandria',
    subject: 'Hello emails',
    body: 'Communication is a breaze with Trend',
    isRead: true,
  },
  {
    to: 'Joe',
    from: 'Alyssa',
    subject: 'Holly cow, what a great idea',
    body: 'Give them funding, make $$$$$$$$$$$$',
    isRead: false,
  },
  {
    to: 'Venture Capital',
    from: 'Amanda',
    subject: 'Good news!',
    body: 'This choice is obvious, go Trend.',
    isRead: false,
  },
].map((email, i) => ({...email, id: i}));

class Email extends Component {
  renderEmail(email) {
    const emailBody = (
      <React.Fragment>
        <div style={styles.emailFrom}>{email.from}</div>
        <div style={styles.emailSubject}>{email.subject}</div>
        <div style={styles.emailBody}>{email.body}</div>
      </React.Fragment>
    );
    return (
      <div style={styles.emailContainer} key={email.id}>
        {!email.isRead ? (
          <React.Fragment>
            <div style={styles.emailUnread}></div>
            <div style={{paddingLeft: '5px'}}>
              {emailBody}
            </div>
          </React.Fragment>
        ) : emailBody}
      </div>
    );
  }

  render() {
    return (
      <div style={styles.body}>
        <div style={styles.headerContainer}>
          <div style={styles.headerTitle}>
            Inbox
          </div>
        </div>
        <div style={styles.contentContainer}>
          {EMAILS.map((email, i) => this.renderEmail(email))}
        </div>
      </div>
    );
  }
}

export default Email;
