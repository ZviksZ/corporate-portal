import * as React from 'react'
import s from '../../Navbar.module.scss'
import cn from 'classnames'
import { NavbarSearchItem } from '../NavbarSearchItem/NavbarSearchItem'
import { NavbarSearchContractorItem } from '../NavbarSearchContractorItem/NavbarSearchContractorItem'

type Props = {
	title: string
	path: string
	isDouble?: boolean
	isContractor?: boolean
	searchResults: any[]
	clickFn: () => void
}

export const NavbarSearchBlock: React.FC<Props> = ({ isContractor = false, title, searchResults = [], isDouble = false, clickFn, path }) => {
	return (
		<>
			<div className={cn(s.searchTitle)}>{title}</div>
			<div className={cn(s.searchWrap, { [s.searchWrapDouble]: isDouble })}>
				{!isContractor && searchResults.map((member) => <NavbarSearchItem clickFn={clickFn} key={member.id} path={path} item={member} />)}

				{isContractor && searchResults.map((member) => <NavbarSearchContractorItem isDouble={true} clickFn={clickFn} key={member.id} path={path} item={member} />)}
			</div>
		</>
	)
}
