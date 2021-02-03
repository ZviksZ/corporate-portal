import React from 'react'
import s from './AppIcon.module.scss'
import cn from 'classnames'

type Props = {
	iconClass: string
	classNames?: string
	onClick?: any
}

export const AppIcon: React.FC<Props> = ({ onClick, iconClass, classNames }) => {
	return <i onClick={onClick} className={cn(s.icon, s[iconClass], classNames)}></i>
}
