import * as React from 'react'
// MUI Styles
import { keyframes } from '@mui/system'
import Box from '@mui/material/Box'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
// Hooks
import useWindowSize from '../../hooks/useWindowSize'

const rotate = (initialValue: number, direction: boolean) => keyframes`
  from {
    transform: rotate(${initialValue}deg)
  } to {
    transform: rotate(${direction ? initialValue + 360 : initialValue - 360}deg)
  }
`

export default function Background() {
	const { height, width } = useWindowSize()
	const [itemsQty, setItemsQty] = React.useState(0)
	const itemSize = 250

	React.useEffect(() => {
		const calculeItems = () => {
			if (height && width) {
				const totalRows = Math.floor(width / itemSize)
				const totalColumns = Math.floor(height / itemSize)
				const totalItems = totalRows * totalColumns
				setItemsQty(totalItems)
			}
		}
		calculeItems()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [height, width])

	return (
		<Box
			sx={{
				position: 'absolute',
				zIndex: -1,
				width: '100vw',
				height: '100vh',
				overflowX: 'hidden',
			}}
		>
			<Box
				sx={{
					position: 'relative',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexWrap: 'wrap',
					zIndex: -1,
					justifyContent: { xs: 'center', md: 'space-between' },
					backgroundColor: theme => theme.palette.primary.light,
				}}
			>
				{Array.from({ length: itemsQty }).map((_, i) => (
					<QuestionMarkIcon
						key={i}
						sx={{
							fontSize: itemSize,
							position: 'relative',
							color: theme => theme.palette.primary.dark,
							opacity: 0.2,
							zIndex: -1,
							transform: `rotate(${i % 2 ? '' : '-'}${(i + 1) * 15}deg)`,
							animation: `${rotate((i + 1) * 45, !!(i % 2))} ${i % 2 ? '3' : '7'}s infinite ease-in-out`,
						}}
					/>
				))}
			</Box>
		</Box>
	)
}
