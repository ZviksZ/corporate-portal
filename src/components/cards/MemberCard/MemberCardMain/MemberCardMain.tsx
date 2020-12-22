import * as React from 'react'
import s from '../MemberCard.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import jira from '../../../../assets/images/icons/jira.svg'
import { useState } from 'react'
import { MemberDetailInterface } from '../../../../store/ducks/units/contracts/state'
import { getInitialsFromName } from '../../../../services/helpers/utils'

type Props = {
	member: MemberDetailInterface
}

export const MemberCardMain: React.FC<Props> = ({ member }) => {
	const [showEmployment, setShowEmployment] = useState(false)

	const showMoreTimes = (e: React.MouseEvent<HTMLLIElement>) => {
		e.stopPropagation()
		e.preventDefault()
		setShowEmployment(true)
	}
	return (
		<div className={s.memberMain}>
			<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={member.photo}>
				{getInitialsFromName(member.name)}
			</Avatar>
			<div className={s.memberMainData}>
				<div className={s.name}>{member.name}</div>
				<div className={s.position}>{member.position}</div>
				{member.employment && member.employment.length > 0 && (
					<>
						<div className="sectionSubtitle">Занятость на текущий день:</div>
						<ul className={cn('sectionList', s.employmentList, { [s.employmentListBig]: showEmployment })}>
							{member.employment.map((item, key) => {
								if (!showEmployment) {
									if (key < 3) {
										return (
											<li className={cn('sectionListItem', s.employmentListItem)} key={key}>
												с {item.dateStart} до {item.dateEnd}
											</li>
										)
									}
								} else {
									return (
										<li className={cn('sectionListItem', s.employmentListItem)} key={key}>
											с {item.dateStart} до {item.dateEnd}
										</li>
									)
								}
							})}
							{!showEmployment && member.employment && member.employment.length > 3 && (
								<li onClick={showMoreTimes}>
									<span>еще</span>
								</li>
							)}
						</ul>
					</>
				)}

				{
					member.openTasksLink && 	<object type="owo/uwu">
						<a onClick={(e) => e.stopPropagation()} href={member.openTasksLink} className="link-with-icon margin-bottom">
							<img src={jira} alt="" width={'18px'} />
							<span>Открытые задачи</span>
						</a>
					</object>
				}

			</div>
		</div>
	)
}
