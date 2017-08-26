import React from 'react';
import NoteList from '../NoteList'

class NotePad extends React.Component {
  constructor(props) {
    super(props);

    this.compileAllLists = this.compileAllLists.bind(this)
  }

  compileAllLists(cat, notes, ind) {
    return(
      <NoteList
        category={cat}
        catNotes={notes}
        key={ind}
        appState={this.props.appState}
        removeCat={this.props.removeCat}
      />
    )
  }

  render() {
    let appState = this.props.appState().state;
    let allCategories = Object.keys(appState.lists);

    return (
      <ul>
        {allCategories.map((cat, ind) => {
          return this.compileAllLists(cat, appState.lists[cat], ind)
        })}
      </ul>
    )
  }
}

export default NotePad;
