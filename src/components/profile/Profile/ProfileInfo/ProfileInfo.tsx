import * as React from 'react'
import { ProfileInfoMain } from './ProfileInfoMain/ProfileInfoMain'
import s from '../Profile.module.scss'
import { ProfileInfoTeams } from './ProfileInfoTeams/ProfileInfoTeams'
import { ProfileInfoAdditional } from './ProfileInfoAdditional/ProfileInfoAdditional'
import { ProfileInfoContractors } from './ProfileInfoContractors/ProfileInfoContractors'

type Props = {
	isMyProfile: boolean
}
export const ProfileInfo: React.FC<Props> = ({ isMyProfile }) => {
	return (
		<div className={s.profileInfo}>
			<ProfileInfoMain isMyProfile={isMyProfile} />
			<ProfileInfoTeams />
			<ProfileInfoAdditional />
			<ProfileInfoContractors />
		</div>
	)
}
