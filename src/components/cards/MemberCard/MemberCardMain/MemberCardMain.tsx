import * as React from 'react'
import s from '../MemberCard.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import jira from '../../../../assets/images/icons/jira.svg'
import { useState } from 'react'
import { MemberDetailInterface } from '../../../../store/ducks/units/contracts/state'
import { getInitialsFromName, stopPropagation } from '../../../../services/helpers/utils'
import { AppSectionSubtitle } from '../../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { AppSectionListItem } from '../../../common/ui/AppSectionListItem/AppSectionListItem'

type Props = {
	member: MemberDetailInterface
}

export const MemberCardMain: React.FC<Props> = ({ member }) => {
	const [showEmployment, setShowEmployment] = useState(false)
	const FIRST_SHOW_LIMIT = 3

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
						<AppSectionSubtitle>Занятость на текущий день:</AppSectionSubtitle>
						<ul className={cn('sectionList', s.employmentList, { [s.employmentListBig]: showEmployment })}>
							{member.employment.map((item, key) => {
								if (showEmployment || (!showEmployment && key < FIRST_SHOW_LIMIT)) {
									return (
										<AppSectionListItem key={key + item.from + item.to} additionalClasses={s.employmentListItem}>с {item.from} до {item.to}</AppSectionListItem>
									)
								}
							})}
							{!showEmployment && member.employment && member.employment.length > FIRST_SHOW_LIMIT && (
								<li onClick={showMoreTimes}>
									<span>еще</span>
								</li>
							)}
						</ul>
					</>
				)}

				{member.openTasksLink && (
					<object type="owo/uwu">
						<a onClick={stopPropagation} href={member.openTasksLink} className="link-with-icon margin-bottom">
							<img src={jira} alt="" width={'18px'} />
							<span>Открытые задачи</span>
						</a>
					</object>
				)}
			</div>
		</div>
	)
}
