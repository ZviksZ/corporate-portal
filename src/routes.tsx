import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './components/common/Navbar/Navbar'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { GlobalMessage } from './components/common/GlobalMessage/GlobalMessage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { TeamsPage } from './pages/TeamsPage/TeamsPage'
import { TeamsDetailPage } from './pages/TeamsDetailPage/TeamsDetailPage'
import { UnitsPage } from './pages/UnitsPage/UnitsPage'
import { UnitDetailPage } from './pages/UnitDetailPage/UnitDetailPage'
import { TeamsSquadPage } from './pages/TeamsSquadPage/TeamsSquadPage'
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage'
import { ProjectsDetailPage } from './pages/ProjectsDetailPage/ProjectsDetailPage'
import { NotificationsPage } from './pages/NotificationsPage/NotificationsPage'

export const useRoutes = (isAuthenticated = false, userRole: string) => {
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
						<TeamsPage />
					</Route>
					<Route path="/teams/:id" exact>
						<TeamsDetailPage />
					</Route>
					<Route path="/teams/:id/squad" exact>
						<TeamsSquadPage />
					</Route>
					<Route path="/units" exact>
						<UnitsPage />
					</Route>
					<Route path="/units/:id" exact>
						<UnitDetailPage />
					</Route>
					<Route path="/projects" exact>
						<ProjectsPage />
					</Route>
					<Route path="/projects/:id" exact>
						<ProjectsDetailPage />
					</Route>
					<Route path="/notifications" exact>
						<NotificationsPage />
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
				<Route path="/">
					<AuthPage />
				</Route>
				{/*<Route path="/" render={() => <Redirect to="/" />} />*/}
			</Switch>
		</div>
	)
}
