import * as React from 'react'
import { UnitDetailInterface } from '../../../store/ducks/units/contracts/state'
import s from './Team.module.scss'
import { NavLink } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import { MemberCard } from '../../cards/MemberCard/MemberCard'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'
import { selectGlobal } from '../../../store/ducks/global/selectors'
import { AppButton } from '../../common/ui/AppButton/AppButton'
import { AppBreadcrumbs } from '../../common/ui/AppBreadcrumbs/AppBreadcrumbs'
import { AppBreadcrumbsItem } from '../../common/ui/AppBreadcrumbs/AppBreadcrumbsItem/AppBreadcrumbsItem'
import { AppSectionSubtitle } from '../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { AppSectionPageTitle } from '../../common/ui/AppSectionPageTitle/AppSectionPageTitle'

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
			<AppBreadcrumbs>
				<AppBreadcrumbsItem href={`/teams/`}>Команды</AppBreadcrumbsItem>
				<AppBreadcrumbsItem isLink={false}>{team.name}</AppBreadcrumbsItem>
			</AppBreadcrumbs>
			<AppSectionPageTitle isSmallPageTitle={true} additionalClasses={'no-margin-top'}>{team.name}</AppSectionPageTitle>
			{team.lead && (
				<>
					<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase'}>Тимлид</AppSectionSubtitle>

					<MemberCard member={team.lead} />
				</>
			)}

			<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase margin-top-x2'}>
				<span>сотрудники ({team?.members?.list?.length || 0})</span>
				{((user && user.role === 'ROLE_ADMIN') || (user && user.id.toString() == team?.lead?.id)) && (
					<AppButton size={'large'} to={`/teams/${team.id}/squad`} component={NavLink}>
						Управление составом
					</AppButton>
				)}
			</AppSectionSubtitle>
			{team.members && team?.members?.list?.length > 0 && team.members.list.map((member) => (
				<MemberCard member={member} key={member.id} />
			))}
		</div>
	)
}
