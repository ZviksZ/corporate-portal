import * as React from 'react'
import s from './MemberSquadCard.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { getInitialsFromName } from '../../../services/helpers/utils'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setRoleFormData } from '../../../store/ducks/teams/actionCreators'
import { SquadMember } from '../../../store/ducks/teams/contracts/state'

type Props = {
	member: SquadMember
	showRole?: boolean
	isTeamMember?: boolean
	openForm?: (param: boolean) => void
}

export const MemberSquadCard: React.FC<Props> = ({ member, showRole = false, isTeamMember = false, openForm }) => {
	const dispatch = useDispatch()

	if (!member) {
		return <></>
	}

	const openRoleForm = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		e.preventDefault()
		dispatch(setRoleFormData(member))
		openForm && openForm(true)
	}

	return (
		<NavLink to={`/profile/${member.id}`} className={s.squadCard}>
			<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={member?.image || ''}>
				{getInitialsFromName(member.name)}
			</Avatar>
			<div className={s.squadCardItem}>
				<div className={cn('sectionSubtitle', s.subtitle)}>ФИО</div>
				<div className="sectionText sectionTextSmall no-margin-bottom">{member.name}</div>
			</div>
			<div className={s.squadCardItem}>
				<div className={cn('sectionSubtitle', s.subtitle)}>Подразделение</div>
				<div className="sectionText sectionTextSmall no-margin-bottom">{member.department}</div>
			</div>
			<div className={s.squadCardItem}>
				<div className={cn('sectionSubtitle', s.subtitle)}>Должность</div>
				<div className="sectionText sectionTextSmall no-margin-bottom">{member.position}</div>
			</div>
			<div className={s.squadCardItem}>
				{showRole && (
					<>
						<div className={cn('sectionSubtitle', s.subtitle)}>Роль в команде</div>
						{
							member.role ? <div className={s.text} onClick={openRoleForm}>
								{member.role}
							</div> : <div className={s.link} onClick={openRoleForm}>
								+ Добавить
							</div>
						}
					</>
				)}
			</div>
			<div className={cn(s.button, { [s.addedMember]: isTeamMember })}>{isTeamMember ? '-' : '+'}</div>
		</NavLink>
	)
}
