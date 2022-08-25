export const getColor = (colors: string[], i: number) => {
	return colors[i % colors.length]
}