import * as React from 'react'
import s from '../Navbar.module.scss'
import { IconButton } from '@material-ui/core'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

type Props = {
	setOpenMobile: (param: boolean) => void
	openMobile: boolean
}

export const NavbarMobile: React.FC<Props> = ({ openMobile, setOpenMobile }) => {
	const hideMenu = () => {
		if (openMobile) {
			setOpenMobile(false)
		}
	}

	return (
		<div className={cn({ [s.navbarOpen]: openMobile }, s.navbarMobile)}>
			<div className={s.head}>
				<IconButton color="secondary" aria-label="add an alarm" onClick={hideMenu}>
					<CloseOutlinedIcon />
				</IconButton>
			</div>
			<div className={s.nav}>
				<NavLink to="/units" className={s.link} onClick={hideMenu}>
					Подразделения
				</NavLink>
				<NavLink to="/teams" className={s.link} onClick={hideMenu}>
					Команды
				</NavLink>
				<NavLink to="/projects" className={s.link} onClick={hideMenu}>
					Проекты
				</NavLink>
			</div>
		</div>
	)
}
