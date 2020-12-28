import * as React from 'react'
import s from '../../Profile.module.scss'
import { Avatar, DialogActions, TextField } from '@material-ui/core'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import { useEffect, useState } from 'react'
import { updateProfile, updateProfileDayoff, updateProfilePhoto } from '../../../../../store/ducks/profile/actionCreators'
import { NavLink } from 'react-router-dom'
import { selectGlobal } from '../../../../../store/ducks/global/selectors'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

export const ProfileSidebarTop: React.FC = () => {
	const dispatch = useDispatch()
	const { profileData, isPersonalProfile } = useSelector(selectProfile)
	const { user } = useSelector(selectGlobal)
	const [editStatus, setEditStatus] = useState(false)
	const [status, setStatus] = useState('')
	const [open, setOpen] = useState(false)
	const [files, setFiles] = useState<any>(null)

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
						{profileData.name && profileData.name[0]}
						{profileData.surname && profileData.surname[0]}
					</Avatar>
					{isPersonalProfile && (
						<>
							{profileData.photo && (
								<div className={s.avatarDelete} onClick={handleClickOpen}>
									<i className="icon-close-default"></i>
								</div>
							)}
							<label className={s.avatarHover} htmlFor="upload-photo">
								<div className={s.avatarHoverContent}>
									<span className={s.icon}>
										<i className="icon-add"></i>
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
						{(user && user.role === 'ROLE_ADMIN') || isPersonalProfile ? (
							<>
								<div className={s.slackBlock}>
									<div className={s.slackTitle}>Статус в Slack</div>
									<p className={cn('sectionText', 'sectionTextWith', s.profileEdit, s.slackStatus)} onClick={() => setEditStatus(true)}>
										{profileData.contacts.slackStatus || <span className={cn('color-gray', s.slackEmpty)}>установить статус</span>}
										<i className={cn('icon-edit', s.editIcon)}></i>
									</p>
								</div>
							</>
						) : (
							<>
								{
									profileData.contacts.slackStatus && <div className={s.slackBlock}>
										<div className={s.slackTitle}>Статус в Slack</div>
										<div className={s.slackStatus}>{profileData.contacts.slackStatus}</div>
									</div>
								}

							</>
						)}
					</>
				)}
			</div>

			<Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{'Вы уверены, что хотите удалить фотографию?'}</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose} className="btn btn-default">
						Отмена
					</Button>
					<Button onClick={deleteImage} className="btn margin-left-x2">
						Удалить
					</Button>
				</DialogActions>
			</Dialog>

			<AppBar className={cn('navbar', s.appbarBottom, { [s.appbarBottomShow]: editStatus })} position="fixed" color="default">
				<Toolbar className={cn(s.editButtons)}>
					<Button size="large" className="btn btn-default text-uppercase" onClick={closeEdit}>
						ОТМЕНА
					</Button>
					<Button size="large" className="btn margin-left-x3 text-uppercase" onClick={saveChanges}>
						Сохранить
					</Button>
				</Toolbar>
			</AppBar>
		</>
	)
}
