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

export const ProfileSidebarTop: React.FC = () => {
	return (
		<div className={s.sidebarTop}>
			<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={'../img/1.jpg'}>
				OP
			</Avatar>

			<div className={s.name}>Колесников Михаил Андреевич</div>
			<div className={s.position}>Руководитель Департамента ИТ</div>
			<div className={s.department}>ООО ИА Банки.ру</div>
			<div className={s.links}>
				<a href="#" rel="noopener" target="_blank">
					<img src={jira} alt="" />
				</a>
				<a href="#" rel="noopener" target="_blank">
					<img src={google} alt="" />
				</a>
				<a href="#" rel="noopener" target="_blank">
					<img src={atlassian} alt="" />
				</a>
			</div>
		</div>
	)
}
