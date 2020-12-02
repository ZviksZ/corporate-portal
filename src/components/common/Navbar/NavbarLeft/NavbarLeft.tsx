import * as React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Navbar.module.scss'
import logo from '../../../../assets/images/logo.svg'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import { IconButton } from '@material-ui/core'

type Props = {
	setOpenMobile: (param: boolean) => void
}

export const NavbarLeft: React.FC<Props> = ({ setOpenMobile }) => {
	return (
		<>
			<IconButton color="secondary" aria-label="add an alarm" onClick={() => setOpenMobile(true)}>
				<MenuOutlinedIcon />
			</IconButton>
			<NavLink to="/" className={s.logo}>
				<img src={logo} alt="logo" className={s.logo} />
			</NavLink>
			<span className={s.logoText}>Корпоративный портал</span>
		</>
	)
}
