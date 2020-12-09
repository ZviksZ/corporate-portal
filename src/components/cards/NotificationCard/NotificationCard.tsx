import * as React from 'react'
import { NotificationItemInterface } from '../../../store/ducks/notifications/contracts/state'
import s from './NotificationCard.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import { getInitialsFromName, getReverseFormatDate, timeSince } from '../../../services/helpers/utils'
import { useDispatch } from 'react-redux'
import { getNotificationData } from '../../../store/ducks/notifications/actionCreators'

type Props = {
	item: NotificationItemInterface
}
export const NotificationCard: React.FC<Props> = ({ item }) => {
	const dispatch = useDispatch()

	const openNotification = () => {
		dispatch(getNotificationData(item.id))
	}

	return (
		<div className={s.item} onClick={openNotification}>
			<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={item.authorImage} aria-controls="simple-menu" aria-haspopup="true">
				{getInitialsFromName(item.author)}
			</Avatar>
			<div className={s.info}>
				<div className={s.type}>
					{item.author} - <b>{item.name}</b>
				</div>
				<div className={s.time}>{item.date}</div>
			</div>
			<i className={cn(s.openNotification, 'icon-arrow-left')}></i>
		</div>
	)
}
