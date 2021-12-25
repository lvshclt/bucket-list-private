import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Line from './Line';

export default function Settings() {
  let lines = useFetch('http://localhost:3001/lines/');
  function onClick(e) {
    const name = e.target.className;
    if (name === 'yes') {
      lines = lines.filter((line) => line.status === 'on-process');
    }
  }

  return (
    <div className="content col-lg-12">
      <div>
        <button className="not-really" onClick={onClick}>
          미시작
        </button>
        <button className="yes" onClick={onClick}>
          진행 중
        </button>
        <button className="accomplished" onClick={onClick}>
          달성완료
        </button>
      </div>
      <div>
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
          />
        ))}
      </div>
    </div>
  );
}
