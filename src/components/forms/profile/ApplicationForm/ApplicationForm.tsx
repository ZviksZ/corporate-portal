import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { MenuItem, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import Grid from '@material-ui/core/Grid'
import { loginSchema } from '../../../../services/helpers/validations'
import s from './ApplicationForm.module.scss'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import ruLocale from 'date-fns/locale/ru'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'

interface IFormInputs {
	dateFrom: string
	dateTo: string
	type: string
}

export const ApplicationForm: React.FC = () => {
	//const dispatch = useDispatch()

	const [selectedDateFrom, setSelectedDateFrom] = useState(new Date())
	const [selectedDateTo, setSelectedDateTo] = useState(new Date())

	const handleDateFromChange = (date: any) => {
		setSelectedDateFrom(date)
	}
	const handleDateToChange = (date: any) => {
		setSelectedDateTo(date)
	}

	const { register, handleSubmit, errors } = useForm<IFormInputs>({
		resolver: yupResolver(loginSchema),
		/*validationSchema: loginSchema,*/
	})

	const onSubmit = (data: IFormInputs) => {
		//dispatch(login(data))
	}

	//TODO просчитывать максимальную минимальную даты

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12}>
					<FormControl variant="outlined" fullWidth>
						<InputLabel id="demo-simple-select-outlined-label">Тип отсутствия</InputLabel>
						<Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" name="type" inputRef={register} label="Тип отсутствия">
							<MenuItem value={1}>Оплачиваемый отпуск</MenuItem>
							<MenuItem value={2}>Отпуск за свой счет</MenuItem>
							<MenuItem value={3}>Больничный</MenuItem>
							<MenuItem value={4}>Корпоративный день</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={6}>
					<MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
						<DatePicker
							autoOk
							fullWidth
							disableToolbar
							variant="dialog"
							inputVariant="outlined"
							format="dd.MM.yyyy"
							margin="normal"
							id="date-picker-inline"
							label="Дата"
							okLabel="Выбрать"
							cancelLabel="Отмена"
							className="form-input date-input"
							value={selectedDateFrom}
							onChange={handleDateFromChange}
							error={!!errors.dateFrom}
							helperText={errors.dateFrom ? errors.dateFrom.message : ''}
							name="date"
							inputRef={register}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
				<Grid item xs={6}>
					<MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
						<DatePicker
							autoOk
							fullWidth
							disableToolbar
							variant="dialog"
							inputVariant="outlined"
							format="dd.MM.yyyy"
							margin="normal"
							id="date-picker-inline"
							label="Дата"
							okLabel="Выбрать"
							cancelLabel="Отмена"
							className="form-input date-input"
							value={selectedDateTo}
							onChange={handleDateToChange}
							error={!!errors.dateTo}
							maxDate={'03/18/2019'}
							helperText={errors.dateTo ? errors.dateTo.message : ''}
							name="date"
							inputRef={register}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
				<Button className="btn margin-top" type="submit" color="primary" size="medium" variant="contained">
					Войти
				</Button>
			</Grid>
		</form>
	)
}
