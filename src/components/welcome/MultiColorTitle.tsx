import * as React from 'react'
// MUI Styles
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// Hooks
import usePalette from '../../hooks/usePalette'
import { getColor } from '../../utils/getColor'


type MultiColorTitleProps = {
	str: string
}

export default function MultiColorTitle(props: MultiColorTitleProps) {
	const { str } = props
	const colors = usePalette()
	return (
		<Box
      component="article"
			sx={{
				display: 'flex',
				justifyContent: "center",
			}}
		>
			{str.split('').map((l, i) => (
				<Typography
					key={i}
					component='span'
					sx={{
						fontSize: 100,
						margin: 0,
						padding: 0,
						fontWeight: '700',
						color: getColor(colors, i),
					}}
				>
					{l}
				</Typography>
			))}
		</Box>
	)
}
