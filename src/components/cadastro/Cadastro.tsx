import React, { useState } from 'react';
import '../cadastro/Style.css'

const Cadastro: React.FC = () => {
  const [user, setUser] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleCadastro = async () => {
    try {
      console.log(user);
      const response = await fetch('https://fast-pro-challenge.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Cadastro bem-sucedido:', data);
      } else {
        console.error('Erro de cadastro:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
    }
  };

  return (
    <div className='bodyCadastro'>
      <div className='cadastroSpace'>
        <div className='titleCadastro'><h1>Cadastro</h1></div>
        <div className='espacoInput'>
          <div className='inputCadastro'>
            <input
              type="text"
              placeholder='Nome'
              name="nome"
              value={user.nome}
              onChange={handleInputChange}
            />
          </div>
          <div className='inputSenha'>
            <input
              type="text"
              placeholder='Email'
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='inputCadastro'>
            <input
              type="text"
              placeholder='Telefone'
              name="telefone"
              value={user.telefone}
              onChange={handleInputChange}
            />
          </div>
          <div className='inputSenha'>
            <input
              type="password"
              placeholder='Senha'
              name="senha"
              value={user.senha}
              onChange={handleInputChange}
            />
          </div>
          <div className='botaoContinuar'>
            <button onClick={handleCadastro}>Cadastrar</button>
          </div>
          <div className='entrar'>
            <p>Já tem conta? </p>
            <a href="/" className='linkLogin'> Entrar</a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
