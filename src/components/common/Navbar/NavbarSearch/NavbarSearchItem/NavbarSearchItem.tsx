import * as React from 'react'
import { SimpleMemberUnitInterface } from '../../../../../store/ducks/profile/contracts/state'
import s from '../../Navbar.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import { getInitialsFromName } from '../../../../../services/helpers/utils'
import { NavLink } from 'react-router-dom'

type Props = {
	item: SimpleMemberUnitInterface
	path: string
	clickFn: () => void
}
export const NavbarSearchItem: React.FC<Props> = ({ item, path, clickFn }) => {
	return (
		<NavLink to={`/${path}/${item.id}`} onClick={clickFn} className={s.searchItem}>
			{(item.photo || path === 'profile') && (
				<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={item.photo}>
					{getInitialsFromName(item.name)}
				</Avatar>
			)}
			<span className={s.name}>{item.name}</span>
		</NavLink>
	)
}
