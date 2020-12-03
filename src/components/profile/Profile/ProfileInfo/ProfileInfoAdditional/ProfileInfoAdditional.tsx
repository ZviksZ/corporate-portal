import * as React from 'react'
import cn from 'classnames'
import s from '../../Profile.module.scss'
import { Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

export const ProfileInfoAdditional: React.FC = () => {
	return (
		<>
			<h4 className={cn(s.profileTitle, 'margin-bottom-x2', 'margin-top-x2')}>Дополнительная информация</h4>
			<div className={s.teamAdditional}>
				<div className={s.item}>
					<div className={s.position}>Подчинённые</div>
					<div className={s.membersList}>
						<NavLink className={s.membersListItem} to={`/profile/${'id'}`}>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<span className={s.name}>Степанов Виктор Сергеевич</span>
						</NavLink>
						<NavLink className={s.membersListItem} to={`/profile/${'id'}`}>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<span className={s.name}>Степанов Виктор Сергеевич</span>
						</NavLink>
						<NavLink className={s.membersListItem} to={`/profile/${'id'}`}>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<span className={s.name}>Степанов Виктор Сергеевич</span>
						</NavLink>
						<NavLink className={s.membersListItem} to={`/profile/${'id'}`}>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<span className={s.name}>Степанов Виктор Сергеевич</span>
						</NavLink>
					</div>
				</div>

				<div className={s.item}>
					<div className={s.position}>Руководитель</div>
					<div className={s.membersList}>
						<NavLink className={s.membersListItem} to={`/profile/${'id'}`}>
							<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={'../img/1.jpg'} aria-controls="simple-menu" aria-haspopup="true">
								OP
							</Avatar>
							<span className={s.name}>Колесников Михаил павлович</span>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	)
}
