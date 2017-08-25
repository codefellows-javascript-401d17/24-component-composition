import React from 'react';
import ReactDom from 'react-dom';
import NotePad from './components/NotePad'
import NoteForm from './components/NoteForm'
import NoteCat from './components/NoteCat'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: {}
    }
    this.appState = this.appState.bind(this);
    this.removeCat = this.removeCat.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  appState() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  removeCat(category) {
    delete this.state.lists[category];
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <h1>{'Hello'}</h1>
        <NoteCat appState={this.appState} />
        <NoteForm appState={this.appState} />
        <NotePad appState={this.appState} removeCat={this.removeCat} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
