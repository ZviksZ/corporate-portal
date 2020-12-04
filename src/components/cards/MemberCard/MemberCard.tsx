import * as React from 'react'
import s from './MemberCard.module.scss'
import { NavLink } from 'react-router-dom'
import { MemberCardContacts } from './MemberCardContacts/MemberCardContacts'
import { MemberCardMain } from './MemberCardMain/MemberCardMain'
import { Member } from '../../../store/ducks/units/contracts/state'

type Props = {
	member: Member
}

export const MemberCard: React.FC<Props> = ({ member }) => {
	return (
		<NavLink to={`/profile/${1}`} className={s.member}>
			<MemberCardMain member={member}/>
			<MemberCardContacts member={member}/>
		</NavLink>
	)
}
