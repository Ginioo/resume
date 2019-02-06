import React, {Component} from 'react';
import styles from './NavBar.module.scss';

class NavBar extends Component {
  render() {
    const {mobile, email, linkedin, github} = this.props;
    return (
      <div id="nav-bar" className={styles.navBar}>
        <nav className={styles.nav}>
          <span className={styles.mobile}>
            <i className="fas fa-phone-square fa-2x"></i>{mobile}
          </span>

          <a href={`mailto:${email}?Subject=Are%20you%20interested%20in%20this%20offer`} alt="email me">
            <i className="fas fa-envelope-square fa-2x"></i>
            <span className={styles.email}>{email}</span>
          </a>

          <a className={styles.github} href={`https://${github}`} alt="github">
            <i className="fab fa-github-square fa-2x"></i>
          </a>

          <a href={`https://${linkedin}`} alt="linkedin">
            <i className="fab fa-linkedin fa-2x"></i>
            <span className={styles.linkedin}>{linkedin}</span>
          </a>

          <a className={styles.downloadPDF}
             href={process.env.PUBLIC_URL + "/feng-chin-wu-cv-2019.2.6.pdf"}
             alt="Download PDF"
          >
            <i className="fa fa-download"></i>PDF
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;