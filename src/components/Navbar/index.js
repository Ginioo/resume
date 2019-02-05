import React, {Component} from 'react';
import styles from './NavBar.module.scss';

class NavBar extends Component {
  render() {
    return (
      <div id="nav-bar" className={styles.navBar}>
        <nav className={styles.nav}>
          <a href="#" alt="email me">
            <i className="fas fa-envelope-square fa-2x"></i>
          </a>

          <a href="#" alt="github">
            <i className="fab fa-github-square fa-2x"></i>
          </a>

          <a href="#" alt="linkedin">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;