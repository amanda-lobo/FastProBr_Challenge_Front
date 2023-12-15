import React from 'react';
import '../cards/style.css'

const Cards: React.FC = () => {
    return (
        <>
            <div className='card'>
                <ul className='infos'>
                    <li><span>Nome:</span> João</li>
                    <li><span>Idade:</span> 25 anos</li>
                    <li>
                        <span>Cidade:</span> Lorem ipsum dolor sit amet
                    </li>
                </ul>

            </div>
        </>
    );
}

export default Cards;
