import { addDaysToDate, copyTextToClipboard, declOfNum, formatDate, getFormatedDate, getInitialsFromName, getReverseFormatDate, getStatusText } from '../utils'

describe('declOfNum test', () => {
	it('Should return correct title for various numbers', () => {
		const variants = ['one', 'two', 'five']

		expect(declOfNum(1, variants)).toBe('one')
		expect(declOfNum(2, variants)).toBe('two')
		expect(declOfNum(5, variants)).toBe('five')
	})
})

describe('getFormatedDate test', () => {
	it('Should return formated date from date string', () => {
		expect(getFormatedDate('12.02.2021')).toBe('12 Февраля 2021')
		expect(getFormatedDate('')).toBe('-')
	})
})

describe('getInitialsFromName test', () => {
	it('Should return first letters of name and surname', () => {
		expect(getInitialsFromName('John Doe')).toBe('JD')
		expect(getInitialsFromName('John')).toBe('J')
		expect(getInitialsFromName('')).toBe('')
	})
})

describe('getStatusText test', () => {
	it('Should return correct status text', () => {
		expect(getStatusText('new')).toBe('На согласовании')
		expect(getStatusText('approved')).toBe('Согласовано')
		expect(getStatusText('declined')).toBe('Не согласовано')
		expect(getStatusText('')).toBe('')
	})
})

describe('addDaysToDate test', () => {
	it('Should correct add days to date and return reverse date string with "/" format', () => {
		expect(addDaysToDate('12.02.2021', 3)).toBe('2021/02/15')
		expect(addDaysToDate('28.02.2021', 1)).toBe('2021/03/01')
	})
})

describe('getReverseFormatDate test', () => {
	it('Should correct reverse date with "/" format', () => {
		expect(getReverseFormatDate('07.12.2020 16:36')).toStrictEqual(new Date('2020/12/07 16:36'))
	})
})

describe('formatDate test', () => {
	it('Should correct format date to "." type', () => {
		expect(formatDate(new Date('2020/12/07'), true)).toBe('07.12.2020')
		expect(formatDate(new Date('2020/12/7'), true)).toBe('07.12.2020')
		expect(formatDate(new Date('2020/5/07'), true)).toBe('07.05.2020')

		expect(formatDate(new Date('2020/12/07'), false)).toBe('07.12.20')
	})
})

describe('copyTextToClipboard test', () => {
	let mockedEvent: object

	beforeEach(() => {
		mockedEvent = {
			currentTarget: {
				dataset: {
					copy: 'test copy',
				},
			},
		}
	})

	it('Should call execCommand in fn', () => {
		document.execCommand = jest.fn()
		copyTextToClipboard(mockedEvent)

		expect(document.execCommand).toHaveBeenCalledWith('copy')
	})

	it('Should copied right text from data attribute', () => {
		const text = copyTextToClipboard(mockedEvent)

		expect(text).toBe('test copy')
	})
})
