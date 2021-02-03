import * as React from 'react'
import s from '../../Navbar.module.scss'
import { Avatar } from '@material-ui/core'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { getInitialsFromName, getReverseFormatDate, timeSince } from '../../../../../services/helpers/utils'
import { AbsenceItemInterface } from '../../../../../store/ducks/absences/contracts/state'
import { getAbsenceData } from '../../../../../store/ducks/absences/actionCreators'
import { AppIcon } from '../../../ui/AppIcon/AppIcon'

type Props = {
	item: AbsenceItemInterface
	handleClose: () => void
}

export const NotificationPopupItem: React.FC<Props> = ({ item, handleClose }) => {
	const dispatch = useDispatch()

	const formatedDate = item.date ? getReverseFormatDate(item.date) : ''
	const timeAgo = item.date ? timeSince(formatedDate) : ''

	const openAbsence = () => {
		dispatch(getAbsenceData(item.id))
		handleClose()
	}

	return (
		<>
			<div className={s.item} onClick={openAbsence}>
				<Avatar className={cn(s.image, 'avatar-bg')} alt="" src={item.authorImage} aria-controls="simple-menu" aria-haspopup="true">
					{getInitialsFromName(item.author)}
				</Avatar>
				<div className={s.info}>
					<div className={s.type}>{item.name}</div>
					<div className={s.time}>{item.date ? `${timeAgo} назад` : ''}</div>
				</div>
				<AppIcon iconClass={'icon-arrow-left'} classNames={s.openAbsence} />
			</div>
		</>
	)
}
