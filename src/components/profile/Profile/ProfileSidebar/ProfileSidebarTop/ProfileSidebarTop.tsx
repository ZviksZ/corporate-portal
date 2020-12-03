import * as React from 'react'
import s from '../../Profile.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import slack from '../../../../../assets/images/icons/slack.svg'
import vk from '../../../../../assets/images/icons/vk.svg'
import wiki from '../../../../../assets/images/icons/wiki.svg'
import yandex from '../../../../../assets/images/icons/yandex.svg'
import facebook from '../../../../../assets/images/icons/facebook.svg'
import jira from '../../../../../assets/images/icons/jira.svg'
import confluence from '../../../../../assets/images/icons/confluence.svg'
import atlassian from '../../../../../assets/images/icons/atlassian.svg'
import google from '../../../../../assets/images/icons/google.svg'
import service from '../../../../../assets/images/icons/service.svg'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'

export const ProfileSidebarTop: React.FC = () => {
	const { profileData } = useSelector(selectProfile)

	if (!profileData) {
		return <></>
	}

	return (
		<div className={s.sidebarTop}>
			<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={profileData.image}>
				{profileData.name[0]}
				{profileData.surname[0]}
			</Avatar>

			<div className={s.name}>
				{profileData.surname} {profileData.name} {profileData.patronymic}
			</div>
			<div className={s.position}>{profileData.position}</div>
			<div className={s.department}>{profileData.department}</div>
			<div className={s.links}>
				{profileData.socials.map((item) => {
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
						<a key={item.type} href={item.link} rel="noopener" target="_blank">
							<img src={src} alt="" />
						</a>
					)
				})}
			</div>
		</div>
	)
}
