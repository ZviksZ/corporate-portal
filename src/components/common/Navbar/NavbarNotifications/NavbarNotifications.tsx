import * as React from 'react'
import { IconButton, Popover } from '@material-ui/core'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import Badge from '@material-ui/core/Badge'
import s from '../Navbar.module.scss'
import { useState } from 'react'
import { NotificationItem } from './NotificationItem/NotificationItem'

export const NavbarNotifications: React.FC = () => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const id = !!anchorEl ? 'simple-popover' : undefined

	return (
		<>
			<IconButton className={s.notificationIcon} onClick={handleClick} aria-describedby={id}>
				<Badge badgeContent={4} color="error">
					<NotificationsNoneOutlinedIcon />
				</Badge>
			</IconButton>
			<Popover
				id={id}
				open={!!anchorEl}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<div className={s.notificationList}>
					<div className={s.head}>
						<span className={s.text}>Уведомление</span>
						<span className={s.count}>14 новых</span>
					</div>
					<div className={s.list}>
						{[1, 2, 3, 4, 5].map((item) => (
							<NotificationItem key={item} item={item} />
						))}
					</div>
					<div className={s.bottom}>
						<span>Посмотреть все</span>
					</div>
				</div>
			</Popover>
		</>
	)
}
