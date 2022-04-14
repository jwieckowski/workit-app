import React from 'react'

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography'

import { formatRepsWeights } from '../../../helpers'
import { TrainingSetItem } from '../../../../../common/types/training'

interface PropTypes {
    idx: number,
    name: string,
    data: TrainingSetItem[] | []
}

export default function HistoryContent({idx, name, data}: PropTypes) {

  return (
    <ListItem style={{ borderBottom: '1px solid black'}} key={idx}>
        <ListItemText
        primary={
            <Typography>
                {name}
            </Typography>
        }
        secondary={
            <Typography>
                {formatRepsWeights(data)}
            </Typography>
        }
        />
    </ListItem>
  )
}
