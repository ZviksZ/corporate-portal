import * as React from 'react'
import { useState } from 'react'
import s from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { NavbarProfile } from './NavbarProfile/NavbarProfile'
import { NavbarNotifications } from './NavbarNotifications/NavbarNotifications'
import { NavbarLeft } from './NavbarLeft/NavbarLeft'
import { NavbarMobile } from './NavbarMobile/NavbarMobile'
import { NavbarSearch } from './NavbarSearch/NavbarSearch'
import { ClickAwayListener } from '@material-ui/core'
import cn from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

export const Navbar: React.FC = () => {
	const [openMobile, setOpenMobile] = useState(false)

	return (
		<ClickAwayListener onClickAway={() => setOpenMobile(false)}>
			<AppBar position="fixed" className='navbar' color="default">
				<Toolbar className={s.navbar}>
					<NavbarMobile openMobile={openMobile} setOpenMobile={setOpenMobile}/>

					<div onClick={() => setOpenMobile(false)} className={cn({ [s.navbarOpen]: openMobile }, s.navbarMobileOverlay)}></div>
					<NavbarLeft setOpenMobile={setOpenMobile}/>

					<div className={s.navbarContent}>
						<div className={s.nav}>
							<NavLink to="/units" className={s.link}>
								Подразделения
							</NavLink>
							<NavLink to="/teams" className={s.link}>
								Команды
							</NavLink>
							<NavLink to="/projects" className={s.link}>
								Проекты
							</NavLink>
						</div>

						<NavbarSearch/>
						<NavbarNotifications/>
						<NavbarProfile/>
					</div>
				</Toolbar>
			</AppBar>
		</ClickAwayListener>
	)
}
