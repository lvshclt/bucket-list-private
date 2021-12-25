function App() {
  return (
    <div className="App container">
      <button className="yes">삭제하기</button>
      <button className="no">삭제하기</button>
      <button className="not-really">삭제하기</button>
      <button className="not-really">미시작</button>
      <button className="yes">진행 중</button>
      <button className="accomplished">달성 완료</button>
      <i className="ic-my-bucket-list yes"></i>
      <i className="ic-search not-really"></i>
      <i className="ic-plus-circle yes"></i>
      <i className="ic-trash no"></i>
      <i className="ic-settings yes"></i>
      <i className="ic-sun not-really"></i>
      <div className="bar">
        <div className="bar-classification">분류</div>
        <div className="bar-goals">
          <span>목표</span>
          <div className="num-of-goals">96</div>
        </div>
        <div className="bar-status">상태</div>
      </div>
      <div className="status col-lg-3">
        <div className="back-line "></div>
        <div className="front-line on-process"></div>
        <div className="year on-process">2015</div>
      </div>
      <div className="status">
        <div className="back-line "></div>
        <div className="front-line on-process"></div>
        <div className="year on-process">2015</div>
      </div>

      <div className="status col-lg-3">
        <div className="back-line"></div>
        <div className="front-line not-started"></div>
        <div className="year not-started">2015</div>
      </div>
      <div className="status col-lg-3">
        <div className="back-line"></div>
        <div className="front-line accomplished"></div>
        <div className="year accomplished">2015년에 달성</div>
      </div>

      <div className="classification">
        <span className="num">1</span>
        <div className="category">
          <div className="label achievement">Achievement</div>
          <div className="shadow"></div>
          <div className="importance achievement">
            <span>1</span>
          </div>
        </div>
      </div>
      <div className="classification">
        <span className="num">31</span>
        <div className="category">
          <div className="label learn">Learn</div>
          <div className="shadow"></div>
          <div className="importance learn">
            <span>2</span>
          </div>
        </div>
      </div>
      <div className="classification">
        <span className="num">31</span>
        <div className="category">
          <div className="label adventure">Adventure</div>
          <div className="shadow"></div>
          <div className="importance adventure">
            <span>3</span>
          </div>
        </div>
      </div>
      <div className="classification">
        <span className="num">31</span>
        <div className="category">
          <div className="label creative">Creative</div>
          <div className="shadow"></div>
          <div className="importance creative">
            <span>1</span>
          </div>
        </div>
      </div>
      <div className="classification">
        <span className="num">31</span>
        <div className="category">
          <div className="label people">People</div>
          <div className="shadow"></div>
          <div className="importance people">
            <span>2</span>
          </div>
        </div>
      </div>
      <div className="classification">
        <span className="num">31</span>
        <div className="category">
          <div className="label life-style">Life style</div>
          <div className="shadow"></div>
          <div className="importance life-style">
            <span>3</span>
          </div>
        </div>
      </div>
      <div className="classification">
        <span className="num">31</span>
        <div className="category">
          <div className="label family">family</div>
          <div className="shadow"></div>
          <div className="importance family">
            <span>3</span>
          </div>
        </div>
      </div>
      <div className="line col-lg-12">
        <div className="classification col-lg-3">
          <span className="num col-lg-1">31</span>
          <div className="category">
            <div className="label family">family</div>
            <div className="shadow"></div>
            <div className="importance family">
              <span>3</span>
            </div>
          </div>
        </div>
        <div className="goal col-lg-6">
          rkskekffkjsdlkjrkskekffkjsdlkjrkskekffkjsdlkj
        </div>
        <div className="status col-lg-3">
          <div className="back-line"></div>
          <div className="front-line not-started"></div>
          <div className="year not-started">2015</div>
        </div>
      </div>
    </div>
  );
}

export default App;
