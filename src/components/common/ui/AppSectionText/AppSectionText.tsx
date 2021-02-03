import React from 'react'
import cn from 'classnames'
import s from './AppSectionText.module.scss'

type Props = {
	additionalClasses?: string
	isTextSmall?: boolean
	isTextWith?: boolean
	onClick?: any
}

export const AppSectionText: React.FC<Props> = ({ onClick, additionalClasses, children, isTextSmall = false, isTextWith = false }) => {
	return (
		<p onClick={onClick} className={cn(s.sectionText, { [s.sectionTextSmall]: isTextSmall }, { [s.sectionTextWith]: isTextWith }, additionalClasses)}>
			{children}
		</p>
	)
}
