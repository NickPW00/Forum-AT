import React from 'react';
import styles from './Header.module.css';

const itens = ['Inicio', 'Recomendados', 'Em Alta', 'Amigos', 'Grupos', 'Configurações'];

class Header extends React.Component {
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
      <header className={styles.header}>
        <ul className={styles.itensMenuHeader}>
          <li className={styles.logoHeader}><img src='../src/logo2.svg' alt="Logo" /></li>
          <li className={styles.inputHeader}><input type='text' /></li>
          <li className={styles.menuHeader}><img src='../src/menu.svg' alt="Menu" onClick={this.toggleColapsar} /></li>
          {itens.map((item, index) => (
            <li
              className={`${styles.itemHeader} ${isColapsed ? styles.colapsar : ''}`}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

export default Header