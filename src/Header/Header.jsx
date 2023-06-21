import React from 'react';
import './Header.css';

const itens = ['Inicio', 'Recomendados', 'Em Alta', 'Amigos', 'Grupos', 'Configurações'];

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isColapsed: true
    };
  }

  toggleColapsar = () => {
    this.setState(prevState => ({
      isColapsed: !prevState.isColapsed
    }));
  }

  render() {
    const { isColapsed } = this.state;

    return (
      <header className="header">
        <ul className={"itensMenuHeader"}>
          <li className="logoHeader"><img src='./src/logo2.svg' alt="Logo" /></li>
          <li className="inputHeader"><input type='text' /></li>
          <li className="menuHeader"><img src='./src/menu.svg' alt="Menu" onClick={this.toggleColapsar} /></li>
          {itens.map((item, index) => <li className={`itemHeader ${isColapsed ? 'colapsar' : ''}`} key={index}>{item}</li>)}
        </ul>
      </header>
    );
  }
}