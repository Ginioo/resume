import styles from './Name.module.scss';

function Name({ name }) {
  return (
    <div id="name">
      <header>
        <h1 className={styles.name}>{name}</h1>
      </header>
    </div>
  );
}

export default Name;
