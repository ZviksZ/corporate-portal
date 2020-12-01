import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './components/common/Navbar/Navbar'
import { AuthPage } from './pages/AuthPage/AuthPage'

export const useRoutes = (isAuthenticated = false, userType = '') => {
	if (isAuthenticated) {
		return (
			<>
				<Navbar />
				<Switch>
					<Route path="/kanban">kanban</Route>
					<Route path="/" render={() => <Redirect to="/" />} />
				</Switch>
			</>
		)
	}

	return (
		<>
			<Navbar />
			<Switch>
				<Route path="/">
					<AuthPage />
				</Route>
			</Switch>
		</>
	)
}
