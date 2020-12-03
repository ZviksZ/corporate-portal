import * as React from 'react'
import { ProfileInfoMain } from './ProfileInfoMain/ProfileInfoMain'
import s from '../Profile.module.scss'
import { ProfileInfoTeams } from './ProfileInfoTeams/ProfileInfoTeams'
import { ProfileInfoAdditional } from './ProfileInfoAdditional/ProfileInfoAdditional'
import { ProfileInfoContractors } from './ProfileInfoContractors/ProfileInfoContractors'

export const ProfileInfo: React.FC = () => {
	return (
		<div className={s.profileInfo}>
			<ProfileInfoMain />
			<ProfileInfoTeams />
			<ProfileInfoAdditional />
			<ProfileInfoContractors />
		</div>
	)
}
