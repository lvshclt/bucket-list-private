import Category from './Category';
import Goal from './Goal';
import Status from './Status';

export default function Line({
  number,
  classification,
  importance,
  goal,
  due,
  status,
  completed,
  isDelMode,
}) {
  return (
    <div className="line col-lg-12">
      <Category
        number={number}
        classification={classification}
        importance={importance}
        isDelMode={isDelMode}
      />
      <Goal goal={goal} />
      <Status due={due} status={status} completed={completed} />
    </div>
  );
}
