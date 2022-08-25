import * as React from 'react'
// MUI Styles
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

interface Props extends IconButtonProps {
	variant: 'True' | 'False'
}

export default function TrueFalseButton(props: Props) {
	const { variant, ...rest } = props
	return (
		<IconButton {...rest}>
			{variant === 'True' && (
				<ThumbUpIcon
					sx={{
						fontSize: { xs: 50, md: 80 },
						color: theme => theme.palette.success.main
					}}
				/>
			)}
			{variant === 'False' && (
				<ThumbDownIcon
					sx={{
						fontSize: { xs: 50, md: 80 },
						color: theme => theme.palette.error.main
					}}
				/>
			)}
		</IconButton>
	)
}
