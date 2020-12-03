import React from 'react'
import { useRoutes } from './routes'
import { Loader } from './components/common/Loader/Loader'
import { useSelector } from 'react-redux'
import { selectGlobal } from './store/ducks/global/selectors'

export const App: React.FC = () => {
	const { user, isLoading } = useSelector(selectGlobal)
	const isAuth = !!user
	const routes = useRoutes(isAuth, '')

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
