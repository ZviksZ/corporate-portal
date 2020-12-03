import * as React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Profile } from '../../components/profile/Profile/Profile'
import { ModalBlock } from '../../components/common/ModalBlock/ModalBlock'
import { ApplicationForm } from '../../components/forms/profile/ApplicationForm/ApplicationForm'

export const ProfilePage: React.FC = () => {
	const dispatch = useDispatch()
	const [login, setLogin] = useState(true)
	const params: { id?: string } = useParams()
	const id = params.id

	useEffect(() => {
		if (id) {
			//dispatch(getProduct(id))
		}

		return () => {
			//dispatch(setProduct(null))
		}
	}, [dispatch, id])

	return (
		<section className="section">
			<div className="container">
				<h1 className="h2 section-title">{id ? 'Профиль' : 'Мой профиль'}</h1>

				<Profile />

				<ModalBlock visible={login} onClose={() => setLogin(false)} title="Login">
					<ApplicationForm />
				</ModalBlock>
			</div>
		</section>
	)
}
