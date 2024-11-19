import './App.css';
import logo from './logo192.png';

function App02(){
    return <h1>ex02 page</h1>;
}

function App03(){
    return <h1>ex03 page</h1>
}
// function App04(){
//     return <h1>ex04 page</h1>
// }

// export const App01=App02;
// export const App00=App03;
export {App02,App03};
export default function App04(){
    return <><h1>ex04 page</h1><img src={logo}/></>;
};