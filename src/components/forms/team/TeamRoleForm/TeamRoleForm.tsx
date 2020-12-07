import * as React from 'react'
import s from './TeamRoleForm.module.scss'
import { useEffect, useState } from 'react'
import { Avatar, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import cn from 'classnames'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setRoleFormData } from '../../../../store/ducks/teams/actionCreators'
import { selectTeams } from '../../../../store/ducks/teams/selectors'
import { getInitialsFromName } from '../../../../services/helpers/utils'

type Props = {
	onClose: (param: boolean) => void
}

export const TeamRoleForm: React.FC<Props> = ({ onClose }) => {
	const dispatch = useDispatch()
	const { roleFormData } = useSelector(selectTeams)
	const [role, setRole] = useState('')

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRole(e.target.value)
	}

	const closeFormHandler = () => {
		dispatch(setRoleFormData(null))
		onClose(false)
	}

	const saveRoleHandler = () => {
		//dispatch(saveRoleHandler(role))
	}

	useEffect(() => {
		if (roleFormData && roleFormData.role) {
			setRole(roleFormData.role)
		}
		return () => {
			dispatch(setRoleFormData(null))
		}
	}, [roleFormData])

	if (!roleFormData) {
		return <></>
	}

	return (
		<div className={s.form}>
			<div className={s.formMember}>
				<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={roleFormData.image}>
					{getInitialsFromName(roleFormData.name)}
				</Avatar>
				<div className={s.info}>
					<div className={cn('sectionText', 'no-margin', s.name)}>{roleFormData.name}</div>
					<div className="sectionBigSubtitle no-margin">{roleFormData.position}</div>
				</div>
			</div>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="rol"
						label="Роль в команде"
						name="login"
						autoComplete="email"
						autoFocus
						value={role}
						onChange={changeHandler}
						className="form-input"
					/>
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