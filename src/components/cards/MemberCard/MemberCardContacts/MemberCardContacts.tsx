import * as React from 'react'
import s from '../MemberCard.module.scss'
import cn from 'classnames'
import { ClipboardCopy } from '../../../common/ClipboardCopy/ClipboardCopy'
import slack from '../../../../assets/images/icons/slack.svg'
import { Member } from '../../../../store/ducks/units/contracts/state'

type Props = {
	member: Member
}

export const MemberCardContacts: React.FC<Props> = ({ member }) => {
	return (
		<div className={s.memberContacts}>
			<div className="sectionSubtitle">Контактный Email</div>
			<p className={cn('sectionText', 'sectionTextWith')}>
				<a href={'mailto:example@mail.ru'} className="sectionTextContent">
					example@mail.ru
				</a>
				<ClipboardCopy text={'example@mail.ru'} />
			</p>
			<div className="sectionSubtitle">Мобильный телефон</div>
			<p className={cn('sectionText', 'sectionTextWith')}>
				{'+7 900 000 00 00, +7 800 000 55 66'.split(',').map((item, index) => (
					<a key={item + index} href={'tel:' + item} className={cn('sectionTextContent', 'sectionTextPhone')}>
						{item}
					</a>
				))}
			</p>
			<p className={cn('sectionText', 'sectionTextWith', 'no-margin-bottom')}>
				<img src={slack} className="sectionTextLogo" alt="" />
				<a href={'mailto:example@mail.ru'} className="sectionTextContent">
					example@mail.ru
				</a>
				<ClipboardCopy text={'example@mail.ru'} />
			</p>
		</div>
	)
}
