import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Toolbar } from '@material-ui/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import styles from '../styles/pages/administracaoProdutos.module.css';

const AdministracaoProdutos: React.FC = () => {

    const handleEditar = (event) => {
    }

    const rows = [
        {
            nome: 'Gin',
            preco: 18.90,
            quantidade: 2,
            editar: 'X',
            excluir: 'X'
        },
        {
            nome: 'teste',
            preco: 18.90,
            quantidade: 2,
            editar: 'X',
            excluir: 'X'
        },
        {
            nome: 'asda',
            preco: 18.90,
            quantidade: 2,
            editar: 'X',
            excluir: 'X'
        },
        {
            nome: 'wsqwdwq',
            preco: 18.90,
            quantidade: 2,
            editar: 'X',
            excluir: 'X'
        },
        {
            nome: 'asd2',
            preco: 18.90,
            quantidade: 2,
            editar: 'X',
            excluir: 'X'
        },
        {
            nome: 'Gin2',
            preco: 18.90,
            quantidade: 2,
            editar: 'X',
            excluir: 'X'
        },
        {
            nome: 'teste2',
            preco: 18.90,
            quantidade: 2,
            editar: 'X',
            excluir: 'X'
        },
        {
            nome: 'asda2',
            preco: 18.90,
            quantidade: 2,
            editar: 'X',
            excluir: 'X'
        },
        {
            nome: 'wsqwdwq2',
            preco: 18.90,
            quantidade: 2,
            editar: 'X',
            excluir: 'X'
        },
        {
            nome: 'asd23',
            preco: 18.90,
            quantidade: 2,
            editar: 'X',
            excluir: 'X'
        }
    ]

    return (
        <>
            <AppBar color="secondary" position="static">
                <Toolbar>
                    Login
                </Toolbar>
            </AppBar>
            <div className={styles.divTitulo}>
                <h1>Administração Produtos</h1>
            </div>
            <div className={styles.divBotao}>
                <Button variant="contained" color="secondary">
                    <div className={styles.plusIcon}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    Cadastrar
                </Button>
            </div>
            <div className={styles.containerGrid}>
                <Paper>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell align="right">Preço</TableCell>
                                    <TableCell align="right">Quantidade</TableCell>
                                    <TableCell align="right">Editar</TableCell>
                                    <TableCell align="right">Excluir</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.nome}>
                                        <TableCell component="th" scope="row">
                                            {row.nome}
                                        </TableCell>
                                        <TableCell align="right">{row.preco}</TableCell>
                                        <TableCell align="right">{row.quantidade}</TableCell>
                                        <TableCell align="right" onClick={event => handleEditar(event)}>{row.editar}</TableCell>
                                        <TableCell align="right">{row.excluir}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        </>);
}

export default AdministracaoProdutos;