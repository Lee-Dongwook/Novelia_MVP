import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './ui/header/header.tsx';
import Footer from './ui/footer/footer.tsx';

import Main from './ui/main/main.tsx';

function App() {
  return(
  <Router>
    <Header />
    <Routes>
      <Route path='/' element ={<Main />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App;
