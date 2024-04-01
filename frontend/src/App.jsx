import { useState } from 'react';
import './App.css';
import Home from './components/homePage/Home.jsx';
import SignIn from './components/signinPage/SignIn.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Events from './components/eventsPage/Events.jsx';
import BookingForm from './components/bookingPage/BookingForm.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/events' element={<Events />} />
          <Route exact path='/bookingForm' element={<BookingForm />} />
          <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
