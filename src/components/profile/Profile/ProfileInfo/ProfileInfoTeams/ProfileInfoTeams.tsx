import * as React from 'react'
import s from '../../Profile.module.scss'
import cn from 'classnames'
import { UnitCard } from '../../../../cards/UnitCard/UnitCard'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'

export const ProfileInfoTeams: React.FC = () => {
	const { profileData } = useSelector(selectProfile)

	if (!profileData || !profileData?.teams.length) {
		return <></>
	}

	const teams = profileData.teams

	return (
		<>
			<h4 className={cn(s.profileTitle, 'margin-bottom-x2', 'margin-top-x2')}>Команды</h4>
			{teams.map((item) => (
				<UnitCard key={item.data.id} item={item.data} showRole={true} linkPath={'teams'} />
			))}
		</>
	)
}
