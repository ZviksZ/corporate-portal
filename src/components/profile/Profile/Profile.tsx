import * as React         from 'react'
import { ProfileSidebar } from './ProfileSidebar/ProfileSidebar'
import s                  from './Profile.module.scss'
import { ProfileInfo }    from './ProfileInfo/ProfileInfo'

export const Profile: React.FC = () => {
	return (
		<div className={s.profile}>
				<ProfileSidebar/>
				<ProfileInfo/>
		</div>
	)
}

