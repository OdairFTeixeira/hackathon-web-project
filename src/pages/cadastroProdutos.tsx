import { AppBar, Button, TextField, Toolbar } from '@material-ui/core';
import React from 'react';
import ImageUpload from '../components/imageUpload';
import styles from '../styles/pages/cadastroProdutos.module.css';

const CadastroProdutos = () => {

    return (
        <>
            <AppBar color="secondary" position="static">
                <Toolbar>
                    Login
                </Toolbar>
            </AppBar>
            <div className={styles.container} >
                <h2>Cadastro de Produtos</h2>
                <div className={styles.dadosRow} >
                    <div className={styles.codBarrasContainer}>
                        <TextField id="standard-basic" label="Código de barras" type="number" className={styles.codBarrasNome} />
                    </div>
                    <TextField id="standard-basic" label="Estoque" type="number" className={styles.estoqueValor} />
                </div>
                <div className={styles.dadosRow} >
                    <div className={styles.codBarrasContainer}>
                        <TextField id="standard-basic" label="Nome" className={styles.codBarrasNome} />
                    </div>
                    <TextField id="standard-basic" label="Valor" type="number" className={styles.estoqueValor} />
                </div>
                <div className={styles.dadosRow} >
                    <TextField id="standard-basic" className={styles.descricao} label="Descrição" />
                </div>
                <div className={styles.imageUpload} >
                    <ImageUpload label="Logo" />
                </div>
                <Button className={styles.button} variant="contained" color="secondary">
                    Cadastrar
                </Button>
            </div>
        </>
    )
}

export default CadastroProdutos;