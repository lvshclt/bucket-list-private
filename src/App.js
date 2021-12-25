import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GNB from './components/GNB';
import TabBar from './components/TabBar';
import Content from './components/Content';
import AddGoals from './components/AddGoals';
import Sorry from './components/Sorry';
import Settings from './components/Settings';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App container">
        <div className="row">
          <GNB />
          <TabBar />
          <Routes>
            <Route path="/:aaa" element={<Content />} />
            <Route path="/add-goals" element={<AddGoals />} />
            <Route path="/sorry" element={<Sorry />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
