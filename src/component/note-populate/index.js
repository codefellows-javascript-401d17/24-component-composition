import React from 'react';

import CreateNoteComp from '../create-note-comp';
import UpdateNote from '../note-update';

class NotePopulate extends React.Component {
  render(){
    let {app} = this.props;
    console.log('populate:', this.props)
    return(
      <section className='note-populate'>
      <ul>
      {this.props.notes.map((item, i) =>
        <li key={i}>
        <button onClick={() => this.props.noteRemove(item)}>XXX</button>
        <div>
        <p>title: {item.title}</p>
        <p>this: {item.note}</p>
        </div>

        <UpdateNote
        note={item}
        submitTitle='update note'
        handleUpdateSubmit={(note) => {
          note.id = item.id;
          this.props.noteUpdate(note);
        }}
        />
        </li>
      )}
      </ul>
      </section>
    )
  }
}
export default NotePopulate;
