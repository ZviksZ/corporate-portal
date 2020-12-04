import * as React from 'react'
import s from './TeamCard.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import { NavLink } from 'react-router-dom'
import { Team } from '../../../store/ducks/profile/contracts/state'

type Props = {
	item: Team
	showRole?: boolean
}

export const TeamCard: React.FC<Props> = ({ item, showRole = false }) => {
	const leadNameArray = item.lead.name.split(' ')

	return (
		<NavLink to={`/teams/${item.id}`} className={s.teamItem}>
			<div className={s.info}>
				<div className={s.name}>{item.name}</div>
				{showRole && <div className={s.role}>{item.role}</div>}
			</div>

			<div className={s.team}>
				<div className={s.item}>
					<div className={s.position}>Руководитель</div>
					<object type="owo/uwu">
						<NavLink className={s.teamInfo} to={`/profile/${item.lead.id}`}>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={item.lead.image} aria-controls="simple-menu" aria-haspopup="true">
								{leadNameArray[0][0]}
								{leadNameArray[1][0]}
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
									const memberNameArray = member.name.split(' ')
									return (
										<Avatar key={member.id} className={cn(s.image, 'avatar-bg')} alt="" src={member.image} aria-controls="simple-menu" aria-haspopup="true">
											{memberNameArray[0][0]}
											{memberNameArray[1][0]}
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
