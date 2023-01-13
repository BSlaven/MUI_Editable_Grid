import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const MuiEditableGrid = () => {

  const [ rows, setRows ] = useState([
    { id: 1, broj: 1, Konto: 'Konto 1', Duguje: 50, Potražuje: 60, Datum: new Date() },
    { id: 2, broj: 2, Konto: 'Konto 2', Duguje: 50, Potražuje: 60, Datum: new Date() },
    { id: 3, broj: 3, Konto: 'Konto 3', Duguje: 50, Potražuje: 60, Datum: new Date() },
  ])

  const columns = [
    { field: 'broj', headerName: 'broj', type: 'number', width: 50, headerAlign: 'center' },
    { field: 'Konto', headerName: 'Konto', type: 'string', width: 130, editable: true, headerAlign: 'left' },
    { field: 'Duguje', headerName: 'Duguje', type: 'number', width: 130, editable: true, headerAlign: 'left' },
    { field: 'Potražuje', headerName: 'Potražuje', type: 'number', width: 130, editable: true, headerAlign: 'left' },
    { field: 'Datum', headerName: 'Datum', type: 'date', width: 130, editable: true, headerAlign: 'left' },
  ];

  const handleAddRow = () => {
    const newBlankRow = {
      id: Math.floor(Math.random() * 10000000),
      broj: rows.length + 1,
      Konto: '',
      Duguje: 0,
      Potražuje: 0,
      Datum: new Date()
    }
    
    setRows(prevRows => [ ...prevRows, newBlankRow ] )
  }
  
  return (
    <div className="editable-grid">
      <button 
        className="add-grid-row-btn"
        onClick={handleAddRow}
      >
        Add row
      </button>
      <DataGrid getCellClassName={params => 'grid-cell'} className="data-grid" rows={rows} columns={columns} />
    </div>
  )
}

export default MuiEditableGrid