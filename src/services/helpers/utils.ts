// @ts-nocheck
/* eslint-disable */

export function setFormData(args) {
	const formData = new FormData()

	for (const key in args) {
		if (Array.isArray(args[key])) {
			for (let i = 0; i < args[key].length; i++) {
				formData.append(key + '[]', args[key][i])
			}
		} else {
			formData.append(key, args[key])
		}
	}

	return formData
}
export function addDaysToDate(data, day)
{
	data = data.split('.');
	data = new Date(data[2], +data[1]-1, +data[0]+day, 0, 0, 0, 0);
	/*console.log(data)
	data = [data.getMonth()+1,data.getDate(),data.getFullYear()];
	console.log(data)
	data = data.join('.').replace(/(^|\/)(\d)(?=\/)/g,"$10$2");*/
	return data
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

export function addObjectToArray(obj) {
	const array = []
	for (const key in obj) {
		array.push({ id: key, title: obj[key] })
	}

	return array
}

export function numberWithSpace(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export function copyTextToClipboard(e) {
	let text = e.currentTarget.dataset['copy']
	let textArea = document.createElement('textarea')
	textArea.value = text
	document.body.appendChild(textArea)
	textArea.select()
	try {
		let successful = document.execCommand('copy')
		if (successful) {
			// SuccessCode
		}
		let msg = successful ? 'successful' : 'unsuccessful'
		console.log('Copying text command was ' + msg)
	} catch (err) {
		console.log('Oops, unable to copy')
	}
	textArea.remove()
}
export function getStatusText(status: string | number) {
	let text = ''
	switch (status) {
		case '0':
		case 0:
			text = 'На согласовании'
			break
		case '1':
		case 1:
			text = 'Согласовано'
			break
		case '2':
		case 2:
			text = 'Не согласовано'
			break
		default:
			break
	}

	return text
}

export function getInitialsFromName(name: string) {
	const nameArray = name.split(' ')

	return `${nameArray[0][0].toUpperCase()}${nameArray[1][0].toUpperCase()}`
}
export function getFormatedDate(dateString: string) {
	let formatedDate = dateString.split('.').reverse().join('/')

	const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
	let date = new Date(formatedDate)
	let day = date.getDate()
	let month = date.getMonth()
	let year = date.getFullYear()

	return `${day} ${monthNames[month]} ${year}`
}
