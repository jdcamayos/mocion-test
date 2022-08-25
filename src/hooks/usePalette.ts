import { useTheme } from '@mui/material/styles'

export default function usePalette() {
	const theme = useTheme()
	return [
		theme.palette.primary.main,
		theme.palette.warning.main,
		theme.palette.error.main,
		theme.palette.success.main,
	]
}
