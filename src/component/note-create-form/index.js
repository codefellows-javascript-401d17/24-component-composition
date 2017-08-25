import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    let title = props.noteUpdate ? props.noteUpdate.title : '';
    let content = props.noteUpdate ? props.noteUpdate.content : '';

    this.state ={
      title,
      editing: false,
      completed: false,
      content
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
    if(this.props.submitTitle == 'Update Note') {
      this.props.handleSubmit(this.state, this.props.noteUpdate.id);
    }
    this.props.handleSubmit(this.state);
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
        <button type='submit'>{this.props.submitTitle}</button>
      </form>
    )
  }
}

export default NoteCreateForm;
