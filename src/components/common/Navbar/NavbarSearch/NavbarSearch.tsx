import { FormControl, IconButton } from '@material-ui/core'
import * as React                  from 'react'
import s                           from '../Navbar.module.scss'
import OutlinedInput               from '@material-ui/core/OutlinedInput'
import InputAdornment              from '@material-ui/core/InputAdornment'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
export const NavbarSearch: React.FC = () => {
	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)
	}

	return (
		<>
			<IconButton className={s.searchIcon} >
				<SearchOutlinedIcon />
			</IconButton>
			<FormControl fullWidth variant="outlined" className={s.searchInput}>
				<OutlinedInput
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
		</>
	)
}
