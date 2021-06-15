import { AppBar, Button, TextField, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ImageUpload from '../../components/imageUpload';
import styles from '../../styles/pages/cadastroProdutos.module.css';
import { ProdutosService } from '../../services/produtos-service';
import { cadastroLojaService } from '../../services/loja-service';
import { useRouter } from 'next/router';

const CadastroProdutos: React.FC = () => {
  const router = useRouter();
  const [codBarras, setCodBarras] = useState('');
  const [estoque, setEstoque] = useState('');
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [storeId, setStoreId] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    cadastroLojaService.findStore().then(resp => {
      setStoreId(resp.data[0].id);
    });

    if (router.asPath !== router.route) {
      ProdutosService.getProduct(router.query.id.toString()).then(resp => {
        preencheCampos(resp);
      });
    }
  }, [router]);

  const handleVoltar = () => {
    router.push({
      pathname: '/administracaoProdutos'
    });
  };

  const preencheCampos = resp => {
    setCodBarras(resp.data[0].codigo_barras);
    setEstoque(resp.data[0].estoque);
    setNome(resp.data[0].nome);
    setValor(resp.data[0].valor);
    setDescricao(resp.data[0].descricao);
  };

  const limpaCampos = () => {
    setCodBarras('');
    setEstoque('');
    setNome('');
    setValor('');
    setDescricao('');
  };

  const onSubmitHandler = async event => {
    event.preventDefault();
    await ProdutosService.createProduct({
      estoque,
      nome,
      valor,
      descricao,
      codigo_barras: codBarras,
      store_id: storeId
    });

    limpaCampos();
  };

  return (
    <>
      <AppBar color="secondary" position="static">
        <Toolbar>Login</Toolbar>
      </AppBar>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.container}>
          <h2>Cadastro de Produtos</h2>
          <div className={styles.dadosRow}>
            <div className={styles.codBarrasContainer}>
              <TextField
                id="standard-basic"
                label="Código de barras"
                type="number"
                name="codBarras"
                value={codBarras}
                onChange={event => setCodBarras(event.target.value)}
                className={styles.codBarrasNome}
              />
            </div>
            <TextField
              id="standard-basic"
              label="Estoque"
              type="number"
              name="estoque"
              value={estoque}
              onChange={event => setEstoque(event.target.value)}
              className={styles.estoqueValor}
            />
          </div>
          <div className={styles.dadosRow}>
            <div className={styles.codBarrasContainer}>
              <TextField
                id="standard-basic"
                label="Nome"
                name="nome"
                value={nome}
                onChange={event => setNome(event.target.value)}
                className={styles.codBarrasNome}
              />
            </div>
            <TextField
              id="standard-basic"
              label="Valor"
              type="number"
              name="valor"
              value={valor}
              onChange={event => setValor(event.target.value)}
              className={styles.estoqueValor}
            />
          </div>
          <div className={styles.dadosRow}>
            <TextField
              id="standard-basic"
              className={styles.descricao}
              label="Descrição"
              name="descricao"
              value={descricao}
              onChange={event => setDescricao(event.target.value)}
            />
          </div>
          <div className={styles.imageUpload}>
            <ImageUpload label="Logo" />
          </div>
          <div className={styles.divButton}>
            <Button
              onClick={() => handleVoltar()}
              className={styles.botao}
              variant="contained"
              color="secondary"
            >
              Voltar
            </Button>
            <Button
              className={styles.botao}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Cadastrar
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CadastroProdutos;
