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
import cn from 'classnames'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import { NavbarSearchBlock } from './NavbarSearchBlock/NavbarSearchBlock'
import { AppIcon } from '../../ui/AppIcon/AppIcon'

export const NavbarSearch: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<any>(null)
	const anchorRef = useRef<any>()

	const [open, setOpen] = useState<boolean>(false)
	const [value, setValue] = useState<string>('')
	const [openSearch, setOpenSearch] = useState<boolean>(false)

	const dispatch = useDispatch()
	const { searchResults } = useSelector(selectGlobal)

	const isMobile = window.innerWidth < 1000

	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		if (e.target.value && e.target.value.length > 1) {
			dispatch(getSearch(e.target.value))
		} else {
			dispatch(setSearch(null))
		}
	}

	const clickAwayHandler = () => {
		if (!isMobile) {
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
	}

	const openSearchMobile = () => {
		setOpenSearch(true)
	}
	const closeSearchMobile = () => {
		setOpenSearch(false)
		setValue('')
		setOpen(false)
		dispatch(setSearch(null))
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
							<AppIcon iconClass={'icon-search'} />
						</InputAdornment>
					}
				/>
				<IconButton onClick={closeSearchMobile} className={s.closeIcon}>
					<CloseOutlinedIcon />
				</IconButton>
			</FormControl>

			{searchResults && (
				<ClickAwayListener onClickAway={clickAwayHandler}>
					<Popper className={s.popper} placement={'bottom-end'} anchorEl={anchorEl} open={open}>
						<div className={s.popperContent}>
							{!searchResults?.members?.length && !searchResults?.units?.length && !searchResults?.teams?.length && !searchResults?.projects?.length && (
								<div className={cn(s.searchTitle, 'text-align-center')}>По вашему запросу ничего не найдено</div>
							)}
							{searchResults.members && searchResults.members.length > 0 && (
								<NavbarSearchBlock isDouble={true} path={'profile'} title={'Сотрудники'} clickFn={clickLinkHandler} searchResults={searchResults.members} />
							)}
							{searchResults.units && searchResults.units.length > 0 && <NavbarSearchBlock path={'units'} title={'Подразделения'} clickFn={clickLinkHandler} searchResults={searchResults.units} />}
							{searchResults.teams && searchResults.teams.length > 0 && <NavbarSearchBlock path={'teams'} title={'Команды'} clickFn={clickLinkHandler} searchResults={searchResults.teams} />}
							{searchResults.projects && searchResults.projects.length > 0 && (
								<NavbarSearchBlock path={'projects'} title={'Проекты'} clickFn={clickLinkHandler} searchResults={searchResults.projects} />
							)}

							{searchResults.contractor && searchResults.contractor.length > 0 && (
								<NavbarSearchBlock isContractor={true} path={'profile'} title={'Контрагенты'} clickFn={clickLinkHandler} searchResults={searchResults.contractor} />
							)}
						</div>
					</Popper>
				</ClickAwayListener>
			)}
		</>
	)
}
