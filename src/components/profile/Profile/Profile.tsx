import * as React from 'react'
import { ProfileSidebar } from './ProfileSidebar/ProfileSidebar'
import s from './Profile.module.scss'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { AbsencesForm } from '../../forms/profile/AbsencesForm/AbsencesForm'
import { ModalBlock } from '../../common/ModalBlock/ModalBlock'
import { useCallback, useState } from 'react'

type Props = {
	isMyProfile: boolean
}
export const Profile: React.FC<Props> = ({ isMyProfile }) => {
	const [openForm, setOpenForm] = useState(false)

	const closeFormHandler = useCallback(() => {
		setOpenForm(false)
	}, [])

	return (
		<>
			<div className={s.profile}>
				<ProfileSidebar isMyProfile={isMyProfile} setOpenForm={setOpenForm} />
				<ProfileInfo isMyProfile={isMyProfile} />
			</div>
			<ModalBlock visible={openForm} onClose={closeFormHandler} title="Заявление на отпуск/больничный">
				<AbsencesForm onClose={setOpenForm} />
			</ModalBlock>
		</>
	)
}
