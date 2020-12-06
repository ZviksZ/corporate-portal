import * as React from 'react'
import s from './MemberSquadCard.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { getInitialsFromName } from '../../../services/helpers/utils'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setRoleFormData } from '../../../store/ducks/teams/actionCreators'

type Props = {
	member?: any
	showRole?: boolean
	isTeamMember?: boolean
	openForm?: (param: boolean) => void
}

export const MemberSquadCard: React.FC<Props> = ({ member, showRole = false, isTeamMember = false, openForm }) => {
	const dispatch = useDispatch()

	const openRoleForm = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		e.preventDefault()
		dispatch(setRoleFormData(member))
		openForm && openForm(true)
	}

	return (
		<NavLink to={`/profile/id`} className={s.squadCard}>
			<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={member?.image || ''}>
				{/*{getInitialsFromName(member.name)}*/}
				OP
			</Avatar>
			<div className={s.squadCardItem}>
				<div className={cn('sectionSubtitle', s.subtitle)}>ФИО</div>
				<div className="sectionText sectionTextSmall no-margin-bottom">Артем Иванов</div>
			</div>
			<div className={s.squadCardItem}>
				<div className={cn('sectionSubtitle', s.subtitle)}>Подразделение</div>
				<div className="sectionText sectionTextSmall no-margin-bottom">Департамент 1164</div>
			</div>
			<div className={s.squadCardItem}>
				<div className={cn('sectionSubtitle', s.subtitle)}>Должность</div>
				<div className="sectionText sectionTextSmall no-margin-bottom">Руководитель</div>
			</div>
			<div className={s.squadCardItem}>
				{showRole && (
					<>
						<div className={cn('sectionSubtitle', s.subtitle)}>Роль в команде</div>
						<div className={s.link} onClick={openRoleForm}>
							+ Добавить
						</div>
						<div className={s.text} onClick={openRoleForm}>
							Тимлид
						</div>
					</>
				)}
			</div>
			<div className={cn(s.button, { [s.addedMember]: isTeamMember })}>{isTeamMember ? '-' : '+'}</div>
		</NavLink>
	)
}
