import * as React from 'react'
import s from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'

export const Navbar: React.FC = () => {
	return (
		<div className={s.navbar}>
			<NavLink to="/" className={s.logo}>
				<img src={logo} alt="logo" className={s.logo} />
			</NavLink>
			<span className={s.logoText}>Корпоративный портал</span>
		</div>
	)
}
