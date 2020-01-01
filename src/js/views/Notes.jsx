import React, { Component } from 'react';

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  headerContainer: {
    backgroundColor: 'lightgray',
    flex: '0 0 auto',
    fontSize: '22px',
    padding: '10px 20px',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    display: 'flex',
  },
  bodyContainer: {
    backgroundColor: 'white',
    padding: '0 10px',
    flex: '1 0 auto',
  },
  noteSummaryWrapper: {
    padding: '10px',
    borderBottom: '1px solid rgba(0, 0, 0, 10%)',
  },
  noteSummaryNoTitle: {
    fontStyle: 'italic',
  },
  composeNoteButton: {
    fontSize: '22px',
    lineHeight: '32px',
    cursor: 'pointer',
  },
  noteSummaryTitle: {
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  noteSummaryContent: {
    fontStyle: 'italic',
    opacity: '60%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  noteContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '10px',
    height: '100%',
  },
  noteHeader: {
    flex: '0 0 auto',
    marginBottom: '10px',
    padding: '0 10px',
  },
  noteTitle: {
    flex: '0 0 auto',
    padding: '0 10px',
  },
  noteTitleInput: {
    width: '100%',
    border: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 70%)',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '22px',
  },
  noteContent: {
    flex: '1 0 auto',
    border: 'none',
    padding: '0 10px',
  },
};

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          title: 'Why Trend Will Become Fortune 500',
          content: 'With its free business model, Trend will be able to capitalize on the lucrative advertising market by creating cutting edge advertising capabilities like never seen before!',
        },
        {
          id: 1,
          title: 'Pitch Deck for Trend',
          content: 'email me at: alysa@trendclub.co',
        },
      ],
      currentNoteId: null,
    };
  }

  autoGrow(element) {
    // TODO - fix me
    element.style.height = (element.scrollHeight)+"px";
  }

  get note() {
    return this.state.notes[this.state.currentNoteId];
  }

  addNote() {
    const newNote = {
      id: this.state.notes.length,
      title: '',
      content: '',
    };
    this.setState({
      notes: [...this.state.notes, newNote],
      currentNoteId: newNote.id,
    });
  }

  onNoteClick(currentNoteId) {
    this.setState({currentNoteId});
  }

  onEditNote(newAttrs) {
    let notes = this.state.notes;
    notes[this.state.currentNoteId] = {...this.note, ...newAttrs};
    this.setState({notes});
  }

  onCreateNote() {
    this.addNote();
  }

  onEditTitle(event) {
    this.onEditNote({title: event.currentTarget.value});
  }

  onEditContent(event) {
    this.onEditNote({content: event.currentTarget.value});
  }

  renderNote() {
    return (
      <div style={styles.noteContainer}>
        <div style={styles.noteHeader}>
          <div className={'fas fa-chevron-left'} onClick={() => this.onNoteClick(null)}></div>
        </div>
        <div style={styles.noteTitle}>
          <textarea
            style={styles.noteTitleInput}
            value={this.note.title}
            onChange={this.onEditTitle.bind(this)}
            placeholder={'Need title'}
          />
        </div>
        <textarea
          style={styles.noteContent}
          value={this.note.content}
          onChange={this.onEditContent.bind(this)}
        />
      </div>
    );
  }

  renderNoteSummary(note) {
    return (
      <div
        style={styles.noteSummaryWrapper}
        key={note.id}
        onClick={() => this.onNoteClick(note.id)}
      >
        <div style={styles.noteSummaryTitle}>
          {note.title ? note.title : <span style={styles.noteSummaryNoTitle}>No title</span>}
        </div>
        <div style={styles.noteSummaryContent}>
          {note.content}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={styles.body}>
        {
          this.state.currentNoteId === null ? (
            <React.Fragment>
              <div style={styles.headerContainer}>
                <div>Notes</div>
                <div
                  style={styles.composeNoteButton}
                  className={'fas fa-pencil-alt'}
                  onClick={this.onCreateNote.bind(this)}
                ></div>
              </div>
              <div style={styles.bodyContainer}>
                {this.state.notes.map(note =>
                  this.renderNoteSummary(note)
                )}
              </div>
            </React.Fragment>
          ) :
          this.renderNote()
        }
      </div>
    );
  }
}

export default Notes;
