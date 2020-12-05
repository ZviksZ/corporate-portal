import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { Team } from '../../components/teams/Team/Team'
import { selectTeams } from '../../store/ducks/teams/selectors'
import { getTeamData, setTeamData } from '../../store/ducks/teams/actionCreators'

export const TeamsDetailPage: React.FC = () => {
	const dispatch = useDispatch()
	const { teamDetail } = useSelector(selectTeams)
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
