import { useState } from 'react';
import './App.css';
import Home from './components/homePage/Home.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
