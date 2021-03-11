import React from 'react'
import { ContractorSearchInterface } from '../../../../../store/ducks/profile/contracts/state'
import s from '../../Navbar.module.scss'
import { NavbarSearchItem } from '../NavbarSearchItem/NavbarSearchItem'
import cn from 'classnames'

type Props = {
	item: ContractorSearchInterface
	path: string
	clickFn: () => void
	isDouble?: boolean
}

export const NavbarSearchContractorItem: React.FC<Props> = ({ isDouble, item, path, clickFn }) => {
	return (
		<div className={s.contractorsWrap}>
			<div className={cn(s.searchTitle)}>{item.name}</div>
			<div className={cn(s.searchWrap, { [s.searchWrapDouble]: isDouble })}>
				{item.users && item.users.map((member) => <NavbarSearchItem clickFn={clickFn} key={member.id} path={path} item={member} />)}
			</div>
		</div>

	)
}
