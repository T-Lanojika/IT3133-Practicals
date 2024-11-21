import logo from './logo.svg';
import './App.css';
import ChildCom from './ChildCom';
import {useState} from 'react';

function App() {
  const [childname,setchildname]=useState("Default");
  const receiveName=(name)=>{
    setchildname(name);
  }
  return (
    <div className="App">
      <h2>Hello React I'm Parent</h2>
      <ChildCom setfun={receiveName}/>
      <p>Parent:My child said: {childname}</p>

    </div>
   
  );
}

export default App;
