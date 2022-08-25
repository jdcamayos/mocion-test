import * as React from 'react'
// MUI Styles
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
// Others
import ThemeProvider from '../../context/ThemeContext'
import Background from './Background'

type Props = {
	children: React.ReactNode
}

export default function Layout(props: Props) {
	return (
		<ThemeProvider>
			<CssBaseline />
			<Background />
			<Box sx={{ minHeight: '100vh', maxWidth: '100vw', overflowX: 'hidden' }}>
				<Container maxWidth="md">
          {props.children}
        </Container>
			</Box>
		</ThemeProvider>
	)
}
