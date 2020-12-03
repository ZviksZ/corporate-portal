import * as React from 'react'
import { ProfileSidebar } from './ProfileSidebar/ProfileSidebar'
import s from './Profile.module.scss'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { ApplicationForm } from '../../forms/profile/ApplicationForm/ApplicationForm'
import { ModalBlock } from '../../common/ModalBlock/ModalBlock'
import { useState } from 'react'

export const Profile: React.FC = () => {
	const [openForm, setOpenForm] = useState(false)

	return (
		<>
			<div className={s.profile}>
				<ProfileSidebar setOpenForm={setOpenForm} />
				<ProfileInfo />
			</div>
			<ModalBlock visible={openForm} onClose={() => setOpenForm(false)} title="Заявление на отпуск/больничный">
				<ApplicationForm />
			</ModalBlock>
		</>
	)
}
