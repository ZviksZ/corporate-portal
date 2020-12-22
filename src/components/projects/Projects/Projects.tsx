import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectProjects } from '../../../store/ducks/projects/selectors'
import { ProjectCard } from '../../cards/ProjectCard/ProjectCard'

export const Projects: React.FC = () => {
	const { projects } = useSelector(selectProjects)
	if (!projects?.length) {
		return <p className="sectionBigSubtitle text-uppercase text-align-center">На данный момент нет никаких проектов</p>
	}
	return <>{projects && projects.map((project) => <ProjectCard key={project.id} project={project} />)}</>
}
