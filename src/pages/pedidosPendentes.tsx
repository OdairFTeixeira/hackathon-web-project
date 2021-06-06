import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Toolbar } from '@material-ui/core';
import { faPaperPlane, faPlus, faEdit, faTrash, faStore } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import styles from '../styles/pages/pedidos.module.css';
import { useRouter } from 'next/router';

const AdministracaoProdutos: React.FC = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const router = useRouter();

    const handleRedirectCadastroProduto = () => {
      router.push({
        pathname: '/cadastroProdutos'
      });
    }

    const rows = [
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
        {
            nome: 'OdaiReiDelas2008@gmail.com',
            produto: "gin",
            quantidade: 2,
            endereco:"R. Eng Annes Gualberto, 350, Gravatal - SC, 88735-000",
        },
   
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
                Pedidos Pendentes
                </Toolbar>
            </AppBar>
            <div className={styles.containerGrid}>
                <Paper>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Email</TableCell>
                                    <TableCell align="center">Produto</TableCell>
                                    <TableCell align="center">Quantidade</TableCell>
                                    <TableCell align="center">Endereço</TableCell>
                                    <TableCell align="right">Enviar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row.nome}>
                                        <TableCell component="th" scope="row">
                                            {row.nome}
                                        </TableCell>
                                        <TableCell align="center">{row.produto}</TableCell>
                                        <TableCell align="center">{row.quantidade}</TableCell>
                                        <TableCell align="center">{row.endereco}</TableCell>
                                        <TableCell align="right" ><FontAwesomeIcon icon={faPaperPlane}  /></TableCell>
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