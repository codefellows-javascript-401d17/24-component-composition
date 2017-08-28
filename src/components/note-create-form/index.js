import React from 'react';
import uuid from 'uuid';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    console.log('app state', this.props.app);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('clicked');
    this.addNote(this.props.app.state)
  }
  handleChange(e) {
    this.props.app.state.content = e.target.value;
    console.log('state content', this.props.app.state.content);
  }

  addNote(note) {

    note.id = uuid.v1();
    this.props.app.setState((state) => {
      state.notes = [...state.notes, note];
      return state.notes;
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          onChange={this.handleChange}
        />
        <button type="submit">Add Note</button>
      </form>
    )
  }
}

export default NoteCreateForm;