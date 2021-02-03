import React from 'react'
import cn from 'classnames'
import s from './AppSectionSubtitle.module.scss'

type Props = {
	additionalClasses?: string
	isBigSubtitle?: boolean
	onClick?: any
}

export const AppSectionSubtitle: React.FC<Props> = ({ onClick, additionalClasses, children, isBigSubtitle = false }) => {
	return <div onClick={onClick} className={cn(s.sectionSubtitle, { [s.sectionBigSubtitle]: isBigSubtitle }, additionalClasses)}>{children}</div>
}
