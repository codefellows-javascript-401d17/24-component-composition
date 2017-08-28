'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import NoteCreateForm from './components/note-create-form'
import NoteList from './components/note-list-container'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
            return (
              <div>
                <NoteCreateForm app={this.getApp()} />
                <NoteList app={this.getApp()} />
              </div>
            );
          }} />
        </section>
      </BrowserRouter>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'), function () {
  console.log('should render');
})