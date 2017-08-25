import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.notesArr.map((item, i) => {
            return (
              <NoteItem key={i} note = {item}
                deleteNote = {this.props.deleteNote}
                app ={this.props.app}
                notesArr={this.props.notesArr}
                />
            );
          }
        )}
      </ul>
    </div>
    );
  }
}

export default NoteList;
