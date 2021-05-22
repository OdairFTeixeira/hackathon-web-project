import React from 'react';
import styles from '../styles/components/produto.module.css';
import imgagemEscolhida from './gin-com-morango-1.png';
import { Box, Button } from '@material-ui/core';

interface ProdutoProps {
  nome?: string;
  descricao?: string;
  preco?: number;
}

const Produto: React.FC<ProdutoProps> = ({ nome, descricao, preco }) => {
  return <div>
    <Box boxShadow={3} className={styles.container}>
      <div className={styles.containerImg}>
        <img className={styles.imagem} src={imgagemEscolhida} ></img>
      </div>
      <h2 className={styles.nome}>{nome}</h2>
      <div className={styles.descricao}>
        <label>{descricao}</label>
      </div>
      <div className={styles.containerVenda}>
        <label className={styles.preco}>R${preco}</label>
        <Button className={styles.button} variant="contained" color="secondary">
          Comprar
          </Button>
      </div>
    </Box >
  </div>;
}

export default Produto;