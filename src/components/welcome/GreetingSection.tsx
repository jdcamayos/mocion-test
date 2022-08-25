import * as React from 'react'
// MUI Styles
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
// Others
import { colors } from '../../utils/palette'

const getColor = (i: number) => {
	const values = Object.values(colors).slice(0, -2)
	return values[i % values.length]
}

type MultiColorTitleProps = {
	str: string
}

const MultiColorTitle = (props: MultiColorTitleProps) => {
	const { str } = props
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
					component='span'
					sx={{
						fontSize: 100,
						margin: 0,
						padding: 0,
						fontWeight: '700',
						color: getColor(i),
					}}
				>
					{l}
				</Typography>
			))}
		</Box>
	)
}

type MultiColorAvatarProps = {
	str: string
}

const MultiColorAvatar = (props: MultiColorAvatarProps) => {
	const { str } = props
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
						backgroundColor: getColor(i),
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

export default function GreetingSection() {
	return (
		<Box
			component="section"
		>
			<Typography
				component="h1"
				sx={{
					fontSize: { xs: 32, sm: 34, md: 36, lg: 38 },
					fontWeight: "700",
					textAlign: "center",
					color: "background.default"
				}}
			>
				Welcome to the
			</Typography>
			<MultiColorTitle str='TRIVIA' />
			<MultiColorAvatar str='CHALLENGE' />
		</Box>
	)
}
