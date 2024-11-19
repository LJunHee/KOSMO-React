import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Ex02 from './Ex02';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './pages/Intro';
import Depts from './pages/Depts';
import Dept from './pages/Dept';
import AddDept from './pages/AddDept';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Home/>}/>  
        <Route path='/intro' element={<Intro/>}/>  
        <Route path='/dept/:id' element={<Dept/>}/>  
        <Route path='/dept/' element={<Depts/>}/> 
        <Route path='/dept/add' element={<AddDept/>}/> 
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();