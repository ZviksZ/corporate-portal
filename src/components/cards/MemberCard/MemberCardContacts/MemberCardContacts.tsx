import * as React from 'react'
import s from '../MemberCard.module.scss'
import cn from 'classnames'
import { ClipboardCopy } from '../../../common/ClipboardCopy/ClipboardCopy'
import slack from '../../../../assets/images/icons/slack.svg'
import { MemberDetailInterface } from '../../../../store/ducks/units/contracts/state'
import { stopPropagation } from '../../../../services/helpers/utils'
import { AppSectionSubtitle } from '../../../common/ui/AppSectionSubtitle/AppSectionSubtitle'

type Props = {
	member: MemberDetailInterface
}

export const MemberCardContacts: React.FC<Props> = ({ member }) => {
	if (!member) {
		return <></>
	}
	return (
		<div className={s.memberContacts}>
			{member.email && (
				<>
					<AppSectionSubtitle>Контактный Email</AppSectionSubtitle>
					<p className={cn('sectionText', 'sectionTextWith')}>
						<object type="owo/uwu">
							<a onClick={stopPropagation} href={'mailto:' + member.email} className="sectionTextContent">
								{member.email}
							</a>
						</object>

						<ClipboardCopy text={member.email || ''} />
					</p>
				</>
			)}
			{member.mobilePhone && (
				<>
					<AppSectionSubtitle>Мобильный телефон</AppSectionSubtitle>
					<object type="owo/uwu">
						<p className={cn('sectionText', 'sectionTextWith', s.phones)}>
							{member.mobilePhone.split(',').map((item, index) => {
								if (item) {
									return (
										<a onClick={stopPropagation} key={item + index} href={'tel:' + item} className={cn('sectionTextContent', 'sectionTextPhone')}>
											{item}
										</a>
									)
								}
							})}
						</p>
					</object>
				</>
			)}
			{member.slackEmail && (
				<>
					<p className={cn('sectionText', 'sectionTextWith', 'no-margin-bottom')}>
						<img src={slack} className="sectionTextLogo" alt="" />
						<object type="owo/uwu">
							<a onClick={stopPropagation} href={'mailto:' + member.email || ''} className="sectionTextContent">
								{member.slackEmail}
							</a>
						</object>
						<ClipboardCopy text={member.slackEmail || ''} />
					</p>
				</>
			)}
		</div>
	)
}
