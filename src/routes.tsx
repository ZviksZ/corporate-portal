import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './components/common/Navbar/Navbar'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { GlobalMessage } from './components/common/GlobalMessage/GlobalMessage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'

export const useRoutes = (isAuthenticated = false, userType = '') => {
	if (isAuthenticated) {
		return (
			<div>
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
					<Route path="/teams" exact>
						Teams
					</Route>
					<Route path="/teams/:id" exact>
						Teams detail
					</Route>
					<Route path="/units" exact>
						units
					</Route>
					<Route path="/units/:id" exact>
						units detail
					</Route>
					<Route path="/projects" exact>
						projects
					</Route>
					<Route path="/projects/:id" exact>
						projects detail
					</Route>
					<Route path="/" render={() => <Redirect to="/profile" />} />
				</Switch>
			</div>
		)
	}

	return (
		<div>
			<Navbar />
			<GlobalMessage />
			<Switch>
				<Route path="/" exact>
					<AuthPage />
				</Route>
				<Route path="/" render={() => <Redirect to="/" />} />
			</Switch>
		</div>
	)
}
