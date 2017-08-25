import React from 'react';
import NoteCreateForm from '../note-create-form';

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
   this.setState({ editing: true});
 }

 updateNote(note, id) {
   console.log(id);
   console.log(note);
   let notes = this.props.notesArr;
   console.log(notes);
   notes = notes.map(prevNote => note.id === id ? note : prevNote);
   console.log('_____NOTES____', notes);
   this.props.app.setState({ notesArr: notes});
 }

  render() {
    return (
      <li onDoubleClick={this.setTrue}>
        <h2>{this.props.note.title}</h2>
        <span>
          <p>{this.props.note.content}</p>
        </span>
        <button onClick={this.handleDelete}>Delete</button>
        {
          this.state.editing == true ?
          <section>
            <NoteCreateForm
              noteUpdate={this.props.note}
              submitTitle='Update Note'
              handleSubmit={this.updateNote}
              />
          </section>
          :
          <p>Double Click To Edit</p>
        }
      </li>
    );
  }
}

export default NoteItem;
