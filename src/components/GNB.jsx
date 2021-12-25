import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function GNB() {
  const [load, setLoad] = useState(1);

  function onClick(e) {
    if (document.getElementsByClassName('on')[0])
      [...document.getElementsByClassName('on')][0].classList.remove('on');
    e.target.classList.add('on');
    setLoad(load + 1);
  }

  function reset() {
    if (document.getElementsByClassName('on')[0])
      [...document.getElementsByClassName('on')][0].classList.remove('on');
  }

  return (
    load && (
      <div className="gnb col-lg-12">
        <div className="left col-lg-3">
          <Link to="/">
            <i className="ic-my-bucket-list yes" onClick={reset}></i>
          </Link>
        </div>
        <div className="right">
          <Link to="/sorry">
            <i className={`ic-search not-really`} onClick={onClick}></i>
          </Link>

          <Link to="/add-goals">
            <i className="ic-plus-circle yes" onClick={onClick}></i>
          </Link>

          <Link to="/delete-goals">
            <i className="ic-trash no" onClick={onClick}></i>
          </Link>

          <Link to="/settings">
            <i className="ic-settings yes" onClick={onClick}></i>
          </Link>

          <Link to="/sorry ">
            <i className="ic-sun not-really" onClick={onClick}></i>
          </Link>
        </div>
      </div>
    )
  );
}
