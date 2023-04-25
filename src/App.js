import logo from './logo.svg';
import './App.css';
import Register from'./Register.js'
import { useState } from 'react';
function App() {
  const [userName, setUserName] = useState("")
  console.log(userName)
  return (
    <div className="app">
     
        <Register setUserName={setUserName} />
    </div>
  );
}

export default App;
