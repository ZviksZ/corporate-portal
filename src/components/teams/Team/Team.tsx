import * as React from 'react'
import { UnitDetailInterface } from '../../../store/ducks/units/contracts/state'
import s from './Team.module.scss'
import { NavLink } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import { MemberCard } from '../../cards/MemberCard/MemberCard'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'
import { selectGlobal } from '../../../store/ducks/global/selectors'

type Props = {
	team: UnitDetailInterface | null
}

export const Team: React.FC<Props> = ({ team }) => {
	const { user } = useSelector(selectGlobal)

	if (!team) {
		return <></>
	}

	return (
		<div className={s.team}>
			<Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
				<NavLink to={`/teams/`} className="breadcrumbsItem">
					Команды
				</NavLink>
				<span className="breadcrumbsItem">{team.name}</span>
			</Breadcrumbs>
			<h1 className="section-title-small no-margin-top">{team.name}</h1>

			{team.lead && (
				<>
					<div className="sectionBigSubtitle text-uppercase">Тимлид</div>

					<MemberCard member={team.lead} />
				</>
			)}

			{team.members && team?.members?.list?.length > 0 && (
				<>
					<div className="sectionBigSubtitle text-uppercase margin-top-x2">
						<span>сотрудники ({team.members.list.length})</span>
						{user && (
							<Button component={NavLink} to={`/teams/${team.id}/squad`} className="btn">
								Управление составом
							</Button>
						)}
					</div>
					{team.members.list.map((member) => (
						<MemberCard member={member} key={member.id} />
					))}
				</>
			)}
		</div>
	)
}
