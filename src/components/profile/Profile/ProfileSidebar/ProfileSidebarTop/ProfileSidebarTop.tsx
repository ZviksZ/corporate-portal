import * as React from 'react'
import s from '../../Profile.module.scss'
import { Avatar, DialogActions } from '@material-ui/core'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'
import { MemberSocials } from '../../../../cards/MemberSocials/MemberSocials'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

export const ProfileSidebarTop: React.FC = () => {
	const dispatch = useDispatch()
	const { profileData, isPersonalProfile } = useSelector(selectProfile)
	const [open, setOpen] = useState(false)
	const [files, setFiles] = useState<any>(null)

	if (!profileData) {
		return <></>
	}

	const deleteImage = () => {}

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
							<div className={s.avatarDelete} onClick={handleClickOpen}>
								<i className="icon-close-default"></i>
							</div>
							<label className={s.avatarHover} htmlFor="upload-photo">
								<input onChange={fileUpload} style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />
								<span className={s.icon}>
									<i className="icon-add"></i>
								</span>
								<span>Загрузить фото</span>
							</label>
						</>
					)}
				</div>

				<div className={s.name}>
					{profileData.surname || ''} {profileData.name || ''} {profileData.patronymic || ''}
				</div>
				<div className={s.position}>{profileData.position || ''}</div>
				<div className={s.department}>{profileData.department || ''}</div>
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
		</>
	)
}
