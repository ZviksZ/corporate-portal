import * as yup from 'yup'

const requiredText = 'Обязательное поле'

export const loginSchema = yup.object().shape({
	login: yup.string().required(requiredText),
	password: yup.string().required(requiredText),
})

export const profileApplicationSchema = yup.object().shape({
	type: yup.string().required(requiredText),
})
