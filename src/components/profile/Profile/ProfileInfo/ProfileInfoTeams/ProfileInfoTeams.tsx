import * as React from 'react'
import s from '../../Profile.module.scss'
import cn from 'classnames'
import { UnitCard } from '../../../../cards/UnitCard/UnitCard'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'

export const ProfileInfoTeams: React.FC = () => {
	const { profileData } = useSelector(selectProfile)

	if (!profileData) {
		return <></>
	}

	const teams = profileData.teams

	return (
		<>
			<h4 className={cn(s.profileTitle, 'margin-bottom-x2', 'margin-top-x2')}>Команды</h4>
			{teams.map((item) => (
				<UnitCard key={item.id} item={item} showRole={true} linkPath={'teams'} />
			))}
		</>
	)
}
