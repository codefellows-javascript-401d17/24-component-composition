import React from 'react';
import NoteModal from '../NoteModal';
require('./_NoteList.scss');

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className='note-list'>
        <h3>{`Category:  ${this.props.category}`}</h3>
        <button onClick={() => this.props.removeCat(this.props.category)}>
          {'Delete Category'}
        </button>
        <ul>
          {this.props.catNotes.map((item, ind) => {
            return(
              <NoteModal
                key={ind}
                ind={ind}
                appState={this.props.appState}
                note={item}
              />
            )
          })}

        </ul>
      </li>
    )
  }
}

export default NoteList;
