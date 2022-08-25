import * as React from 'react'
// MUI Styles
import Typography, { TypographyProps } from '@mui/material/Typography'

export default function Text(props: TypographyProps) {
	const { sx, children } = props
	return (
		<Typography
			color="secondary"
      component='h2'
      fontWeight='400'
      sx={{
        color: 'background.default',
        ...sx
      }}
      variant='h4'
    >
			{children}
		</Typography>
	)
}
