import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import AnimatedLetters from './AnimatedLetters';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [letterClass, setLetterClass] = useState('text-animate');
  const [disabled, setDisabled] = useState(true);

  const fetchAdvice = async () => {
    try {
      setDisabled(true);
      const result = await axios.get('https://api.adviceslip.com/advice');
      const adviceResult = result?.data?.slip?.advice;
      setDisabled(false);
      setAdvice(adviceResult);
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect((): any => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className='generator-app'>
      <div className='card'>
        <h1 className='advice'>
          {
            advice.length > 0 ? <span data-testid="animate-letter"><AnimatedLetters
              letterClass={letterClass}
              strArray={advice.split('')}
              idx={1}
            /></span> : null
          }
        </h1>
        <button data-testid="button-advice" disabled={disabled} className='button' onClick={fetchAdvice}>
          <span>Nouveau conseil</span>
        </button>
      </div>
    </div>
  );
}

export default App;
