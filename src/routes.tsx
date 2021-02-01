import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from './components/common/Navbar/Navbar'
import { GlobalMessage } from './components/common/GlobalMessage/GlobalMessage'
import { Loader } from './components/common/Loader/Loader'

const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'))
const TeamsPage = lazy(() => import('./pages/TeamsPage/TeamsPage'))
const TeamsDetailPage = lazy(() => import('./pages/TeamsDetailPage/TeamsDetailPage'))
const UnitsPage = lazy(() => import('./pages/UnitsPage/UnitsPage'))
const UnitDetailPage = lazy(() => import('./pages/UnitDetailPage/UnitDetailPage'))
const TeamsSquadPage = lazy(() => import('./pages/TeamsSquadPage/TeamsSquadPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/ProjectsPage'))
const ProjectsDetailPage = lazy(() => import('./pages/ProjectsDetailPage/ProjectsDetailPage'))
const NotificationsPage = lazy(() => import('./pages/NotificationsPage/NotificationsPage'))

export const useRoutes = (isAuthenticated = false, userRole: string) => {


	if (isAuthenticated) {
		return (
			<div>
				<Navbar />
				<GlobalMessage />
				<div className="header-margin"></div>
				<Suspense fallback={<div className="full-page d-flex ai-center jc-center">
					<Loader />
				</div>}>
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
				</Suspense>
			</div>
		)
	}

	return (
		<div>
			<Navbar />
			<GlobalMessage />
			<Suspense fallback={<div className="full-page d-flex ai-center jc-center">
				<Loader />
			</div>}>
				<Switch>
					<Route path="/">
						<AuthPage />
					</Route>
					{/*<Route path="/" render={() => <Redirect to="/" />} />*/}
				</Switch>
			</Suspense>
		</div>
	)
}
