import React from 'react';

class NoteList extends React.Component {
  render() {
    return (
      <section>
        { this.props.notes.length === 0 ?
          <div>
            <p>add a note</p>
          </div> :
          <ul>
          {this.props.notes.map((note, i) => {
            return (
              <li key={i}>
                <button onClick={() => this.props.noteRemove(note)}>X</button>
                <div>
                  <h2>{note.title}</h2>
                  <p>{note.content}</p>
                </div>
              </li>
            )
          })}
          </ul>
        }
      </section>
    )
  }
}

export default NoteList;
