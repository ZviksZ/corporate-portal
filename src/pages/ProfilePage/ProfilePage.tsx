import * as React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Profile } from '../../components/profile/Profile/Profile'
import { selectGlobal } from '../../store/ducks/global/selectors'
import { getProfile, setProfile } from '../../store/ducks/profile/actionCreators'
import { selectIsProfileLoading, selectIsProfileLoadingError } from '../../store/ducks/profile/selectors'
import { Loader } from '../../components/common/Loader/Loader'
import { Button } from '@material-ui/core'

export const ProfilePage: React.FC = () => {
	const dispatch = useDispatch()
	const { user } = useSelector(selectGlobal)
	const isLoading = useSelector(selectIsProfileLoading)
	const isLoadingError = useSelector(selectIsProfileLoadingError)
	const [title, setTitle] = useState('')
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

	const repeatLoading = () => {
		if (id) {
			dispatch(getProfile(id, false))
		} else if (id && user && id === user.id) {
			dispatch(getProfile(user.id, true))
		} else if (user && user.id) {
			dispatch(getProfile(user.id, true))
		}
	}

	if (isLoading) {
		return (
			<div className="full-page d-flex ai-center jc-center">
				<Loader />
			</div>
		)
	}
	if (isLoadingError) {
		return (
			<div className="full-page d-flex flex-column ai-center jc-center flex-wrap">
				<p className="full-width text-align-center margin-bottom-x2 sectionText text-uppercase">Ошибка при загрузке. Попробуйте повторить попытку</p>
				<Button className="btn" onClick={repeatLoading}>
					Повторить загрузку
				</Button>
			</div>
		)
	}

	return (
		<section className="section">
			<div className="container">
				<h1 className="h2 section-title">{title}</h1>
				<Profile isMyProfile={isMyProfile} />
			</div>
		</section>
	)
}
