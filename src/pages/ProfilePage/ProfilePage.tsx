import * as React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Profile } from '../../components/profile/Profile/Profile'
import { selectGlobal } from '../../store/ducks/global/selectors'
import { getProfile, setProfile } from '../../store/ducks/profile/actionCreators'
import { Breadcrumbs } from '@material-ui/core'
import s from '../../components/cards/MemberCard/MemberCard.module.scss'
import { NavLink } from 'react-router-dom'

export const ProfilePage: React.FC = () => {
	const dispatch = useDispatch()
	const { user } = useSelector(selectGlobal)
	const [title, setTitle] = useState('Профиль')
	const params: { id?: string } = useParams()
	const id = params.id

	useEffect(() => {
		if (id) {
			dispatch(getProfile(id, false))
			setTitle('Профиль')
		} else if (id && user && id === user.id) {
			dispatch(getProfile(user.id, true))
			setTitle('Мой профиль')
		} else if (user && user.id) {
			dispatch(getProfile(user.id, true))
			setTitle('Мой профиль')
		}
		return () => {
			dispatch(setProfile(null, false))
		}
	}, [dispatch, id])

	return (
		<section className="section">
			<div className="container">
				<h1 className="h2 section-title">{title}</h1>
				<Profile />
			</div>
		</section>
	)
}
