import * as React from 'react'
import s from '../../Profile.module.scss'
import { Avatar, DialogActions, TextField } from '@material-ui/core'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { useCallback, useEffect, useState } from 'react'
import { updateProfile, updateProfilePhoto } from '../../../../../store/ducks/profile/actionCreators'
import { NavLink } from 'react-router-dom'
import { selectGlobal } from '../../../../../store/ducks/global/selectors'
import { BottomBarCustom } from '../../../../common/BottomBarCustom/BottomBarCustom'
import { AppButton } from '../../../../common/ui/AppButton/AppButton'
import { AppIcon } from '../../../../common/ui/AppIcon/AppIcon'
import { AppSectionText } from '../../../../common/ui/AppSectionText/AppSectionText'
import { ProfileSidebarTopBusy } from './ProfileSidebarTopBusy'

export const ProfileSidebarTop: React.FC = () => {
	const dispatch = useDispatch()
	const { profileData, isPersonalProfile } = useSelector(selectProfile)
	const { user } = useSelector(selectGlobal)
	const [editStatus, setEditStatus] = useState(false)
	const [status, setStatus] = useState<string | undefined>('')
	const [open, setOpen] = useState(false)
	const [files, setFiles] = useState<any>(null)
	const roleAdmin = user && user.role === 'ROLE_ADMIN'

	useEffect(() => {
		setStatus(profileData?.contacts?.slackStatus || '')
	}, [profileData])

	useEffect(() => {
		if (profileData && profileData.id && files && files[0]) {
			if (profileData.photo == null) {
				dispatch(updateProfilePhoto(files[0], profileData.id, true))
			} else {
				dispatch(updateProfilePhoto(files[0], profileData.id, false))
			}
		}
	}, [files])

	const openEditStatus = useCallback(() => {
		setEditStatus(true)
	}, [])

	if (!profileData) {
		return <></>
	}

	const deleteImage = () => {
		dispatch(updateProfilePhoto(null, profileData.id, false))
		setOpen(false)
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const fileUpload = (e: any) => {
		const files = e.target.files
		const filesArr = Array.prototype.slice.call(files)

		setFiles(filesArr)
	}

	const handleChangeStatus = (event: React.ChangeEvent<{ value: unknown }>) => {
		setStatus(event.target.value as string)
	}

	const closeEdit = () => {
		setEditStatus(false)
		setStatus(profileData.contacts.slackStatus)
	}

	const saveChanges = () => {
		if (profileData && profileData.id) {
			setEditStatus(false)
			dispatch(updateProfile({ slackStatus: status }, profileData.id, isPersonalProfile))
		}
	}

	return (
		<>
			<div className={s.sidebarTop}>
				<div className={s.avatarWrap}>
					<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={profileData.photo}>
						{profileData.surname && profileData.surname[0]}
						{profileData.name && profileData.name[0]}
					</Avatar>
					{(isPersonalProfile || roleAdmin) && (
						<>
							{profileData.photo && (
								<div className={s.avatarDelete} onClick={handleClickOpen}>
									<AppIcon iconClass={'icon-close-default'} classNames={s.editIcon} />
								</div>
							)}
							<label className={s.avatarHover} htmlFor="upload-photo">
								<div className={s.avatarHoverContent}>
									<span className={s.icon}>
										<AppIcon iconClass={'icon-add'} />
									</span>
									<span>Загрузить фото</span>
								</div>
								<input accept="image/*" onChange={fileUpload} style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />
							</label>
						</>
					)}
				</div>

				<div className={s.name}>
					{profileData.surname || ''} {profileData.name || ''} {profileData.patronymic || ''}
				</div>
				<div className={s.position}>{profileData.position || ''}</div>
				<NavLink to={`/units/${profileData.departmentId || ''}`} className={s.department}>
					{profileData.department || ''}
				</NavLink>

				{editStatus ? (
					<TextField variant="outlined" value={status} onChange={handleChangeStatus} fullWidth label="Статус" name="status" autoFocus className="form-input margin-top margin-bottom-x2" />
				) : (
					<>
						{isPersonalProfile || roleAdmin ? (
							<>
								<div className={s.slackBlock}>
									<div className={s.slackTitle}>Статус в Slack</div>
									<AppSectionText isTextWith={true} additionalClasses={cn(s.profileEdit, s.slackStatus)} onClick={openEditStatus}>
										{profileData.contacts.slackStatus || <span className={cn('color-gray', s.slackEmpty)}>установить статус</span>}
										<AppIcon iconClass={'icon-edit'} classNames={s.editIcon} />
									</AppSectionText>
								</div>
							</>
						) : (
							<>
								{profileData.contacts.slackStatus && (
									<div className={s.slackBlock}>
										<div className={s.slackTitle}>Статус в Slack</div>
										<div className={s.slackStatus}>{profileData.contacts.slackStatus}</div>
									</div>
								)}
							</>
						)}
					</>
				)}

				<ProfileSidebarTopBusy isPersonalProfile={isPersonalProfile} roleAdmin={roleAdmin}/>
			</div>

			<Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{'Вы уверены, что хотите удалить фотографию?'}</DialogTitle>
				<DialogActions>
					<AppButton size={'large'} onClick={handleClose} additionalType={'default'}>
						Отмена
					</AppButton>
					<AppButton size={'large'} additionalClasses={'margin-left-x2'} onClick={deleteImage}>
						Удалить
					</AppButton>
				</DialogActions>
			</Dialog>

			{editStatus && <BottomBarCustom isOpen={editStatus} onCancel={closeEdit} onSave={saveChanges} />}
		</>
	)
}
