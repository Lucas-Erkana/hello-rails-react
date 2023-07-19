import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Greeting from './Greeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  );
}

export default App;
