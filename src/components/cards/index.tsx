import React from 'react';
import '../cards/style.css'

const Cards: React.FC<CardsProps> = ({ nome, idade, altura, peso }) => {
    return (
      <>
        <div className='card'>
          <ul className='infos'>
            <li>
              <span>Nome:</span> {nome}
            </li>
            <li>
              <span>Idade:</span> {idade} anos
            </li>
            <li>
              <span>Cidade:</span> {altura} cm
            </li>
            <li>
              <span>Cidade:</span> {peso} cm
            </li>
          </ul>
        </div>
      </>
    );
  };
  
  export default Cards;
