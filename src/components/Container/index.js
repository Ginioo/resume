import React, {Component} from 'react';
import styles from './Container.module.scss';

class Container extends Component {
  render() {
    const {children} = this.props;
    return (
      <div id="container" className={styles.container}>
        {children}
      </div>
    );
  }
}

export default Container;