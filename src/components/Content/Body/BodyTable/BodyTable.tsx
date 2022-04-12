import react, { useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux';
import { fetchBody } from '../../../../data/actions/body'
import { RootState } from '../../../../redux/reducer'

import Spinner from '../../../UI/Spinner'
import Page404 from '../../../UI/Page404'

// TODO sort by data

export default function BodyTable() {
  const dispatch = useDispatch()
  const {loading, data, error} = useSelector((state: RootState) => state.body)

  useEffect(() => {
    dispatch(fetchBody())
  }, [])

  let content = <Spinner />
  if (!loading) {
    if (!error) {
      content = (
        <>
          {
            <TableContainer component={Paper} elevation={4} style={{width: '80%', padding: '0 10%', maxHeight: '50%', minHeight: '50%'}}>
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
                  {
                    data.map((row, idx) => (
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
                  ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          }
        </>
      )
    } else {
      content = <Page404 />
    }
  }

  return (
    <>
      {content}
    </>
  );
}
