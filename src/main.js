'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import NoteCreateForm from './components/note-create-form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      editing: false,
      completed: false,
      content: '',
      notes: []
    };
 
    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  componentDidUpdate() {
    console.log(':::::::::::STATE:::::::::::::', this.state);
  }

  render() {
    //when go to /note, renders noteCreateForm
    return (
      <BrowserRouter>
        <section>
          <Route exact path='/note' render={() => {
            return <NoteCreateForm app={this.getApp()} />
          }} />
        </section>
      </BrowserRouter>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'), function () {
  console.log('should render');
})