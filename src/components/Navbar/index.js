import { useResume } from '../../hooks';
import pdf from '../../cv.pdf';

import styles from './NavBar.module.scss';

function NavBar() {
  const { personalInfo } = useResume();
  const { mobile, email, linkedin, github } = personalInfo;

  return (
    <div id="nav-bar" className={styles.navBar}>
      <nav className={styles.nav}>
          <span className={styles.mobile}>
            <i className="fas fa-phone-square fa-2x"></i>{mobile}
          </span>

        <a href={`mailto:${email}?Subject=Are%20you%20interested%20in%20this%20offer`} alt="Contact me">
          <i className="fas fa-envelope-square fa-2x"></i>
          <span className={styles.email}>{email}</span>
        </a>

        <a href={`https://${github}`} alt="Github" className={styles.github}>
          <i className="fab fa-github-square fa-2x"></i>
        </a>

        <a href={`https://${linkedin}`} alt="Linkedin">
          <i className="fab fa-linkedin fa-2x"></i>
          <span className={styles.linkedin}>{linkedin}</span>
        </a>

        <a href={pdf} alt="Download PDF" className={styles.downloadPDF}>
          <i className="fa fa-download"></i>PDF
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
