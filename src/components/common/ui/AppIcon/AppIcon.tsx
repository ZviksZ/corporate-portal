import React from 'react'
import s from './AppIcon.module.scss'
import cn from 'classnames'

type Props = {
	iconClass: string
	classNames?: string
}

export const AppIcon: React.FC<Props> = ({ iconClass, classNames }) => {
	return <i className={cn(s.icon, s[iconClass], classNames)}></i>
}
