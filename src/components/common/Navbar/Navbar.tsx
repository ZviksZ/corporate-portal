import * as React        from 'react'
import s                 from './Navbar.module.scss'
import { NavLink }       from 'react-router-dom'
import logo              from '../../../assets/images/logo.svg'
import FormControl       from '@material-ui/core/FormControl'
import OutlinedInput     from '@material-ui/core/OutlinedInput'
import InputAdornment    from '@material-ui/core/InputAdornment'
import { NavbarProfile } from './NavbarProfile/NavbarProfile'

export const Navbar: React.FC = () => {
	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)
	}

	return (
		<div className={s.navbar}>
			<NavLink to="/" className={s.logo}>
				<img src={logo} alt="logo" className={s.logo} />
			</NavLink>
			<span className={s.logoText}>Корпоративный портал</span>

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

				<FormControl fullWidth variant="outlined" className={s.searchInput}>
					<OutlinedInput
						id="outlined-adornment-amount"
						/*value={values.amount}*/
						onChange={onSearch}
						placeholder="Поиск..."
						className="search-input"
						startAdornment={
							<InputAdornment position="start">
								<i className="icon-search"></i>
							</InputAdornment>
						}
					/>
				</FormControl>


				<NavbarProfile />
			</div>
		</div>
	)
}
