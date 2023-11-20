import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.ts';

import Header from './ui/header/header.tsx';
import Footer from './ui/footer/footer.tsx';

import Start from './ui/start/start.tsx';
import Main from './ui/main/main.tsx';
import Login from './ui/auth/login.tsx';
import SignUp from './ui/auth/signup.tsx';
import Write from './ui/write/write.tsx';

function App() {
  return(
  <Provider store={store}>
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign' element={<SignUp />} />
      <Route path='/main' element ={<Main />} />
      <Route path='/write' element={<Write />} />
    </Routes>
    <Footer />
  </Router>
 </Provider>
  
  )
}

export default App;
