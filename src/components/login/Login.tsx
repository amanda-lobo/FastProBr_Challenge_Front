import React, { useState } from 'react';
import userLogin from '../../model/userLogin';
import './Style.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Alertas from '../alertas/Alertas';


const Login: React.FC = () => {
    const [user, setUser] = useState<userLogin>({
        email: '',
        senha: '',
    });

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('https://fast-pro-challenge.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('userToken', data.token);
                navigate('/home');
            } else {
                const erroData = await response.json();
                setMensagem(erroData.message || 'Erro desconhecido');
                openDialog();
            }
        } catch (error) {
            setMensagem('Erro ao fazer a solicitação:')
            openDialog();
        }
    };

    return (
        <>
            <Alertas isOpen={isDialogOpen} onClose={closeDialog} mensagem={mensagem} titulo='Erro ao Logar ' children={undefined} />
            <div className='bodyLogin'>
                <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="" width={200} />
                <br />
                <div className='loginSpace'>
                    <div className='titleLogin'><h1>Login</h1></div>
                    <div className='espacoInput'>
                        <div className='inputLogin'>
                            <input
                                type="text"
                                placeholder='Email'
                                name="email"
                                value={user.email}
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
                            <button onClick={handleLogin}>Entrar</button>
                        </div>
                    </div>
                    <div className='cadastro'>
                        <p>Não tem conta? </p>
                        <Link to="/cadastro" className='linkLogin'>Cadastre-se</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
