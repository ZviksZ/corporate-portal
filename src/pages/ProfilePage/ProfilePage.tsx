import * as React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Profile } from '../../components/profile/Profile/Profile'
import { selectGlobal } from '../../store/ducks/global/selectors'
import { getProfile, setProfile } from '../../store/ducks/profile/actionCreators'

export const ProfilePage: React.FC = () => {
	const dispatch = useDispatch()
	const { user } = useSelector(selectGlobal)
	const [title, setTitle] = useState('Профиль')
	const [isMyProfile, setIsMyProfile] = useState(true)
	const params: { id?: string } = useParams()
	const id = params.id

	useEffect(() => {
		if (id) {
			dispatch(getProfile(id, false))
			setTitle('Профиль')
			setIsMyProfile(false)
		} else if (id && user && id === user.id) {
			dispatch(getProfile(user.id, true))
			setTitle('Мой профиль')
			setIsMyProfile(true)
		} else if (user && user.id) {
			dispatch(getProfile(user.id, true))
			setTitle('Мой профиль')
			setIsMyProfile(true)
		}
		return () => {
			dispatch(setProfile(null, false))
		}
	}, [dispatch, id])

	return (
		<section className="section">
			<div className="container">
				<h1 className="h2 section-title">{title}</h1>
				<Profile isMyProfile={isMyProfile} />
			</div>
		</section>
	)
}
