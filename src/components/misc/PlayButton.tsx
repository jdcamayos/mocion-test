import * as React from 'react'
import { Link } from 'react-router-dom'
// MUI Styles
import Button, { ButtonProps } from '@mui/material/Button'
import { keyframes } from '@mui/system'

const buttonAnimation = keyframes`
  0%,100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  };
`

interface PlayButtonProps extends ButtonProps {
	to: string
}

export default function PlayButton(props: PlayButtonProps) {
	const { sx, to, children } = props
	return (
		<Button
			variant='contained'
			fullWidth
			color="error"
			component={Link}
			to={to}
			sx={{
				textTransform: 'none',
				fontSize: 18,
				animation: `${buttonAnimation} 1s ease infinite`,
				...sx,
			}}
		>
			{children}
		</Button>
	)
}
