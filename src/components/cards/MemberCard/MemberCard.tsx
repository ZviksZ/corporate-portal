import * as React from 'react'
import s from './MemberCard.module.scss'
import { NavLink } from 'react-router-dom'
import { MemberCardContacts } from './MemberCardContacts/MemberCardContacts'
import { MemberCardMain } from './MemberCardMain/MemberCardMain'
import { MemberDetailInterface } from '../../../store/ducks/units/contracts/state'

type Props = {
	member: MemberDetailInterface
}

export const MemberCard: React.FC<Props> = ({ member }) => {
	if (!member) {
		return <></>
	}
	return (
		<NavLink to={`/profile/${member.id}`} className={s.member}>
			<MemberCardMain member={member} />
			<MemberCardContacts member={member} />
		</NavLink>
	)
}
