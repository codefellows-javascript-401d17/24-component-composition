import React from 'react';
require('./_NoteBody.scss');

class NoteBody extends React.Component {
  constructor(props) {
    super(props);

    this.deleteNote.bind(this)
  }

  deleteNote(cat, ind) {
    let appState = this.props.appState();
    appState.state.lists[cat].splice(ind, 1);
    return appState.setState(appState.state);
  }

  render() {
    let note = this.props.note;
    return (
      <span onClick={this.props.update} className='note-body'>
        <h4>{note.title}</h4>
        <p>{note.content}</p>
        <button
        onClick={() => this.deleteNote(note.category, this.props.ind)}>
          Delete
        </button>
      </span>
    )
  }
}

export default NoteBody;
