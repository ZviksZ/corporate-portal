import * as React from 'react'
import s from '../../Navbar.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { getInitialsFromName, getReverseFormatDate, timeSince } from '../../../../../services/helpers/utils'
import { NotificationItemInterface } from '../../../../../store/ducks/notifications/contracts/state'
import { getNotificationData } from '../../../../../store/ducks/notifications/actionCreators'

type Props = {
	item: NotificationItemInterface
	handleClose: () => void
}

export const NotificationPopupItem: React.FC<Props> = ({ item, handleClose }) => {
	const dispatch = useDispatch()

	const formatedDate = getReverseFormatDate(item.date)
	const timeAgo = timeSince(formatedDate)

	const openNotification = () => {
		dispatch(getNotificationData(item.id))
		handleClose()
	}

	return (
		<>
			<div className={s.item} onClick={openNotification}>
				<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={item.authorImage} aria-controls="simple-menu" aria-haspopup="true">
					{getInitialsFromName(item.author)}
				</Avatar>
				<div className={s.info}>
					<div className={s.type}>{item.name}</div>
					<div className={s.time}>{timeAgo} назад</div>
				</div>
				<i className={cn(s.openNotification, 'icon-arrow-left')}></i>
			</div>
		</>
	)
}
