// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Videos from './components/videos';
import Vikash from './components/vikash';


import Signup from './components/Signup';
import Login from './components/Login';


const App = () => {
  return (
    <div>
    <Router>
      <div>
      
        <Routes>
        <Route  exact path="/" element={<Header />} />
       
        
          <Route path="/signup" element={<Signup />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/vikash" element={<Vikash />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
