import { useEffect, useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Dept from './pages/Depts';

function App() {
  const[url,setUrl]=useState();
  const[comm,setComm]=useState();

  useEffect(()=>{
    setUrl(window.location.href.replace('http://localhost:3000/',''));
  },[]);

  useEffect(()=>{
    if(window.location.href.replace('http://localhost:3000/','')==''){
      setComm(<Home/>);
    }else if(window.location.href.replace('http://localhost:3000/','')=='#'){
      setComm(<Home/>);
    }else if(window.location.href.replace('http://localhost:3000/','')=='#intro'){
      setComm(<Intro/>);
    }else if(window.location.href.replace('http://localhost:3000/','')=='#dept'){
      setComm(<Dept/>);
    }
  },[url]);

  const linkClick=e=>{
    setUrl(window.location.href.replace('http://localhost:3000/',''));
  };

  return (
    <div className="App">
      <nav>
            <ul>
                <li><a href='/#' onClick={linkClick}>home</a></li>
                <li><a href='/#intro' onClick={linkClick}>intro</a></li>
                <li><a href='/#dept' onClick={linkClick}>dept</a></li>
            </ul>
        </nav>
      {comm}
    </div>
  );
}

export default App;