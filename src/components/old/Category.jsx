import { useState } from 'react';
export default function Category({
  number,
  classification,
  importance,
  isDelMode,
}) {
  const [isDelDone, setIsDelDone] = useState(false);

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
  return !isDelDone ? (
    <div className="classification col-lg-3">
      {isDelMode ? (
        <div className="del">
          {/* <input type="checkbox" id={number} />
           <label for={number}></label> */}
          <button className="no" onClick={del}>
            삭제
          </button>
        </div>
      ) : (
        ''
      )}
      <span className="num col-lg-1">{number}</span>
      <div className="category">
        <div className={`label ${func(classification)}`}>{classification}</div>
        <div className="shadow"></div>
        <div className={`importance ${func(classification)}`}>
          <span>{importance}</span>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}
