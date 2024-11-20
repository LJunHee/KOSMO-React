import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frame from './pages/components/Frame';
import Main from './pages/Main';
import Intro from './pages/Intro';
import Depts from './pages/Depts';
import DeptAdd from './pages/DeptAdd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //https://ko.react.dev/reference/react/StrictMode
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Frame/>}>
          <Route index element={<Main/>}/>
          <Route path='/intro' element={<Intro/>}/>
          <Route path='/dept/' element={<Depts/>}/>
          <Route path='/dept/add' element={<DeptAdd/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
