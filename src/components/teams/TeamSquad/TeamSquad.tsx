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
import { AppIcon } from '../../common/ui/AppIcon/AppIcon'
import { AppBreadcrumbsItem } from '../../common/ui/AppBreadcrumbs/AppBreadcrumbsItem/AppBreadcrumbsItem'
import { AppBreadcrumbs } from '../../common/ui/AppBreadcrumbs/AppBreadcrumbs'
import { AppSectionSubtitle } from '../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { AppSectionPageTitle } from '../../common/ui/AppSectionPageTitle/AppSectionPageTitle'

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
			<AppBreadcrumbs>
				<AppBreadcrumbsItem href={`/teams/`}>Команды</AppBreadcrumbsItem>
				<AppBreadcrumbsItem href={`/teams/${teamSquad.id}`}>{teamSquad.name}</AppBreadcrumbsItem>
				<AppBreadcrumbsItem isLink={false}>Управление составом</AppBreadcrumbsItem>
			</AppBreadcrumbs>

			<AppSectionPageTitle isSmallPageTitle={true} additionalClasses={'no-margin-top'}>
				Управление составом
			</AppSectionPageTitle>

			<FormControl fullWidth variant="outlined" className={s.searchInput}>
				<OutlinedInput
					onChange={onSearch}
					placeholder="Поиск по имени"
					className={cn('search-input', 'margin-bottom-x2', 'search-input-big')}
					startAdornment={
						<InputAdornment position="start">
							<AppIcon iconClass={'icon-search'} />
						</InputAdornment>
					}
				/>
			</FormControl>

			{teamSquad.lead && (
				<>
					<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase'}>
						Тимлид
					</AppSectionSubtitle>
					<MemberSquadCard isLeadCard={true} teamId={teamSquad.id} member={teamSquad.lead} openForm={setOpenForm} showRole={true} isTeamMember={true} />
				</>
			)}
			{filteredMembers && (
				<>
					<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase margin-top-x2'}>
						команда ({filteredMembers.length})
					</AppSectionSubtitle>

					{filteredMembers.map((member) => (
						<MemberSquadCard teamId={teamSquad.id} key={member.id} member={member} openForm={setOpenForm} showRole={true} isTeamMember={true} />
					))}
				</>
			)}
			{filteredAvailableMembers && (
				<>
					<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase margin-top-x2'}>
						доступные сотрудники ({filteredAvailableMembers.length})
					</AppSectionSubtitle>

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
