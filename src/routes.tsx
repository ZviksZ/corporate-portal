import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './components/common/Navbar/Navbar'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { GlobalMessage } from './components/common/GlobalMessage/GlobalMessage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'

export const useRoutes = (isAuthenticated = false, userType = '') => {
	if (isAuthenticated) {
		return (
			<>
				<Navbar />
				<GlobalMessage />
				<div className="header-margin"></div>
				<Switch>
					<Route path="/profile/" exact>
						<ProfilePage />
					</Route>
					<Route path="/profile/:id" exact>
						<ProfilePage />
					</Route>
					<Route path="/" render={() => <Redirect to="/" />} />
				</Switch>
			</>
		)
	}

	return (
		<>
			<Navbar />
			<GlobalMessage />
			<Switch>
				<Route path="/">
					<AuthPage />
				</Route>
			</Switch>
		</>
	)
}
