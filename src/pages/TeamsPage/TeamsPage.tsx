import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getTeams, setTeams } from '../../store/ducks/teams/actionCreators'
import { Teams } from '../../components/teams/Teams/Teams'

export const TeamsPage: React.FC = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getTeams())

		return () => {
			dispatch(setTeams(null))
		}
	})

	return (
		<section className="section">
			<div className="container">
				<h1 className="section-title-small">Команды</h1>

				<Teams/>
			</div>
		</section>
	)
}
