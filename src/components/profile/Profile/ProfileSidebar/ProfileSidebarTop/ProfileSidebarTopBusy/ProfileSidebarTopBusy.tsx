import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../../../../../../store/ducks/profile/selectors'
import { TextField } from '@material-ui/core'
import s from '../../../Profile.module.scss'
import { AppSectionText } from '../../../../../common/ui/AppSectionText/AppSectionText'
import cn from 'classnames'
import { AppIcon } from '../../../../../common/ui/AppIcon/AppIcon'
import { BottomBarCustom } from '../../../../../common/BottomBarCustom/BottomBarCustom'
import { updateProfile } from '../../../../../../store/ducks/profile/actionCreators'

type Props = {
	isPersonalProfile: boolean
	roleAdmin: boolean | null
}

export const ProfileSidebarTopBusy: React.FC<Props> = ({ isPersonalProfile, roleAdmin }) => {
	const dispatch = useDispatch()
	const { profileData } = useSelector(selectProfile)
	const [openEdit, setOpenEdit] = useState(false)
	const [value, setValue] = useState('')

	useEffect(() => {
		setValue(profileData?.contacts?.busy || '')
	}, [profileData])

	if (!profileData || !profileData.contacts) {
		return <></>
	}

	const openEditStatus = () => {
		setOpenEdit(true)
	}

	const handleChangeValue = (event: React.ChangeEvent<{ value: unknown }>) => {
		setValue(event.target.value as string)
	}

	const closeEdit = () => {
		setOpenEdit(false)
		setValue(profileData.contacts.busy)
	}

	const saveChanges = () => {
		if (profileData && profileData.id) {
			setOpenEdit(false)
			dispatch(updateProfile({ busy: value }, profileData.id, isPersonalProfile))
		}
	}

	const contacts = profileData.contacts

	return (
		<>
			{openEdit ? (
				<TextField variant="outlined" value={value} onChange={handleChangeValue} fullWidth label="Чем занимаюсь" name="status" autoFocus className="form-input margin-top margin-bottom-x2" />
			) : (
				<>
					{isPersonalProfile || roleAdmin ? (
						<>
							<div className={s.slackBlock}>
								<div className={s.slackTitle}>Чем занимаюсь</div>
								<AppSectionText isTextWith={true} additionalClasses={cn(s.profileEdit, s.slackStatus)} onClick={openEditStatus}>
									{profileData.contacts.busy || <span className={cn('color-gray', s.slackEmpty)}>установить статус</span>}
									<AppIcon iconClass={'icon-edit'} classNames={s.editIcon} />
								</AppSectionText>
							</div>
						</>
					) : (
						<>
							{profileData.contacts.busy && (
								<div className={s.slackBlock}>
									<div className={s.slackTitle}>Чем занимаюсь</div>
									<div className={s.slackStatus}>{profileData.contacts.busy}</div>
								</div>
							)}
						</>
					)}
				</>
			)}

			{openEdit && <BottomBarCustom isOpen={openEdit} onCancel={closeEdit} onSave={saveChanges} />}
		</>
	)
}
