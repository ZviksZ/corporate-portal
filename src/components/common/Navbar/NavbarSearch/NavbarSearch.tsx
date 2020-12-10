import { ClickAwayListener, FormControl, IconButton } from '@material-ui/core'
import * as React from 'react'
import s from '../Navbar.module.scss'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { getSearch, setSearch } from '../../../../store/ducks/global/actionCreators'
import { selectGlobal } from '../../../../store/ducks/global/selectors'
import { useEffect, useRef, useState } from 'react'
import Popper from '@material-ui/core/Popper'
import { NavbarSearchItem } from './NavbarSearchItem/NavbarSearchItem'
import cn from 'classnames'
import Fade from '@material-ui/core/Fade'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'

export const NavbarSearch: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<any>(null)
	const [open, setOpen] = useState<boolean>(false)
	const [value, setValue] = useState<string>('')
	const [openSearch, setOpenSearch] = useState<boolean>(false)
	const anchorRef = useRef<any>()
	const dispatch = useDispatch()
	const { searchResults } = useSelector(selectGlobal)
	const body = document.querySelector('body')
	const bodyOverflowClass = 'overflow-hidden-body';

	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value) {
			setValue(e.target.value)
			dispatch(getSearch(e.target.value))
		} else {
			setValue(e.target.value)
			dispatch(setSearch(null))
		}
	}

	const clickAwayHandler = () => {
		if (window.innerWidth >= 1000) {
			setValue('')
			setOpen(false)
			dispatch(setSearch(null))
		}
	}

	const clickLinkHandler = () => {
		setValue('')
		setOpen(false)
		dispatch(setSearch(null))
		setOpenSearch(false)
		if (body) {
			body.classList.remove(bodyOverflowClass)
		}
	}

	const openSearchMobile = () => {
		setOpenSearch(true)
		if (body) {
			body.classList.add(bodyOverflowClass)
		}
	}
	const closeSearchMobile = () => {
		setOpenSearch(false)
		setValue('')
		setOpen(false)
		dispatch(setSearch(null))
		if (body) {
			body.classList.remove(bodyOverflowClass)
		}
	}

	useEffect(() => {
		if (searchResults) {
			setAnchorEl(anchorRef.current)
			setOpen(true)
		} else {
			setAnchorEl(null)
			setOpen(false)
		}
	}, [searchResults])

	return (
		<>
			<IconButton onClick={openSearchMobile} className={s.searchIcon}>
				<SearchOutlinedIcon />
			</IconButton>
			<FormControl fullWidth ref={anchorRef} variant="outlined" className={cn(s.searchInput, { [s.searchInputShow]: openSearch })} aria-describedby={'transitions-popper'}>
				<OutlinedInput
					onChange={onSearch}
					placeholder="Поиск..."
					className="search-input"
					value={value}
					startAdornment={
						<InputAdornment position="start">
							<i className="icon-search"></i>
						</InputAdornment>
					}
				/>
				<IconButton onClick={closeSearchMobile} className={s.closeIcon}>
					<CloseOutlinedIcon />
				</IconButton>
			</FormControl>
			{searchResults && (
				<ClickAwayListener onClickAway={clickAwayHandler}>
					<Popper className={s.popper} placement={'bottom-end'} id={'transitions-popper'} anchorEl={anchorEl} open={open}>
						<div className={s.popperContent}>
							{searchResults.members && searchResults.members.length > 0 && (
								<>
									<div className={cn(s.searchTitle, 'no-margin-top')}>Сотрудники</div>
									<div className={cn(s.searchWrap, s.searchWrapDouble)}>
										{searchResults.members.map((member) => (
											<NavbarSearchItem clickFn={clickLinkHandler} key={member.id} path={'profile'} item={member} />
										))}
									</div>
								</>
							)}
							{searchResults.units && searchResults.units.length > 0 && (
								<>
									<div className={s.searchTitle}>Подразделения</div>
									<div className={cn(s.searchWrap)}>
										{searchResults.units.map((unit) => (
											<NavbarSearchItem clickFn={clickLinkHandler} key={unit.id} path={'units'} item={unit} />
										))}
									</div>
								</>
							)}
							{searchResults.teams && searchResults.teams.length > 0 && (
								<>
									<div className={s.searchTitle}>Команды</div>
									<div className={cn(s.searchWrap)}>
										{searchResults.teams.map((team) => (
											<NavbarSearchItem clickFn={clickLinkHandler} key={team.id} path={'teams'} item={team} />
										))}
									</div>
								</>
							)}
							{searchResults.projects && searchResults.projects.length > 0 && (
								<>
									<div className={s.searchTitle}>Проекты</div>
									<div className={cn(s.searchWrap)}>
										{searchResults.projects.map((project) => (
											<NavbarSearchItem clickFn={clickLinkHandler} key={project.id} path={'projects'} item={project} />
										))}
									</div>
								</>
							)}
						</div>
					</Popper>
				</ClickAwayListener>
			)}
		</>
	)
}
