import React from 'react'
import s from '../../../Profile.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import { getInitialsFromName } from '../../../../../../services/helpers/utils'
import { NavLink } from 'react-router-dom'
import { SimpleMemberUnitInterface } from '../../../../../../store/ducks/profile/contracts/state'

type Props = {
	member: SimpleMemberUnitInterface
}

export const ProfileInfoMemberLink: React.FC<Props> = ({ member }) => {
	return (
		<NavLink className={s.membersListItem} to={`/profile/${member.id}`}>
			<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={member.photo || ''} aria-controls="simple-menu" aria-haspopup="true">
				{getInitialsFromName(member.name)}
			</Avatar>
			<span className={s.name}>{member.name}</span>
		</NavLink>
	)
}
