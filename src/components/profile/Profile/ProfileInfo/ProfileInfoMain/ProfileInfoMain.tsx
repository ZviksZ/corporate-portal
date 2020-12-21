import * as React from 'react'
import s from '../../Profile.module.scss'
import cn from 'classnames'
import { FormControlLabel, TextField } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { ClipboardCopy } from '../../../../common/ClipboardCopy/ClipboardCopy'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'
import { getFormatedDate } from '../../../../../services/helpers/utils'
import { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { updateProfile } from '../../../../../store/ducks/profile/actionCreators'

type Props = {
	isMyProfile: boolean
}
export const ProfileInfoMain: React.FC<Props> = ({ isMyProfile }) => {
	const dispatch = useDispatch()
	const { profileData, isPersonalProfile } = useSelector(selectProfile)
	const [openFormButtons, setOpenFormButtons] = useState(false)
	const [size, setSize] = React.useState('')
	const [phone, setPhone] = React.useState('')
	const [editPhone, setEditPhone] = useState(false)
	const [editSize, setEditSize] = useState(false)

	useEffect(() => {
		setSize(profileData?.contacts?.tshirtSize || '')
		setPhone(profileData?.contacts?.mobilePhone || '')
	}, [profileData])

	if (!profileData) {
		return <></>
	}
	const handleChangePhone = (event: React.ChangeEvent<{ value: unknown }>) => {
		setPhone(event.target.value as string)
	}
	const handleChangeSize = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSize(event.target.value as string)
	}
	const handleChangeShowbirth = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateProfile({ showBirthYear: event.target.checked }, profileData.id, isPersonalProfile))
	}

	const openPhoneEdit = () => {
		setOpenFormButtons(true)
		setEditSize(false)
		setEditPhone(true)
	}
	const openSizeEdit = () => {
		setOpenFormButtons(true)
		setEditPhone(false)
		setEditSize(true)
	}

	const closeEdit = () => {
		setOpenFormButtons(false)
		setEditPhone(false)
		setEditSize(false)
	}

	const saveChanges = () => {
		let data
		if (editPhone) {
			data = { mobile: phone }
		} else if (editSize) {
			data = { size: size }
		}
		dispatch(updateProfile(data, profileData.id, isPersonalProfile))
		setOpenFormButtons(false)
		setEditPhone(false)
		setEditSize(false)
	}

	const main = profileData.contacts
	const isShowBirthday = +main.showBirthYear

	return (
		<>
			<div className={s.profileMain}>
				<h4 className={cn('sectionTitle', 'margin-bottom-x2')}>Контактная информация</h4>
				{main.birthday && (
					<>
						<div className="sectionSubtitle">День рождения</div>
						<p className={cn('sectionText', 'sectionTextWith', s.profileBirthday)}>
							<span className="sectionTextContent">{getFormatedDate(main.birthday)}</span>
							{isMyProfile && <FormControlLabel control={<Checkbox onChange={handleChangeShowbirth} checked={!!isShowBirthday} color="primary" name="showBirthDate" />} label="Показывать год" />}
						</p>
					</>
				)}
				{main.email && (
					<>
						<div className="sectionSubtitle">Контактный Email</div>
						<p className={cn('sectionText', 'sectionTextWith')}>
							<a href={'mailto:' + main.email} className="sectionTextContent">
								{main.email}
							</a>
							<ClipboardCopy text={main.email} />
						</p>
					</>
				)}
				{editPhone ? (
					<TextField variant="outlined" value={phone} onChange={handleChangePhone} fullWidth label="Мобильный телефон" name="mobilePhone" autoFocus className="form-input margin-bottom-x2" />
				) : (
					<>
						{isMyProfile ? (
							<>
								<div className="sectionSubtitle">Мобильный телефон</div>
								<p className={cn('sectionText', 'sectionTextWith', s.profileEdit)} onClick={openPhoneEdit}>
									{main.mobilePhone || 'Не указан'}
									<i className={cn('icon-edit', s.editIcon)}></i>
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
				{main.employmentDate && (
					<>
						<div className="sectionSubtitle">Дата трудоустройства</div>
						<p className="sectionText">c {getFormatedDate(main.employmentDate)}</p>
					</>
				)}
				{editSize ? (
					<>
						<FormControl fullWidth variant="outlined" className="margin-bottom-x2">
							<InputLabel id="simple-select-outlined-label">Размер футболки</InputLabel>
							<Select labelId="simple-select-outlined-label" id="simple-select-outlined" value={size} onChange={handleChangeSize} label="Размер футболки">
								<MenuItem value="" disabled>
									Не выбран
								</MenuItem>
								<MenuItem value={'S'}>S</MenuItem>
								<MenuItem value={'M'}>M</MenuItem>
								<MenuItem value={'L'}>L</MenuItem>
								<MenuItem value={'XL'}>XL</MenuItem>
								<MenuItem value={'XXL'}>XXL</MenuItem>
							</Select>
						</FormControl>
					</>
				) : isMyProfile ? (
					<>
						<div className="sectionSubtitle">Размер футболки</div>
						<p className={cn('sectionText', 'sectionTextWith', s.profileEdit)} onClick={openSizeEdit}>
							{main.tshirtSize || 'Не указан'}
							<i className={cn('icon-edit', s.editIcon)}></i>
						</p>
					</>
				) : (
					<>
						{main.tshirtSize && (
							<>
								<div className="sectionSubtitle">Размер футболки</div>
								<p className={cn('sectionText', 'sectionTextWith', s.profileEdit)}>{main.tshirtSize}</p>
							</>
						)}
					</>
				)}
				{isMyProfile && main.sshKeys && (
					<>
						<div className="sectionSubtitle">SSH ключ</div>

						{main.sshKeys &&
							main.sshKeys.map((item) => (
								<div key={item} className={s.sshBlock}>
									<span className={s.text}>ssh rsa {item}</span>
									<ClipboardCopy isBigIcon={true} text={'ssh rsa ' + item} />
								</div>
							))}
					</>
				)}
			</div>
			<AppBar className={cn('navbar', s.appbarBottom, { [s.appbarBottomShow]: openFormButtons })} position="fixed" color="default">
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
