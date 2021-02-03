import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTeams, setTeams } from '../../store/ducks/teams/actionCreators'
import { Teams } from '../../components/teams/Teams/Teams'
import { Loader } from '../../components/common/Loader/Loader'
import { selectIsTeamsLoading, selectIsTeamsLoadingError } from '../../store/ducks/teams/selectors'
import { Button } from '@material-ui/core'
import { AppButton } from '../../components/common/ui/AppButton/AppButton'

const TeamsPage: React.FC = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsTeamsLoading)
	const isLoadingError = useSelector(selectIsTeamsLoadingError)
	useEffect(() => {
		dispatch(getTeams())

		return () => {
			dispatch(setTeams(null))
		}
	}, [])

	const repeatLoading = () => {
		dispatch(getTeams())
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
				<AppButton size={'large'} onClick={repeatLoading}>
					Повторить загрузку
				</AppButton>
			</div>
		)
	}

	return (
		<section className="section">
			<div className="container">
				<h1 className="section-title section-title-small">Команды</h1>

				<Teams/>
			</div>
		</section>
	)
}

export default TeamsPage
