import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App04,{App02,App03} from './App02';
import App05 from './App05';
import App07 from './App07';

//https://ko.react.dev/reference/react/createElement
// const hr=React.createElement('a',{href:'http://google.com'},'link');

// const h1=<h1>test page</h1>;
// const btn=<button onclick="console.log('test');">btn</button>;

// const xml=<div><h1>test</h1><p>text</p></div>;
// const xml=<React.Fragment><h1>test</h1><p>text</p></React.Fragment>;
// const xml=<>{h1}<p>text</p></>;

// class Car extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={su:1111,color:props.color};
//     // 현 상태
//   }
//   changeColor =() => {
//     this.setState({color: "blue"});
//     // this.state={color: "blue"};
//     console.log(this.state);
//   }
//   componentDidUpdate() {
//     console.log('바꿈',this);
//   }

//   render() {
//     // 부모->자식 전달된 값
//     return (<>
//       <h2>Class {this.state.color} Car {this.props.name}:{this.state.su}</h2>
//       <button type="button" onClick={this.changeColor} >Change color</button>
//     </>);
//   }
// }
// //
// function Car2(){
//   return <h2>Function Car2</h2>;
// }

function Car(props){
  const [color,setColor]=useState(props.color);
  const [info,setInfo]=useState({model:'모닝',company:'현대'});

  useEffect(()=>{
    console.log('call...');
  },[]);
  
  const changeColor=()=>{
    setColor('blue');
  };
  const changeModel=()=>{
    setInfo({...info,model:'그렌져'});
  };
  return (<>
    <h1>내차 {props.name}</h1>
    <p> {info.company} 출시한 {info.model}</p>
    <p> 색은 {color}</p>
    <button type="button" onClick={changeColor} >Change color</button>
    <button type="button" onClick={changeModel} >Change model</button>
  </>);
}

// import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App07/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
