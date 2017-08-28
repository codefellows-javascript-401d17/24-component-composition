import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form'

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
    return (
      <div className='note-component'>
        <NoteCreateForm handleSubmit={this.addNote} />
      </div>

    )
  }
}

export default NoteComponent;