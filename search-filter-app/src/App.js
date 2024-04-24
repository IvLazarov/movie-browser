import React, { useState, useTransition } from "react";
import { Users } from './users';

function App() {
  const[query, setQuery]=useState('');
  
  return (
    <div className="App">
      <input type="text" placeholder="Search..." value={query} onChange={(event) => setQuery(event.target.value)} />
      {
        Users.filter(user => user.first_name.toLowerCase().includes(query)).map((user)=>(
          <li key={user.id}>{user.first_name}</li>
        ))
      }
    </div>
  );
}

export default App;
