import React, { useState, useEffect } from 'react';
import '../home/style.css';
import Cards from '../cards/Cards';
import { useNavigate } from 'react-router-dom';
import Carregamento from '../carregamento/Carregamento';
import Background from '../background/background';

interface StarWarsCharacter {
    name: string;
    height: number;
    mass: number;
    birth_year: string;
}

const Home: React.FC = () => {
    const [starWarsData, setStarWarsData] = useState<StarWarsCharacter[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;

    const token = localStorage.getItem('userToken');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // Inicia o carregamento

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

            setIsLoading(false);
        };

        fetchData();
    }, [token]);

    const paginatedData = starWarsData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    const isLastPage = currentPage >= Math.ceil(starWarsData.length / itemsPerPage) - 1;
    const isFirstPage = currentPage === 0;

    const nextPage = () => {
        if (!isLastPage) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const previousPage = () => {
        if (!isFirstPage) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    function logout() {
        localStorage.removeItem('token');
        navigate('/');
    }

    if (isLoading) {
        return <Carregamento />
    }

    return (
        <>
            <Background />
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
                        {!isFirstPage && (
                            <button onClick={previousPage}><p>{"<"}</p></button>
                        )}
                        {!isLastPage && (
                            <button onClick={nextPage}><p>{">"}</p></button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
