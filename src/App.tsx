import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';
import Home from './components/home/Home';
import Estrela from './components/background/background';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/estrela' element={<Estrela />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
