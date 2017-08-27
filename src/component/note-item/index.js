import './style/style.scss';

import React from 'react';
import NoteCreateForm from '../note-create-form';
import uuid from 'uuid/v1';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: null,
    }

    this.updateNote = this.updateNote.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setTrue = this.setTrue.bind(this);
  }

  handleDelete() {
    this.props.deleteNote(this.props.note.id);
  }

  setTrue() {
    this.setState({ editing: true });
  }

  updateNote(note, id) {
    note.id = uuid();
    let notes = this.props.notesArr;
    notes = notes.map(prevNote => {
      return id === prevNote.id ? note : prevNote
    });
    this.props.app.setState({ notesArr: notes});
    this.setState({ editing: false });
  }

  render() {
    return (
      <li onDoubleClick={this.setTrue}>
            {
              this.state.editing == true ?
              <section className="update">
                <NoteCreateForm
                  noteUpdate={this.props.note}
                  submitTitle='Update Note'
                  handleSubmit={this.updateNote}
                  />
                  <button className='deleteButton' onClick={this.handleDelete}>X</button>
              </section>
              :
              <section className="noteStyle">
                <section className='noteText'>

                  <h2>{this.props.note.title}</h2>
                  <span>
                    <p>{this.props.note.content}</p>
                  </span>
                <p>Double Click To Edit</p>
                <button className='deleteButton' onClick={this.handleDelete}>X</button>
              </section>
            </section>
            }
      </li>
    );
  }
}

export default NoteItem;
