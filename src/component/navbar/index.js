import './style/style.scss';

import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <header>
        <section className="title">
          <img className="pokeballimg" src="src/component/navbar/assets/pokeball.png"></img>
          <h1 className="titleName">Pokeball</h1>
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