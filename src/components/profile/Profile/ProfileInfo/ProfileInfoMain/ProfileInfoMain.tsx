import * as React from 'react'
import s from '../../Profile.module.scss'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'
import { getFormatedDate } from '../../../../../services/helpers/utils'
import { useEffect, useState } from 'react'
import { updateProfile } from '../../../../../store/ducks/profile/actionCreators'
import { selectGlobal } from '../../../../../store/ducks/global/selectors'
import { BottomBarCustom } from '../../../../common/BottomBarCustom/BottomBarCustom'
import { ProfileInfoMainTop } from './ProfileInfoMainTop/ProfileInfoMainTop'
import { ProfileInfoMainPhones } from './ProfileInfoMainPhones/ProfileInfoMainPhones'
import { ProfileInfoMainSsh } from './ProfileInfoMainSsh/ProfileInfoMainSsh'
import { ProfileInfoMainSize } from './ProfileInfoMainSize/ProfileInfoMainSize'
import { AppSectionTitle } from '../../../../common/ui/AppSectionTitle/AppSectionTitle'
import { AppSectionSubtitle } from '../../../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { AppSectionText } from '../../../../common/ui/AppSectionText/AppSectionText'
import { ProfileInfoMainSocials } from './ProfileInfoMainSocials/ProfileInfoMainSocials'

type Props = {
	isMyProfile: boolean
}

export const ProfileInfoMain: React.FC<Props> = ({ isMyProfile }) => {
	const dispatch = useDispatch()
	const { profileData, isPersonalProfile } = useSelector(selectProfile)
	const { user } = useSelector(selectGlobal)
	const [openFormButtons, setOpenFormButtons] = useState(false)
	const [size, setSize] = React.useState('')
	const [phone, setPhone] = React.useState('')
	const [editPhone, setEditPhone] = useState(false)
	const [editSize, setEditSize] = useState(false)
	const roleAdmin = user && user.role === 'ROLE_ADMIN'

	useEffect(() => {
		setSize(profileData?.contacts?.tshirtSize || '')
		setPhone(profileData?.contacts?.mobilePhone || '')
	}, [profileData])

	if (!profileData) {
		return <></>
	}

	const openPhoneEdit = () => {
		setOpenFormButtons(true)
		setEditSize(false)
		setEditPhone(true)
	}
	const openSizeEdit = () => {
		setOpenFormButtons(true)
		setEditPhone(false)
		setEditSize(true)
	}

	const closeEdit = () => {
		setOpenFormButtons(false)
		setEditPhone(false)
		setEditSize(false)
		setPhone(profileData.contacts.mobilePhone)
	}

	const saveChanges = () => {
		let data
		if (editPhone) {
			data = { mobile: phone }
		} else if (editSize) {
			data = { size: size }
		}
		dispatch(updateProfile(data, profileData.id, isPersonalProfile))
		setOpenFormButtons(false)
		setEditPhone(false)
		setEditSize(false)
	}

	const main = profileData.contacts

	return (
		<>
			<div className={s.profileMain}>
				<AppSectionTitle additionalClasses={'margin-bottom-x2'}>Контактная информация</AppSectionTitle>

				<ProfileInfoMainTop isMyProfile={isMyProfile} roleAdmin={roleAdmin} />

				<ProfileInfoMainPhones isMyProfile={isMyProfile} roleAdmin={roleAdmin} editPhone={editPhone} openPhoneEdit={openPhoneEdit} phone={phone} setPhone={setPhone} />

				{main.employmentDate && (
					<>
						<AppSectionSubtitle>Дата трудоустройства</AppSectionSubtitle>
						<AppSectionText>{getFormatedDate(main.employmentDate)}</AppSectionText>
					</>
				)}

				<ProfileInfoMainSize roleAdmin={roleAdmin} isMyProfile={isMyProfile} editSize={editSize} openSizeEdit={openSizeEdit} setSize={setSize} size={size} tshirtSize={main.tshirtSize} />

				<ProfileInfoMainSsh isMyProfile={isMyProfile} roleAdmin={roleAdmin} sshArray={main.sshKeys} />

				<ProfileInfoMainSocials isPersonalProfile={isPersonalProfile} roleAdmin={roleAdmin} />
			</div>

			{openFormButtons && <BottomBarCustom isOpen={openFormButtons} onCancel={closeEdit} onSave={saveChanges} />}
		</>
	)
}
