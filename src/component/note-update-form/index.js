import React from 'react';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state {
      content: ''
    }
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
        <input
          name='content'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button type='submit'>update note</button>
      </form>    
    )
  }
}
