import styles from './Container.module.scss';

function Container({ children }) {
  return (
    <div id="container" className={styles.container}>
      {children}
    </div>
  );
}

export default Container;
