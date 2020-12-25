import * as React from 'react'
import s from './MemberSquadCard.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { getInitialsFromName } from '../../../services/helpers/utils'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTeamMember, removeTeamMember, setRoleFormData } from '../../../store/ducks/teams/actionCreators'
import { SquadMemberInterface } from '../../../store/ducks/teams/contracts/state'
import { MemberDetailInterface } from '../../../store/ducks/units/contracts/state'
import { selectGlobal } from '../../../store/ducks/global/selectors'

type Props = {
	member: MemberDetailInterface
	showRole?: boolean
	isTeamMember?: boolean
	isLeadCard?: boolean
	openForm?: (param: boolean) => void
	teamId?: string | number
}

export const MemberSquadCard: React.FC<Props> = ({ isLeadCard = false, member, teamId, showRole = false, isTeamMember = false, openForm }) => {
	const dispatch = useDispatch()
	const { user } = useSelector(selectGlobal)

	if (!member) {
		return <></>
	}

	const openRoleForm = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		e.preventDefault()
		if (!isLeadCard) {
			dispatch(setRoleFormData(member))
			openForm && openForm(true)
		}
	}

	const addRemoveTeamHandler = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		e.preventDefault()
		if (teamId) {
			if (!isTeamMember) {
				if (isLeadCard) {
					dispatch(addTeamMember(teamId, member.id))
				} else {
					dispatch(addTeamMember(teamId, member.id))
				}
			} else {
				if (isLeadCard) {
					dispatch(removeTeamMember(teamId, member.id))
				} else {
					dispatch(removeTeamMember(teamId, member.id))
				}
			}
		}
	}

	return (
		<NavLink to={`/profile/${member.id}`} className={s.squadCard}>
			<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={member?.photo || ''}>
				{getInitialsFromName(member?.name)}
			</Avatar>
			<div className={s.squadCardItem}>
				<div className={cn('sectionSubtitle', s.subtitle)}>ФИО</div>
				<div className="sectionText sectionTextSmall no-margin-bottom">{member?.name || '-'}</div>
			</div>
			<div className={s.squadCardItem}>
				<div className={cn('sectionSubtitle', s.subtitle)}>Подразделение</div>
				<div className="sectionText sectionTextSmall no-margin-bottom">{member?.department || '-'}</div>
			</div>
			<div className={s.squadCardItem}>
				<div className={cn('sectionSubtitle', s.subtitle)}>Должность</div>
				<div className="sectionText sectionTextSmall no-margin-bottom">{member?.position || '-'}</div>
			</div>
			<div className={s.squadCardItem}>
				{showRole && (
					<>
						<div className={cn('sectionSubtitle', s.subtitle)}>Роль в команде</div>
						{member.role ? (
							<div className={s.text} onClick={openRoleForm}>
								{member.role}
							</div>
						) : (
							<div className={s.link} onClick={openRoleForm}>
								+ Добавить
							</div>
						)}
					</>
				)}
			</div>
			{/*{isLeadCard ? (
				<>
					{user && user.role == 'ROLE_ADMIN' && (
						<div onClick={addRemoveTeamHandler} className={cn(s.button, { [s.addedMember]: isTeamMember })}>
							{isTeamMember ? '-' : '+'}
						</div>
					)}
				</>
			) : (
				<>
					<div onClick={addRemoveTeamHandler} className={cn(s.button, { [s.addedMember]: isTeamMember })}>
						{isTeamMember ? '-' : '+'}
					</div>
				</>
			)}*/}

			{!isLeadCard && (
				<div onClick={addRemoveTeamHandler} className={cn(s.button, { [s.addedMember]: isTeamMember })}>
					{isTeamMember ? '-' : '+'}
				</div>
			)}
		</NavLink>
	)
}
