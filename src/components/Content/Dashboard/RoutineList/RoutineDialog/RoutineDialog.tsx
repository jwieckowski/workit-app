import react, { useEffect, useState } from 'react'

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { RootState } from '../../../../../redux/reducer'
import { RoutineItem } from '../../../../../common/types/routines'
import { useDispatch, useSelector } from "react-redux"
import { postRoutine, updateRoutine, closeRoutineDialog } from '../../../../../data/actions/routines'

const getArrayMaxID = (data: RoutineItem[]) => {
  if (data.length === 0) return 0
  return data.sort((a, b) => b._id - a._id)[0]._id
}

export default function RoutineDialog() {
  const [name, setName] = useState<string>('')
  const { open, data, updating, item } = useSelector((state: RootState) => state.routines)
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(closeRoutineDialog())
    if (updating && item !== null) {
      dispatch(updateRoutine({
        item: {
          _id: item?._id,
          name: name,
          exercises: item?.exercises
        }
      }))
    } else {
      dispatch(postRoutine({
        item: {
          _id: getArrayMaxID(data) + 1,
          name: name,
          exercises: []
        }
      }))
    }
    setName('')
  }

  useEffect(() => {
    if (!updating) setName('')
    item !== null && setName(item?.name)
  }, [updating])

  return (
    <Dialog
      open={open}
      onBackdropClick={() => dispatch(closeRoutineDialog())}
    >
      <DialogTitle style={{textAlign: 'center'}}>Create routine</DialogTitle>
      <Grid
        container
        direction='column'
        justifyContent='center'
        gap="20px"
        style={{
          width: '100%',
          padding: '50px'
        }}
      >
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Grid>
    </Dialog>
  )
}

