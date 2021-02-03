import React from 'react'
import cn from 'classnames'
import s from '../../../Profile.module.scss'
import { getFormatedDate } from '../../../../../../services/helpers/utils'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { ClipboardCopy } from '../../../../../common/ClipboardCopy/ClipboardCopy'
import { updateProfile } from '../../../../../../store/ducks/profile/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../../../../../../store/ducks/profile/selectors'
import { AppSectionSubtitle } from '../../../../../common/ui/AppSectionSubtitle/AppSectionSubtitle'

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
					<p className={cn('sectionText', 'sectionTextWith', s.profileBirthday)}>
						<span className="sectionTextContent">{getFormatedDate(main.birthday)}</span>
						{(isMyProfile || roleAdmin) && (
							<FormControlLabel control={<Checkbox onChange={handleChangeShowbirth} checked={!!isShowBirthday} color="primary" name="showBirthDate" />} label="Показывать год" />
						)}
					</p>
				</>
			)}
			{main.email && (
				<>
					<AppSectionSubtitle>Контактный Email</AppSectionSubtitle>
					<p className={cn('sectionText', 'sectionTextWith')}>
						<a href={'mailto:' + main.email} className="sectionTextContent">
							{main.email}
						</a>
						<ClipboardCopy text={main.email} />
					</p>
				</>
			)}
		</>
	)
}
