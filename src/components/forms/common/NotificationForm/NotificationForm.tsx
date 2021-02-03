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
import { AppSectionSubtitle } from '../../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { AppSectionText } from '../../../common/ui/AppSectionText/AppSectionText'

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
					<AppSectionSubtitle>Сотрудник</AppSectionSubtitle>
					<AppSectionText additionalClasses={s.author}>{absenceDetail.author || ''}</AppSectionText>
					<AppSectionSubtitle isBigSubtitle={true}>{absenceDetail.authorPosition || ''}</AppSectionSubtitle>
				</div>
			</NavLink>
			{absenceDetail.applicationDates && (
				<>
					<AppSectionSubtitle>Дата подачи заявления</AppSectionSubtitle>
					<AppSectionText additionalClasses={'margin-bottom'}>{getFormatedDate(absenceDetail.applicationDates || '')}</AppSectionText>
				</>
			)}
			{absenceDetail.vacationGraphic && (
				<>
					<AppSectionSubtitle>Заявление на даты</AppSectionSubtitle>
					<AppSectionText additionalClasses={'margin-bottom'}>
						c {getFormatedDate(absenceDetail.vacationGraphic.dateStart)} по {getFormatedDate(absenceDetail.vacationGraphic.dateEnd)}
					</AppSectionText>
				</>
			)}
			{absenceDetail.vacationDays && (
				<>
					<AppSectionSubtitle>Накоплено дней отпуска</AppSectionSubtitle>
					<AppSectionText additionalClasses={'margin-bottom'}>
						{absenceDetail.vacationDays}
					</AppSectionText>
				</>
			)}
			{absenceDetail.corporateDays !== null && (
				<>
					<AppSectionSubtitle>Корпоративных дней</AppSectionSubtitle>
					<AppSectionText additionalClasses={'margin-bottom'}>
						{absenceDetail.corporateDays}
					</AppSectionText>
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
