import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './NotificationForm.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { getFormatedDate, getInitialsFromName } from '../../../../services/helpers/utils'
import { NavLink } from 'react-router-dom'
import { selectAbsences } from '../../../../store/ducks/absences/selectors'
import { useCallback, useEffect } from 'react'
import { changeAbsenceStatus, setAbsenceData } from '../../../../store/ducks/absences/actionCreators'
import { selectGlobal } from '../../../../store/ducks/global/selectors'
import { AppButton } from '../../../common/ui/AppButton/AppButton'

type Props = {
	onClose: (param: boolean) => void
}

export const NotificationForm: React.FC<Props> = ({ onClose }) => {
	const dispatch = useDispatch()
	const { absenceDetail } = useSelector(selectAbsences)
	const { user } = useSelector(selectGlobal)

	useEffect(() => {
		return () => {
			dispatch(setAbsenceData(null))
		}
	}, [])

	const closeForm = useCallback(() => {
		onClose(false)
	}, [])

	if (!absenceDetail) {
		return <></>
	}

	const approveAbsence = () => {
		if (user && user.id) {
			dispatch(changeAbsenceStatus(absenceDetail.id, true, user.id))
			onClose(false)
		}
	}
	const declineAbsence = () => {
		if (user && user.id) {
			dispatch(changeAbsenceStatus(absenceDetail.id, false, user.id))
			onClose(false)
		}
	}
	return (
		<div className={s.notification}>
			<NavLink onClick={closeForm} to={`/profile/${absenceDetail.authorId}`} className={s.author}>
				<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={absenceDetail.authorImage || ''}>
					{getInitialsFromName(absenceDetail.author || '')}
				</Avatar>
				<div className={s.info}>
					<div className="sectionSubtitle">Сотрудник</div>
					<div className={cn('sectionText', s.author)}>{absenceDetail.author || ''}</div>
					<div className="sectionBigSubtitle">{absenceDetail.authorPosition || ''}</div>
				</div>
			</NavLink>
			{absenceDetail.applicationDates && (
				<>
					<div className="sectionSubtitle">Дата подачи заявления</div>
					<p className={'sectionText margin-bottom'}>{getFormatedDate(absenceDetail.applicationDates || '')}</p>
				</>
			)}
			{absenceDetail.vacationGraphic && (
				<>
					<div className="sectionSubtitle">Заявление на даты</div>
					<p className={'sectionText margin-bottom'}>
						c {getFormatedDate(absenceDetail.vacationGraphic.dateStart)} по {getFormatedDate(absenceDetail.vacationGraphic.dateEnd)}
					</p>
				</>
			)}
			{absenceDetail.vacationDays && (
				<>
					<div className="sectionSubtitle">Накоплено дней отпуска</div>
					<p className={'sectionText margin-bottom'}>{absenceDetail.vacationDays}</p>
				</>
			)}
			{absenceDetail.corporateDays !== null && (
				<>
					<div className="sectionSubtitle">Корпоративных дней</div>
					<p className={'sectionText margin-bottom'}>{absenceDetail.corporateDays}</p>
				</>
			)}
			<div className={s.footer}>
				<AppButton size={'large'} onClick={declineAbsence} additionalType={'dangerous'}>
					Отказать
				</AppButton>
				<AppButton size={'large'} onClick={approveAbsence} >
					Согласовать
				</AppButton>
			</div>
		</div>
	)
}
