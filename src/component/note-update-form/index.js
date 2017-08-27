import './_note-update-form.scss'

import React from 'react';


class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.note.title,
      content: '',
      editing: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <form className='note-update-form' onSubmit={this.handleSubmit}>
        <textarea
          name='content'
          type='text'
          placeholder='update note here'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>update note</button>
      </form>
    )
  }
}

export default NoteUpdateForm;
