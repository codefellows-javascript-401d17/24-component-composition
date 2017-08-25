import './_body-comp.scss';
import React from 'react';
import uuid from 'uuid/v1';

import NoteCreate from '../create-note-comp';
import NotePopulate from '../note-populate';
import NoteUpdate from '../note-update';

class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
  }

  noteCreate(note) {
    note.id = uuid();
    this.props.app.setState(state => ({
      notes: [...state.notes, note]
    }));
  }
  // noteUpdate(note){
  //   let {app} = this.props;
  //   app.setState(prevState => ({
  //     notes: prevState.notes.id = item.id
  //   }));
  // }
  noteRemove(note) {
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      })
    }));
  }
  noteUpdate(note){
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id === note.id ? note : item;
      })
    }));
  }

  render() {
    let {app} = this.props;
    return (
      <div className='body-container'>
        <NoteCreate noteCreate={this.noteCreate} />
        <NotePopulate
        noteRemove={this.noteRemove}
        noteUpdate={this.noteUpdate}
        notes={app.state.notes}>
        </NotePopulate>
      </div>
    )
  }
}

export default BodyContainer;
