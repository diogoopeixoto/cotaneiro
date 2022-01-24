import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ComponentTable = ({columns, rows}) => {

    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
              {columns.map((column) => (<TableCell align="right">{column}</TableCell>))}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

            >
                {columns.map((column) => (<TableCell align="right">{row[column]}</TableCell>))}

                           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
    
export default ComponentTable;
