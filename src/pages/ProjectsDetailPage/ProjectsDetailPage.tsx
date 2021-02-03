import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { selectIsProjectsLoading, selectIsProjectsLoadingError, selectProjects } from '../../store/ducks/projects/selectors'
import { getProjectData, getProjects, setProjectData } from '../../store/ducks/projects/actionCreators'
import { Project } from '../../components/projects/Project/Project'
import { Loader } from '../../components/common/Loader/Loader'
import { Button } from '@material-ui/core'
import { AppButton } from '../../components/common/ui/AppButton/AppButton'
import { AppSectionText } from '../../components/common/ui/AppSectionText/AppSectionText'

const ProjectsDetailPage: React.FC = () => {
	const dispatch = useDispatch()
	const { projectDetail } = useSelector(selectProjects)
	const isLoading = useSelector(selectIsProjectsLoading)
	const isLoadingError = useSelector(selectIsProjectsLoadingError)
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

	const repeatLoading = () => {
		if (id) {
			dispatch(getProjectData(id))
		}
	}

	if (isLoading) {
		return (
			<div className="full-page d-flex ai-center jc-center">
				<Loader />
			</div>
		)
	}
	if (isLoadingError) {
		return (
			<div className="full-page d-flex flex-column ai-center jc-center flex-wrap">
				<AppSectionText additionalClasses={'full-width text-align-center margin-bottom-x2 text-uppercase'}>Ошибка при загрузке. Попробуйте повторить попытку</AppSectionText>
				<AppButton size={'large'} onClick={repeatLoading}>
					Повторить загрузку
				</AppButton>
			</div>
		)
	}

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

export default ProjectsDetailPage
