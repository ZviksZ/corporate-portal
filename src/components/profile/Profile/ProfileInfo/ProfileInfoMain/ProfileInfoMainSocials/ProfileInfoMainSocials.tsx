import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../../../../../../store/ducks/profile/selectors'
import { BottomBarCustom } from '../../../../../common/BottomBarCustom/BottomBarCustom'
import { updateProfile } from '../../../../../../store/ducks/profile/actionCreators'
import { ProfileSocialsItem } from './ProfileSocialsItem'

type Props = {
	isPersonalProfile: boolean
	roleAdmin: boolean | null
}

export const ProfileInfoMainSocials: React.FC<Props> = ({ isPersonalProfile, roleAdmin }) => {
	const dispatch = useDispatch()
	const { profileData } = useSelector(selectProfile)
	const [currentEdit, setCurrentEdit] = useState('')
	const [openEdit, setOpenEdit] = useState(false)
	const [value, setValue] = useState('')

	const handleChangeValue = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
		setValue(event.target.value as string)
	}, [])

	const closeEdit = useCallback(() => {
		setOpenEdit(false)
		setCurrentEdit('')
		setValue('')
	}, [])

	const saveChanges = useCallback(() => {
		if (!profileData) return false;
		dispatch(
			updateProfile(
				{
					[currentEdit]: value,
				},
				profileData.id,
				isPersonalProfile,
			),
		)

		closeEdit()
	}, [currentEdit, value, openEdit])

	if (!profileData) {
		return <></>
	}

	const contacts = profileData.contacts

	return (
		<div className="margin-top-x2">
			{contacts.emailPersonal && (
				<ProfileSocialsItem
					type={'emailPersonal'}
					setValue={setValue}
					value={value}
					currentEdit={currentEdit}
					setCurrentEdit={setCurrentEdit}
					handleChangeValue={handleChangeValue}
					isPersonalProfile={isPersonalProfile}
					roleAdmin={roleAdmin}
					data={contacts.emailPersonal}
					withTitle={true}
					setOpenEdit={setOpenEdit}
				/>
			)}

			{contacts.google && (
				<ProfileSocialsItem
					type={'google'}
					setValue={setValue}
					value={value}
					currentEdit={currentEdit}
					setCurrentEdit={setCurrentEdit}
					handleChangeValue={handleChangeValue}
					isPersonalProfile={isPersonalProfile}
					roleAdmin={roleAdmin}
					data={contacts.google}
					withTitle={true}
					setOpenEdit={setOpenEdit}
				/>
			)}

			{contacts.yandex && (
				<ProfileSocialsItem
					type={'yandex'}
					setValue={setValue}
					value={value}
					currentEdit={currentEdit}
					setCurrentEdit={setCurrentEdit}
					handleChangeValue={handleChangeValue}
					isPersonalProfile={isPersonalProfile}
					roleAdmin={roleAdmin}
					data={contacts.yandex}
					withTitle={true}
					setOpenEdit={setOpenEdit}
				/>
			)}

			{contacts.vk && (
				<ProfileSocialsItem
					type={'vk'}
					isLink={true}
					setValue={setValue}
					value={value}
					currentEdit={currentEdit}
					setCurrentEdit={setCurrentEdit}
					handleChangeValue={handleChangeValue}
					isPersonalProfile={isPersonalProfile}
					roleAdmin={roleAdmin}
					data={contacts.vk}
					withTitle={true}
					setOpenEdit={setOpenEdit}
				/>
			)}

			{contacts.facebook && (
				<ProfileSocialsItem
					type={'facebook'}
					setValue={setValue}
					value={value}
					isLink={true}
					currentEdit={currentEdit}
					setCurrentEdit={setCurrentEdit}
					handleChangeValue={handleChangeValue}
					isPersonalProfile={isPersonalProfile}
					roleAdmin={roleAdmin}
					data={contacts.facebook}
					withTitle={true}
					setOpenEdit={setOpenEdit}
				/>
			)}

			{contacts.skype && (
				<ProfileSocialsItem
					type={'skype'}
					setValue={setValue}
					value={value}
					isLink={true}
					currentEdit={currentEdit}
					setCurrentEdit={setCurrentEdit}
					handleChangeValue={handleChangeValue}
					isPersonalProfile={isPersonalProfile}
					roleAdmin={roleAdmin}
					data={contacts.skype}
					withTitle={true}
					setOpenEdit={setOpenEdit}
				/>
			)}

			{contacts.telegram && (
				<ProfileSocialsItem
					type={'telegram'}
					setValue={setValue}
					value={value}
					isLink={true}
					currentEdit={currentEdit}
					setCurrentEdit={setCurrentEdit}
					handleChangeValue={handleChangeValue}
					isPersonalProfile={isPersonalProfile}
					roleAdmin={roleAdmin}
					data={contacts.telegram}
					withTitle={true}
					setOpenEdit={setOpenEdit}
				/>
			)}

			{openEdit && <BottomBarCustom isOpen={openEdit} onCancel={closeEdit} onSave={saveChanges}/>}
		</div>
	)
}
