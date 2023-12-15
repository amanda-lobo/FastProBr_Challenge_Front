import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';
import Home from './components/home';

const App: React.FC = () => {
  const [] = useState<number>(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/home' element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
