import React from 'react'
import cn from 'classnames'
import s from './AppSectionListItem.module.scss'

type Props = {
	additionalClasses?: string
	onClick?: any
}

export const AppSectionListItem: React.FC<Props> = ({ onClick, additionalClasses, children }) => {
	return <li onClick={onClick} className={cn(s.sectionListItem, additionalClasses)}>
		{children}
	</li>
}
