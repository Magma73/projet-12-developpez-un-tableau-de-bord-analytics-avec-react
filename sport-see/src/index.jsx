import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Header from './components/Header';
import SlideNav from './components/SlideNav';
// import styles from './utils/style/'

// import '.utils/style/style.css';
import './style.css';

import styled from 'styled-components'
// import colors from '../../utils/style/colors'

const MainContainer = styled.main`
    display:flex;

`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Header />
      <MainContainer>
        <SlideNav />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Navigate to="/user/12" />} />
          <Route path="/user/:userId" element={<Home />} />
          {/* <Route path="/reglages" element={<Settings />} /> */}
          {/* <Route path="/communaute" element={<Community />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </MainContainer>
    </Router>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
