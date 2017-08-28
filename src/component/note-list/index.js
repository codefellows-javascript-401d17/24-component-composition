import React from 'react';
import NoteCreateForm from '../note-create-form';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    this.setState({ editing: true })
  }

  render() {
    return (
      <section className='note-list'>
        <ul>
          {this.props.notes.map((item, i) =>
            <li key={i}>
              <div>
                <button onClick={() => this.props.noteRemove(item)}>X</button>
                <p onClick={this.handleEdit}>{item.content}</p>
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
          )}
        </ul>
      </section>
    )
  }
}

export default NoteList;
