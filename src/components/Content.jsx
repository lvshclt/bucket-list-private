import Line from './Line';
// import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router';
import Sorry from './Sorry';
import dummy from '../db/data.json';

export default function Content() {
  // const lines = useFetch('http://localhost:3001/lines/');
  const lines = dummy.lines;
  let isDelMode = false;
  const bbb = useParams().aaa;
  if (bbb === 'delete-goals') isDelMode = true;
  else if (bbb !== undefined) {
    return <Sorry />;
  }

  return (
    <div className="content col-lg-10">
      {lines.map((line) => (
        <Line
          key={line.id}
          number={line.number}
          classification={line.classification}
          importance={line.importance}
          goal={line.goal}
          due={line.due}
          status={line.status}
          completed={line.completed}
          isDelMode={isDelMode}
        />
      ))}
    </div>
  );
}
