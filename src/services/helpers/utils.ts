// @ts-nocheck
/* eslint-disable */

export function declOfNum(number, titles) {
	const cases = [2, 0, 1, 1, 1, 2]
	return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]
}

export function addDaysToDate(data, day) {
	if (data.indexOf('/') !== -1) {
		data = data.split('/')
	} else {
		data = data.split('.')
	}
	data = new Date(data[2], +data[1] - 1, +data[0] + day, 0, 0, 0, 0)
	data = data.toLocaleDateString().split('.').reverse().join('/')

	return data
}
export function getReverseFormatDate(date) {
	let dateArray = date.split(' ')
	let reverseDate = dateArray[0].split('.').reverse().join('/')

	return new Date(reverseDate + ' ' + dateArray[1])
}
export function timeSince(date) {
	let seconds = Math.floor((new Date() - date) / 1000)

	let interval = seconds / 31536000

	if (interval > 1) {
		return Math.floor(interval) + ' ' + declOfNum(Math.floor(interval), ['год', 'года', 'лет'])
	}
	interval = seconds / 2592000
	if (interval > 1) {
		return Math.floor(interval) + ' ' + declOfNum(Math.floor(interval), ['месяц', 'месяца', 'месяцев'])
	}
	interval = seconds / 86400
	if (interval > 1) {
		return Math.floor(interval) + ' ' + declOfNum(Math.floor(interval), ['день', 'дня', 'дней'])
	}
	interval = seconds / 3600
	if (interval > 1) {
		return Math.floor(interval) + ' ' + declOfNum(Math.floor(interval), ['час', 'часа', 'часов'])
	}
	interval = seconds / 60
	if (interval > 1) {
		return Math.floor(interval) + ' ' + declOfNum(Math.floor(interval), ['минуту', 'минуты', 'минут'])
	}
	return Math.floor(seconds) + ' ' + declOfNum(Math.floor(seconds), ['секунду', 'секунды', 'секунд'])
}

export function formatDate(data, fullYear) {
	const date = new Date(data)

	let dd = date.getDate()
	if (dd < 10) dd = '0' + dd

	let mm = date.getMonth() + 1
	if (mm < 10) mm = '0' + mm

	let yy

	if (fullYear) {
		yy = date.getFullYear()
	} else {
		yy = date.getFullYear() % 100
		if (yy < 10) yy = '0' + yy
	}

	return dd + '.' + mm + '.' + yy
}

export function copyTextToClipboard(e) {
	let text = e.currentTarget.dataset['copy']
	let textArea = document.createElement('textarea')
	textArea.value = text
	document.body.appendChild(textArea)
	textArea.select()
	try {
		let successful = document.execCommand('copy')
	} catch (err) {
	}
	textArea.remove()

	return text
}

export function getStatusText(status: string | number) {
	let text = ''
	switch (status) {
		case 'new':
			text = 'На согласовании'
			break
		case 'approved':
			text = 'Согласовано'
			break
		case 'declined':
			text = 'Не согласовано'
			break
		default:
			break
	}

	return text
}

export function getInitialsFromName(name: string) {
	if (!name) return ''

	const nameArray = name.split(' ')

	return `${nameArray[0] && nameArray[0][0].toUpperCase() || ''}${nameArray[1] && nameArray[1][0].toUpperCase() || ''}`
}

export function getFormatedDate(dateString: string) {
	if (!dateString) {
		return `-`
	}
	let formatedDate = dateString.split('.').reverse().join('/')

	const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
	let date = new Date(formatedDate)
	let day = date.getDate()
	let month = date.getMonth()
	let year = date.getFullYear()

	return `${day} ${monthNames[month]} ${year}`
}

export function stopPropagation(e) {
	e.stopPropagation()
	return
}
