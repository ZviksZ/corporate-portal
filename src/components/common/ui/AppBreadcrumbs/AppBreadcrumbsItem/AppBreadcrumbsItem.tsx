import React from 'react'
import s from '../AppBreadcrumbs.module.scss'
import { NavLink } from 'react-router-dom'

type Props = {
	children?: React.ReactNode
	isLink?: boolean
	href?: string
}

export const AppBreadcrumbsItem: React.FC<Props> = ({ children, isLink = true, href }) => {
	return (
		<>
			{isLink ? (
				<NavLink to={href || '/'} className={s.breadcrumbsItem}>
					{children}
				</NavLink>
			) : (
				<span className={s.breadcrumbsItem}>{children}</span>
			)}
		</>
	)
}
