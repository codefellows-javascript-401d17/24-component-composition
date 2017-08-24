import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      title: '',
      editing: false,
      completed: false,
      content: ''
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
    this.props.handleNoteCreate(this.state);
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input
          name='title'
          type='text'
          value={this.state.title}
          placeholder='Note Title'
          onChange={this.handleChange}
          />
        <input
          name='content'
          type='text'
          value={this.state.content}
          placeholder='Enter Note'
          onChange={this.handleChange}
          />
        <input type="submit" />
      </form>
    )
  }
}

export default NoteCreateForm;
