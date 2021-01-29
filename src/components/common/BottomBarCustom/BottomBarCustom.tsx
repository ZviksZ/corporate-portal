import React from 'react'
import cn from 'classnames'
import s from './BottomBarCustom.module.scss'
import { AppBar } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import { AppButton } from '../AppButton/AppButton'

type Props = {
	onCancel: () => void
	onSave: () => void
	isOpen: boolean
}

export const BottomBarCustom: React.FC<Props> = ({ onCancel, onSave, isOpen }) => {
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
