import * as React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const ProfilePage: React.FC = () => {
	const dispatch = useDispatch()
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
			</div>
		</section>
	)
}
