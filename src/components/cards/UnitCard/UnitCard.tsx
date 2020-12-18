import * as React from 'react'
import s from './UnitCard.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import { NavLink } from 'react-router-dom'
import { UnitInterface } from '../../../store/ducks/units/contracts/state'
import { getInitialsFromName } from '../../../services/helpers/utils'

type Props = {
	item: UnitInterface
	showRole?: boolean
	linkPath: string
}

export const UnitCard: React.FC<Props> = ({ item, showRole = false, linkPath }) => {
	if (!item) {
		return <></>
	}

	return (
		<NavLink to={`/${linkPath}/${item.id}`} className={s.teamItem}>
			<div className={s.info}>
				<div className={s.name}>{item.name}</div>
				{showRole && item.role && <div className={s.role}>{item.role}</div>}
			</div>

			<div className={s.team}>
				{item.lead && (
					<>
						<div className={s.item}>
							<div className={s.position}>Руководитель</div>
							<object type="owo/uwu">
								<NavLink className={s.teamInfo} to={`/profile/${item.lead.id}`}>
									<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={item.lead.photo} aria-controls="simple-menu" aria-haspopup="true">
										{getInitialsFromName(item.lead.name)}
									</Avatar>
									<span className={s.name}>{item.lead.name}</span>
								</NavLink>
							</object>
						</div>
					</>
				)}

				{item.members && item?.members?.list?.length > 0 && (
					<>
						<div className={cn(s.item, s.memberItem)}>
							<div className={s.position}>Сотрудники</div>
							<AvatarGroup max={7}>
								{item.members.list &&
									item.members.list.map((member) => {
										return (
											<Avatar key={member.id} className={cn(s.image, 'avatar-bg')} alt="" src={member.photo} aria-controls="simple-menu" aria-haspopup="true">
												{getInitialsFromName(member.name)}
											</Avatar>
										)
									})}
							</AvatarGroup>
						</div>
					</>
				)}
			</div>
		</NavLink>
	)
}
