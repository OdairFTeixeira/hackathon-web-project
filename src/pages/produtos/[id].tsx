import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppBar, InputLabel, Select, TextField, Toolbar } from '@material-ui/core';
import Produto from '../../components/produto';
import styles from '../../styles/pages/produtosLoja.module.css';

const ProdutosLoja: React.FC = () => {
  const router = useRouter();
  const [ prefix, setPrefix ] = useState(null);
  const [filtro, setFiltro] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [ordenacao, setOrdenacao] = useState('');

  const handleFiltro = event => {
    setProdutos(produtosMockedList.filter(produto => produto.nome.toLowerCase().startsWith(event.target.value.toLowerCase())));
    setFiltro(event.target.value);
  }

  const handleOrdenacao = event => {
    //Fazer requisicao ordenando conforme value
    setOrdenacao(event.target.value);
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
  }, []);

  useEffect(() => {
    if (router.asPath !== router.route) {
      setPrefix(router.query.id);
    }
  }, [router])

  return (<>

    <AppBar color="secondary" position="static">
      <Toolbar>
          Login
      </Toolbar>
    </AppBar>
    <div className={styles.containerTopo}>
      <h1>Produtos</h1>
      <div className={styles.containerFiltro}>
        <TextField 
        className={styles.filtro} 
        value={filtro} 
        onChange={event => handleFiltro(event)} 
        id="standard-basic" 
        label="Pesquisa Produtos" />
        <div className={styles.ordenacao}>
          <InputLabel htmlFor="age-native-simple">Ordenacao</InputLabel>
          <Select
            native
            value={ordenacao}
            onChange={event => handleOrdenacao(event)}

          >
            <option aria-label="None" value="" />
            <option value="ME">Menor Preço</option>
            <option value="MA">Maior Preço</option>
            <option value="OA">Ordem Alfabética</option>
          </Select>
        </div>
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