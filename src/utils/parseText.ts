export const parseText = (str: string) => {
	var textarea = document.createElement('textarea')
	textarea.innerHTML = str
	return textarea.value
}
