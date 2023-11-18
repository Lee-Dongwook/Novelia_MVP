import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './ui/header/header.tsx';
import Footer from './ui/footer/footer.tsx';

import Start from './ui/start/start.tsx';
import Main from './ui/main/main.tsx';
import Login from './ui/auth/login.tsx';
import SignUp from './ui/auth/signup.tsx';

function App() {
  return(
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/main' element ={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign' element={<SignUp />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App;
