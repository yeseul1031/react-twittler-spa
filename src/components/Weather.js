import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage'; 
import About from './Pages/About';   
import Weather from './components/Weather'; 

const App = () => {
  return (
    <BrowserRouter>
      <div className="App" style={{ display: 'flex' }}>
        <aside style={{ display: 'flex', flexDirection: 'column', width: '250px' }}>
          <Sidebar />
          {/* Weather에 city props 추가 */}
          <Weather city="Seoul" />
        </aside>

        <section className="features" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Tweets />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
