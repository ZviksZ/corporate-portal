import React from 'react'
import cn from 'classnames'
import s from './AppSectionTitle.module.scss'

type Props = {
	additionalClasses?: string
	onClick?: any
}

export const AppSectionTitle: React.FC<Props> = ({ onClick, additionalClasses, children }) => {
	return (
		<h4 onClick={onClick} className={cn(s.sectionTitle, additionalClasses)}>{children}</h4>
	)
}
