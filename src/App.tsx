import React from 'react'
import { useRoutes } from './routes'
import { Loader } from './components/common/Loader/Loader'

export const App: React.FC = () => {
	const routes = useRoutes(true, '')

	if (false) {
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
