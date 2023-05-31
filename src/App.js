import React, {useEffect, useState} from 'react';
import './App.css';
import Router from './Router';
import Layout from './components/Layout/Layout';


function App() {

 
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode'))
  console.log(localStorage.getItem('darkMode'), 'the chenee')
  console.log(darkMode, "from function")
  const toggleDarkMode = ()=> {
      
      setDarkMode(prev => !prev)
      // localStorage.setItem('darkMode',darkMode)
      
  }
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    // eslint-disable-next-line
  }, [])
  return (
    <div className="App">
    
      <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}><Router  toggleDarkMode={toggleDarkMode} darkMode={darkMode} /></Layout>
    
       
    </div>
  );
}

export default App;
