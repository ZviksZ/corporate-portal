import * as React from 'react'
import s from './Project.module.scss'
import { NavLink } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import { MemberCard } from '../../cards/MemberCard/MemberCard'
import { ProjectDetailInterface } from '../../../store/ducks/projects/contracts/state'
import wiki from '../../../assets/images/icons/wiki.svg'
import jira from '../../../assets/images/icons/jira.svg'
import { AppBreadcrumbsItem } from '../../common/ui/AppBreadcrumbs/AppBreadcrumbsItem/AppBreadcrumbsItem'
import { AppBreadcrumbs } from '../../common/ui/AppBreadcrumbs/AppBreadcrumbs'
import { AppSectionSubtitle } from '../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { AppSectionPageTitle } from '../../common/ui/AppSectionPageTitle/AppSectionPageTitle'

type Props = {
	project: ProjectDetailInterface | null
}

export const Project: React.FC<Props> = ({ project }) => {
	if (!project) {
		return <></>
	}

	return (
		<div className={s.project}>
			<AppBreadcrumbs>
				<AppBreadcrumbsItem href={`/projects/`}>Проекты</AppBreadcrumbsItem>
				<AppBreadcrumbsItem isLink={false}>{project.name}</AppBreadcrumbsItem>
			</AppBreadcrumbs>

			<AppSectionPageTitle isSmallPageTitle={true} additionalClasses={'no-margin-top no-margin-bottom'}>{project.name}</AppSectionPageTitle>

			<div className="d-flex align-item-center margin-top-x2 margin-bottom">
				{project.wikilink && (
					<a href={project.wikilink} className="link-with-icon" rel="noreferrer" target="_blank">
						<img src={wiki} alt="" width={'18px'} />
						<span>Страница в Wiki</span>
					</a>
				)}
			</div>

			{project.lead && (
				<>
					<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase margin-top-x3'}>
						Технический руководитель
					</AppSectionSubtitle>
					<MemberCard member={project.lead} />
				</>
			)}
			{project.owner && (
				<>
					<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase margin-top-x2'}>
						Бизнес-владелец
					</AppSectionSubtitle>
					<MemberCard member={project.owner} />
				</>
			)}

			{project?.members?.list?.length > 0 && (
				<>
					<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase margin-top-x2'}>
						<span>команда ({project.members.list.length})</span>
					</AppSectionSubtitle>
					{project.members.list.map((member) => (
						<MemberCard member={member} key={member.id} />
					))}
				</>
			)}
		</div>
	)
}
