import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Intro from './pages/Intro';
import Depts from './pages/Depts';
import Login from './pages/Login';
import { createContext, useState } from 'react';
import Logout from './pages/Logout';
import Dept from './pages/Dept';

export const LoginContext=createContext();

function App() {
  const [login,setLogin] = useState(false);
  return (
    <LoginContext.Provider value={[login,setLogin]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/intro' element={<Intro/>}/>
          <Route path='/dept/' element={<Depts/>}/>
          <Route path='/dept/:deptno' element={<Dept/>}/>
          <Route path='/login/' element={<Login/>}/>
          <Route path='/logout/' element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
