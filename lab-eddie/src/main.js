import React from 'react';
import ReactDom from 'react-dom';
import NotePad from './components/NotePad'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.appState = this.appState.bind(this);
  }

  appState() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }
  render() {
    return (
      <div>
        <h1>{'Hello'}</h1>
        <NotePad />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
