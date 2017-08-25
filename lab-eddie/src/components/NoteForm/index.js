import React from 'react';
import uuid from 'uuid/v1'

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    let defaultCat = Object.keys(this.props.appState().state.lists)[0];
    this.state = {
      title: '',
      content: '',
      category: defaultCat,
      error: false
    }

    this.onChange = this.onChange.bind(this);
    this.addNoteToCat = this.addNoteToCat.bind(this);
    this.compileNote = this.compileNote.bind(this);
  }

  addNoteToCat(e) {
    e.preventDefault();
    if(!this.state.category) return this.setState({
      error: true
    });

    this.setState({
      error: false
    });

    let newNote = this.compileNote();
    let appState = this.props.appState().state;
    console.log(appState)
    appState.lists[newNote.category].push(newNote);
    this.props.appState().setState(appState);
  }

  compileNote() {
    let newNote = this.state;
    delete newNote.error;
    newNote.id = uuid();
    return newNote;
  }

  onChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  render() {

    let options = Object.keys(this.props.appState().state.lists);
    let formError = this.state.error ? 'note-form-error' :  ''

    return(
      <form onSubmit={this.addNoteToCat} className={formError}>
        <input
          onChange={this.onChange}
          type='text'
          name='title'
          value={this.state.title}
          required={true}
          placeholder='Enter Title of Note'
        />
        <input
          onChange={this.onChange}
          type='text'
          name='content'
          value={this.state.content}
          required={true}
          placeholder='Enter Content'
        />
        <select onChange={this.onChange} name={'category'}>
          {options.map((item, ind) => {
            return (
              <option key={ind}  value={item}>{item}</option>
            )
          })}
        </select>
        <button type='submit'>{'Add Note'}</button>
      </form>
    )
  }
}

export default NoteForm;
