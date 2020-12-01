import * as React      from 'react'
import { useForm }     from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { TextField }   from '@material-ui/core'
import Button          from '@material-ui/core/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import Grid            from '@material-ui/core/Grid'
import { loginSchema } from '../../../../services/helpers/validations'
import s               from './LoginForm.module.scss'
import Typography      from '@material-ui/core/Typography'
interface IFormInputs {
	login: string
	password: string
}

export const LoginForm: React.FC = () => {
	//const dispatch = useDispatch()

	const { register, handleSubmit, errors } = useForm<IFormInputs>({
		resolver: yupResolver(loginSchema),
		/*validationSchema: loginSchema,*/
	})

	const onSubmit = (data: IFormInputs) => {
		//dispatch(login(data))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
			<Grid container spacing={2} justify="center">
				<h1 className={s.formTitle}>Авторизация</h1>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="username"
						label="Логин"
						error={!!errors.login}
						helperText={errors.login ? errors.login.message : ''}
						inputRef={register}
						name="login"
						autoComplete="email"
						autoFocus
						className="form-input"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						name="password"
						error={!!errors.password}
						helperText={errors.password ? errors.password.message : ''}
						inputRef={register}
						label="Пароль"
						type="password"
						id="password"
						className="form-input"
						autoComplete="current-password"
					/>
				</Grid>
				<Button className="btn margin-top" type="submit" color="primary" size="medium" variant="contained">
					Войти
				</Button>
			</Grid>
		</form>
	)
}
