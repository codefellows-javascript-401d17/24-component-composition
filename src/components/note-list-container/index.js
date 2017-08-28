import React from 'react';

class NoteList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {console.log(this.props.notes)}
          {this.props.notes.map((note, i) => {
            return (
              <li key={i}>
                {note.content}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default NoteList;
