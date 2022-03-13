import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const data = [
  {
    date: '01.03.2022',
    weight: 85.1
  },
  {
    date: '02.03.2022',
    weight: 84.4
  },
  {
    date: '03.03.2022',
    weight: 83.1
  },
  {
    date: '04.03.2022',
    weight: 87.1
  },
  {
    date: '04.03.2022',
    weight: 87.1
  },
  {
    date: '04.03.2022',
    weight: 87.1
  },
  {
    date: '04.03.2022',
    weight: 87.1
  },
]

export default function BodyTable() {
  return (
    <TableContainer component={Paper} elevation={4} style={{width: '80%', padding: '0 10%', maxHeight: '50%'}}>
      <Table
        size="medium"
        aria-label="Body weight table"
        stickyHeader
        style={{width: '60%', marginLeft: '20%'}}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant='h6'>
                Date
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant='h6'>
                Weight
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant='body2'>
                  {row.date}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant='body2'>
                  {row.weight}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
