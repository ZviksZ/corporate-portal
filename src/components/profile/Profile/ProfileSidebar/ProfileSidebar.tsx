import * as React from 'react'
import { ProfileSidebarTop } from './ProfileSidebarTop/ProfileSidebarTop'
import { ProfileSidebarBottom } from './ProfileSidebarBottom/ProfileSidebarBottom'
import s from '../Profile.module.scss'

type Props = {
	setOpenForm: (param: boolean) => void
}

export const ProfileSidebar: React.FC<Props> = ({ setOpenForm }) => {
	return (
		<>
			<div className={s.sidebar}>
				<ProfileSidebarTop />
				<ProfileSidebarBottom setOpenForm={setOpenForm} />
			</div>
		</>
	)
}
