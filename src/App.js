import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <Form data={data} setData={setData}/>
      <Table data={data}/>
    </div>
  );
}

export default App;
