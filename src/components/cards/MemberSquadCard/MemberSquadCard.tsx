import * as React from 'react'
import s from './MemberSquadCard.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { getInitialsFromName } from '../../../services/helpers/utils'

type Props = {
	member?: any
	showRole?: boolean
}

export const MemberSquadCard: React.FC<Props> = ({ member, showRole = false }) => {
	return (
		<div className={s.squadCard}>
			<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={member?.image || ''}>
				{/*{getInitialsFromName(member.name)}*/}
				OP
			</Avatar>
			<div className={s.squadCardItem}>
					<div className={cn('sectionSubtitle', s.subtitle)}>ФИО</div>
				<div className="sectionText sectionTextSmall">Артем Иванов</div>
			</div>
			<div className={s.squadCardItem}>
				<div className={cn('sectionSubtitle', s.subtitle)}>Подразделение</div>
				<div className="sectionText sectionTextSmall">Департамент 1164</div>
			</div>
			<div className={s.squadCardItem}>
				<div className={cn('sectionSubtitle', s.subtitle)}>Должность</div>
				<div className="sectionText sectionTextSmall">Руководитель</div>
			</div>
			<div className={s.squadCardItem}>
				{
					showRole && <>
						<div className={cn('sectionSubtitle', s.subtitle)}>Роль в команде</div>
						<div className={s.link}>+ Добавить</div>
					</>
				}
			</div>
			<div className={s.button}>+</div>
		</div>
	)
}
