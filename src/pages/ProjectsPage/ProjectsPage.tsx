import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProjects, setProjects } from '../../store/ducks/projects/actionCreators'
import { Projects } from '../../components/projects/Projects/Projects'
import { Loader } from '../../components/common/Loader/Loader'
import { selectIsProjectsLoading, selectIsProjectsLoadingError } from '../../store/ducks/projects/selectors'
import { getTeamData } from '../../store/ducks/teams/actionCreators'
import { Button } from '@material-ui/core'
import { AppButton } from '../../components/common/ui/AppButton/AppButton'
import { AppSectionPageTitle } from '../../components/common/ui/AppSectionPageTitle/AppSectionPageTitle'
import { AppSectionText } from '../../components/common/ui/AppSectionText/AppSectionText'

const ProjectsPage: React.FC = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsProjectsLoading)
	const isLoadingError = useSelector(selectIsProjectsLoadingError)

	useEffect(() => {
		dispatch(getProjects())

		return () => {
			dispatch(setProjects(null))
		}
	}, [])

	const repeatLoading = () => {
		dispatch(getProjects())
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
		<section className="section">
			<div className="container">
				<AppSectionPageTitle isSmallPageTitle={true}>Проекты</AppSectionPageTitle>

				<Projects />
			</div>
		</section>
	)
}

export default ProjectsPage
