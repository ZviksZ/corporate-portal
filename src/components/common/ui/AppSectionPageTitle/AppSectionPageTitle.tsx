import React from 'react'
import cn from 'classnames'
import s from './AppSectionPageTitle.module.scss'

type Props = {
	additionalClasses?: string
	isSmallPageTitle?: boolean
	onClick?: any
}

export const AppSectionPageTitle: React.FC<Props> = ({ onClick, additionalClasses, children, isSmallPageTitle = false }) => {
	return (
		<h1 onClick={onClick} className={cn(s.sectionPageTitle, {[s.sectionPageTitleSmall]: isSmallPageTitle}, additionalClasses)}>{children}</h1>
	)
}
