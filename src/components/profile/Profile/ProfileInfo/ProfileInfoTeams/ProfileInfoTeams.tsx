import * as React from 'react'
import s from '../../Profile.module.scss'
import cn from 'classnames'
import { ProfileInfoTeamsItem } from './ProfileInfoTeamsItem/ProfileInfoTeamsItem'

export const ProfileInfoTeams: React.FC = () => {
	return (
		<>
			<h4 className={cn(s.profileTitle, 'margin-bottom-x2', 'margin-top-x2')}>Команды</h4>
			<ProfileInfoTeamsItem />
		</>
	)
}
