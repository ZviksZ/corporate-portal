import * as React from 'react'
import { AbsenceItemInterface } from '../../../store/ducks/absences/contracts/state'
import s from './NotificationCard.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import { getInitialsFromName, getReverseFormatDate, getStatusText, timeSince } from '../../../services/helpers/utils'
import { useDispatch } from 'react-redux'
import { getAbsenceData } from '../../../store/ducks/absences/actionCreators'

type Props = {
	item: AbsenceItemInterface
}
export const NotificationCard: React.FC<Props> = ({ item }) => {
	const dispatch = useDispatch()

	const openAbsence = () => {
		if (item?.status && item?.status === 'new') {
			dispatch(getAbsenceData(item.id))
		}
	}

	return (
		<div className={s.item} onClick={openAbsence}>
			<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={item.authorImage} aria-controls="simple-menu" aria-haspopup="true">
				{getInitialsFromName(item.author)}
			</Avatar>
			<div className={s.info}>
				<div className={s.type}>
					{item.author} - <b>{item.name}</b>
				</div>
				<div className={s.time}>
					{item.date} {item.date && ' - '} <span className={`status-${item.status}`}>{getStatusText(item?.status || '')}</span>
				</div>
			</div>
			{item?.status === 'new' && <i className={cn(s.openAbsence, 'icon-arrow-left')}></i>}
		</div>
	)
}
