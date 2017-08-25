import React from 'react';

class UpdateNote extends React.Component{
constructor(props){
  super(props);
  let title = props.expense ? props.expense.title : '';
  let price = props.expense ? props.expense.price : 0;

  this.state = { title, price };
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
  }
  handleUpdateChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleUpdateSubmit(e) {
    e.preventDefault();
    this.props.noteUpdate(this.state);
  }
  render() {
    console.log('update:', this.props);
    return(
      <form onSubmit={this.handleUpdateSubmit}>
      <input
      name='title'
      type='text'
      placeholder='Input Title'
      value={this.state.title}
      onChange={this.handleUpdateChange}
      />

      <input
      name='note'
      type='text'
      value={this.state.note}
      placeholder='Input Note'
      onChange={this.handleUpdateChange}
      />
      <button type='submit'>Update Note</button>
      </form>
    )
  }
}

export default UpdateNote;
