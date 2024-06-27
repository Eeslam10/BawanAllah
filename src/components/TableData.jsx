import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Mac from '../assets/mac.svg';

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'name', headerName: 'Name', width: 120 },
  { field: 'code', headerName: 'Code', type: 'number', width: 120 },
  { field: 'type', headerName: 'Type', width: 120 },
  { field: 'price', headerName: 'Price', type: 'number', width: 120 },
  { field: 'quantity', headerName: 'Quantity', type: 'number', width: 120 },
  {
    field: 'image',
    headerName: 'Image',
    width: 150,
    renderCell: (params) => (
      <img src={params.value} alt="product" style={{ width: '57px', height: '57px' }} />
    ),
  },
];

const rows = [
  { id: 1, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 2, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 3, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 4, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 5, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 6, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 7, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 8, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 9, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 10, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 11, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 12, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 13, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
  { id: 14, name: 'Macbook pro', code: 1, type: 'Laptop', price: 1241, quantity: 44, image: Mac },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[7, 14]}
        checkboxSelection
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#e0f7fa', // Light blue background for headers
            fontWeight: 'bold', // Bold headers
            // borderBottom: '1px solid #00796b', // Bottom border for header separation
            height: '70px', // Increase header height
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold', // Bold header text
          },
          '& .MuiDataGrid-cell': {
            // borderBottom: '1px solid #e0f7fa', // Separation between rows
            height: '60px', // Increase row height
            alignItems: 'center',
          },
          '& .MuiDataGrid-row': {
            // backgroundColor: '#e0f7fa', // Light blue background for rows
            margin: '10px',
            borderRadius: '10px',
           
          },
        }}
      />
    </div>
  );
}