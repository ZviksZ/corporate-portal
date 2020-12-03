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
	const params: { id?: string } = useParams()
	const id = params.id

	useEffect(() => {
		if (id) {
			dispatch(getProfile(id))
		} else if (user && user.id) {
			dispatch(getProfile(user.id))
		}
		return () => {
			dispatch(setProfile(null))
		}
	}, [dispatch, id])

	return (
		<section className="section">
			<div className="container">
				<h1 className="h2 section-title">{id ? 'Профиль' : 'Мой профиль'}</h1>

				<Profile />
			</div>
		</section>
	)
}
