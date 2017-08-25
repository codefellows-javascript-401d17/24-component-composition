import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    let title = props.expense ? props.expense.title : '';
    let price = props.expense ? props.expense.price : 0;

    this.state = { title, price };
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
      this.props.noteCreate(this.state);
    }
    render() {
      return(
        <form onSubmit={this.handleSubmit}>
        <input
        name='title'
        type='text'
        placeholder='Input Title'
        value={this.state.title}
        onChange={this.handleChange}
        />

        <input
        name='note'
        type='text'
        value={this.state.note}
        placeholder='Input Note'
        onChange={this.handleChange}
        />
        <button type='submit'>Add Note</button>
        </form>
      )
    }
  }

export default NoteCreateForm;
