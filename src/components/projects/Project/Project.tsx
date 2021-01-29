import * as React from 'react'
import s from './Project.module.scss'
import { NavLink } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import { MemberCard } from '../../cards/MemberCard/MemberCard'
import { ProjectDetailInterface } from '../../../store/ducks/projects/contracts/state'
import wiki from '../../../assets/images/icons/wiki.svg'
import jira from '../../../assets/images/icons/jira.svg'

type Props = {
	project: ProjectDetailInterface | null
}

export const Project: React.FC<Props> = ({ project }) => {
	if (!project) {
		return <></>
	}

	return (
		<div className={s.project}>
			<Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
				<NavLink to={`/projects/`} className="breadcrumbsItem">
					Проекты
				</NavLink>
				<span className="breadcrumbsItem">{project.name}</span>
			</Breadcrumbs>
			<h1 className="section-title section-title-small no-margin-top no-margin-bottom">{project.name}</h1>
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
					<div className="sectionBigSubtitle margin-top-x3 text-uppercase">Технический руководитель</div>
					<MemberCard member={project.lead} />
				</>
			)}
			{project.owner && (
				<>
					<div className="sectionBigSubtitle margin-top-x2 text-uppercase">Бизнес-владелец</div>
					<MemberCard member={project.owner} />
				</>
			)}

			{project?.members?.list?.length > 0 && (
				<>
					<div className="sectionBigSubtitle text-uppercase margin-top-x2">
						<span>команда ({project.members.list.length})</span>
					</div>
					{project.members.list.map((member) => (
						<MemberCard member={member} key={member.id} />
					))}
				</>
			)}
		</div>
	)
}
