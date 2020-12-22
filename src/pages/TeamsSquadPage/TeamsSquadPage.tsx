import * as React from 'react'
import { TeamSquad } from '../../components/teams/TeamSquad/TeamSquad'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { getTeamData, getTeamSquad, setTeamData, setTeamSquad } from '../../store/ducks/teams/actionCreators'
import { Loader } from '../../components/common/Loader/Loader'
import { selectIsTeamsLoading, selectIsTeamsLoadingError } from '../../store/ducks/teams/selectors'
import { Button } from '@material-ui/core'

export const TeamsSquadPage: React.FC = () => {
	const dispatch = useDispatch()
	const params: { id?: string } = useParams()
	const id = params.id
	const isLoading = useSelector(selectIsTeamsLoading)
	const isLoadingError = useSelector(selectIsTeamsLoadingError)

	useEffect(() => {
		if (id) {
			dispatch(getTeamSquad(id))
		}
		return () => {
			dispatch(setTeamSquad(null))
		}
	}, [dispatch, id])

	const repeatLoading = () => {
		if (id) {
			dispatch(getTeamSquad(id))
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
				<p className="full-width text-align-center margin-bottom-x2 sectionText text-uppercase">Ошибка при загрузке. Попробуйте повторить попытку</p>
				<Button className="btn" onClick={repeatLoading}>
					Повторить загрузку
				</Button>
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
