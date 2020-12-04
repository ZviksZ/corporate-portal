import * as React from 'react'
import s from '../MemberCard.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import jira from '../../../../assets/images/icons/jira.svg'
import { useState } from 'react'

export const MemberCardMain: React.FC = () => {
	const [showEmployment, setShowEmployment] = useState(false)

	const showMoreTimes = (e: React.MouseEvent<HTMLLIElement>) => {
		e.stopPropagation()
		e.preventDefault()
		setShowEmployment(true)
	}
	return (
		<div className={s.memberMain}>
			<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={''}>
				OR
			</Avatar>
			<div className={s.memberMainData}>
				<div className={s.name}>Колесников Михаил</div>
				<div className={s.position}>Руководитель Департамента ИТ</div>
				<div className="sectionSubtitle">Занятость на текущий день:</div>
				<ul className={cn('sectionList', s.employmentList, { [s.employmentListBig]: showEmployment })}>
					{[1, 2, 3, 4].map((item, key) => {
						if (!showEmployment) {
							if (key < 3) {
								return (
									<li className={cn('sectionListItem', s.employmentListItem)} key={key}>
										{/*с {item.from} до {item.to}*/}с 09:00 до 10:30
									</li>
								)
							}
						} else {
							return (
								<li className={cn('sectionListItem', s.employmentListItem)} key={key}>
									{/*с {item.from} до {item.to}*/}с 09:00 до 10:30
								</li>
							)
						}
					})}
					{!showEmployment && (
						<li onClick={showMoreTimes}>
							<span>еще</span>
						</li>
					)}
				</ul>
				<object type="owo/uwu">
					<a onClick={(e) => e.stopPropagation()} href={``} className="link-with-icon margin-bottom">
						<img src={jira} alt="" width={'18px'} />
						<span>Открытые задачи</span>
					</a>
				</object>
			</div>
		</div>
	)
}
