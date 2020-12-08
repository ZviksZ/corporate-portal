import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectGlobal } from '../../../../store/ducks/global/selectors'
import s from './NotificationForm.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { getFormatedDate, getInitialsFromName } from '../../../../services/helpers/utils'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

type Props = {
	onClose: (param: boolean) => void
}

export const NotificationForm: React.FC<Props> = ({ onClose }) => {
	const { notificationDetail } = useSelector(selectGlobal)

	if (!notificationDetail) {
		return <></>
	}
	return (
		<div className={s.notification}>
			<NavLink to={`/profile/${notificationDetail.authorId}`} className={s.author}>
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
				c {getFormatedDate(notificationDetail.applicationDates.from)} по {getFormatedDate(notificationDetail.applicationDates.to)}
			</p>
			<div className="sectionSubtitle">Отпуск по графику</div>
			<p className={'sectionText margin-bottom'}>
				c {getFormatedDate(notificationDetail.vacationGraphic.from)} по {getFormatedDate(notificationDetail.vacationGraphic.to)}
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
