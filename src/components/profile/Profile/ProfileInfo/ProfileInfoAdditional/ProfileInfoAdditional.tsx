import * as React from 'react'
import cn from 'classnames'
import s from '../../Profile.module.scss'
import { Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'
import { getInitialsFromName } from '../../../../../services/helpers/utils'

export const ProfileInfoAdditional: React.FC = () => {
	const { profileData } = useSelector(selectProfile)
	const additional = profileData && profileData.additional

	if (!profileData || !profileData.additional) {
		return <></>
	}

	if (additional?.subordinates && additional?.subordinates?.length == 0 && !additional?.lead?.id) {
		return <></>
	}

	return (
		<>
			<h4 className={cn(s.profileTitle, 'margin-bottom-x2', 'margin-top-x2')}>Дополнительная информация</h4>
			<div className={s.teamAdditional}>
				{additional && additional?.subordinates?.length > 0 && (
					<div className={s.item}>
						<div className={s.position}>Подчинённые</div>
						<div className={s.membersList}>
							{additional.subordinates.map((item) => {
								return (
									<NavLink key={item.id} className={s.membersListItem} to={`/profile/${item.id}`}>
										<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={item.photo || ''} aria-controls="simple-menu" aria-haspopup="true">
											{getInitialsFromName(item.name)}
										</Avatar>
										<span className={s.name}>{item.name}</span>
									</NavLink>
								)
							})}
						</div>
					</div>
				)}

				{additional && additional?.lead?.id && (
					<>
						<div className={s.item}>
							<div className={s.position}>Руководитель</div>
							<div className={s.membersList}>
								<NavLink className={s.membersListItem} to={`/profile/${additional.lead.id}`}>
									<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={additional.lead.photo || ''} aria-controls="simple-menu" aria-haspopup="true">
										{getInitialsFromName(additional.lead.name)}
									</Avatar>
									<span className={s.name}>{additional.lead.name}</span>
								</NavLink>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	)
}
