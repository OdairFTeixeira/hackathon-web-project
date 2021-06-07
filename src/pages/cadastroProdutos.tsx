import { AppBar, Button, TextField, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ImageUpload from '../components/imageUpload';
import styles from '../styles/pages/cadastroProdutos.module.css';
import { ProdutosService } from '../services/produtos-service';
import { cadastroLojaService } from '../services/loja-service';

const CadastroProdutos: React.FC = () => {
    const [codBarras, setCodBarras] = useState('');
    const [estoque, setEstoque] = useState('');
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [storeId, setStoreId] = useState('');


    useEffect(() => {
        cadastroLojaService.findStore().then(resp => {
            setStoreId(resp.data[0].id);
        });
      }, []);

    const onSubmitHandler = event => {
        event.preventDefault();
        ProdutosService.createProduct({estoque, nome, valor , descricao, store_id: storeId});
    }

    return (
        <>
            <AppBar color="secondary" position="static">
                <Toolbar>
                    Login
                </Toolbar>
            </AppBar>
            <form onSubmit={onSubmitHandler} >
                <div className={styles.container} >
                    <h2>Cadastro de Produtos</h2>
                    <div className={styles.dadosRow} >
                        <div className={styles.codBarrasContainer}>
                            <TextField 
                                id="standard-basic" 
                                label="Código de barras" 
                                type="number"
                                name="codBarras"
                                value={codBarras}
                                onChange={event => setCodBarras(event.target.value)}  
                                className={styles.codBarrasNome} />
                        </div>
                        <TextField 
                            id="standard-basic" 
                            label="Estoque" 
                            type="number"
                            name="estoque"
                            value={estoque}
                            onChange={event => setEstoque(event.target.value)} 
                            className={styles.estoqueValor} />
                    </div>
                    <div className={styles.dadosRow} >
                        <div className={styles.codBarrasContainer}>
                            <TextField 
                                id="standard-basic" 
                                label="Nome"
                                name="nome"
                                value={nome}
                                onChange={event => setNome(event.target.value)}
                                className={styles.codBarrasNome} />
                        </div>
                        <TextField 
                            id="standard-basic" 
                            label="Valor" 
                            type="number" 
                            name="valor"
                            value={valor}
                            onChange={event => setValor(event.target.value)}
                            className={styles.estoqueValor} />
                    </div>
                    <div className={styles.dadosRow} >
                        <TextField 
                            id="standard-basic" 
                            className={styles.descricao} 
                            label="Descrição"
                            name="descricao"
                            value={descricao}
                            onChange={event => setDescricao(event.target.value)} />
                    </div>
                    <div className={styles.imageUpload} >
                        <ImageUpload label="Logo" />
                    </div>
                    <Button className={styles.button} variant="contained" color="secondary" type="submit">
                        Cadastrar
                    </Button>
                </div>
            </form>
        </>
    )
}

export default CadastroProdutos;