
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.background = 'white'
      showAlert('Light mode is Enabled', 'success')
    }else{
      setMode('dark')
      document.body.style.background = '#2C3E50'
      showAlert('Dark mode is Enabled', 'success')
    }
  }
  return (
    <>
    <Router>
    {/* <Navbar title='TextUtils' home='HOME' aboutText='ABOUT'/> */}
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm textarea="Example text area" showAlert={showAlert} mode={mode}/>
          </Route> */}
          <Route path="/" element={<TextForm textarea="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces " showAlert={showAlert} mode={mode}/>} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
