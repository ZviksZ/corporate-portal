import React from 'react'
import { Breadcrumbs } from '@material-ui/core'
import s from './AppBreadcrumbs.module.scss'
type Props = {
	children?: React.ReactNode
}

export const AppBreadcrumbs: React.FC<Props> = ({ children }) => {
	return (
		<Breadcrumbs aria-label="breadcrumb" className={s.breadcrumbs}>
			{children}
		</Breadcrumbs>
	)
}
