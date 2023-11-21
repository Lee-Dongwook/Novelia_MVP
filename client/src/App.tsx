import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProtectedRoutes  from './lib/protectedRoutes';
import store from './store/index';

import Header from './ui/header/header';
import Footer from './ui/footer/footer';

import Start from './ui/start/start';
import Main from './ui/main/main';
import Login from './ui/auth/login';
import SignUp from './ui/auth/signup';
import Write from './ui/write/write';

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
      <Route path='/protect' element = {
        <ProtectedRoutes>
          <Main />
        </ProtectedRoutes>
      }/>
    </Routes>
    <Footer />
  </Router>
 </Provider>
  
  )
}

export default App;
