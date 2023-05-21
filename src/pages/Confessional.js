import React from 'react'
import { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ConfessionCard from '../Components/ConfessionCard';


function Confessional() {

  const [listOfConfessions, setListofConfessions] = useState([]);

  // Retrieve theme passed from App.js
  const location = useLocation();
  const theme = location.state?.theme || 'dark';

  // HTTP requests handler to retrieve random confessions from backend
  const getConfessions = () => {

    axios.get('http://localhost:4004/confessions').then((response) => {

      setListofConfessions(response.data);
    });
  };

  // Retrieve list of confessions at route render
  useEffect(() => {

    getConfessions();
  }, []);

  return (
    <div className={`box ${theme}`}>
      <div className='confessionList'>
        {listOfConfessions.map(confession => {
          return <ConfessionCard key={uuidv4()} confession={confession} theme={theme}/>
        })}
      </div>
      <button className={`getNewConfessions ${theme}`} onClick={getConfessions}>More Confessions</button>
    </div>
  )
}

export default Confessional;