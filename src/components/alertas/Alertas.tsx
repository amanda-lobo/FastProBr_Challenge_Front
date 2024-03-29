import React from 'react';
import './Style.css'

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  titulo: string;
  mensagem: string;

}

const Alertas: React.FC<DialogProps> = ({ isOpen, onClose, titulo, mensagem }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-backdrop">
      <div className="dialog">
        <div className="header-dialog">
          <button onClick={onClose}><p>x</p></button>
        </div>
        <div className="body-alerta">
          <div className="titulo-alerta">
            <p>{titulo}</p>
          </div>
          <div className="msg-erro">
            <p>
              {mensagem}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Alertas;
