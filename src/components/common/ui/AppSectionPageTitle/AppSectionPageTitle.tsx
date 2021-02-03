import React from 'react'
import cn from 'classnames'
import s from './AppSectionPageTitle.module.scss'

type Props = {
	additionalClasses?: string
	isSmallPageTitle?: boolean
}

export const AppSectionPageTitle: React.FC<Props> = ({ additionalClasses, children, isSmallPageTitle = false }) => {
	return (
		<h1 className={cn(s.sectionPageTitle, {[s.sectionPageTitleSmall]: isSmallPageTitle}, additionalClasses)}>{children}</h1>
	)
}
