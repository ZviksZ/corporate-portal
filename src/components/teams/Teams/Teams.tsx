import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectTeams } from '../../../store/ducks/teams/selectors'
import { UnitCard } from '../../cards/UnitCard/UnitCard'

export const Teams: React.FC = () => {
	const { teams } = useSelector(selectTeams)
	return <>{teams && teams.map((item) => <UnitCard key={item.id} item={item} linkPath={'teams'} />)}</>
}
