import './App.css';
import React, { useState, useEffect } from 'react';
import AppProducts from './components/AllProsucts/AllProducts'
import Form from './components/Form/From'

function App() {


  return (
    <div className="App">
      <Form/>
      <AppProducts />
    </div>
  );
}

export default App;
