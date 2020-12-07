import * as React from 'react'
import s from '../MemberCard.module.scss'
import cn from 'classnames'
import { ClipboardCopy } from '../../../common/ClipboardCopy/ClipboardCopy'
import slack from '../../../../assets/images/icons/slack.svg'
import { MemberDetail } from '../../../../store/ducks/units/contracts/state'

type Props = {
	member: MemberDetail
}

export const MemberCardContacts: React.FC<Props> = ({ member }) => {
	if (!member) {
		return <></>
	}
	return (
		<div className={s.memberContacts}>
			<div className="sectionSubtitle">Контактный Email</div>
			<p className={cn('sectionText', 'sectionTextWith')}>
				<object type="owo/uwu">
					<a onClick={(e) => e.stopPropagation()} href={'mailto:' + member.email} className="sectionTextContent">
						{member.email}
					</a>
				</object>

				<ClipboardCopy text={member.email || ''} />
			</p>
			<div className="sectionSubtitle">Мобильный телефон</div>
			<p className={cn('sectionText', 'sectionTextWith')}>
				{member.mobilePhone &&
					member.mobilePhone.split(',').map((item, index) => (
						<object type="owo/uwu">
							<a onClick={(e) => e.stopPropagation()} key={item + index} href={'tel:' + item} className={cn('sectionTextContent', 'sectionTextPhone')}>
								{item}
							</a>
						</object>
					))}
			</p>
			<p className={cn('sectionText', 'sectionTextWith', 'no-margin-bottom')}>
				<img src={slack} className="sectionTextLogo" alt="" />
				<object type="owo/uwu">
					<a onClick={(e) => e.stopPropagation()} href={'mailto:' + member.slackEmail} className="sectionTextContent">
						{member.slackEmail}
					</a>
				</object>
				<ClipboardCopy text={member.slackEmail || ''} />
			</p>
		</div>
	)
}
