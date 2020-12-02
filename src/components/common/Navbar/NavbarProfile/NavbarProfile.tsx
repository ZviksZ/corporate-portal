import * as React           from 'react'
import s                    from '../Navbar.module.scss'
import { NavLink }          from 'react-router-dom'
import { Avatar, Popover }  from '@material-ui/core'
import Menu                 from '@material-ui/core/Menu'
import MenuItem             from '@material-ui/core/MenuItem'
import { NotificationItem } from '../NavbarNotifications/NotificationItem/NotificationItem'
import cn                   from 'classnames'

export const NavbarProfile: React.FC = () => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null)

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const id = !!anchorEl ? 'simple-popover' : undefined

	const logoutHandler = (e: React.MouseEvent<HTMLLIElement>) => {
		e.preventDefault()

		//logout()
	}

	return (
		<>
			<Avatar aria-describedby={id} className={cn(s.profileAvatar, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>OP</Avatar>


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
				<div className={s.profileList}>
					<NavLink className={s.smallLink} to={`/profile/`}>Мой профиль</NavLink>
					<span className={s.smallLink}>Выйти</span>
				</div>
			</Popover>
		</>
	)
}
