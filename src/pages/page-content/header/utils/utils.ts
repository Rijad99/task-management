export const setTitle = (location: string) => {
	let title = ""

	if (location.includes("-")) {
		title = location
			.substring(1, location.length)
			.split("-")
			.map(word => word[0].toUpperCase() + word.substring(1, word.length))
			.join("")
	} else {
		title = location.slice(1, location.length).split("/")[0]
		title = title[0].toUpperCase() + title.substring(1, title.length)
	}

	return title
}
