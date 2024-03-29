import React, { useState } from 'react';
import '../cadastro/Style.css'
import { Link, useNavigate } from 'react-router-dom';
import Alertas from '../alertas/Alertas';
import Background from '../background/background';

const Cadastro: React.FC = () => {
  const [user, setUser] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
  });

  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleCadastro = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://fast-pro-challenge.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        navigate('/');
        setIsLoading(false)

      } else {
        const erroData = await response.json();
        setMensagem(erroData.message || 'Erro desconhecido');
        openDialog();
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      setIsLoading(false)
    }
  };

  return (
    <>
      <Alertas isOpen={isDialogOpen} onClose={closeDialog} mensagem={mensagem} titulo='Erro ao Cadastrar ' />
      <Background />
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
              <button onClick={handleCadastro} disabled={isLoading} >Cadastrar</button>
            </div>
            <div className='entrar'>
              <p>Já tem conta? </p>
              <Link to="/" className='linkLogin'>Entrar</Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
