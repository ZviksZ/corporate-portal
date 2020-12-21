import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './NotificationForm.module.scss'
import cn from 'classnames'
import { Avatar } from '@material-ui/core'
import { getFormatedDate, getInitialsFromName } from '../../../../services/helpers/utils'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { selectAbsences } from '../../../../store/ducks/absences/selectors'
import { useEffect } from 'react'
import { setAbsenceData } from '../../../../store/ducks/absences/actionCreators'

type Props = {
	onClose: (param: boolean) => void
}

export const NotificationForm: React.FC<Props> = ({ onClose }) => {
	const dispatch = useDispatch()
	const { absenceDetail } = useSelector(selectAbsences)

	useEffect(() => {
		return () => {
			dispatch(setAbsenceData(null))
		}
	}, [])

	if (!absenceDetail) {
		return <></>
	}

	const closeForm = () => {
		onClose(false)
	}

	return (
		<div className={s.notification}>
			<NavLink onClick={closeForm} to={`/profile/${absenceDetail.authorId}`} className={s.author}>
				<Avatar className={cn(s.avatar, 'avatar-bg')} alt="" src={absenceDetail.authorImage}>
					{getInitialsFromName(absenceDetail.author)}
				</Avatar>
				<div className={s.info}>
					<div className="sectionSubtitle">Сотрудник</div>
					<div className={cn('sectionText', s.author)}>{absenceDetail.author}</div>
					<div className="sectionBigSubtitle">{absenceDetail.authorPosition}</div>
				</div>
			</NavLink>
			<div className="sectionSubtitle">Заявление на даты</div>
			<p className={'sectionText margin-bottom'}>
				c {getFormatedDate(absenceDetail.applicationDates.dateStart)} по {getFormatedDate(absenceDetail.applicationDates.dateEnd)}
			</p>
			<div className="sectionSubtitle">Отпуск по графику</div>
			<p className={'sectionText margin-bottom'}>
				c {getFormatedDate(absenceDetail.vacationGraphic.dateStart)} по {getFormatedDate(absenceDetail.vacationGraphic.dateEnd)}
			</p>
			<div className="sectionSubtitle">Накоплено дней отпуска</div>
			<p className={'sectionText margin-bottom'}>{absenceDetail.vacationDays}</p>
			<div className="sectionSubtitle">Корпоративных дней</div>
			<p className={'sectionText margin-bottom'}>{absenceDetail.corporateDays}</p>
			<div className={s.footer}>
				<Button className="btn btn-dangerous">отказать</Button>
				<Button className="btn">Согласовать</Button>
			</div>
		</div>
	)
}
