import * as React from 'react'
import s from '../../Profile.module.scss'
import atlassian from '../../../../../assets/images/icons/atlassian.svg'
import printer from '../../../../../assets/images/icons/printer.svg'
import Button from '@material-ui/core/Button'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'

type Props = {
	setOpenForm: (param: boolean) => void
}

export const ProfileSidebarBottom: React.FC<Props> = ({ setOpenForm }) => {
	const { profileData } = useSelector(selectProfile)

	if (!profileData) {
		return <></>
	}

	const time = profileData.worktime

	return (
		<div className={s.sidebarBottom}>
			<div className={s.profileSubtitle}>Занятость на текущий день</div>
			<ul className={s.employmentList}>
				{time.employment.map((item, key) => (
					<li key={key + item.from + item.to}>
						с {item.from} до {item.to}
					</li>
				))}
			</ul>
			<a href={time.openTasksLink} className="link-with-icon margin-bottom">
				<img src={atlassian} alt="" width={'18px'} />
				<span>Открытые задачи</span>
			</a>
			<div className={s.profileSubtitle}>Отпуск</div>
			<p className={cn(s.profileText, s.textGreen)}>
				c {time.vacation.from} по {time.vacation.to}
			</p>
			<a href={time.vacationApplicationLink} className="link-with-icon margin-bottom" rel="noreferrer" target="_blank" download>
				<img src={printer} alt="" width={'20px'} />
				<span>Заявление на отпуск.pdf</span>
			</a>
			<div className={s.profileSubtitle}>Накоплено дней отпуска</div>
			<p className={s.profileText}>{time.vacationDays}</p>
			<div className={s.profileSubtitle}>Корпоративных дней</div>
			<p className={s.profileText}>{time.corporateDays}</p>

			<Button className="btn btn-full-width" onClick={() => setOpenForm(true)}>
				+ Заявление на отпуск/больничный
			</Button>
		</div>
	)
}
