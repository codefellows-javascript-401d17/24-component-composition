import React from 'react';

class NoteCat extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      category: ''
    }
    this.onChange = this.onChange.bind(this);
    this.addCat = this.addCat.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addCat(e) {
    e.preventDefault();
    let appState = this.props.appState()
    let tempState = appState.state;
    if(!tempState.lists[this.state.category]) tempState.lists[this.state.category] = [];
    appState.setState(tempState);
  }

  render() {
    return (
      <form onSubmit={this.addCat}>
        <input
          type='text'
          name='category'
          value={this.state.category}
          placeholder='Enter Category'
          onChange={this.onChange}
          required={true}
        />
        <button type='submit'>{'Add Category'}</button>
      </form>
    )
  }
}

export default NoteCat;
