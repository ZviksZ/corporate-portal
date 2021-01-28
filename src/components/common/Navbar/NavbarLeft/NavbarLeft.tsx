import * as React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Navbar.module.scss'
import logo from '../../../../assets/images/logo.svg'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import { IconButton } from '@material-ui/core'
import { useCallback } from 'react'

type Props = {
	setOpenMobile: (param: boolean) => void
	isAuth: boolean
}

export const NavbarLeft: React.FC<Props> = ({ setOpenMobile, isAuth }) => {

	const openMobileHandler = useCallback(() => {
		setOpenMobile(true)
	}, [setOpenMobile])

	return (
		<>
			{isAuth && (
				<IconButton className="hide-desktop" color="secondary" aria-label="add an alarm" onClick={openMobileHandler}>
					<MenuOutlinedIcon />
				</IconButton>
			)}
			<NavLink to="/" className={s.logo}>
				<img src={logo} alt="logo" className={s.logo} />
			</NavLink>
			<span className={s.logoText}>Корпоративный портал</span>
		</>
	)
}
