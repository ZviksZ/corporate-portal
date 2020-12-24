import React, { useEffect } from 'react'
import { useRoutes } from './routes'
import { Loader } from './components/common/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { selectGlobal, selectIsGlobalLoading, selectIsGlobalLoadingError, selectIsGlobalLoadingNever, selectIsGlobalLoadingSuccess } from './store/ducks/global/selectors'
import { getCookieUser } from './store/ducks/global/actionCreators'
import { getMembers } from './store/ducks/teams/actionCreators'
import { getAbsences } from './store/ducks/absences/actionCreators'

export const App: React.FC = () => {
	const { user } = useSelector(selectGlobal)
	const isLoading = useSelector(selectIsGlobalLoading)
	const isLoadingError = useSelector(selectIsGlobalLoadingError)
	const isLoadingNever = useSelector(selectIsGlobalLoadingNever)
	const dispatch = useDispatch()
	const isAuth = !!user
	const routes = useRoutes(isAuth, (user && user.role) || '')

	useEffect(() => {
		dispatch(getCookieUser())
	}, [])

	useEffect(() => {
		if (isAuth && user?.id) {
			dispatch(getMembers())
			dispatch(getAbsences(user.id))
			setInterval(() => {
				dispatch(getCookieUser())
				dispatch(getAbsences(user.id))
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
	if (isLoadingError && user) {
		return <div className="full-page d-flex ai-center jc-center">Ошибка при загрузке приложения</div>
	}

	return (
		<>
			<div className="app-wrapper">{routes}</div>
		</>
	)
}
