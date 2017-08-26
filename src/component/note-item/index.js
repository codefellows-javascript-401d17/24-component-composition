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
   this.setState({ editing: true });
 }

 updateNote(note, id) {
   let notes = this.props.notesArr;
   notes = notes.map(prevNote => note.id === id ? note : prevNote);
   this.props.app.setState({ notesArr: notes});
   this.setState({ editing: false });
 }

  render() {
    return (
      <li>
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
          <p  onDoubleClick={this.setTrue}>Double Click To Edit</p>
        }
      </li>
    );
  }
}

export default NoteItem;
