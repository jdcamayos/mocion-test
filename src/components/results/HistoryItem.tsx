import * as React from 'react'
// MUI Styles
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
// Icons
import CloseIcon from '@mui/icons-material/Close'
import DoneIcon from '@mui/icons-material/Done'
// Utils
import { parseText } from '../../utils/parseText'
// Types
import { History } from '../../types/game'

type Props = {
  history: History
  historyLength: number
}

export default function HistoryItem(props: Props) {
  const { history, historyLength } = props
  return (
    <Box component='li'>
      <ListItem alignItems='center' component='div'>
        <ListItemAvatar>
          <Avatar
            alt={history.isCorrect ? 'True' : 'False'}
            sx={{
              backgroundColor: theme => (
                history.isCorrect
                  ? theme.palette.success.main
                  : theme.palette.error.main
              ),
            }}
          >
            {history.isCorrect
              ? <DoneIcon />
              : <CloseIcon />
            }
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              sx={{
                color: 'background.default',
                fontWeight: '500',
                fontSize: { xs: 14, md: 18 }
              }}
            >
              {`Question ${+history.id + 1}`}
            </Typography>
          }
          secondary={
            <Typography
              sx={{
                color: 'background.default',
                fontWeight: '300',
                fontSize: { xs: 14, md: 18 }
              }}
            >
              {parseText(history.question)}
            </Typography>
          }
        />
      </ListItem>
      {history.id + 1 < historyLength &&
        <Divider variant='inset' component='div' />
      }
    </Box>
  )
}