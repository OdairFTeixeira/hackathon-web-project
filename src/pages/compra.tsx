import { Button } from '@material-ui/core';
import React from 'react';
import imagem from '../components/gin-com-morango-1.png';
import styles from '../styles/pages/compra.module.css';


const compra: React.FC = () => {
  return (
    <>
      <div className={styles.center}>
        <div className={styles.container}>
          <div className={styles.div}>
            <img src={imagem} className={styles.imagem} />
          </div>
          <div className={styles.div}>
            <h1 className={styles.titulo}>Camisa Odair</h1>
            <h2 className={styles.valor}>R$ 199,99</h2>
            <p className={styles.estoque}>Estoque disponivel 27</p>

            <p className={styles.descricao}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aperiam pariatur beatae natus! Error id cupiditate quibusdam incidunt quas temporibus veritatis expedita praesentium. Non error assumenda, aperiam accusamus facilis .</p>

            <Button className={styles.compra} variant="contained" color="secondary">
              Compra
            </Button>
            {/* <Button className={styles.carrinho} variant="contained" color="secondary">
              Carrinho
            </Button> */}
          </div>
          {/* <div className={styles.div}>
        <div className={styles.compras}>
         
        </div>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default compra;