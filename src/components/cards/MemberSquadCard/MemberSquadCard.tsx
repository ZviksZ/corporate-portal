import * as React from 'react'
import s from './MemberSquadCard.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { getInitialsFromName } from '../../../services/helpers/utils'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTeamMember, removeTeamMember, setRoleFormData } from '../../../store/ducks/teams/actionCreators'
import { MemberDetailInterface } from '../../../store/ducks/units/contracts/state'
import { selectGlobal } from '../../../store/ducks/global/selectors'
import { AppSectionSubtitle } from '../../common/ui/AppSectionSubtitle/AppSectionSubtitle'

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

		if (!teamId) return

		if (!isTeamMember) {
			dispatch(addTeamMember(teamId, member.id))
		} else {
			dispatch(removeTeamMember(teamId, member.id))
		}
	}

	return (
		<NavLink to={`/profile/${member.id}`} className={s.squadCard}>
			<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={member?.photo || ''}>
				{getInitialsFromName(member?.name)}
			</Avatar>
			<div className={s.squadCardItem}>
				<AppSectionSubtitle additionalClasses={s.subtitle}>ФИО</AppSectionSubtitle>
				<div className="sectionText sectionTextSmall no-margin-bottom">{member?.name || '-'}</div>
			</div>
			<div className={s.squadCardItem}>
				<AppSectionSubtitle additionalClasses={s.subtitle}>Подразделение</AppSectionSubtitle>
				<div className="sectionText sectionTextSmall no-margin-bottom">{member?.department || '-'}</div>
			</div>
			<div className={s.squadCardItem}>
				<AppSectionSubtitle additionalClasses={s.subtitle}>Должность</AppSectionSubtitle>
				<div className="sectionText sectionTextSmall no-margin-bottom">{member?.position || '-'}</div>
			</div>
			<div className={s.squadCardItem}>
				{showRole && (
					<>
						<AppSectionSubtitle additionalClasses={s.subtitle}>Роль в команде</AppSectionSubtitle>
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

			{!isLeadCard && (
				<div onClick={addRemoveTeamHandler} className={cn(s.button, { [s.addedMember]: isTeamMember })}>
					{isTeamMember ? '-' : '+'}
				</div>
			)}
		</NavLink>
	)
}
