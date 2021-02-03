import * as React from 'react'
import { Controller, FieldError, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import Grid from '@material-ui/core/Grid'
import { profileApplicationSchema } from '../../../../services/helpers/validations'
import s from './AbsencesForm.module.scss'
import ruLocale from 'date-fns/locale/ru'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { useEffect, useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { addDaysToDate, formatDate } from '../../../../services/helpers/utils'
import { selectGlobal } from '../../../../store/ducks/global/selectors'
import { FormControl, MenuItem } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import { AbsenceCreateInterface } from '../../../../store/ducks/absences/contracts/state'
import { createAbsence } from '../../../../store/ducks/absences/actionCreators'
import { selectProfile } from '../../../../store/ducks/profile/selectors'
import { AppButton } from '../../../common/ui/AppButton/AppButton'
import { AppSectionSubtitle } from '../../../common/ui/AppSectionSubtitle/AppSectionSubtitle'

interface IFormInputs {
	dateFrom: dateFns
	dateTo: dateFns
	type: string
}

type Props = {
	onClose: (param: boolean) => void
}

export const AbsencesForm: React.FC<Props> = ({ onClose }) => {
	const { user } = useSelector(selectGlobal)
	const { profileData } = useSelector(selectProfile)
	const dispatch = useDispatch()

	const { control, register, handleSubmit, errors, getValues } = useForm<IFormInputs>({
		resolver: yupResolver(profileApplicationSchema),
	})

	const [selectedDateFrom, setSelectedDateFrom] = useState<any>(new Date())
	const [selectedDateTo, setSelectedDateTo] = useState<any>(new Date(addDaysToDate(new Date().toLocaleDateString(), 1)))
	const [minDate, setMinDate] = useState<any>(new Date())
	const [minDateTo, setMinDateTo] = useState<any>(new Date())
	const [maxDateTo, setMaxDateTo] = useState<any>(new Date(addDaysToDate(new Date().toLocaleDateString(), 365)))
	const [type, setType] = useState('')

	useEffect(() => {
		const values = getValues()
		const newDateMin = new Date(addDaysToDate(values.dateFrom, 1))
		if (type == 'dayOff') {
			const newDate = new Date(addDaysToDate(values.dateFrom, 3))

			setMaxDateTo(newDate)
			setSelectedDateTo(newDate)
		} else {
			setMaxDateTo(new Date(addDaysToDate(values.dateFrom, 365)))
			setMaxDateTo(new Date(addDaysToDate(values.dateFrom, 365)))
		}
		setMinDateTo(newDateMin)
	}, [type])

	const handleDateFromChange = (date: any) => {
		let newDateMax
		if (type == 'dayOff') {
			newDateMax = new Date(addDaysToDate(date.toLocaleDateString(), 3))
			setSelectedDateTo(newDateMax)
		} else {
			newDateMax = new Date(addDaysToDate(date.toLocaleDateString(), 365))
		}
		const newDateMin = new Date(addDaysToDate(date.toLocaleDateString(), 1))
		setSelectedDateFrom(date)
		if (date > selectedDateTo) {
			if (type == 'dayOff') {
				setSelectedDateTo(newDateMax)
			} else {
				setSelectedDateTo(newDateMin)
			}
		}
		setMaxDateTo(newDateMax)
		setMinDateTo(newDateMin)
	}

	const handleDateToChange = (date: any) => {
		setSelectedDateTo(date)
	}
	const selectHandler = (e: React.ChangeEvent<{ value: unknown }>) => {
		setType(e.target.value as string)
	}

	const onSubmit = (data: IFormInputs) => {
		if (user && user.id && profileData) {
			const formData: AbsenceCreateInterface = {
				dateEnd: formatDate(selectedDateTo, true),
				dateStart: formatDate(selectedDateFrom, true),
				user: user.id,
				absenseType: data.type,
				status: 'new',
			}
			dispatch(createAbsence(formData))

			onClose(false)
		}
	}

	useEffect(() => {
		register({ name: 'type' }, { required: true })
	}, [register])

	const closeHandler = () => {
		onClose(false)
	}

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
								<Select
									{...props}
									value={type}
									onChange={(value) => {
										props.onChange(value)
										selectHandler(value)
									}}
									label="Тип отсутствия"
									labelId="demo-simple-select-label"
								>
									<MenuItem value="vacancy">Оплачиваемый отпуск</MenuItem>
									<MenuItem value="dayOff">Выходной</MenuItem>
									<MenuItem value="sick">Больничный</MenuItem>
								</Select>
							)}
						/>
						<FormHelperText>{errors.type && (errors.type as FieldError).message}</FormHelperText>
					</FormControl>
				</Grid>
				<AppSectionSubtitle isBigSubtitle={true} additionalClasses={s.subtitle}>
					дата отсутствия
				</AppSectionSubtitle>
				<Grid item xs={12} sm={6}>
					<MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
						<DatePicker
							autoOk
							fullWidth
							disableToolbar
							variant="dialog"
							inputVariant="outlined"
							format="dd/MM/yyyy"
							margin="normal"
							label="Дата начала"
							okLabel="Выбрать"
							cancelLabel="Отмена"
							className="form-input date-input"
							value={selectedDateFrom}
							onChange={handleDateFromChange}
							error={!!errors.dateFrom}
							minDate={minDate}
							helperText={errors.dateFrom ? (errors.dateFrom as any).message : ''}
							name="dateFrom"
							inputRef={register}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
				<Grid item xs={12} sm={6}>
					<MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
						<DatePicker
							autoOk
							fullWidth
							disableToolbar
							variant="dialog"
							inputVariant="outlined"
							format="dd/MM/yyyy"
							margin="normal"
							label="Дата окончания"
							okLabel="Выбрать"
							cancelLabel="Отмена"
							className="form-input date-input"
							value={selectedDateTo}
							onChange={handleDateToChange}
							error={!!errors.dateTo}
							minDate={minDateTo}
							maxDate={maxDateTo}
							helperText={errors.dateTo ? (errors.dateTo as any).message : ''}
							name="dateTo"
							inputRef={register}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
				<div className={s.footer}>
					<AppButton size={'large'} onClick={closeHandler} additionalType={'default'}>
						отмена
					</AppButton>
					<AppButton size={'large'} type="submit">
						отправить на согласование
					</AppButton>
				</div>
			</Grid>
		</form>
	)
}
