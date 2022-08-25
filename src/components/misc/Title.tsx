import * as React from 'react'
// MUI Styles
import Typography, { TypographyProps } from '@mui/material/Typography'

export default function Title(props: TypographyProps) {
	const { sx, children } = props
	return (
		<Typography
      align='center'
      component='h3'
      fontWeight='600'
      sx={{
        color: 'background.default',
        ...sx
      }}
      variant='h2'
    >
			{children}
		</Typography>
	)
}
