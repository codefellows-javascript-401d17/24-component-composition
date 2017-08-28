import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list'

class NoteContainer extends React.Component {
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

  noteRemove(note) {
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !==note.id
      })
    }));
  }

  noteUpdate(note) {
    let{app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map((item) =>{
        return item.id === note.id ? note : item;
      })
    }));
  }

  render() {
    let {app} =this.props;

    return (

      <div className='note-container'>
        <NoteCreateForm
          handleSubmit={this.noteCreate}
          subitTitle='add note'
         />
        <NoteList
          notes={app.state.notes}
          noteRemove={this.noteRemove}
          noteUpdate={this.noteUpdate}
        />
      </div>
    )
  }
}

export default NoteContainer;
