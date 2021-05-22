import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Button, TextField, Toolbar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Produto from '../components/produto';
import styles from '../styles/pages/produtosLoja.module.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ProdutosLoja: React.FC = () => {
  const [filtro, setFiltro] = useState('');
  const [produtos, setProdutos] = useState([]);

  const filtraProdutos = event => {
    setProdutos(produtosMockedList.filter(produto => produto.nome.toLowerCase().startsWith(event.target.value.toLowerCase())));
    setFiltro(event.target.value);
  }

  const produtosMockedList = [
    {
      key: 1,
      nome: 'Gin',
      preco: 18.90,
      descricao: 'lorem loremk lorem pra caralho meu deus tenta aqui pelo amor de deus nao aguento mais'
    },
    {
      key: 2,
      nome: 'teste',
      preco: 18.90,
      descricao: 'lorem loremk lorem pra caralho meu deus tenta aqui pelo amor de deus nao aguento mais'
    },
    {
      key: 3,
      nome: 'paçoca',
      preco: 16.05,
      descricao: 'lorem loremk lorem pra caralho meu deus tenta aqui pelo amor de deus nao aguento mais'
    },
    {
      key: 4,
      nome: 'banana',
      preco: 22.90,
      descricao: 'lorem loremk lorem pra caralho meu deus tenta aqui pelo amor de deus nao aguento mais'
    },
    {
      key: 5,
      nome: 'paralelepipido',
      preco: 180.90,
      descricao: 'lorem loremk lorem pra caralho meu deus tenta aqui pelo amor de deus nao aguento mais'
    }
  ]

  useEffect(() => {
    setProdutos(produtosMockedList);
  }, [])

  return (<>

    <AppBar color="secondary" position="static">
      <Toolbar>
          Login
      </Toolbar>
    </AppBar>
    <div className={styles.containerTopo}>
      <h1>Controle de produtos</h1>
      <div className={styles.containerFiltro}>
        <TextField className={styles.filtro} value={filtro} onChange={event => filtraProdutos(event)} id="standard-basic" label="Pesquisa Produtos" />
      </div>
      <div className={styles.botao}>
        <Button variant="contained" color="secondary">
          <div className={styles.plusIcon}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
           Cadastrar
        </Button>
      </div>
    </div>

    <section className={styles.containerCorpo}>
      {produtos.map(produto => (
        <Produto key={produto.key}
          nome={produto.nome}
          descricao={produto.descricao}
          preco={produto.preco}
        />
      ))}
    </section>
  </>);
}




export default ProdutosLoja;