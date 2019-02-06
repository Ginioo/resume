import React, {Component} from 'react';
import styles from './Name.module.scss';

class Name extends Component {
  render() {
    return (
      <div id="name">
        <header>
          <h1 className={styles.name}>{this.props.name}</h1>
        </header>
      </div>
    );
  }
}

export default Name;