import React, { useState } from 'react'
import './App.css';
import RandomAdvice from './Advice/RandomAdvice';

export default function ParentAdvice() {
   
    const [advice , setAdvice] = useState('Work Hard')
  return (
    <div className='App'>
        <header className='App-header'>
        <h1>Random Advice</h1>
        <RandomAdvice  onSelectAdvice = {setAdvice} />
        <p>{advice}</p>
        </header>
    </div>
  )
}
