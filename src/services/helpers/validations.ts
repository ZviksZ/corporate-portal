import * as yup from 'yup'

export const loginSchema = yup.object().shape({
	login: yup.string().required('Обязательное поле'),
	password: yup.string().required('Обязательное поле'),
})
