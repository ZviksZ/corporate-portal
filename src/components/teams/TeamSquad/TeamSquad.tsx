import * as React from 'react'
import { Breadcrumbs, FormControl } from '@material-ui/core'
import { NavLink, Redirect } from 'react-router-dom'
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
import { filteredAvailableMembersList, filteredTeamMembersList, selectTeams } from '../../../store/ducks/teams/selectors'
import { SquadMemberInterface } from '../../../store/ducks/teams/contracts/state'
import { setTeamSquadSearch } from '../../../store/ducks/teams/actionCreators'
import { selectGlobal } from '../../../store/ducks/global/selectors'

export const TeamSquad: React.FC = () => {
	const dispatch = useDispatch()
	const [openForm, setOpenForm] = useState(false)
	const { teamSquad } = useSelector(selectTeams)
	const { user } = useSelector(selectGlobal)
	const filteredMembers = useSelector(filteredTeamMembersList)
	const filteredAvailableMembers = useSelector(filteredAvailableMembersList)

	if (!teamSquad) {
		return <></>
	}
	if (user && user.role !== 'ROLE_ADMIN' && teamSquad?.lead?.id) {
		if (user.id.toString() != teamSquad?.lead?.id) {
			return <Redirect to={`/teams/${teamSquad.id}`} />
		}
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
					<MemberSquadCard isLeadCard={true} teamId={teamSquad.id} member={teamSquad.lead} openForm={setOpenForm} showRole={true} isTeamMember={true} />
				</>
			)}
			{filteredMembers && (
				<>
					<div className="sectionBigSubtitle text-uppercase margin-top-x2">команда ({filteredMembers.length})</div>
					{filteredMembers.map((member) => (
						<MemberSquadCard teamId={teamSquad.id} key={member.id} member={member} openForm={setOpenForm} showRole={true} isTeamMember={true} />
					))}
				</>
			)}
			{filteredAvailableMembers && (
				<>
					<div className="sectionBigSubtitle text-uppercase margin-top-x2">доступные сотрудники ({filteredAvailableMembers.length})</div>
					{filteredAvailableMembers.map((member: SquadMemberInterface) => (
						<MemberSquadCard key={member.id} teamId={teamSquad.id} member={member} openForm={setOpenForm} showRole={false} isTeamMember={false} />
					))}
				</>
			)}

			<ModalBlock visible={openForm} onClose={() => setOpenForm(false)} title="Изменить роль в команде">
				<TeamRoleForm onClose={setOpenForm} />
			</ModalBlock>
		</div>
	)
}
