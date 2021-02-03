import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectProjects } from '../../../store/ducks/projects/selectors'
import { ProjectCard } from '../../cards/ProjectCard/ProjectCard'
import { AppSectionSubtitle } from '../../common/ui/AppSectionSubtitle/AppSectionSubtitle'

export const Projects: React.FC = () => {
	const { projects } = useSelector(selectProjects)
	if (!projects?.length) {
		return <AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase text-align-center'}>
			На данный момент нет никаких проектов
		</AppSectionSubtitle>
	}
	return <>{projects && projects.map((project) => <ProjectCard key={project.id} project={project} />)}</>
}
