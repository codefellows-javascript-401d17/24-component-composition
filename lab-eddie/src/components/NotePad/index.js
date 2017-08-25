import React from 'react';
import NoteList from '../NoteList'

class NotePad extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <h3>{'NotePad Component'}</h3>
        <NoteList />
      </span>
    )
  }
}

export default NotePad;
