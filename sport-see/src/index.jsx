import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Header from './components/Header';
import SlideNav from './components/SlideNav';
import styled from 'styled-components'
import './style.css';

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
          <Route exact path="/" element={<Navigate to="/user/12" />} />
          <Route path="/user/:userId" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </MainContainer>
    </Router>
  </div>
);
