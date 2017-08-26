import React from 'react';
import NoteBody from '../NoteBody';
import NoteUpdateForm from '../NoteUpdateForm';
require('./_NoteModal.scss');

class NoteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false
    }
    this.update = this.update.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  update() {
    this.setState({
      updating: true
    })
  }
  cancel(e) {
    e.preventDefault();
    this.setState({
      updating: false
    })
  }
  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  switchToUpdate() {
    let appState = this.props.appState;
    let note = this.props.note;
    let ind = this.props.ind;
    return (!this.state.updating ?
      <NoteBody
        note={note}
        ind={ind}
        appState={appState}
        update={this.update}
      /> :
      <NoteUpdateForm
        note={note}
        ind={ind}
        appState={appState}
        cancel={this.cancel}
        renderModal={this.cancel}
      />
    )
  }

  render() {
    return (
      <li className='note'>
        {this.switchToUpdate()}
      </li>
    )
  }
}

export default NoteModal;
