import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'

export const useRoutes = (isAuthenticated = false, userActionsType = '') => {
	if (isAuthenticated) {
		return (
			<Switch>
				<Route path="/kanban">kanban</Route>
				<Route path="/" render={() => <Redirect to="/" />} />
			</Switch>
		)
	}

	return (
		<>
			<Navbar />
			<Switch>
				<Route path="/">auth page</Route>
			</Switch>
		</>
	)
}
