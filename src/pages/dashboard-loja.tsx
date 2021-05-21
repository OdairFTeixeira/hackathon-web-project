import React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';

const DasboardLoja: React.FC = () => {
  const columns: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 130 },
    { field: 'valor', headerName: 'Valor', width: 130 },
    {
      field: 'estoque',
      headerName: 'Estoque',
      type: 'number',
      width: 90,
    },
    {
      field: 'descricao',
      headerName: 'Descricao',
      width: 160,
    },
    {
      field: 'created_at',
      headerName: 'Criado em:',
      width: 160,
    },
  ];

  const rows = [
    { id: 1, nome: 'Snow', estoque: 10, descricao: "35555555555", created_at: "01/05/2021" },
    { id: 1, nome: 'Snow', estoque: 10, descricao: "35555555555", created_at: "01/05/2021" },
    { id: 1, nome: 'Snow', estoque: 10, descricao: "35555555555", created_at: "01/05/2021" },
    { id: 1, nome: 'Snow', estoque: 10, descricao: "35555555555", created_at: "01/05/2021" },
    { id: 1, nome: 'Snow', estoque: 10, descricao: "35555555555", created_at: "01/05/2021" },
    { id: 1, nome: 'Snow', estoque: 10, descricao: "35555555555", created_at: "01/05/2021" },
  ];

  return (
    <>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </>
  );
}

export default DasboardLoja;
