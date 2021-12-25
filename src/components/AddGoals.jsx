import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function AddGoals() {
  const num = useFetch('http://localhost:3001/lines/').length;

  const [isAccomplished, setIsAccomplished] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById('inputCate').focus();
  }, []);

  const cateRef = useRef(null);
  const impoRef = useRef(null);
  const goalRef = useRef(null);
  const dueRef = useRef(null);
  const statRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    if (goalRef.current.value.length === 0) {
      alert('목표는 1자 이상 입력해주세요');
      goalRef.current.focus();
      return;
    }
    if (
      dueRef.current.value !== '평생' &&
      !/^\d{4}$/.test(dueRef.current.value * 1)
    ) {
      alert("달성기한은 4자리 숫자나, '평생'이라고 입력해주세요");
      dueRef.current.value = '';
      dueRef.current.focus();
      return;
    }

    fetch('http://localhost:3001/lines/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        number: num + 1,
        classification: cateRef.current.value,
        importance: impoRef.current.value,
        goal: goalRef.current.value,
        due: dueRef.current.value,
        status: statRef.current.value,
        completed: dueRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('완료!');
        navigate('/');
      }
    });
  }

  function onChangeInputGoal(e) {
    if (e.target.value.length > 26) alert('26자 이하만 입력 가능합니다!');
  }
  function focusNextOne(e) {
    const obj = {
      inputCate: 'inputImpo',
      inputImpo: 'inputGoal',
      inputGoal: 'inputStat',
      inputStat: 'inputDue',
      inputDue: 'yesBtn',
    };

    const thisOneId = e.target.id;

    if (thisOneId === 'inputStat') {
      if (e.target.value === 'accomplished') setIsAccomplished(true);
      else setIsAccomplished(false);
    }
    const nextOne = document.getElementById(obj[thisOneId]);
    nextOne.focus();
  }

  return (
    <div className="content col-lg-12">
      <form className="add-form col-lg-10" onSubmit={onSubmit}>
        <div className="input-section col-lg-8">
          <div className="input-section-content">
            <span>카테고리</span>
            <select ref={cateRef} id="inputCate" onChange={focusNextOne}>
              <option value="Achievement">Achievement</option>
              <option value="Learn">Learn</option>
              <option value="Adventure">Adventure</option>
              <option value="Creative">Creative</option>
              <option value="People">People</option>
              <option value="Life Style">Life Style</option>
              <option value="Family">Family</option>
            </select>
          </div>
          <div className="input-section-content">
            <span>중요도</span>
            <select ref={impoRef} id="inputImpo" onChange={focusNextOne}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="input-section-content">
            <span>목표</span>
            <input
              type="text"
              placeholder="26자 이하만 작성 가능합니다"
              onChange={onChangeInputGoal}
              ref={goalRef}
              id="inputGoal"
            />
          </div>
          <div className="input-section-content">
            <span>상태</span>
            <select ref={statRef} onChange={focusNextOne} id="inputStat">
              <option value="not-started">미시작</option>
              <option value="on-process">도전중</option>
              <option value="accomplished">달성완료</option>
            </select>
          </div>
          <div className="input-section-content">
            <span>{isAccomplished ? '달성한 해' : '달성기한'}</span>
            <input
              type="text"
              placeholder={isAccomplished ? '예) 2030' : '예) 2030 또는 평생'}
              ref={dueRef}
              id="inputDue"
            />
          </div>
        </div>
        <div className="button-section">
          <button className="yes" id="yesBtn">
            추가하기
          </button>
          <Link to="/">
            <button className="not-really">돌아가기</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
