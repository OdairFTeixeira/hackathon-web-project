import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Toolbar } from '@material-ui/core';
import { faPlus, faEdit, faTrash, faStore } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import styles from '../styles/pages/administracaoProdutos.module.css';

const AdministracaoProdutos: React.FC = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleEditar = (event) => {
    }

    const rows = [
        {
            nome: 'Gin',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'teste',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'asda',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'wsqwdwq',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'asd2',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'Gin2',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'teste2',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'asda2',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'wsqwdwq2',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'asd23',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'Gin3',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'teste3',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'asda3',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'wsqwdwq3',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'asd24',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'Gin24',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'teste24',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'asda25',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'wsqwdwq2as',
            preco: 18.90,
            quantidade: 2,
        },
        {
            nome: 'asd23dd',
            preco: 18.90,
            quantidade: 2,
        }
    ]

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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
                                    <TableCell align="right">Vender</TableCell>
                                    <TableCell align="right">Editar</TableCell>
                                    <TableCell align="right">Excluir</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row.nome}>
                                        <TableCell component="th" scope="row">
                                            {row.nome}
                                        </TableCell>
                                        <TableCell align="right">{row.preco}</TableCell>
                                        <TableCell align="right">{row.quantidade}</TableCell>
                                        <TableCell align="right"><FontAwesomeIcon icon={faStore} /></TableCell>
                                        <TableCell align="right" onClick={event => handleEditar(event)}><FontAwesomeIcon icon={faEdit} /></TableCell>
                                        <TableCell align="right"><FontAwesomeIcon icon={faTrash} /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </>);
}

export default AdministracaoProdutos;