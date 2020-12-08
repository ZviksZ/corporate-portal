import * as React from 'react'
import { TeamSquad } from '../../components/teams/TeamSquad/TeamSquad'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { getTeamSquad, setTeamSquad } from '../../store/ducks/teams/actionCreators'

export const TeamsSquadPage: React.FC = () => {
	const dispatch = useDispatch()
	const params: { id?: string } = useParams()
	const id = params.id

	useEffect(() => {
		if (id) {
			dispatch(getTeamSquad(id))
		}
		return () => {
			dispatch(setTeamSquad(null))
		}
	}, [dispatch, id])
	return (
		<section className="section">
			<div className="container">
				<TeamSquad />
			</div>
		</section>
	)
}
