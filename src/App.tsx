import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Opening from './pages/Opening';
import ProvaGsap from './pages/ProvaGsap';
import LaCasa from './pages/LaCasa';



const App: React.FC = () => {
  console.log('wow');

  return (

    <Router>
      <Routes>
        <Route path="/villaSinger" element={<Opening />} />
        <Route path="/villaSinger/home" element={<Home />} />
        <Route path="/villaSinger/lacasa" element={<LaCasa />} />
        {/* <Route path="/home" element={<ProvaGsap />} /> */}

      </Routes>
    </Router>
  );
};

export default App;
