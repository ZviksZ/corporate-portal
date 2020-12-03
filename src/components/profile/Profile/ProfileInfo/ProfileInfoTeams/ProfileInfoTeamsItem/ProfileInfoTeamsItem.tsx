import * as React from 'react'
import s from '../../../Profile.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import { NavLink } from 'react-router-dom'

export const ProfileInfoTeamsItem: React.FC = () => {
	return (
		<div className={s.teamItem}>
			<div className={s.info}>
				<div className={s.name}>Команда А</div>
				<div className={s.role}>Роль: бэкенд-разработчик</div>
			</div>

			<div className={s.team}>
				<div className={s.item}>
					<div className={s.position}>Руководитель</div>
					<NavLink className={s.teamInfo} to={`/profile/${'id'}`}>
						<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
							OP
						</Avatar>
						<span className={s.name}>Колесников Михаил</span>
					</NavLink>
				</div>
				<div className={s.item}>
					<div className={s.position}>Сотрудники</div>
					<NavLink className={s.teamInfo} to={`/teams/${'id'}`}>
						<AvatarGroup max={7}>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
						</AvatarGroup>
					</NavLink>
				</div>
			</div>
		</div>
	)
}
