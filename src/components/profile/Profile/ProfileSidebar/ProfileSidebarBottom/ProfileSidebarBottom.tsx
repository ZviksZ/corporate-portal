import * as React from 'react'
import s from '../../Profile.module.scss'
import jira from '../../../../../assets/images/icons/jira.svg'
import printer from '../../../../../assets/images/icons/printer.svg'
import Button from '@material-ui/core/Button'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'
import { getFormatedDate, getStatusText } from '../../../../../services/helpers/utils'

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
			<div className="sectionSubtitle">Занятость на текущий день</div>
			<ul className={cn('sectionList', s.employmentList)}>
				{time.employment.map((item, key) => (
					<li className="sectionListItem" key={key + item.from + item.to}>
						с {item.from} до {item.to}
					</li>
				))}
			</ul>
			<a href={time.openTasksLink} className="link-with-icon margin-bottom">
				<img src={jira} alt="" width={'18px'} />
				<span>Открытые задачи</span>
			</a>
			<div className="sectionSubtitle">Отпуск</div>
			<p className={'sectionText status-' + time.vacation.status}>
				c {getFormatedDate(time.vacation.from)} по {getFormatedDate(time.vacation.to)}
			</p>
			<a href={time.vacationApplicationLink} className="link-with-icon margin-bottom" rel="noreferrer" target="_blank" download>
				<img src={printer} alt="" width={'20px'} />
				<span>Заявление на отпуск.pdf</span>
			</a>
			<div className="sectionSubtitle">Накоплено дней отпуска</div>
			<p className="sectionText">{time.vacationDays}</p>
			<div className="sectionSubtitle">Корпоративных дней</div>
			<p className="sectionText">{time.corporateDays}</p>

			<Button className="btn btn-full-width margin-top text-initial" onClick={() => setOpenForm(true)}>
				+ Заявление на отпуск/больничный
			</Button>

			<div className={s.applications}>
				{time.applications.map((item) => (
					<div key={item.name} className={s.appItem}>
						<div className="sectionText no-margin-bottom">{item.name}</div>
						<div className={cn('sectionText', 'no-margin-bottom', `status-${item.status}`)}>{getStatusText(item.status)}</div>
					</div>
				))}
			</div>
		</div>
	)
}
