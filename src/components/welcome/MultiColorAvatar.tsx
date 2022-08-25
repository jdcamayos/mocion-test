import * as React from 'react'
// MUI Styles
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
// Hooks
import usePalette from '../../hooks/usePalette'
import { getColor } from '../../utils/getColor'

type Props = {
	str: string
}

export default function MultiColorAvatar(props: Props) {
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
				<Avatar
					sx={{
						backgroundColor: getColor(colors, i),
					}}
					key={i}
				>
					<Typography
						sx={{
							fontWeight: '700',
							fontSize: 25,
						}}
					>
						{l}
					</Typography>
				</Avatar>
			))}
		</Box>
	)
}