import * as React from 'react'
import { Controller, FieldError, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import Grid from '@material-ui/core/Grid'
import { profileApplicationSchema } from '../../../../services/helpers/validations'
import s from './ApplicationForm.module.scss'
import ruLocale from 'date-fns/locale/ru'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { useEffect, useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import cn from 'classnames'
import { addDaysToDate, formatDate } from '../../../../services/helpers/utils'
import { selectGlobal } from '../../../../store/ducks/global/selectors'
import { FormControl, MenuItem } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'

interface IFormInputs {
	dateFrom: dateFns
	dateTo: dateFns
	type: string
}

type Props = {
	onClose: (param: boolean) => void
}

export const ApplicationForm: React.FC<Props> = ({ onClose }) => {
	const { user } = useSelector(selectGlobal)

	const { control, register, handleSubmit, errors, getValues } = useForm<IFormInputs>({
		resolver: yupResolver(profileApplicationSchema),
	})

	const [selectedDateFrom, setSelectedDateFrom] = useState<any>(new Date())
	const [selectedDateTo, setSelectedDateTo] = useState<any>(new Date())
	const [maxDateTo, setMaxDateTo] = useState<any>(null)
	const [type, setType] = React.useState('')

	useEffect(() => {
		if (type == '4') {
			const values = getValues()
			const newDate = addDaysToDate(values.dateFrom, 3)
			setMaxDateTo(newDate)
			setSelectedDateTo(newDate)
		} else {
			setMaxDateTo(null)
		}
	}, [type, selectedDateFrom])

	const handleDateFromChange = (date: any) => {
		if (date < selectedDateTo) {
			setSelectedDateFrom(date)
		}
	}
	const handleDateToChange = (date: any) => {
		if (date > selectedDateFrom) {
			setSelectedDateTo(date)
		}
	}
	const selectHandler = (e: React.ChangeEvent<{ value: unknown }>) => {
		console.log('111')
		setType(e.target.value as string)
	}

	const onSubmit = (data: IFormInputs) => {
		const formData = {
			dateTo: formatDate(selectedDateTo, true),
			dateFrom: formatDate(selectedDateFrom, true),
			user: (user && user.id) || null,
			type: data.type,
		}
		console.log(formData)

		onClose(false)
	}

	useEffect(() => {
		register({ name: 'type' }, { required: true })
	}, [register])

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12}>
					<FormControl fullWidth variant="outlined" error={Boolean(errors.type as FieldError)}>
						<InputLabel id="demo-simple-select-label">Тип отсутствия</InputLabel>

						<Controller
							labelId="demo-simple-select-label"
							label="Тип отсутствия"
							name="type"
							control={control}
							native={true}
							onChange={selectHandler}
							value={type}
							render={(props) => (
								<Select {...props} value={type} onChange={(value) => {
									props.onChange(value);
									selectHandler(value);
								}} label="Тип отсутствия" labelId="demo-simple-select-label">
									<MenuItem value="1">Оплачиваемый отпуск</MenuItem>
									<MenuItem value="2">Отпуск за свой счет</MenuItem>
									<MenuItem value="3">Больничный</MenuItem>
									<MenuItem value="4">Корпоративный день</MenuItem>
								</Select>
							)}
						/>
						<FormHelperText>{errors.type && (errors.type as FieldError).message}</FormHelperText>
					</FormControl>
				</Grid>
				<div className={cn('sectionBigSubtitle', s.subtitle)}>дата отсутствия</div>
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
							label="Дата"
							okLabel="Выбрать"
							cancelLabel="Отмена"
							className="form-input date-input"
							value={selectedDateFrom}
							onChange={handleDateFromChange}
							error={!!errors.dateFrom}
							maxDate={selectedDateTo}
							helperText={errors.dateFrom ? (errors.dateFrom as any).message : ''}
							name="dateFrom"
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
							label="Дата"
							okLabel="Выбрать"
							cancelLabel="Отмена"
							className="form-input date-input"
							value={selectedDateTo}
							onChange={handleDateToChange}
							error={!!errors.dateTo}
							minDate={selectedDateFrom}
							maxDate={maxDateTo}
							helperText={errors.dateTo ? (errors.dateTo as any).message : ''}
							name="dateTo"
							inputRef={register}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
				<div className={s.footer}>
					<Button className="btn btn-default" onClick={() => onClose(false)}>
						отмена
					</Button>
					<Button className="btn" type="submit" color="primary" size="medium">
						отправить на согласование
					</Button>
				</div>
			</Grid>
		</form>
	)
}
