import React from 'react';

class updateNote extends React.Component {
  constructor(props) {
    super(props);
    let note = this.props.note;
    this.state = note;

    this.onChange = this.onChange.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentDidUpdate() {
    console.log('xxx')
    console.log('__STATE__', this.state);
  }

  updateForm(e) {
    e.preventDefault()
    let cat = this.props.note.category;
    let ind = this.props.ind;
    let appState = this.props.appState();
    appState.state.lists[cat][ind] = this.state;
    appState.setState(appState.state);
    this.props.renderModal(e);
  }

  render() {
    let cat = this.state.category;
    return (
      <form onSubmit={this.updateForm}>
        <input
          type='text'
          name='title'
          required={true}
          onChange={this.onChange}
          value={this.state.title}
        />
        <input
          type='text'
          name='content'
          required={true}
          onChange={this.onChange}
          value={this.state.content}
        />
        <button type='submit'>Update</button>
        <button onClick={this.props.cancel}>Cancel</button>
      </form>

    )
  }
}

export default updateNote;
