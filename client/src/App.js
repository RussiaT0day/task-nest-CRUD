import './App.css';
import React, { useState, useEffect } from 'react';
import AllProducts from './components/AllProsucts/AllProducts'
import Form from './components/Form/From'
import Grid from '@material-ui/core/Grid';
function App() {


  return (
    <div className="App" >

      <Form text="Добавить продукт" />
      <AllProducts />
    </div >
  );
}

export default App;
