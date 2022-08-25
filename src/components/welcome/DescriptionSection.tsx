import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function DescriptionSection() {
	return (
		<Box
      component="section"
      sx={{
        paddingTop: 6
      }}
    >
			<Typography
        component="h3"
        align="center"
        sx={{
          fontSize: 26,
          fontWeight: '500',
          color: 'background.default'
        }}
      >
        You will be presented with 10 True or False questions.</Typography>
			<Typography
        component="h3"
        align="center"
        sx={{
          fontSize: 30,
          fontWeight: '500',
          color: 'background.default'
        }}
      >
        Can you score 100%?</Typography>
		</Box>
	)
}
