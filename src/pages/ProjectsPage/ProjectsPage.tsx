import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getTeams, setTeams } from '../../store/ducks/teams/actionCreators'
import { getProjects, setProjects } from '../../store/ducks/projects/actionCreators'
import { Teams } from '../../components/teams/Teams/Teams'
import { Projects } from '../../components/projects/Projects/Projects'

export const ProjectsPage: React.FC = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getProjects())

		return () => {
			dispatch(setProjects(null))
		}
	})
	return <section className="section">
		<div className="container">
			<h1 className="section-title-small">Проекты</h1>

			<Projects/>
		</div>
	</section>
}
