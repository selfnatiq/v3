export const localStringDate = (date) => {
	return new Date(date).toDateString()
}

export const sortByDate = (a, b) => {
	return new Date(b.date) - new Date(a.date)
}
