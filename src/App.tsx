import React, { useEffect } from 'react'
import { useRoutes } from './routes'
import { Loader } from './components/common/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { selectGlobal, selectIsGlobalLoading, selectIsGlobalLoadingError, selectIsGlobalLoadingNever } from './store/ducks/global/selectors'
import { getCookieUser } from './store/ducks/global/actionCreators'
import { getMembers } from './store/ducks/teams/actionCreators'
import { getNotifications } from './store/ducks/notifications/actionCreators'

export const App: React.FC = () => {
	const { user } = useSelector(selectGlobal)
	const isLoading = useSelector(selectIsGlobalLoading)
	const isLoadingError = useSelector(selectIsGlobalLoadingError)
	const isLoadingNever = useSelector(selectIsGlobalLoadingNever)
	const dispatch = useDispatch()
	const isAuth = !!user
	const routes = useRoutes(isAuth, '')

	useEffect(() => {
		dispatch(getCookieUser())
	}, [])

	useEffect(() => {
		if (isAuth) {
			dispatch(getMembers())
			dispatch(getNotifications())
			setInterval(() => {
				dispatch(getNotifications())
			}, 60000)
		}
	}, [isAuth])

	if (isLoading || isLoadingNever) {
		return (
			<div className="full-page d-flex ai-center jc-center">
				<Loader />
			</div>
		)
	}
	if (isLoadingError) {
		return <div className="full-page d-flex ai-center jc-center">Ошибка при загрузке приложения</div>
	}

	return (
		<>
			<div className="app-wrapper">{routes}</div>
		</>
	)
}
