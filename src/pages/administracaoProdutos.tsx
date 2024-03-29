import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Toolbar } from '@material-ui/core';
import { faPlus, faEdit, faTrash, faStore } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';

import styles from '../styles/pages/administracaoProdutos.module.css';
import { useRouter } from 'next/router';
import { cadastroLojaService } from '../services/loja-service';
import { ProdutosService } from '../services/produtos-service';

const AdministracaoProdutos: React.FC = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [produtos, setProdutos] = React.useState([]);
    const router = useRouter();

    useEffect(() => {
        cadastroLojaService.findStore().then(resp => {
            setProdutos(resp.data[0].products);
        });
    }, []);

    const handleRedirectCadastroProduto = () => {
        router.push({
            pathname: `/cadastroProdutos/[id]`,
            query: { id: 1 }
          });
    }

    const handleEdit = (row) => {
        router.push({
            pathname: `/cadastroProdutos/[id]`,
            query: { id: row.id }
          });
    }

    const handleVenda = (row) => {
        router.push({
            pathname: `/venda/[id]`,
            query: { id: row.id }
          });
    }

    const handleExclud = async row => {
        await ProdutosService.deleteProduct(row.id);

        setProdutos(produtos.filter(produto => produto.id != row.id));
    }

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
                <Button variant="contained" color="secondary" onClick={handleRedirectCadastroProduto}>
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
                                {produtos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row.nome}>
                                        <TableCell component="th" scope="row">
                                            {row.nome}
                                        </TableCell>
                                        <TableCell align="right">{parseFloat(row.valor).toFixed(2)}</TableCell>
                                        <TableCell align="right">{row.estoque}</TableCell>
                                        <TableCell align="right" onClick={() => handleVenda(row)} ><FontAwesomeIcon className={styles.pointer} icon={faStore} /></TableCell>
                                        <TableCell align="right" onClick={() => handleEdit(row)} ><FontAwesomeIcon className={styles.pointer} icon={faEdit} /></TableCell>
                                        <TableCell align="right" onClick={() => handleExclud(row)} ><FontAwesomeIcon className={styles.pointer} icon={faTrash}  /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={produtos.length}
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