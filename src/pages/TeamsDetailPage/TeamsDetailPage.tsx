import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { Team } from '../../components/teams/Team/Team'
import { selectIsTeamsLoading, selectIsTeamsLoadingError, selectTeams } from '../../store/ducks/teams/selectors'
import { getTeamData, getTeams, setTeamData } from '../../store/ducks/teams/actionCreators'
import { Loader } from '../../components/common/Loader/Loader'
import { Button } from '@material-ui/core'
import { AppButton } from '../../components/common/ui/AppButton/AppButton'
import { AppSectionText } from '../../components/common/ui/AppSectionText/AppSectionText'

const TeamsDetailPage: React.FC = () => {
	const dispatch = useDispatch()
	const { teamDetail, LoadingStatus } = useSelector(selectTeams)
	const isLoading = useSelector(selectIsTeamsLoading)
	const isLoadingError = useSelector(selectIsTeamsLoadingError)
	const params: { id?: string } = useParams()
	const id = params.id

	useEffect(() => {
		if (id) {
			dispatch(getTeamData(id))
		}
		return () => {
			dispatch(setTeamData(null))
		}
	}, [dispatch, id])

	const repeatLoading = () => {
		if (id) {
			dispatch(getTeamData(id))
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
	if (!teamDetail) {
		return (
			<div className="full-page d-flex flex-column ai-center jc-center flex-wrap">
				<AppSectionText additionalClasses={'full-width text-align-center margin-bottom-x2 text-uppercase'}>Команда с таким id не существует</AppSectionText>

			</div>
		)
	}

	return (
		<>
			<section className="section">
				<div className="container">
					<Team team={teamDetail} />
				</div>
			</section>
		</>
	)
}

export default TeamsDetailPage
