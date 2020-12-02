import * as React              from 'react'
import s                       from './Navbar.module.scss'
import { NavLink }             from 'react-router-dom'
import { NavbarProfile }       from './NavbarProfile/NavbarProfile'
import { NavbarNotifications } from './NavbarNotifications/NavbarNotifications'
import { NavbarLeft }          from './NavbarLeft/NavbarLeft'
import { NavbarMobile }        from './NavbarMobile/NavbarMobile'
import { NavbarSearch }        from './NavbarSearch/NavbarSearch'
import { useState }            from 'react'
import { ClickAwayListener }   from '@material-ui/core'
import cn                      from 'classnames'

export const Navbar: React.FC = () => {
	const [openMobile, setOpenMobile] = useState(false)

	return (
		<ClickAwayListener onClickAway={() => setOpenMobile(false)}>
			<div className={s.navbar}>
				<NavbarMobile openMobile={openMobile} setOpenMobile={setOpenMobile} />

				<div onClick={() => setOpenMobile(false)} className={cn({ [s.navbarOpen]: openMobile }, s.navbarMobileOverlay)}></div>
				<NavbarLeft setOpenMobile={setOpenMobile} />

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

					<NavbarSearch />
					<NavbarNotifications />
					<NavbarProfile />
				</div>
			</div>
		</ClickAwayListener>
	)
}
