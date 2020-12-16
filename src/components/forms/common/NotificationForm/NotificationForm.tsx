import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './NotificationForm.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { getFormatedDate, getInitialsFromName } from '../../../../services/helpers/utils'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { selectNotifications } from '../../../../store/ducks/notifications/selectors'
import { useEffect } from 'react'
import { setNotificationData } from '../../../../store/ducks/notifications/actionCreators'

type Props = {
	onClose: (param: boolean) => void
}

export const NotificationForm: React.FC<Props> = ({ onClose }) => {
	const dispatch = useDispatch()
	const { notificationDetail } = useSelector(selectNotifications)

	useEffect(() => {
		return () => {
			dispatch(setNotificationData(null))
		}
	}, [])

	if (!notificationDetail) {
		return <></>
	}

	const closeForm = () => {
		onClose(false)
	}

	return (
		<div className={s.notification}>
			<NavLink onClick={closeForm} to={`/profile/${notificationDetail.authorId}`} className={s.author}>
				<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={notificationDetail.authorImage}>
					{getInitialsFromName(notificationDetail.author)}
				</Avatar>
				<div className={s.info}>
					<div className="sectionSubtitle">Сотрудник</div>
					<div className={cn('sectionText', s.author)}>{notificationDetail.author}</div>
					<div className="sectionBigSubtitle">{notificationDetail.authorPosition}</div>
				</div>
			</NavLink>
			<div className="sectionSubtitle">Заявление на даты</div>
			<p className={'sectionText margin-bottom'}>
				c {getFormatedDate(notificationDetail.applicationDates.dateStart)} по {getFormatedDate(notificationDetail.applicationDates.dateEnd)}
			</p>
			<div className="sectionSubtitle">Отпуск по графику</div>
			<p className={'sectionText margin-bottom'}>
				c {getFormatedDate(notificationDetail.vacationGraphic.dateStart)} по {getFormatedDate(notificationDetail.vacationGraphic.dateEnd)}
			</p>
			<div className="sectionSubtitle">Накоплено дней отпуска</div>
			<p className={'sectionText margin-bottom'}>{notificationDetail.vacationDays}</p>
			<div className="sectionSubtitle">Корпоративных дней</div>
			<p className={'sectionText margin-bottom'}>{notificationDetail.corporateDays}</p>
			<div className={s.footer}>
				<Button className="btn btn-dangerous">отказать</Button>
				<Button className="btn">Согласовать</Button>
			</div>
		</div>
	)
}
