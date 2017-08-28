import React from 'react';
import uuid from 'uuid';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('clicked');
    this.addNote(this.props.app.state);
    let submitBox = document.getElementById('inputSubmit');
    submitBox.value = '';
  }
  handleChange(e) {
    this.props.app.state.content = e.target.value;
  }

  addNote(note) {

    note.id = uuid.v1();
    note.editing = false;
    note.completed = false;
    this.props.app.setState((state) => {
      state.notes.push(note);
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            id='inputSubmit'
            onChange={this.handleChange}
          />
          <button type="submit">Add Note</button>
        </form>
        <div className="notes-list">
          <ul>
            {this.props.app.state.notes.map((note, index) => {
              <li>
                <p>hello: {note.content}</p>
              </li>
            })}
          </ul>
        </div>
      </div>

    )
  }
}

export default NoteCreateForm;