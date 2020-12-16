import * as React from 'react'
import s from '../../Profile.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'
import { MemberSocials } from '../../../../cards/MemberSocials/MemberSocials'

export const ProfileSidebarTop: React.FC = () => {
	const { profileData } = useSelector(selectProfile)

	if (!profileData) {
		return <></>
	}

	return (
		<div className={s.sidebarTop}>
			<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={profileData.photo}>
				{profileData.name[0]}
				{profileData.lastName[0]}
			</Avatar>

			<div className={s.name}>
				{profileData.lastName} {profileData.name} {profileData.middleName}
			</div>
			<div className={s.position}>{profileData.position}</div>
			<div className={s.department}>{profileData.department}</div>
		</div>
	)
}
