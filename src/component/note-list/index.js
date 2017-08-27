import './_note-list.scss'

import React from 'react';
import NoteUpdateForm from '../note-update-form';

let renderIf = (test, component) => test ? component : undefined;

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }

    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick(e) {
    this.setState({
      editing: true
    })
  }

  render() {
    return (
      <section className='note-list'>
        { this.props.notes.length === 0 ?
          <div>
            <p>add a note</p>
          </div> :
          <ul>
          {this.props.notes.map((item, i) => {
            return (
              <li key={i}>
                <div>
                  <h2>{item.title}</h2>
                  <button onClick={() => this.props.noteRemove(item)}>X</button>
                  <p onClick={this.handleEditClick}>{item.content}</p>
                </div>

                {renderIf(this.state.editing,
                  <NoteUpdateForm
                    note={item}
                    handleSubmit={(note) => {
                      note.id = item.id;
                      this.props.noteUpdate(note);
                    }}
                  />
                )}
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
