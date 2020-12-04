import * as React from 'react'
import cn from 'classnames'
import s from '../../Profile.module.scss'
import { Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'

export const ProfileInfoAdditional: React.FC = () => {
	const { profileData } = useSelector(selectProfile)

	if (!profileData) {
		return <></>
	}

	const additional = profileData.additional
	const leadNameArray = additional.lead.name.split(' ')

	return (
		<>
			<h4 className={cn(s.profileTitle, 'margin-bottom-x2', 'margin-top-x2')}>Дополнительная информация</h4>
			<div className={s.teamAdditional}>
				<div className={s.item}>
					<div className={s.position}>Подчинённые</div>
					<div className={s.membersList}>
						{additional.subordinates.map((item) => {
							const memberNameArray = item.name.split(' ')

							return (
								<NavLink key={item.id} className={s.membersListItem} to={`/profile/${item.id}`}>
									<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={item.image} aria-controls="simple-menu" aria-haspopup="true">
										{memberNameArray[0][0]}
										{memberNameArray[1][0]}
									</Avatar>
									<span className={s.name}>{item.name}</span>
								</NavLink>
							)
						})}
					</div>
				</div>

				<div className={s.item}>
					<div className={s.position}>Руководитель</div>
					<div className={s.membersList}>
						<NavLink className={s.membersListItem} to={`/profile/${additional.lead.id}`}>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={additional.lead.image} aria-controls="simple-menu" aria-haspopup="true">
								{leadNameArray[0][0]}
								{leadNameArray[1][0]}
							</Avatar>
							<span className={s.name}>{additional.lead.name}</span>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	)
}
