import React from 'react'
import cn from 'classnames'
import s from '../../../Profile.module.scss'
import { TextField } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../../store/ducks/profile/selectors'
import { AppIcon } from '../../../../../common/AppIcon/AppIcon'

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
							<div className="sectionSubtitle">Мобильный телефон</div>
							<p className={cn('sectionText', 'sectionTextWith', s.profileEdit)} onClick={openPhoneEdit}>
								{main.mobilePhone || 'Не указан'}
								<AppIcon iconClass={'icon-edit'} classNames={s.editIcon} />
							</p>
						</>
					) : (
						main.mobilePhone && (
							<>
								<div className="sectionSubtitle">Мобильный телефон</div>
								<p className={cn('sectionText', 'sectionTextWith', s.profileEdit)}>{main.mobilePhone}</p>
							</>
						)
					)}
				</>
			)}

			{main.inPhone && (
				<>
					<div className="sectionSubtitle">Внутренний телефон</div>
					<p className={cn('sectionText', 'sectionTextWith')}>
						<span className={cn('sectionTextContent', 'sectionTextPhone')}>{main.inPhone}</span>
					</p>
				</>
			)}
		</>
	)
}
