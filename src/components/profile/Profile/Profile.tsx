import * as React         from 'react'
import { ProfileSidebar } from './ProfileSidebar/ProfileSidebar'
import s                  from './Profile.module.scss'

export const Profile: React.FC = () => {
	return (
		<div className={s.profile}>
				<ProfileSidebar/>
		</div>
	)
}

