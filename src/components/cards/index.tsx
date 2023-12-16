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
              <span>Idade:</span> {isNaN(idade)?"Desconhecida":idade+" anos"}
            </li>
            <li>
              <span>Altura:</span> {isNaN(altura)? "Desconhecida": altura+" cm"}
            </li>
            <li>
              <span>Peso:</span> {peso} kg
            </li>
          </ul>
        </div>
      </>
    );
  };
  
  export default Cards;
