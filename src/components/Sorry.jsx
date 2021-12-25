import alert from '../assets/icons/alert-triangle.svg';

import Button from './Button';
import { Link } from 'react-router-dom';

export default function Sorry() {
  return (
    <div className="sorry-content ">
      <div className="sorry">
        <img src={alert} alt="경고" />
        <span>공부하면서 개발 중입니다</span>
        <Link to="/">
          <Button className="no" txt="메인으로" />
        </Link>
      </div>
    </div>
  );
}
