import React from 'react';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.note.title,
      content: '',
      editing: false,
      complete: false
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
    this.props.handleSubmit(this.state)
  }


  render() {
    return(
      <form className='edit-form' onSubmit={this.handleSubmit}>
        <input
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type='submit'>update note</button>
      </form>
    )
  }
}

export default NoteUpdateForm
