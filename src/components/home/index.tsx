import React, { useState, useEffect } from 'react';
import '../home/style.css';
import Cards from '../cards';
import { useNavigate } from 'react-router-dom';

interface StarWarsCharacter {
    name: string;
    height: number;
    mass: number;
    birth_year: string;
}

const Home: React.FC = () => {
    const [starWarsData, setStarWarsData] = useState<StarWarsCharacter[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    const token = localStorage.getItem('userToken');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fast-pro-challenge.onrender.com/starwars-data', {
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    const characters = data.results.map((character: any) => ({
                        name: character.name,
                        height: character.height,
                        mass: character.mass,
                        birth_year: character.birth_year,
                    }));
                    setStarWarsData(characters);
                } else {
                    console.error('Erro ao obter dados da API:', response.statusText);
                }
            } catch (error) {
                console.error('Erro na solicitação:', error);
            }
        };

        fetchData();
    }, []);

    const paginatedData = starWarsData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1 < starWarsData.length / itemsPerPage) ? prev + 1 : prev);
    };

    const previousPage = () => {
        setCurrentPage((prev) => (prev - 1 >= 0) ? prev - 1 : prev);
    };
    
    function logout() {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <>
            <div className='bodyHome'>
                <div className="navbar">
                    <button onClick={logout}><p>Sair</p></button>
                </div>
                <div className="listaCards">
                    {paginatedData.map((character, index) => (
                        <div className="spaceCard" key={index}>
                            <Cards
                                nome={character.name}
                                idade={2023 - parseInt(character.birth_year.replace('BBY', ''))}
                                altura={character.height}
                                peso={character.mass}
                            />
                        </div>
                    ))}
                </div>
                <div className='footer'>
                    <div className="paginacao">
                        <button onClick={previousPage}><p>{"<"}</p></button>
                        <button onClick={nextPage}><p>{">"}</p></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
