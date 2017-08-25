import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span>
        <h3>{'NoteList'}</h3>
        <ul>
          <li>
            <p>{'This is where the notes will go :D'}</p>
          </li>
        </ul>
      </span>
    )
  }
}

export default NoteList;
