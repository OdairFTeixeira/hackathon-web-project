import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import imgEscolhida from '../../assets/imagemDefault.jpeg';
import styles from '../../styles/pages/compra.module.css';
import { useRouter } from 'next/router';
import { ProdutosService } from '../../services/produtos-service';

const compra: React.FC = () => {
  const router = useRouter();
  const [ produto, setProduto ] = useState({});

  useEffect(() => {
    const buscarProduto = () => {
      ProdutosService.getProduct(router.query.id.toString()).then(resp => {
        setProduto(resp.data[0]);
        console.log(resp.data[0]);
      })
    }

    if (router.asPath !== router.route) {
      buscarProduto();  
    }
  }, [router])


  return (
    <>
      <div className={styles.center}>
        <div className={styles.container}>
          <div className={styles.div}>
            <img src={imgEscolhida} className={styles.imagem} />
          </div>
          <div className={styles.div}>
            <h1 className={styles.titulo}>{produto.nome}</h1>
            <h2 className={styles.valor}>{produto.valor && 'R$ ' + parseFloat(produto.valor).toFixed(2)}</h2>
            <p className={styles.estoque}>{produto.estoque && 'Estoque disponivel: ' + produto.estoque}</p>

            <p className={styles.descricao}>{produto.descricao}</p>

            <Button className={styles.compra} variant="contained" color="secondary">
              Compra
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default compra;