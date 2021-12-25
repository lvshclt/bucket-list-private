import { useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function Line({
  number,
  classification,
  importance,
  isDelMode,
  goal,
  due,
  status,
  completed,
}) {
  const lines = useFetch('http://localhost:3001/lines');
  const [isDelDone, setIsDelDone] = useState(false);

  //classification
  function func(classification) {
    let answer = classification.toLowerCase();
    answer = answer.replace(/\s+/g, '-');
    return answer;
  }

  function del(e) {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      fetch(`http://localhost:3001/lines/${number}`, { method: 'DELETE' });
      setIsDelDone(true);
    }
  }

  //status
  const thisYear = new Date().getFullYear();
  let maxYear = thisYear + 1;
  let txt = due;

  if (due < thisYear && status !== 'accomplished') status = 'failed';
  if (status === 'accomplished') txt = `${completed}년에 달성`;

  lines.forEach((line) => {
    if (parseInt(line.due) >= maxYear) maxYear = line.due;
  });

  let ratio = (due - thisYear) / (maxYear - thisYear);
  if (ratio <= 0) ratio = 0;

  let frontLineWid = 285 * ratio;
  let yearPos = 223 * ratio;
  if (status !== completed && due === '평생') {
    yearPos = 223.2;
    frontLineWid = 285;
  }

  return !isDelDone ? (
    <div className="line col-lg-12">
      <div className="classification col-lg-3">
        {isDelMode ? (
          <div className="del">
            <button className="no" onClick={del}>
              삭제
            </button>
          </div>
        ) : (
          ''
        )}
        <span className="num col-lg-1">{number}</span>
        <div className="category">
          <div className={`label ${func(classification)}`}>
            {classification}
          </div>
          <div className="shadow"></div>
          <div className={`importance ${func(classification)}`}>
            <span>{importance}</span>
          </div>
        </div>
      </div>
      <div className="goal col-lg-6">{goal}</div>
      <div className="status col-lg-3">
        <div className="back-line"></div>
        <div
          className={`front-line ${status}`}
          style={{ width: `${frontLineWid}px` }}
        ></div>
        <div className={`year ${status}`} style={{ left: `${yearPos}px` }}>
          {/* <div className={`year ${status}`} style={{ left: '223px' }}> */}
          {txt}
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}
