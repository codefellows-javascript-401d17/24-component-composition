import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span>
        <button onClick={() => this.props.removeCat(this.props.category)}>
          {'Delete Category'}
        </button>
        <h3>{this.props.category}</h3>
        <ul>

        </ul>
      </span>
    )
  }
}

export default NoteList;
