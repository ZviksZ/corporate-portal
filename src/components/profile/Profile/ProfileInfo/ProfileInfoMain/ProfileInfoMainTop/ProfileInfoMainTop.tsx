import React from 'react'
import cn from 'classnames'
import s from '../../../Profile.module.scss'
import { getFormatedDate, stopPropagation } from '../../../../../../services/helpers/utils'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { ClipboardCopy } from '../../../../../common/ClipboardCopy/ClipboardCopy'
import { updateProfile } from '../../../../../../store/ducks/profile/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../../../../../../store/ducks/profile/selectors'
import { AppSectionSubtitle } from '../../../../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { AppIcon } from '../../../../../common/ui/AppIcon/AppIcon'
import { AppSectionText } from '../../../../../common/ui/AppSectionText/AppSectionText'
import { AppSectionTextContent } from '../../../../../common/ui/AppSectionText/AppSectionTextContent/AppSectionTextContent'

type Props = {
	isMyProfile: boolean
	roleAdmin: boolean | null
}

export const ProfileInfoMainTop: React.FC<Props> = ({ isMyProfile, roleAdmin }) => {
	const dispatch = useDispatch()
	const { profileData, isPersonalProfile } = useSelector(selectProfile)

	if (!profileData) {
		return <></>
	}

	const handleChangeShowbirth = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateProfile({ showBirthYear: event.target.checked }, profileData.id, isPersonalProfile))
	}

	const main = profileData.contacts
	const isShowBirthday = +main.showBirthYear

	return (
		<>
			{main.birthday && main.showBirthYear && (
				<>
					<AppSectionSubtitle>День рождения</AppSectionSubtitle>
					<AppSectionText isTextWith={true} additionalClasses={s.profileBirthday}>
						<AppSectionTextContent isLink={false}>{getFormatedDate(main.birthday)}</AppSectionTextContent>
						{(isMyProfile || roleAdmin) && (
							<FormControlLabel control={<Checkbox onChange={handleChangeShowbirth} checked={!!isShowBirthday} color="primary" name="showBirthDate" />} label="Показывать год" />
						)}
					</AppSectionText>
				</>
			)}
			{main.email && (
				<>
					<AppSectionSubtitle>Контактный Email</AppSectionSubtitle>
					<AppSectionText isTextWith={true}>
						<AppSectionTextContent href={'mailto:' + main.email}>{main.email}</AppSectionTextContent>
						<ClipboardCopy text={main.email} />
					</AppSectionText>
				</>
			)}
		</>
	)
}
