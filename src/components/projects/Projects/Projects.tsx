import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectProjects } from '../../../store/ducks/projects/selectors'
import { ProjectCard } from '../../cards/ProjectCard/ProjectCard'

export const Projects: React.FC = () => {
	const { projects } = useSelector(selectProjects)
	return <>{projects && projects.map((project) => <ProjectCard key={project.id} project={project} />)}</>
}
