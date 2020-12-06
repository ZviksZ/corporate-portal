import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { selectProjects } from '../../store/ducks/projects/selectors'
import { getProjectData, setProjectData } from '../../store/ducks/projects/actionCreators'
import { Project } from '../../components/projects/Project/Project'

export const ProjectsDetailPage: React.FC = () => {
	const dispatch = useDispatch()
	const { projectDetail } = useSelector(selectProjects)
	const params: { id?: string } = useParams()
	const id = params.id

	useEffect(() => {
		if (id) {
			dispatch(getProjectData(id))
		}
		return () => {
			dispatch(setProjectData(null))
		}
	}, [dispatch, id])

	return (
		<>
			<section className="section">
				<div className="container">
					<Project project={projectDetail} />
				</div>
			</section>
		</>
	)
}
