import * as React from 'react'
import s from '../Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { Avatar, Popover } from '@material-ui/core'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../../store/ducks/global/actionCreators'
import { selectGlobal } from '../../../../store/ducks/global/selectors'

export const NavbarProfile: React.FC = () => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null)
	const { userProfile } = useSelector(selectGlobal)

	const dispatch = useDispatch()

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const logoutHandler = (e: React.MouseEvent<HTMLLIElement>) => {
		e.preventDefault()

		setAnchorEl(null)
		dispatch(logout())
	}

	const id = !!anchorEl ? 'simple-popover' : undefined

	return (
		<>
			{userProfile && (
				<>
					<Avatar aria-describedby={id} className={cn(s.profileAvatar, 'avatar-bg')} alt="" src={userProfile?.photo || ''} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
						{userProfile.surname[0] || ''}
						{userProfile.name[0] || ''}
					</Avatar>

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
							<NavLink className={s.smallLink} to={`/profile/`} onClick={handleClose}>
								Мой профиль
							</NavLink>
							<span className={s.smallLink} onClick={logoutHandler}>
								Выйти
							</span>
						</div>
					</Popover>
				</>
			)}
		</>
	)
}
