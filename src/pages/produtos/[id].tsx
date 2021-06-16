import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppBar, TextField, Toolbar } from '@material-ui/core';
import Produto from '../../components/produto';
import styles from '../../styles/pages/produtosLoja.module.css';
import { cadastroLojaService } from '../../services/loja-service';

const ProdutosLoja: React.FC = () => {
  const router = useRouter();
  const [ loja, setLoja ] = useState({});
  const [filtro, setFiltro] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [listaProdutos, setListaProdutos] = useState([]);

  const handleFiltro = event => {
    setProdutos(listaProdutos.filter(produto => produto.nome.toLowerCase().startsWith(event.target.value.toLowerCase())));
    setFiltro(event.target.value);
  }

  useEffect(() => {
    const getProdutosByPrefix = async () => {
      const prefix: string = router.query.id.toString();
      const { data } = await cadastroLojaService.findByPrefix(prefix);
      if (data.length >= 1) {
        setLoja(data[0]);
        setListaProdutos(data[0].products);
        setProdutos(data[0].products);
        alterHeaderColor(document.getElementsByClassName('MuiAppBar-colorSecondary')[0], data[0].color_standard);
      }
    }

    function alterHeaderColor(header: any, color) {
      if (header) {
        header.style.backgroundColor = color;
      }
    }

    if (router.asPath !== router.route) {
      getProdutosByPrefix();  
    }
  }, [router])

  return (<>

    <AppBar color="secondary" position="static">
      <Toolbar>
          {loja && loja.nome}
      </Toolbar>
    </AppBar>


    <div className={styles.containerTopo}>
      <div className={styles.containerFiltro}>
        <TextField 
        fullWidth={true}
        className={styles.filtro} 
        value={filtro} 
        onChange={event => handleFiltro(event)} 
        id="standard-basic" 
        label="Pesquisar Produto" />
      </div>
    </div>

    <div className={styles.content}>
      <section className={styles.containerCorpo}>
        {produtos.map(produto => (
          <Produto key={produto.id}
            id={produto.id}
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.valor}
          />
        ))}
      </section>
    </div>

  </>);
}

export default ProdutosLoja;