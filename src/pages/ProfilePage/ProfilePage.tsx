import * as React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Profile } from '../../components/profile/Profile/Profile'
import { selectGlobal } from '../../store/ducks/global/selectors'
import { getProfile, setProfile } from '../../store/ducks/profile/actionCreators'
import { selectIsProfileLoading, selectIsProfileLoadingError, selectProfile } from '../../store/ducks/profile/selectors'
import { Loader } from '../../components/common/Loader/Loader'
import { Button } from '@material-ui/core'

export const ProfilePage: React.FC = () => {
	const dispatch = useDispatch()
	const { user } = useSelector(selectGlobal)
	const { profileData } = useSelector(selectProfile)
	const isLoading = useSelector(selectIsProfileLoading)
	const isLoadingError = useSelector(selectIsProfileLoadingError)
	const [title, setTitle] = useState('')
	const [isMyProfile, setIsMyProfile] = useState(true)
	const params: { id?: string } = useParams()
	const id = params && params.id

	useEffect(() => {
		if (id) {
			if (user && id == user.id.toString()) {
				dispatch(getProfile(user.id.toString(), true))
				setTitle('Мой профиль')
				setIsMyProfile(true)
			} else {
				dispatch(getProfile(id, false))
				setTitle('Профиль')
				setIsMyProfile(false)
			}
		} else if (user && user.id) {
			dispatch(getProfile(user.id.toString(), true))
			setTitle('Мой профиль')
			setIsMyProfile(true)
		}
		return () => {
			dispatch(setProfile(null, false))
		}
	}, [dispatch, id])

	const repeatLoading = () => {
		if (id) {
			if (user && id == user.id.toString()) {
				dispatch(getProfile(user.id.toString(), true))
			} else {
				dispatch(getProfile(id, false))
			}
		} else if (user && user.id) {
			dispatch(getProfile(user.id.toString(), true))
		}
	}

	if (isLoading) {
		return (
			<div className="full-page d-flex ai-center jc-center">
				<Loader />
			</div>
		)
	}
	if (profileData && !profileData.id) {
		return (
			<div className="full-page d-flex flex-column ai-center jc-center flex-wrap">
				<p className="full-width text-align-center margin-bottom-x2 sectionText text-uppercase">Профиля с таким id не существует</p>
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
