import { AppBar, Button, TextField, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/pages/cadastroProdutos.module.css';
import { useRouter } from 'next/router';
import { ProdutosService } from '../../services/produtos-service';

const Venda: React.FC = () => {
  const router = useRouter();
  const [codBarras, setCodBarras] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (router.asPath !== router.route) {
      ProdutosService.getProduct(router.query.id.toString()).then(resp => {
        preencheCampos(resp);
      });
    }
  }, [router]);

  const onSubmitHandler = event => {
    event.preventDefault();
  };

  const handleChangeEstoque = value => {
    setValor(value * valor);
    setQuantidade(value);
  };

  const preencheCampos = resp => {
    setCodBarras(resp.data[0].codigo_barras);
    setQuantidade(resp.data[0].quantidade);
    setNome(resp.data[0].nome);
    setValor(resp.data[0].valor);
  };

  return (
    <div>
      <AppBar color="secondary" position="static">
        <Toolbar>Administração de Produtos</Toolbar>
      </AppBar>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.container}>
          <h2>Venda</h2>
          <div className={styles.dadosRow}>
            <div className={styles.codBarrasContainer}>
              <TextField
                id="standard-basic"
                label="Código de barras"
                type="number"
                name="codBarras"
                disabled
                value={codBarras}
                onChange={event => setCodBarras(event.target.value)}
                className={styles.codBarrasNome}
              />
            </div>
            <TextField
              id="standard-basic"
              label="Valor"
              type="number"
              name="valor"
              disabled
              value={valor}
              onChange={event => setValor(event.target.value)}
              className={styles.estoqueValor}
            />
          </div>
          <div className={styles.dadosRow}>
            <div className={styles.codBarrasContainer}>
              <TextField
                id="standard-basic"
                label="Nome"
                name="nome"
                disabled
                value={nome}
                onChange={event => setNome(event.target.value)}
                className={styles.codBarrasNome}
              />
            </div>
            <TextField
              id="standard-basic"
              label="Estoque"
              type="number"
              name="quantidade"
              value={quantidade}
              onChange={event => handleChangeEstoque(event.target.value)}
              className={styles.estoqueValor}
            />
          </div>
          <Button
            className={styles.botao}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Venda;
