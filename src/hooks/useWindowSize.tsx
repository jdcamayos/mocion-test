import * as React from 'react'

type WindowSizeProps = {
	width: null | number
	height: null | number
}

export default function useWindowSize() {
	const [windowSize, setWindowSize] = React.useState<WindowSizeProps>({
		width: null,
		height: null,
	})

	React.useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}
