import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'broj', headerName: 'broj', type: 'number', width: 50, headerAlign: 'center' },
  { field: 'Konto', headerName: 'Konto', type: 'string', width: 130, editable: true, headerAlign: 'left' },
  { field: 'Duguje', headerName: 'Duguje', type: 'number', width: 130, editable: true, headerAlign: 'left' },
  { field: 'Potražuje', headerName: 'Potražuje', type: 'number', width: 130, editable: true, headerAlign: 'left' },
  { field: 'Datum', headerName: 'Datum', type: 'date', width: 130, editable: true, headerAlign: 'left' },
];

const rows = [
  { id: 1, broj: 12, Konto: 'malo li je', Duguje: 50, Potražuje: 60, Datum: new Date() },
  { id: 2, broj: 13, Konto: 'malo li je', Duguje: 50, Potražuje: 60, Datum: new Date() },
  { id: 3, broj: 14, Konto: 'malo li je', Duguje: 50, Potražuje: 60, Datum: new Date() },
];

const MuiEditableGrid = () => {
  return (
    <div className="editable-grid">
      <button className="add-grid-row-btn">Add row</button>
      <DataGrid getCellClassName={params => 'grid-cell'} className="data-grid" rows={rows} columns={columns} />
    </div>
  )
}

export default MuiEditableGrid