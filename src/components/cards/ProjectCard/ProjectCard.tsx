import * as React from 'react'
import s from './ProjectCard.module.scss'
import { NavLink } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import { getInitialsFromName } from '../../../services/helpers/utils'
import { AvatarGroup } from '@material-ui/lab'
import wiki from '../../../assets/images/icons/wiki.svg'
import jira from '../../../assets/images/icons/jira.svg'
import { Project } from '../../../store/ducks/projects/contracts/state'

type Props = {
	project: Project
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
	return (
		<NavLink to={`/projects/${project.id}`} className={s.projectItem}>
			<div className={s.info}>
				<div className={s.name}>{project.name}</div>
				<div className="d-flex align-item-center">
					<a href={project.wikiLink} className="link-with-icon" rel="noreferrer" target="_blank">
						<img src={wiki} alt="" width={'18px'} />
						<span>Страница в Wiki</span>
					</a>
					<a href={project.jiraLink} className="link-with-icon margin-left" rel="noreferrer" target="_blank">
						<img src={jira} alt="" width={'18px'} />
						<span>Страница в Jira</span>
					</a>
				</div>
			</div>

			<div className={s.projectTeam}>
				<div className={s.item}>
					<div className={s.position}>Бизнес-владелец</div>
					<object type="owo/uwu">
						<NavLink className={s.teamInfo} to={`/profile/${project.owner.id}`}>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={project.owner.image} aria-controls="simple-menu" aria-haspopup="true">
								{getInitialsFromName(project.owner.name)}
							</Avatar>
							<span className={s.name}>{project.owner.name}</span>
						</NavLink>
					</object>
				</div>
				<div className={s.item}>
					<div className={s.position}>Технический руководитель</div>
					<object type="owo/uwu">
						<NavLink className={s.teamInfo} to={`/profile/${project.lead.id}`}>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={project.lead.image} aria-controls="simple-menu" aria-haspopup="true">
								{getInitialsFromName(project.lead.name)}
							</Avatar>
							<span className={s.name}>{project.lead.name}</span>
						</NavLink>
					</object>
				</div>
				<div className={cn(s.item, s.memberItem)}>
					<div className={s.position}>Команда</div>
					<object type="owo/uwu">
						<NavLink className={s.teamInfo} to={`/teams/${project.id}`}>
							<AvatarGroup max={7}>
								{project.members.list.map((member: any) => {
									return (
										<Avatar key={member.id} className={cn(s.image, 'avatar-bg')} alt="" src={member.image} aria-controls="simple-menu" aria-haspopup="true">
											{getInitialsFromName(member.name)}
										</Avatar>
									)
								})}
							</AvatarGroup>
						</NavLink>
					</object>
				</div>
			</div>
		</NavLink>
	)
}