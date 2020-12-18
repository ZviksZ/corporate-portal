import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import s from '../../team/TeamRoleForm/TeamRoleForm.module.scss'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { selectProfile } from '../../../../store/ducks/profile/selectors'
import Grid from '@material-ui/core/Grid'
import InputMask from 'react-input-mask'

type Props = {
	onClose: (param: boolean) => void
}
export const PhoneForm: React.FC<Props> = ({ onClose }) => {
	const dispatch = useDispatch()
	const { profileData } = useSelector(selectProfile)
	const phones = (profileData && profileData.contacts.mobilePhone.split(',')) || null
	const [phone, setPhone] = useState('')
	const [phone2, setPhone2] = useState('')

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.getAttribute('name') === 'phone') {
			setPhone(e.target.value)
		} else {
			setPhone2(e.target.value)
		}
	}

	const closeFormHandler = () => {
		onClose(false)
	}

	const saveRoleHandler = () => {
		//dispatch(saveRoleHandler(role))
	}

	useEffect(() => {
		if (phones) {
			if (phones[0]) {
				setPhone(phones[0])
			}
			if (phones[1]) {
				setPhone2(phones[1])
			}
		}

	}, [profileData])

	if (!profileData) {
		return <></>
	}

	return (
		<div className={s.form}>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12}>
					<InputMask mask="+7 (999) 999-99-99" name={'phone'} value={phone} disabled={false} onChange={changeHandler}>
						<TextField variant="outlined" label="Номер телефона" margin="normal" className="form-input" fullWidth />
					</InputMask>
				</Grid>
				<Grid item xs={12}>
					<InputMask mask="+7 (999) 999-99-99" name={'phone2'} value={phone2} disabled={false} onChange={changeHandler}>
						<TextField variant="outlined" label="Дополнительный номер телефона" margin="normal" className="form-input" fullWidth />
					</InputMask>
				</Grid>
			</Grid>
			<div className={s.formFooter}>
				<Button className="btn btn-default text-uppercase" onClick={closeFormHandler}>
					отмена
				</Button>
				<Button className="btn text-uppercase margin-left-x2" onClick={saveRoleHandler}>
					сохранить
				</Button>
			</div>
		</div>
	)
}
