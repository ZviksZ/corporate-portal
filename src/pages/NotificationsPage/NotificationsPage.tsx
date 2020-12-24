import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Loader } from '../../components/common/Loader/Loader'
import { Button } from '@material-ui/core'
import { selectIsAbsencesLoading, selectIsAbsencesLoadingError, selectAbsences } from '../../store/ducks/absences/selectors'
import { getAllAbsences, setAllAbsences } from '../../store/ducks/absences/actionCreators'
import { NotificationCard } from '../../components/cards/NotificationCard/NotificationCard'
import { selectGlobal } from '../../store/ducks/global/selectors'

export const NotificationsPage: React.FC = () => {
	const dispatch = useDispatch()
	const { user } = useSelector(selectGlobal)
	const { allAbsences } = useSelector(selectAbsences)
	const isLoading = useSelector(selectIsAbsencesLoading)
	const isLoadingError = useSelector(selectIsAbsencesLoadingError)

	let interval: any

	useEffect(() => {
		if (user) {
			dispatch(getAllAbsences(user.id))
			interval = setInterval(() => {
				dispatch(getAllAbsences(user.id))
			}, 60000)
		}
		return () => {
			dispatch(setAllAbsences(null))
			clearInterval(interval)
		}
	}, [])

	const repeatLoading = () => {
		if (user) {
			clearInterval(interval)
			dispatch(getAllAbsences(user.id))
			interval = setInterval(() => {
				dispatch(getAllAbsences(user.id))
			}, 60000)
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
				<h1 className="section-title-small">Список уведомлений</h1>

				{allAbsences && allAbsences.length > 0 ? (
					<>
						{allAbsences.map((notification) => (
							<NotificationCard item={notification} key={notification.id} />
						))}
					</>
				) : (
					<p className="full-width text-align-center margin-bottom-x2 sectionText text-uppercase">Уведомлений нет</p>
				)}
			</div>
		</section>
	)
}
