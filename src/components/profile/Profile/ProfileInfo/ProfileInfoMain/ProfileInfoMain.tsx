import * as React from 'react'
import s from '../../Profile.module.scss'
import cn from 'classnames'
import { FormControlLabel } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { ClipboardCopy } from '../../../../common/ClipboardCopy/ClipboardCopy'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'
import { getFormatedDate } from '../../../../../services/helpers/utils'

export const ProfileInfoMain: React.FC = () => {
	const { profileData } = useSelector(selectProfile)

	if (!profileData) {
		return <></>
	}

	const main = profileData.contacts
	const isShowBirthday = +main.showBirthYear

	const showDateChange = () => {}
	return (
		<div className={s.profileMain}>
			<h4 className={cn('sectionTitle', 'margin-bottom-x2')}>Контактная информация</h4>

			<div className="sectionSubtitle">День рождения</div>
			<p className={cn('sectionText', 'sectionTextWith')}>
				<span className="sectionTextContent">{getFormatedDate(main.birthday)}</span>
				<FormControlLabel control={<Checkbox onChange={showDateChange} checked={!!isShowBirthday} color="primary" name="showBirthDate" />} label="Показывать год" />
			</p>

			<div className="sectionSubtitle">Контактный Email</div>
			<p className={cn('sectionText', 'sectionTextWith')}>
				<a href={'mailto:' + main.email} className="sectionTextContent">
					{main.email}
				</a>
				<ClipboardCopy text={main.email} />
			</p>

			<div className="sectionSubtitle">Мобильный телефон</div>
			<p className={cn('sectionText', 'sectionTextWith')}>
				{main.mobilePhone.split(',').map((item, index) => (
					<a key={item + index} href={'tel:' + item} className={cn('sectionTextContent', 'sectionTextPhone')}>
						{item}
					</a>
				))}
				<i className="icon-edit"></i>
			</p>

			<div className="sectionSubtitle">Внутренний телефон</div>
			<p className={cn('sectionText', 'sectionTextWith')}>
				<a href={'tel:' + main.inPhone} className={cn('sectionTextContent', 'sectionTextPhone')}>
					{main.inPhone}
				</a>
			</p>

			<div className="sectionSubtitle">Дата трудоустройства</div>
			<p className="sectionText">c {getFormatedDate(main.employmentDate)}</p>

			<div className="sectionSubtitle">Размер футболки</div>
			<p className="sectionText">{main.tshirtSize}</p>

			<div className="sectionSubtitle">SSH ключ</div>

			{main.sshKeys.map((item) => (
				<div key={item} className={s.sshBlock}>
					<span className={s.text}>ssh rsa {item}</span>
					<ClipboardCopy isBigIcon={true} text={'ssh rsa ' + item} />
				</div>
			))}
		</div>
	)
}
