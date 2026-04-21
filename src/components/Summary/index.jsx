import { useResume } from '../../hooks';

function Summary() {
  const { summary } = useResume();
  const { items } = summary;

  return (
    <div id="summary">
      {items && items.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
}

export default Summary;
