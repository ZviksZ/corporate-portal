import * as React from 'react'
import { useCallback, useState } from 'react'
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
import { useSelector } from 'react-redux'
import { selectGlobal } from '../../../store/ducks/global/selectors'

export const Navbar: React.FC = () => {
	const [openMobile, setOpenMobile] = useState(false)
	const { user } = useSelector(selectGlobal)

	const closeHandler = useCallback(() => {
		setOpenMobile(false)
	}, [])

	return (
		<ClickAwayListener onClickAway={closeHandler}>
			<AppBar position="fixed" className="navbar" color="default">
				<Toolbar className={s.navbar}>
					<NavbarLeft setOpenMobile={setOpenMobile} isAuth={!!user} />

					{user && (
						<>
							<NavbarMobile openMobile={openMobile} setOpenMobile={setOpenMobile} />

							<div onClick={closeHandler} className={cn({ [s.navbarOpen]: openMobile }, s.navbarMobileOverlay)}></div>

							<div className={s.navbarContent}>
								<div className={s.nav}>
									<NavLink to="/units" activeClassName={s.activeLink} className={s.link}>
										Подразделения
									</NavLink>
									<NavLink to="/teams" activeClassName={s.activeLink} className={s.link}>
										Команды
									</NavLink>
									<NavLink to="/projects" activeClassName={s.activeLink} className={s.link}>
										Проекты
									</NavLink>
								</div>

								<NavbarSearch />
								<NavbarNotifications />
								<NavbarProfile />
							</div>
						</>
					)}
				</Toolbar>
			</AppBar>
		</ClickAwayListener>
	)
}
