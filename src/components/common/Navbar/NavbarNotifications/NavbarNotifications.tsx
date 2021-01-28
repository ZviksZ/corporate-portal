import * as React from 'react'
import { IconButton, Popover } from '@material-ui/core'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import Badge from '@material-ui/core/Badge'
import s from '../Navbar.module.scss'
import { useEffect, useState } from 'react'
import { ModalBlock } from '../../ModalBlock/ModalBlock'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { NotificationForm } from '../../../forms/common/NotificationForm/NotificationForm'
import { selectAbsences } from '../../../../store/ducks/absences/selectors'
import { NotificationPopupItem } from './NotificationItem/NotificationPopupItem'

export const NavbarNotifications: React.FC = () => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
	const [openForm, setOpenForm] = useState(false)
	const { absences, absenceDetail } = useSelector(selectAbsences)

	useEffect(() => {
		setOpenForm(!!absenceDetail)
	}, [absenceDetail])

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
				{(absences && absences.newCount && (
					<Badge badgeContent={absences.newCount} color="error">
						<NotificationsNoneOutlinedIcon />
					</Badge>
				)) || <NotificationsNoneOutlinedIcon />}
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
				{absences && (
					<div className={s.notificationList}>
						<div className={s.head}>
							<span className={s.text}>Уведомление</span>
							<span className={s.count}>{absences.newCount} новых</span>
						</div>
						<div className={s.list}>
							{absences.lastFive.map((item) => (
								<NotificationPopupItem handleClose={handleClose} key={item.id} item={item} />
							))}
							{!absences?.lastFive?.length && <p className="sectionSubtitle text-align-center margin-bottom margin-top text-uppercase">уведомлений пока нет</p>}
						</div>
						<div className={s.bottom}>
							<NavLink to={'/notifications'} onClick={handleClose}>
								Посмотреть все
							</NavLink>
						</div>
					</div>
				)}
			</Popover>

			<ModalBlock visible={openForm} onClose={() => setOpenForm(false)} title={(absenceDetail && absenceDetail.name) || ''}>
				<NotificationForm onClose={setOpenForm} />
			</ModalBlock>
		</>
	)
}
