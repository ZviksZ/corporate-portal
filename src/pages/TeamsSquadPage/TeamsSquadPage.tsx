import * as React from 'react'
import { TeamSquad } from '../../components/teams/TeamSquad/TeamSquad'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { getAvailableMembers, getTeamSquad, setTeamSquad } from '../../store/ducks/teams/actionCreators'
import { Loader } from '../../components/common/Loader/Loader'
import { selectIsTeamsLoading, selectIsTeamsLoadingError } from '../../store/ducks/teams/selectors'
import { AppButton } from '../../components/common/ui/AppButton/AppButton'
import { AppSectionText } from '../../components/common/ui/AppSectionText/AppSectionText'

const TeamsSquadPage: React.FC = () => {
	const dispatch = useDispatch()
	const params: { id?: string } = useParams()
	const id = params.id
	const isLoading = useSelector(selectIsTeamsLoading)
	const isLoadingError = useSelector(selectIsTeamsLoadingError)

	useEffect(() => {
		if (id) {
			dispatch(getTeamSquad(id))
			dispatch(getAvailableMembers(id))
		}
		return () => {
			dispatch(setTeamSquad(null))
		}
	}, [dispatch, id])

	const repeatLoading = () => {
		if (id) {
			dispatch(getTeamSquad(id))
			dispatch(getAvailableMembers(id))
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
		<section className="section">
			<div className="container">
				<TeamSquad />
			</div>
		</section>
	)
}

export default TeamsSquadPage
