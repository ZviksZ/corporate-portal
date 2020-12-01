import * as React from 'react'
import s from '../Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export const NavbarProfile: React.FC = () => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

	const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const logoutHandler = (e: React.MouseEvent<HTMLLIElement>) => {
		e.preventDefault()

		//logout()
	}

	return (
		<>
			<Avatar className={s.avatar} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />

			<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem onClick={handleClose} className={s.smallLink}>
					<NavLink to={`/profile/`}>
						Мой профиль
					</NavLink>
				</MenuItem>
				<MenuItem onClick={logoutHandler} className={s.smallLink}>
					<span>Выйти</span>
				</MenuItem>
			</Menu>
		</>
	)
}
