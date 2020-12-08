import * as React from 'react'
import { ProfileSidebarTop } from './ProfileSidebarTop/ProfileSidebarTop'
import { ProfileSidebarBottom } from './ProfileSidebarBottom/ProfileSidebarBottom'
import s from '../Profile.module.scss'

type Props = {
	setOpenForm: (param: boolean) => void
	isMyProfile: boolean
}

export const ProfileSidebar: React.FC<Props> = ({ setOpenForm, isMyProfile }) => {
	return (
		<>
			<div className={s.sidebar}>
				<ProfileSidebarTop />
				<ProfileSidebarBottom isMyProfile={isMyProfile} setOpenForm={setOpenForm} />
			</div>
		</>
	)
}
