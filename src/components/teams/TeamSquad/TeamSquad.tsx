import * as React from 'react'
import { Breadcrumbs, FormControl } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { MemberSquadCard } from '../../cards/MemberSquadCard/MemberSquadCard'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import cn from 'classnames'
import Button from '@material-ui/core/Button'
import s from './TeamSquad.module.scss'
import { ModalBlock } from '../../common/ModalBlock/ModalBlock'
import { useState } from 'react'
import { TeamRoleForm } from '../../forms/team/TeamRoleForm/TeamRoleForm'
import { useDispatch, useSelector } from 'react-redux'
import { filteredAllMembersList, selectTeams } from '../../../store/ducks/teams/selectors'
import { SquadMemberInterface } from '../../../store/ducks/teams/contracts/state'
import { setTeamSquadSearch } from '../../../store/ducks/teams/actionCreators'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

export const TeamSquad: React.FC = () => {
	const dispatch = useDispatch()
	const [openForm, setOpenForm] = useState(false)
	const { teamSquad } = useSelector(selectTeams)
	const filteredMembers = useSelector(filteredAllMembersList)

	if (!teamSquad) {
		return <></>
	}

	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setTeamSquadSearch(e.target.value))
	}
	return (
		<div className={s.teamSquad}>
			<Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
				<NavLink to={`/teams/`} className="breadcrumbsItem">
					Команды
				</NavLink>
				<NavLink to={`/teams/${teamSquad.id}`} className="breadcrumbsItem">
					{teamSquad.name}
				</NavLink>
				<span className="breadcrumbsItem">Управление составом</span>
			</Breadcrumbs>
			<h1 className="section-title-small no-margin-top">Управление составом</h1>

			<FormControl fullWidth variant="outlined" className={s.searchInput}>
				<OutlinedInput
					onChange={onSearch}
					placeholder="Поиск по имени"
					className={cn('search-input', 'margin-bottom-x2', 'search-input-big')}
					startAdornment={
						<InputAdornment position="start">
							<i className="icon-search"></i>
						</InputAdornment>
					}
				/>
			</FormControl>

			{teamSquad.lead && (
				<>
					<div className="sectionBigSubtitle text-uppercase">Тимлид</div>
					<MemberSquadCard teamId={teamSquad.id} member={teamSquad.lead} openForm={setOpenForm} showRole={true} isTeamMember={true} />
				</>
			)}
			{teamSquad?.members?.list?.length > 0 && (
				<>
					<div className="sectionBigSubtitle text-uppercase margin-top-x2">сотрудники ({teamSquad.members.list.length})</div>
					{teamSquad.members.list.map((member) => (
						<MemberSquadCard teamId={teamSquad.id} key={member.id} member={member} openForm={setOpenForm} showRole={true} isTeamMember={true} />
					))}
				</>
			)}
			{filteredMembers && (
				<>
					<div className="sectionBigSubtitle text-uppercase margin-top-x2">все сотрудники ({filteredMembers.length})</div>
					{filteredMembers.map((member: SquadMemberInterface) => (
						<MemberSquadCard key={member.id} teamId={teamSquad.id} member={member} openForm={setOpenForm} showRole={false} isTeamMember={false} />
					))}
				</>
			)}

			{/*<AppBar className={cn('navbar', s.appbarBottom)} position="fixed" color="default">
				<Toolbar className={cn(s.editButtons)}>
					<Button size="large" component={NavLink} to={`/teams/${teamSquad.id}`} className="btn btn-default text-uppercase">
						ОТМЕНА
					</Button>
					<Button size="large" component={NavLink} to={`/teams/${teamSquad.id}`} className="btn margin-left-x3 text-uppercase">
						Сохранить
					</Button>
				</Toolbar>
			</AppBar>*/}

			<ModalBlock visible={openForm} onClose={() => setOpenForm(false)} title="Изменить роль в команде">
				<TeamRoleForm onClose={setOpenForm} />
			</ModalBlock>
		</div>
	)
}
