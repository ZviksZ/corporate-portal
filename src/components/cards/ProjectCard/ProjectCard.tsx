import * as React from 'react'
import s from './ProjectCard.module.scss'
import { NavLink } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import { getInitialsFromName, stopPropagation } from '../../../services/helpers/utils'
import { AvatarGroup } from '@material-ui/lab'
import wiki from '../../../assets/images/icons/wiki.svg'
import jira from '../../../assets/images/icons/jira.svg'
import { ProjectInterface } from '../../../store/ducks/projects/contracts/state'

type Props = {
	project: ProjectInterface
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
	return (
		<NavLink to={`/projects/${project.id}`} className={s.projectItem}>
			<div className={s.info}>
				<div className={s.name}>{project.name}</div>
				{project.wikilink && (
					<object type="owo/uwu">
						<div className={cn('d-flex align-item-center', s.links)}>
							<a onClick={stopPropagation} href={project.wikilink} className="link-with-icon" rel="noreferrer" target="_blank">
								<img src={wiki} alt="" width={'18px'} />
								<span>Страница в Wiki</span>
							</a>
						</div>
					</object>
				)}
			</div>

			<div className={s.projectTeam}>
				{project.owner && (
					<div className={s.item}>
						<div className={s.position}>Бизнес-владелец</div>
						<object type="owo/uwu">
							<NavLink className={s.teamInfo} to={`/profile/${project.owner.id}`}>
								<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={project.owner.photo} aria-controls="simple-menu" aria-haspopup="true">
									{getInitialsFromName(project.owner.name)}
								</Avatar>
								<span className={s.name}>{project.owner.name}</span>
							</NavLink>
						</object>
					</div>
				)}
				{project.lead && (
					<div className={s.item}>
						<div className={s.position}>Технический руководитель</div>
						<object type="owo/uwu">
							<NavLink className={s.teamInfo} to={`/profile/${project.lead.id}`}>
								<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={project.lead.photo} aria-controls="simple-menu" aria-haspopup="true">
									{getInitialsFromName(project.lead.name)}
								</Avatar>
								<span className={s.name}>{project.lead.name}</span>
							</NavLink>
						</object>
					</div>
				)}
				<div className={cn(s.item, s.memberItem)}>
					{project?.members?.list?.length > 0 && (
						<>
							<div className={s.position}>Команда</div>
							<AvatarGroup max={7}>
								{project.members.list.map((member: any) => {
									return (
										<Avatar key={member.id} className={cn(s.image, 'avatar-bg')} alt="" src={member.photo} aria-controls="simple-menu" aria-haspopup="true">
											{getInitialsFromName(member.name)}
										</Avatar>
									)
								})}
							</AvatarGroup>
						</>
					)}
				</div>
			</div>
		</NavLink>
	)
}
