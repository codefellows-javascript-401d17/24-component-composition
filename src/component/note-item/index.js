import React from 'react';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
   this.props.deleteNote(this.props.note.title);
 }

  render() {
    return (
      <li>
        <h2>{this.props.note.title}</h2>
        <span>
          <p>{this.props.note.content}</p>
        </span>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default NoteItem;
