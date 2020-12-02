import * as React from 'react'
import s from '../../Profile.module.scss'
import atlassian from '../../../../../assets/images/icons/atlassian.svg'
import printer from '../../../../../assets/images/icons/printer.svg'
import Button from '@material-ui/core/Button'
import cn from 'classnames'

export const ProfileSidebarBottom: React.FC = () => {
	return (
		<div className={s.sidebarBottom}>
			<div className={s.profileSubtitle}>Занятость на текущий день</div>
			<ul className={s.employmentList}>
				<li>с 09:00 до 10:30</li>
				<li>с 11:00 до 12:00</li>
				<li>с 14:00 до 15:00</li>
				<li>с 16:00 до 18:00</li>
			</ul>
			<a href="#" className="link-with-icon margin-bottom">
				<img src={atlassian} alt="" width={'18px'} />
				<span>Открытые задачи</span>
			</a>
			<div className={s.profileSubtitle}>Отпуск</div>
			<p className={cn(s.profileText, s.textGreen)}>c 12 февраля 2021 по 24 февраля 2021</p>
			<a href="#" className="link-with-icon margin-bottom" target="_blank" download>
				<img src={printer} alt="" width={'20px'} />
				<span>Заявление на отпуск.pdf</span>
			</a>
			<div className={s.profileSubtitle}>Накоплено дней отпуска</div>
			<p className={s.profileText}>12</p>
			<div className={s.profileSubtitle}>Корпоративных дней</div>
			<p className={s.profileText}>5</p>

			<Button className="btn btn-full-width">+ Заявление на отпуск/больничный</Button>
		</div>
	)
}
