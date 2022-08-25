import * as React from 'react'
// MUI Styles
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'

interface Props {
	children: React.ReactNode
}

export default function CategorySection(props: Props) {
	return (
		<>
			<AppBar
				component="section"
				sx={{
					height: 60,
					display: 'flex',
					justifyContent: 'center',
					backgroundColor: "warning.main"
				}}
			>
				<Typography
					sx={{
						marginTop: 1,
						marginBottom: 1,
						fontSize: { xs: 20, sm: 22, md: 24 },
						textAlign: 'center',
						color: "text.primary",
						textOverflow: "initial"
					}}
				>
					{props.children}
				</Typography>
			</AppBar>
			<Toolbar />
		</>
	)
}
