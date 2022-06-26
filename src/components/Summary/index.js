import { v4 as uuidv4 } from 'uuid';
import { useResume } from '../../hooks';

// import styles from './Summary.module.scss';

function Summary() {
  const { summary } = useResume();
  const { items } = summary;

  return (
    <div id="summary">
      {items && items.map(item => (
        <ul key={uuidv4()}>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
}

export default Summary;
