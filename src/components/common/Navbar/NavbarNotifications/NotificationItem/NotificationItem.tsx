import * as React from 'react'
import s from '../../Navbar.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
type Props = {
	item: any
}

export const NotificationItem: React.FC<Props> = ({ item }) => {
	return (
		<>
			<div className={s.item}>
				<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
					OP
				</Avatar>
				<div className={s.info}>
					<div className={s.type}>Заявление на отпуск</div>
					<div className={s.time}>2 minutes ago</div>
				</div>
				<i className={cn(s.openNotification, 'icon-arrow-left')}></i>
			</div>
		</>
	)
}
