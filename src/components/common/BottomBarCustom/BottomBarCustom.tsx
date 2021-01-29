import React from 'react'
import cn from 'classnames'
import s from './BottomBarCustom.module.scss'
import { AppBar } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

type Props = {
	onCancel: () => void
	onSave: () => void
	isOpen: boolean
}

export const BottomBarCustom: React.FC<Props> = ({ onCancel, onSave, isOpen }) => {
	return (
		<AppBar className={cn('navbar', s.appbarBottom, { [s.appbarBottomShow]: isOpen })} position="fixed" color="default">
			<Toolbar className={cn(s.editButtons)}>
				<Button size="large" className="btn btn-default text-uppercase" onClick={onCancel}>
					Отмена
				</Button>
				<Button size="large" className="btn margin-left-x3 text-uppercase" onClick={onSave}>
					Сохранить
				</Button>
			</Toolbar>
		</AppBar>
	)
}
