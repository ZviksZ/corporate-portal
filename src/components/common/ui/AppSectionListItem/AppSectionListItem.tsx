import React from 'react'
import cn from 'classnames'
import s from './AppSectionListItem.module.scss'

type Props = {
	additionalClasses?: string
}

export const AppSectionListItem: React.FC<Props> = ({ additionalClasses, children }) => {
	return <li className={cn(s.sectionListItem, additionalClasses)}>
		{children}
	</li>
}
