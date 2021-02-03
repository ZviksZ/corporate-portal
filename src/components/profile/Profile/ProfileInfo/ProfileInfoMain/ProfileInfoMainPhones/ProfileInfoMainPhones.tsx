import React from 'react'
import cn from 'classnames'
import s from '../../../Profile.module.scss'
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../../store/ducks/profile/selectors'
import { AppIcon } from '../../../../../common/ui/AppIcon/AppIcon'
import { AppSectionSubtitle } from '../../../../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { getFormatedDate } from '../../../../../../services/helpers/utils'
import { AppSectionText } from '../../../../../common/ui/AppSectionText/AppSectionText'
import { AppSectionTextContent } from '../../../../../common/ui/AppSectionText/AppSectionTextContent/AppSectionTextContent'

type Props = {
	isMyProfile: boolean
	editPhone: boolean
	roleAdmin: boolean | null
	phone: string
	setPhone: (text: string) => void
	openPhoneEdit: () => void
}

export const ProfileInfoMainPhones: React.FC<Props> = ({ openPhoneEdit, isMyProfile, roleAdmin, editPhone, phone, setPhone }) => {
	const { profileData } = useSelector(selectProfile)

	if (!profileData) {
		return <></>
	}

	const handleChangePhone = (event: React.ChangeEvent<{ value: unknown }>) => {
		setPhone(event.target.value as string)
	}

	const main = profileData.contacts

	return (
		<>
			{editPhone ? (
				<TextField variant="outlined" value={phone} onChange={handleChangePhone} fullWidth label="Мобильный телефон" name="mobilePhone" autoFocus className="form-input margin-bottom-x2" />
			) : (
				<>
					{isMyProfile || roleAdmin ? (
						<>
							<AppSectionSubtitle>Мобильный телефон</AppSectionSubtitle>
							<AppSectionText isTextWith={true} additionalClasses={s.profileEdit} onClick={openPhoneEdit}>
								{main.mobilePhone || 'Не указан'}
								<AppIcon iconClass={'icon-edit'} classNames={s.editIcon} />
							</AppSectionText>
						</>
					) : (
						main.mobilePhone && (
							<>
								<AppSectionSubtitle>Мобильный телефон</AppSectionSubtitle>
								<AppSectionText isTextWith={true} additionalClasses={s.profileEdit}>
									{main.mobilePhone}
								</AppSectionText>
							</>
						)
					)}
				</>
			)}

			{main.inPhone && (
				<>
					<AppSectionSubtitle>Внутренний телефон</AppSectionSubtitle>
					<AppSectionText isTextWith={true}>
						<AppSectionTextContent isLink={false} isPhone={true}>{main.inPhone}</AppSectionTextContent>
					</AppSectionText>
				</>
			)}
		</>
	)
}
