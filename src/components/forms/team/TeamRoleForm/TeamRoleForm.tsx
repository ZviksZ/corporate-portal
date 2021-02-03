import * as React from 'react'
import s from './TeamRoleForm.module.scss'
import { useEffect, useState } from 'react'
import { Avatar, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import cn from 'classnames'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setRoleFormData, updateTeamMember } from '../../../../store/ducks/teams/actionCreators'
import { selectTeams } from '../../../../store/ducks/teams/selectors'
import { getInitialsFromName } from '../../../../services/helpers/utils'
import { NavLink } from 'react-router-dom'
import { AppButton } from '../../../common/ui/AppButton/AppButton'
import { AppSectionSubtitle } from '../../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { AppSectionText } from '../../../common/ui/AppSectionText/AppSectionText'

type Props = {
	onClose: (param: boolean) => void
}

export const TeamRoleForm: React.FC<Props> = ({ onClose }) => {
	const dispatch = useDispatch()
	const { roleFormData, teamSquad } = useSelector(selectTeams)
	const [role, setRole] = useState('')

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRole(e.target.value)
	}

	const closeFormHandler = () => {
		dispatch(setRoleFormData(null))
		onClose(false)
	}

	const saveRoleHandler = () => {
		if (teamSquad && roleFormData) {
			dispatch(updateTeamMember(teamSquad.id, roleFormData.id, role))
			onClose(false)
		}
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
			<NavLink to={`/profile/${roleFormData.id}`} className={s.formMember}>
				<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={roleFormData.photo}>
					{getInitialsFromName(roleFormData.name)}
				</Avatar>
				<div className={s.info}>
					<AppSectionText additionalClasses={cn('no-margin', s.name)}>{roleFormData.name}</AppSectionText>
					<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'no-margin'}>{roleFormData.position}</AppSectionSubtitle>
				</div>
			</NavLink>
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
				<AppButton size={'large'} additionalClasses={'text-uppercase'} onClick={closeFormHandler} additionalType={'default'}>
					отмена
				</AppButton>
				<AppButton size={'large'} additionalClasses={'text-uppercase margin-left-x2'} onClick={saveRoleHandler}>
					сохранить
				</AppButton>
			</div>
		</div>
	)
}
