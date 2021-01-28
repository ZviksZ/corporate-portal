import * as React from 'react'
import s from '../../Profile.module.scss'
import jira from '../../../../../assets/images/icons/jira.svg'
import printer from '../../../../../assets/images/icons/printer.svg'
import Button from '@material-ui/core/Button'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { reselectProfileData, selectProfile } from '../../../../../store/ducks/profile/selectors'
import { getFormatedDate, getStatusText } from '../../../../../services/helpers/utils'
import { selectGlobal } from '../../../../../store/ducks/global/selectors'
import { TextField } from '@material-ui/core'
import { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { updateProfile, updateProfileDayoff } from '../../../../../store/ducks/profile/actionCreators'
import { DatePicker } from '@material-ui/pickers'

type Props = {
	setOpenForm: (param: boolean) => void
	isMyProfile: boolean
}
export const ProfileSidebarBottom: React.FC<Props> = ({ setOpenForm, isMyProfile }) => {
	const profileData = useSelector(reselectProfileData)
	const { user } = useSelector(selectGlobal)
	const dispatch = useDispatch()
	const [corporate, setCorporate] = useState(false)
	const [days, setDays] = useState('')
	const [error, setError] = useState('')
	const leadId = profileData?.additional?.lead?.id || 'no lead id'
	const userId = (user && user?.id) || 'no user id'
	const isSubordinatesProfile = false
	const roleAdmin = user && user.role === 'ROLE_ADMIN'

	useEffect(() => {
		if (profileData) {
			setDays(profileData.worktime.corporateDays)
		}
	}, [profileData])

	if (!profileData) {
		return <></>
	}

	const handleChangeDays = (event: React.ChangeEvent<{ value: unknown }>) => {
		setDays(event.target.value as string)
	}

	const closeEdit = () => {
		setCorporate(false)
	}

	const saveChanges = () => {
		if (profileData && profileData.id) {
			const daysValue = +days
			if (daysValue || daysValue === 0) {
				setCorporate(false)
				if (profileData?.worktime?.corporateDays === null) {
					dispatch(updateProfileDayoff(profileData.id, days, true))
				} else {
					dispatch(updateProfileDayoff(profileData.id, days, false))
				}
			} else {
				setError('Введите числовое значение')
			}
		}
	}

	const time = profileData.worktime

	if (!time?.employment?.length && !time?.openTasksLink && !time?.vacation?.length && !time?.corporateDays && !time?.vacationDays && !roleAdmin) {
		return <></>
	}

	return (
		<div className={s.sidebarBottom}>
			{time.employment && time.employment.length > 0 && (
				<>
					<div className="sectionSubtitle">Занятость на текущий день</div>
					<ul className={cn('sectionList', s.employmentList)}>
						{time.employment.map((item, key) => (
							<li className="sectionListItem" key={key + item.from + item.to}>
								с {item.from} до {item.to}
							</li>
						))}
					</ul>
				</>
			)}
			{time.openTasksLink && (
				<a href={time.openTasksLink} className="link-with-icon margin-bottom">
					<img src={jira} alt="" width={'18px'} />
					<span>Открытые задачи</span>
				</a>
			)}
			{time.vacation && time.vacation[0] && (
				<>
					<div className="sectionSubtitle">Отсутствие</div>
					<p className={'sectionText status-' + time.vacation[0].status}>
						c {getFormatedDate(time.vacation[0].from)} по {getFormatedDate(time.vacation[0].to)}
					</p>
				</>
			)}
			{isMyProfile || roleAdmin ? (
				<>
					{/*<a href={time.vacationApplicationLink} className="link-with-icon margin-bottom" rel="noreferrer" target="_blank" download>
						<img src={printer} alt="" width={'20px'} />
						<span>Заявление на отпуск.pdf</span>
					</a>*/}
					{time.vacationDays && (
						<>
							<div className="sectionSubtitle">Накоплено дней отпуска</div>
							<p className="sectionText">{time.vacationDays}</p>
						</>
					)}

					{corporate ? (
						<TextField
							variant="outlined"
							error={!!error}
							helperText={error || ''}
							value={days}
							onChange={handleChangeDays}
							fullWidth
							label="Количество дней"
							name="days"
							autoFocus
							className="form-input margin-bottom-x2"
						/>
					) : (
						<>
							{roleAdmin ? (
								<>
									<div className="sectionSubtitle">Корпоративных дней</div>
									<p className={cn('sectionText', 'sectionTextWith', s.profileEdit)} onClick={() => setCorporate(true)}>
										{time.corporateDays || '0'}
										<i className={cn('icon-edit', s.editIcon)}></i>
									</p>
								</>
							) : (
								<>
									<div className="sectionSubtitle">Корпоративных дней</div>
									<p className="sectionText">{time.corporateDays || '0'}</p>
								</>
							)}
						</>
					)}

					{isMyProfile && (
						<Button className="btn btn-full-width margin-top text-initial" onClick={() => setOpenForm(true)}>
							+ Заявление на отпуск/больничный
						</Button>
					)}

					{time.vacation && time.vacation.length > 1 && (
						<div className={s.applications}>
							{time.vacation.map((item, index) => {
								if (index != 0) {
									return (
										<div key={item?.from + index} className={s.appItem}>
											<div className="sectionText no-margin-bottom">
												{item.name || 'Заявление'} от {item.to}
											</div>
											<div className={cn('sectionText', 'no-margin-bottom', `status-${item.status}`)}>{getStatusText(item?.status || '')}</div>
										</div>
									)
								}
							})}
						</div>
					)}
				</>
			) : isSubordinatesProfile ? (
				<>
					{corporate ? (
						<TextField
							variant="outlined"
							error={!!error}
							helperText={error || ''}
							value={days}
							onChange={handleChangeDays}
							fullWidth
							label="Количество дней"
							name="days"
							autoFocus
							className="form-input margin-bottom-x2"
						/>
					) : (
						<>
							{roleAdmin || isSubordinatesProfile ? (
								<>
									<div className="sectionSubtitle">Корпоративных дней</div>
									<p className={cn('sectionText', 'sectionTextWith', s.profileEdit)} onClick={() => setCorporate(true)}>
										{time.corporateDays || '0'}
										<i className={cn('icon-edit', s.editIcon)}></i>
									</p>
								</>
							) : (
								<>
									<div className="sectionSubtitle">Корпоративных дней</div>
									<p className="sectionText">{time.corporateDays || '0'}</p>
								</>
							)}
						</>
					)}
				</>
			) : (
				<></>
			)}

			<AppBar className={cn('navbar', s.appbarBottom, { [s.appbarBottomShow]: corporate })} position="fixed" color="default">
				<Toolbar className={cn(s.editButtons)}>
					<Button size="large" className="btn btn-default text-uppercase" onClick={closeEdit}>
						Отмена
					</Button>
					<Button size="large" className="btn margin-left-x3 text-uppercase" onClick={saveChanges}>
						Сохранить
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}
