import React, { useEffect } from 'react'
import { useRoutes } from './routes'
import { Loader } from './components/common/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { selectGlobal } from './store/ducks/global/selectors'
import { getCookieUser } from './store/ducks/global/actionCreators'

export const App: React.FC = () => {
	const { user, isLoading } = useSelector(selectGlobal)
	const dispatch = useDispatch()
	const isAuth = !!user
	const routes = useRoutes(isAuth, '')

	useEffect(() => {
		dispatch(getCookieUser())
	}, [])

	if (isLoading) {
		return (
			<div className="full-page d-flex ai-center jc-center">
				<Loader />
			</div>
		)
	}

	return (
		<>
			<div className="app-wrapper">{routes}</div>
		</>
	)
}
