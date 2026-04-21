import styles from './Section.module.scss';

function Section({ name, children }) {
  return (
    <div id="section">
      <h3 className={styles.name}>{name}</h3>
      <section className={styles.section}>{children}</section>
    </div>
  );
}

export default Section;
