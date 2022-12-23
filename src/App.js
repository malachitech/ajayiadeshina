import React, {useState} from 'react';
import './App.css';
import Router from './Router';
import Layout from './components/Layout/Layout';


function App() {

 
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode'))
  
  const toggleDarkMode = ()=> {
      setDarkMode(prev => !prev)
  }

  return (
    <div className="App">
    
      <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}><Router  toggleDarkMode={toggleDarkMode} darkMode={darkMode} /></Layout>
    
       
    </div>
  );
}

export default App;
