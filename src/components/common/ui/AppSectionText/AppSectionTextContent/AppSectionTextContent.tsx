import React from 'react'
import s from '../AppSectionText.module.scss'
import cn from 'classnames'

type Props = {
	href?: string
	isLink?: boolean
	isPhone?: boolean
	onClick?: any
	additionalClasses?: string
}

export const AppSectionTextContent: React.FC<Props> = ({ onClick, children, isLink = true, isPhone = false, href, additionalClasses }) => {
	return (
		<>
			{isLink ? (
				<a onClick={onClick} href={href} className={cn(s.sectionTextContent, { [s.sectionTextPhone]: isPhone }, additionalClasses)}>
					{children}
				</a>
			) : (
				<span onClick={onClick} className={cn(s.sectionTextContent, { [s.sectionTextPhone]: isPhone }, additionalClasses)}>
					{children}
				</span>
			)}
		</>
	)
}
