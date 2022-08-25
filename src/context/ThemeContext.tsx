import * as React from 'react'
import { createTheme, ThemeProvider as MUIThemeProvider, responsiveFontSizes } from '@mui/material/styles'

type Props = {
	children: React.ReactNode
}

const ThemeContext = React.createContext({ toggleThemeMode: () => {} })

export default function ThemeProvider(props: Props) {
	const [mode, setMode] = React.useState<'light' | 'dark'>('light')
	const theme = React.useMemo(
		() =>
			responsiveFontSizes(
				createTheme({
					palette: {
						mode,
						primary: {
							main: '#4D43D8',
						},
						warning: {
							main: '#F2C600'
						},
						error: {
							main: '#E04D04'
						},
						success: {
							main: '#24EB8E'
						},
						text: {
							primary: '#0A2C3E'
						},
						background: {
							default: '#FCFCFC'
						}
					},
          typography: {
            fontFamily: 'Fira Sans',
						htmlFontSize: 20,
          }
				}),
				{
					factor: 1,
				}
			),
		[mode]
	)

	const themeMode = React.useMemo(
		() => ({
			toggleThemeMode: () => {
				setMode(prev => (prev === 'light' ? 'dark' : 'light'))
			},
		}),
		[]
	)

	return (
		<ThemeContext.Provider value={themeMode}>
			<MUIThemeProvider theme={theme}>{props.children}</MUIThemeProvider>
		</ThemeContext.Provider>
	)
}
