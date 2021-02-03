import React from 'react'
import cn from 'classnames'
import s from './AppSectionSubtitle.module.scss'

type Props = {
	additionalClasses?: string
	isBigSubtitle?: boolean
}

export const AppSectionSubtitle: React.FC<Props> = ({ additionalClasses, children, isBigSubtitle = false }) => {
	return <div className={cn(s.sectionSubtitle, { [s.sectionBigSubtitle]: isBigSubtitle }, additionalClasses)}>{children}</div>
}
