import React from 'react';
import '../home/style.css'
import Cards from '../cards';

const Home: React.FC = () => {
    return (
        <>
            <div className='bodyHome'>
                <div className="navbar">
                    <button><p>Sair</p></button>
                </div>
                <div className="listaCards">
                    <div className="spaceCard">
                        <Cards />
                    </div>
                    <div className="spaceCard">
                        <Cards />
                    </div>
                    <div className="spaceCard">
                        <Cards />
                    </div>
                    <div className="spaceCard">
                        <Cards />
                    </div>
                    <div className="spaceCard">
                        <Cards />
                    </div>
                    <div className="spaceCard">
                        <Cards />
                    </div>
                    <div className="spaceCard">
                        <Cards />
                    </div>
                    <div className="spaceCard">
                        <Cards />
                    </div>
                    
                </div>
                <div className='footer'>
                    <div className="paginacao">
                        <button><p>{"<"}</p></button>
                        <button><p>{">"}</p></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
