import React from 'react'
import s from '../../../Profile.module.scss'
import { TextField } from '@material-ui/core'
import { AppSectionSubtitle } from '../../../../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { AppSectionText } from '../../../../../common/ui/AppSectionText/AppSectionText'
import { AppIcon } from '../../../../../common/ui/AppIcon/AppIcon'
import yandex from '../../../../../../assets/images/icons/yandex.svg'
import skype from '../../../../../../assets/images/icons/skype.svg'
import vk from '../../../../../../assets/images/icons/vk.svg'
import google from '../../../../../../assets/images/icons/google.svg'
import facebook from '../../../../../../assets/images/icons/facebook.svg'
import telegram from '../../../../../../assets/images/icons/telegram.svg'

type Props = {
	type: string
	data: string
	currentEdit: string
	value: string
	setValue: (text: string) => void
	setOpenEdit: (t: boolean) => void
	setCurrentEdit: (text: string) => void
	handleChangeValue: (e: React.ChangeEvent<{ value: unknown }>) => void
	isPersonalProfile: boolean
	roleAdmin: boolean | null
	withTitle: boolean
	isLink?: boolean
}

const getTitleText = (type: string) => {
	switch (type) {
		case 'emailPersonal':
			return 'Личная почта'
		case 'google':
			return 'Google'
		case 'yandex':
			return 'Yandex'
		case 'vk':
			return 'vk.com'
		default:
			return null
	}
}

const getLogo = (type: string) => {
	switch (type) {
		case 'google':
			return google
		case 'yandex':
			return yandex
		case 'vk':
			return vk
		case 'facebook':
			return facebook
		case 'skype':
			return skype
		case 'telegram':
			return telegram
		default:
			return null
	}
}

export const ProfileSocialsItem: React.FC<Props> = ({ isLink = false, setOpenEdit, withTitle, isPersonalProfile, roleAdmin, handleChangeValue, type, data, currentEdit, setValue, setCurrentEdit, value }) => {
	const openField = () => {
		setValue(data)
		setCurrentEdit(type)
		setOpenEdit(true)
	}

	const openLink = () => {
		if (isLink && !(isPersonalProfile || roleAdmin)) {
			window.location.href = data
		}
	}

	const logo = getLogo(type)
	const title = getTitleText(type)

	return (
		<div className={s.socialItem} onClick={openLink}>
			{currentEdit === type ? (
				<TextField variant="outlined" value={value} onChange={handleChangeValue} fullWidth label={getTitleText(type)} autoFocus className="form-input margin-bottom" />
			) : (
				<>
					{isPersonalProfile || roleAdmin ? (
						<>
							{logo && <img src={logo} alt="" />}
							<div className={s.socialItemInfo}>
								{withTitle && title && <AppSectionSubtitle>{title}</AppSectionSubtitle>}
								<AppSectionText isTextWith={true} additionalClasses={s.profileEdit} onClick={openField}>
									{data || 'Не указан'}
									<AppIcon iconClass={'icon-edit'} classNames={s.editIcon} />
								</AppSectionText>
							</div>
						</>
					) : (
						data && (
							<>
								{logo && <img src={logo} alt="" />}
								<div className={s.socialItemInfo}>
									{withTitle && title && <AppSectionSubtitle>{title}</AppSectionSubtitle>}
									<AppSectionText isTextWith={true} additionalClasses={s.profileEdit}>
										{data}
									</AppSectionText>
								</div>
							</>
						)
					)}
				</>
			)}
		</div>
	)
}
