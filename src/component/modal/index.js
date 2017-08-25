import React from 'react';

class Modal extends React.Component{
  render(){
    return(
      <section>
      <button onClick={this.props.close}>X</button>
        <main>
          {this.prop.children}
        </main>
      </section>
    )
  }
}
export default Modal;
