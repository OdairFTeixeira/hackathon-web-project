import React from 'react';
import Produto from '../components/produto';
import styles from '../styles/pages/produtosLoja.module.css';

// import { Container } from './styles';

const ProdutosLoja: React.FC = () => {
  const produtos = [
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

  return (<>

    <section className={styles.container}>
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