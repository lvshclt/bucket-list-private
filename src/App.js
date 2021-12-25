import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GNB from './components/GNB';
import TabBar from './components/TabBar';
import Content from './components/Content';
import AddGoals from './components/AddGoals';
import Sorry from './components/Sorry';
import Settings from './components/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <div className="row">
          <GNB />
          <TabBar />
          <Routes>
            <Route path="/bucket-list-private" element={<Content />} />
            {/* <Route path="/bucket-list-private/" element={<Content />} /> */}
            <Route path="/bucket-list-private/:aaa" element={<Content />} />
            <Route
              path="/bucket-list-private/add-goals"
              element={<AddGoals />}
            />
            <Route path="/bucket-list-private/sorry" element={<Sorry />} />
            <Route
              path="/bucket-list-private/settings"
              element={<Settings />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
