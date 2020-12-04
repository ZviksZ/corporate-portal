import * as React from 'react'
import s from './MemberCard.module.scss'
import { NavLink } from 'react-router-dom'
import { MemberCardContacts } from './MemberCardContacts/MemberCardContacts'
import { MemberCardMain } from './MemberCardMain/MemberCardMain'

export const MemberCard: React.FC = () => {
	return (
		<NavLink to={`/profile/${1}`} className={s.member}>
			<MemberCardMain />
			<MemberCardContacts />
		</NavLink>
	)
}
