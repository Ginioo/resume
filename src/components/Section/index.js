import React, {Component} from 'react';
import styles from './Section.module.scss';

class Section extends Component {
  render() {
    const {name, children} = this.props;
    return (
      <div id="section">
        <h3 className={styles.name}>{name}</h3>
        <section className={styles.section}>{children}</section>
      </div>
    );
  }
}

export default Section;