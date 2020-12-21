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
import { useEffect, useState } from 'react'
import { ProfileApi } from '../../../../../services/api/api'
import { setGlobalMessage } from '../../../../../store/ducks/global/actionCreators'
import { updateProfilePhoto } from '../../../../../store/ducks/profile/actionCreators'

export const ProfileSidebarTop: React.FC = () => {
	const dispatch = useDispatch()
	const { profileData, isPersonalProfile } = useSelector(selectProfile)
	const [open, setOpen] = useState(false)
	const [files, setFiles] = useState<any>(null)

	useEffect(() => {
		if (profileData && profileData.id && files && files[0]) {
			if (!profileData.photo) {
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
