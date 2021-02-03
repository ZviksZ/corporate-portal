import React from 'react'
import cn from 'classnames'
import s from './AppSectionTitle.module.scss'

type Props = {
	additionalClasses?: string
}

export const AppSectionTitle: React.FC<Props> = ({ additionalClasses, children }) => {
	return (
		<h4 className={cn(s.sectionTitle, additionalClasses)}>{children}</h4>
	)
}
