import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { notes } = this.props.app.state;
    console.log('inside notelist', notes);
    return (
      <ul>
        {console.log(notes)}
        <li>

        </li>
      </ul>
    )
  }
}

export default NoteList;
