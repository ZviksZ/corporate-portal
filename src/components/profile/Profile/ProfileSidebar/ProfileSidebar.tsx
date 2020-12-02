import * as React from 'react'
import { ProfileSidebarTop } from './ProfileSidebarTop/ProfileSidebarTop'
import { ProfileSidebarBottom } from './ProfileSidebarBottom/ProfileSidebarBottom'
import s from '../Profile.module.scss'

export const ProfileSidebar: React.FC = () => {
	return (
		<>
			<div className={s.sidebar}>
				<ProfileSidebarTop />
				<ProfileSidebarBottom />
			</div>
		</>
	)
}
