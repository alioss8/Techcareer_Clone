import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/Homepage';
import Test_Page from '../src/pages/Test_Page';

function App() {
  

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TestPage" element={<Test_Page />} />
      </Routes>
    </Router>
      
    
    </div>
  )
}

export default App
