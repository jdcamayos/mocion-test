import * as React from 'react'
// MUI Styles
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// Components
import MultiColorTitle from './MultiColorTitle'
import MultiColorAvatar from './MultiColorAvatar'

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
