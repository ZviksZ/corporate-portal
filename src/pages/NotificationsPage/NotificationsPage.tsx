import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Loader } from '../../components/common/Loader/Loader'
import { Button } from '@material-ui/core'
import { selectIsNotificationsLoading, selectIsNotificationsLoadingError, selectNotifications } from '../../store/ducks/notifications/selectors'
import { getAllNotifications, setAllNotifications } from '../../store/ducks/notifications/actionCreators'
import { NotificationCard } from '../../components/cards/NotificationCard/NotificationCard'

export const NotificationsPage: React.FC = () => {
	const dispatch = useDispatch()
	const { allNotifications } = useSelector(selectNotifications)
	const isLoading = useSelector(selectIsNotificationsLoading)
	const isLoadingError = useSelector(selectIsNotificationsLoadingError)
	useEffect(() => {
		dispatch(getAllNotifications())

		return () => {
			dispatch(setAllNotifications(null))
		}
	}, [])

	const repeatLoading = () => {
		dispatch(getAllNotifications())
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

				{allNotifications && allNotifications.list.length > 0 ? (
					<>
						{allNotifications.list.map((notification) => (
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
