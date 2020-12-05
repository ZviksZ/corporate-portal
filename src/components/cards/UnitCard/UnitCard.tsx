import * as React from 'react'
import s from './UnitCard.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import { NavLink } from 'react-router-dom'
import { Unit } from '../../../store/ducks/units/contracts/state'
import { getInitialsFromName } from '../../../services/helpers/utils'

type Props = {
	item: Unit
	showRole?: boolean
	linkPath: string
}

export const UnitCard: React.FC<Props> = ({ item, showRole = false, linkPath }) => {
	return (
		<NavLink to={`/${linkPath}/${item.id}`} className={s.teamItem}>
			<div className={s.info}>
				<div className={s.name}>{item.name}</div>
				{showRole && item.role && <div className={s.role}>{item.role}</div>}
			</div>

			<div className={s.team}>
				<div className={s.item}>
					<div className={s.position}>Руководитель</div>
					<object type="owo/uwu">
						<NavLink className={s.teamInfo} to={`/profile/${item.lead.id}`}>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={item.lead.image} aria-controls="simple-menu" aria-haspopup="true">
								{getInitialsFromName(item.lead.name)}
							</Avatar>
							<span className={s.name}>{item.lead.name}</span>
						</NavLink>
					</object>
				</div>
				<div className={s.item}>
					<div className={s.position}>Сотрудники</div>
					<object type="owo/uwu">
						<NavLink className={s.teamInfo} to={`/teams/${item.id}`}>
							<AvatarGroup max={7}>
								{item.members.list.map((member) => {
									return (
										<Avatar key={member.id} className={cn(s.image, 'avatar-bg')} alt="" src={member.image} aria-controls="simple-menu" aria-haspopup="true">
											{getInitialsFromName(member.name)}
										</Avatar>
									)
								})}
							</AvatarGroup>
						</NavLink>
					</object>
				</div>
			</div>
		</NavLink>
	)
}
