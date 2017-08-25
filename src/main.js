import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import DashboardContainer from './component/dashboard-container';
import NoteList from './component/note-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: []
    }
    this.getNote = this.getNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  getNote() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  deleteNote(id) {
    let notes = this.state.notesArr;
    notes = notes.filter(note => note.id !== id);
    this.setState({ notesArr: notes });
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }



  componentDidUpdate(){
    console.log('___STATE___', this.state);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <h1>Lets type a note!</h1>
            <Route exact path='/' component={() => <DashboardContainer getNote={this.getNote()} />} />
            <NoteList
              notesArr={this.state.notesArr}
              deleteNote={this.deleteNote}
              app={this.getApp()}
              />
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
