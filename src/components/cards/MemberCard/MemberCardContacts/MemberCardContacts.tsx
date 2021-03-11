import * as React from 'react'
import s from '../MemberCard.module.scss'
import cn from 'classnames'
import { ClipboardCopy } from '../../../common/ClipboardCopy/ClipboardCopy'
import slack from '../../../../assets/images/icons/slack.svg'
import { MemberDetailInterface } from '../../../../store/ducks/units/contracts/state'
import { stopPropagation } from '../../../../services/helpers/utils'
import { AppSectionSubtitle } from '../../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { AppSectionText } from '../../../common/ui/AppSectionText/AppSectionText'
import { AppSectionTextContent } from '../../../common/ui/AppSectionText/AppSectionTextContent/AppSectionTextContent'

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
					<AppSectionText isTextWith={true}>
						<object type="owo/uwu">
							<AppSectionTextContent onClick={stopPropagation} href={'mailto:' + member.email}>{member.email}</AppSectionTextContent>
						</object>

						<ClipboardCopy text={member.email || ''} />
					</AppSectionText>
				</>
			)}
			{member.mobilePhone && (
				<>
					<AppSectionSubtitle>Мобильный телефон</AppSectionSubtitle>
					<object type="owo/uwu">
						<AppSectionText isTextWith={true} additionalClasses={s.phones}>
							{member.mobilePhone.split(',').map((item, index) => {
								if (item) {
									return (
										<AppSectionTextContent key={item + index} isPhone={true} onClick={stopPropagation} href={'tel:' + item}>{item}</AppSectionTextContent>
									)
								}
							})}
						</AppSectionText>
					</object>
				</>
			)}
			{member.slackEmail && (
				<>
					<AppSectionText isTextWith={true} additionalClasses={'no-margin-bottom'}>
						<img src={slack} className={s.textLogo} alt="" />
						<object type="owo/uwu">
							<AppSectionTextContent onClick={stopPropagation} href={'slack://user?team=T0B1Q7NR2&id=' + member.slackEmail || ''}>{member.slackEmail}</AppSectionTextContent>
						</object>
						<ClipboardCopy text={member.slackEmail || ''} />
					</AppSectionText>
				</>
			)}
		</div>
	)
}
