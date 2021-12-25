import dummy from '../db/data.json';

export default function Status({ due, status, completed }) {
  const thisYear = new Date().getFullYear();
  let maxYear = thisYear + 1;
  let txt = due;

  if (due < thisYear && status !== 'accomplished') status = 'failed';
  if (status === 'accomplished') txt = `${completed}년에 달성`;

  dummy.lines.forEach((line) => {
    if (parseInt(line.due) >= maxYear) maxYear = line.due;
  });

  let ratio = (due - thisYear) / (maxYear - thisYear);
  if (ratio <= 0) ratio = 0;

  const frontLineWid = 260 * ratio;
  let yearPos = 223 * ratio;
  if (!completed && due === '평생') yearPos = 223;

  return (
    <div className="status col-lg-3">
      <div className="back-line"></div>
      <div
        className={`front-line ${status}`}
        style={{ width: `${frontLineWid}px` }}
      ></div>
      <div className={`year ${status}`} style={{ left: `${yearPos}px` }}>
        {txt}
      </div>
    </div>
  );
}
