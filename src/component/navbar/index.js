import './style/style.scss';

import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <header>
        <section className="title">
          <img className="unicornimg" src="src/component/navbar/assets/unicorn.png"></img>
          <h1 className="titleName">Unicornotes</h1>
        </section>
          <nav>
            <ul>

            </ul>
          </nav>
      </header>
    )
  }
}

export default Navbar
