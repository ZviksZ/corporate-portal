import * as React from 'react'
import { ProfileSidebar } from './ProfileSidebar/ProfileSidebar'
import s from './Profile.module.scss'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { ApplicationForm } from '../../forms/profile/ApplicationForm/ApplicationForm'
import { ModalBlock } from '../../common/ModalBlock/ModalBlock'
import { useState } from 'react'

type Props = {
	isMyProfile: boolean
}
export const Profile: React.FC<Props> = ({ isMyProfile }) => {
	const [openForm, setOpenForm] = useState(false)

	return (
		<>
			<div className={s.profile}>
				<ProfileSidebar isMyProfile={isMyProfile} setOpenForm={setOpenForm} />
				<ProfileInfo isMyProfile={isMyProfile} />
			</div>
			<ModalBlock visible={openForm} onClose={() => setOpenForm(false)} title="Заявление на отпуск/больничный">
				<ApplicationForm onClose={setOpenForm} />
			</ModalBlock>
		</>
	)
}
