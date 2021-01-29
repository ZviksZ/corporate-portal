// @ts-nocheck
import Button from '@material-ui/core/Button'
import React from 'react'
import cn from 'classnames'
import s from './AppButton.module.scss'

type Props = {
	size?: 'small' | 'medium' | 'large'
	onClick?: () => void
	additionalType?: 'default' | 'dangerous' | 'secondary' | 'fullWidth'
	additionalClasses?: string
	variant?: 'text' | 'outlined' | 'contained'
	type?: 'button' | 'submit' | 'reset' | undefined
	href?: string | undefined
	to?: string | undefined
	component?: React.ReactNode
}

export const AppButton: React.FC<Props> = ({ to, component, href, type, variant, size, onClick, children, additionalClasses = '', additionalType = '' }) => {
	return (
		<Button size={size} to={to} component={component} href={href} variant={variant} type={type} className={cn(s.btn, s[additionalType], additionalClasses)} onClick={onClick}>
			{children}
		</Button>
	)
}
