import * as React from 'react'
// MUI Styles
import Typography, { TypographyProps } from '@mui/material/Typography'

export default function Subtitle(props: TypographyProps) {
	const { sx, children } = props
	return (
		<Typography
      align='center'
      color="secondary"
      component='h2'
      fontWeight='400'
      sx={{
        color: 'background.default',
        ...sx
      }}
      variant='h3'
    >
			{children}
		</Typography>
	)
}
