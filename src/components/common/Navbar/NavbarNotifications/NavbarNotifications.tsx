import * as React from 'react'
import { IconButton, Popover } from '@material-ui/core'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Badge from '@material-ui/core/Badge'
import s from '../Navbar.module.scss'
import { useEffect, useState } from 'react'
import { ModalBlock } from '../../ModalBlock/ModalBlock'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { NotificationForm } from '../../../forms/common/NotificationForm/NotificationForm'
import { selectAbsences } from '../../../../store/ducks/absences/selectors'

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
				<Badge color="error">
					<NotificationsNoneOutlinedIcon />
				</Badge>
			</IconButton>
			{/*<IconButton className={s.notificationIcon} onClick={handleClick} aria-describedby={id}>
				<Badge badgeContent={(notifications && notifications.newCount) || ''} color="error">
					<AbsencesNoneOutlinedIcon />
				</Badge>
			</IconButton>
			Popover
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
				{notifications && (
					<div className={s.notificationList}>
						<div className={s.head}>
							<span className={s.text}>Уведомление</span>
							<span className={s.count}>{notifications.newCount} новых</span>
						</div>
						<div className={s.list}>
							{absences.lastFive.map((item) => (
								<AbsencePopupItem handleClose={handleClose} key={item.id} item={item} />
							))}
						</div>
						<div className={s.bottom}>
							<NavLink to={'/notifications'} onClick={handleClose}>Посмотреть все</NavLink>
						</div>
					</div>
				)}
			</Popover>*/}

			<ModalBlock visible={openForm} onClose={() => setOpenForm(false)} title={(absenceDetail && absenceDetail.name) || ''}>
				<NotificationForm onClose={setOpenForm} />
			</ModalBlock>
		</>
	)
}
