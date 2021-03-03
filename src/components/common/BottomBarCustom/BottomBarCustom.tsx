import React, { useCallback, useEffect } from 'react'
import cn from 'classnames'
import s from './BottomBarCustom.module.scss'
import { AppBar } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import { AppButton } from '../ui/AppButton/AppButton'

type Props = {
	onCancel: () => void
	onSave: () => void
	isOpen: boolean
}

export const BottomBarCustom: React.FC<Props> = ({ onCancel, onSave, isOpen }) => {
	const keyPressHandler = useCallback(
		(e: KeyboardEvent) => {
			if (!isOpen) return false

			if (e.key === 'Enter') {
				onSave()
			} else if (e.key === 'Escape') {
				onCancel()
			}
		},
		[isOpen])

	useEffect(() => {
		window.addEventListener('keydown', keyPressHandler)

		return () => {
			window.removeEventListener('keydown', keyPressHandler)
		}
	}, [isOpen])

	return (
		<AppBar className={cn('navbar', s.appbarBottom, { [s.appbarBottomShow]: isOpen })} position="fixed" color="default">
			<Toolbar className={cn(s.editButtons)}>
				<AppButton size={'large'} onClick={onCancel} additionalClasses={'text-uppercase'} additionalType={'default'}>
					Отмена
				</AppButton>
				<AppButton size={'large'} onClick={onSave} additionalClasses={'margin-left-x3 text-uppercase'}>
					Сохранить
				</AppButton>
			</Toolbar>
		</AppBar>
	)
}
