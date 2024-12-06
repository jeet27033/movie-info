import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './component/Home'; 
import { SingleData } from './component/SingleData';
import "./App.css" 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singledata/:id" element={<SingleData />} />
    </Routes>
  );
};

export default App;