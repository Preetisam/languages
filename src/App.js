import React, { useState } from 'react';
import './App.css'
function App() {
  const [languages, setLanguages] = useState([
    { name: 'Python', count: 0 }, 
    { name: 'Java', count: 0 },  
    { name: 'JavaScript', count: 0 },
    { name: 'C++', count: 0 },  
    { name: 'PHP', count: 0 }  
  ]);

  function incrementCount(index) {
    const newLanguages = [...languages];
    newLanguages[index].count++;  
    setLanguages(newLanguages);  
  }

  function decrementCount(index) {
    const newLanguages = [...languages];
    newLanguages[index].count--;  
    setLanguages(newLanguages);    
  }

  return (
    <div id="language-list">      
      {languages.map(({name, count}, index) => (
        <div key={index} className="language">
          <span>{name}</span>       
          <button onClick={() => incrementCount(index)} className="increment">+</button>    
          <button onClick={() => decrementCount(index)} className="decrement">-</button>      
          <span className="count">{count}</span>            
        </div>  
      ))}
    </div>
  );  
}

export default App;