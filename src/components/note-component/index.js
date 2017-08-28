import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list-container'

class NoteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.addNote = this.addNote.bind(this);
  }

  addNote(note) {
    note.id = uuid();

    this.props.app.setState((prevState) => {
      prevState.notes.push([note]);
    })
  }

  render() {
    let {app} = this.props;
    return (
      <div className='note-component'>
        <NoteCreateForm handleSubmit={this.addNote} />
        <NoteList notes={app.state.notes} />
      </div>

    )
  }
}

export default NoteComponent;