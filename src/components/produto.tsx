import React from 'react';
import styles from '../styles/components/produto.module.css';
import imgagemEscolhida from '../assets/imagemDefault.jpeg';
import { Box, Button } from '@material-ui/core';
import { useRouter } from 'next/router';

interface ProdutoProps {
  id: string
  nome?: string;
  descricao?: string;
  preco?: number;
}

const Produto: React.FC<ProdutoProps> = ({ id, nome, descricao, preco }) => {
  const router = useRouter();
  
  const handleGoToCompra = id => {
    router.push({
      pathname: `/compra/[id]`,
      query: { id }
    });
  }

  return (
    <div>
      <Box boxShadow={3} className={styles.container}>
        <div className={styles.containerImg}>
          <img className={styles.imagem} src={imgagemEscolhida} ></img>
        </div>
        <h2 className={styles.nome}>{nome}</h2>
        <div className={styles.containerVenda}>
          <label className={styles.preco}>R${preco}</label>
          <Button className={styles.button} onClick={() => handleGoToCompra(id)} variant="contained" color="secondary">
            Comprar
            </Button>
        </div>
      </Box >
    </div>
  );
}

export default Produto;