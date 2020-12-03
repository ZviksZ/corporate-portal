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
