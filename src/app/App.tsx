import React from 'react';
import { Header } from '../components/layout/Header/Header';
import { Main } from '../components/layout/Main/Main';
import "../assets/styles/global.css"

function App() {
  return (
    <div className='container'>
      <Header />
      <Main />
    </div>
    
  );
}

export default App;
