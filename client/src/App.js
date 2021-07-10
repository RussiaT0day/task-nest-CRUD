import './App.css';
import React, { useState, useEffect } from 'react';
import AllProducts from './components/AllProsucts/AllProducts'
import Form from './components/Form/From'

function App() {


  return (
    <div className="App">
          <Form text="Добавить продукт" />
          <AllProducts />
    </div >
  );
}

export default App;
