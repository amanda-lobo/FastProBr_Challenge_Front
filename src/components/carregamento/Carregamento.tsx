import React from 'react';
import { BeatLoader } from 'react-spinners';
import Background from '../background/background';


const Carregamento: React.FC = () => {
  const estiloCentralizado: React.CSSProperties = { // Definindo o tipo aqui
    position: 'fixed', // Isso é interpretado como uma string, mas é aceito porque é um valor válido para 'position'
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000 // zIndex é um número aqui, que é o esperado
  };


  return (
    <>

      <Background />
      <div style={estiloCentralizado}>
        <BeatLoader size={25} color={"#ffbb00"} loading={true} />
      </div>
    </>
  );
};

export default Carregamento;
