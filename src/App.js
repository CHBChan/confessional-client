import './App.css';
import { GoMarkGithub } from 'react-icons/go';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import Confessional from './pages/Confessional';

// Theme toggle component on navigation bar
function ToggleSwitch(props) {

  return (

    <label className='switch'>
      <input type='checkbox'/>
      <span className='slider round' onClick={props.toggleTheme}></span>
    </label>
  );
}

// Navigation bar component + routes
function App() {

  const [theme, setTheme] = useState('dark');

  // Theme change logic
  const toggleTheme = () => {

    if(theme === 'dark') {

        setTheme('light');
    }
    else {

        setTheme('dark');
    }
  };

  // Page theme handler
  useEffect(() => {

    if(theme === 'light') {

        document.querySelectorAll('.dark').forEach(element => {
            
            element.classList.replace('dark', theme);
        });

        document.querySelector('.toggleLabel').innerHTML = 'Light Mode';
    }
    else if(document.querySelector('.light') != null) {

        document.querySelectorAll('.light').forEach(element => {
            
            element.classList.replace('light', theme);
        });

        document.querySelector('.toggleLabel').innerHTML = 'Dark Mode';
    }
  }, [theme]);

  return (
    
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <div className='navBar dark'>
          <div className='navLinks'>
            <Link className='link dark' to='/' state={{ theme: theme }}> Home </Link>
            <Link className='link dark' to='/confessional' state={{ theme: theme }}> Random confessions </Link>
          </div>
          <div className="themeToggle">
            <p className='toggleLabel'>Dark Mode</p>
            <ToggleSwitch toggleTheme={toggleTheme}/>
          </div>
        </div>
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/confessional' element={<Confessional/>}/>
        </Routes>
      </Router>
      <div className='footer dark'>
        <div className='signature'>
        <p>Site created by <a href='https://github.com/CHBChan' target='_blank' rel='noopener noreferrer'>CHBChan</a></p>
        <GoMarkGithub size={28}/>
        </div>
      </div>
    </div>
  );
}

export default App;
