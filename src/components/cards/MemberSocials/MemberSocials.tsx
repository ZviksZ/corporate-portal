import * as React from 'react'
import s from './MemberSocials.module.scss'
import yandex from '../../../assets/images/icons/yandex.svg'
import atlassian from '../../../assets/images/icons/atlassian.svg'
import slack from '../../../assets/images/icons/slack.svg'
import vk from '../../../assets/images/icons/vk.svg'
import wiki from '../../../assets/images/icons/wiki.svg'
import facebook from '../../../assets/images/icons/facebook.svg'
import jira from '../../../assets/images/icons/jira.svg'
import confluence from '../../../assets/images/icons/confluence.svg'
import { SocialsInterface } from '../../../store/ducks/profile/contracts/state'

type Props = {
	socials: SocialsInterface[]
}

export const MemberSocials: React.FC<Props> = ({ socials }) => {
	return (
		<div className={s.links}>
			{socials.map((item) => {
				let src
				switch (item.type) {
					case 'yandex':
						src = yandex
						break
					case 'atlassian':
						src = atlassian
						break
					case 'slack':
						src = slack
						break
					case 'vk':
						src = vk
						break
					case 'wiki':
						src = wiki
						break
					case 'facebook':
						src = facebook
						break
					case 'jira':
						src = jira
						break
					case 'confluence':
						src = confluence
						break
					case 'google':
						src = jira
						break
					case 'service':
						src = confluence
						break
					default:
						break
				}
				return (
					<a key={item.type} href={item.link} rel="noopener noreferrer" target="_blank">
						<img src={src} alt="" />
					</a>
				)
			})}
		</div>
	)
}
