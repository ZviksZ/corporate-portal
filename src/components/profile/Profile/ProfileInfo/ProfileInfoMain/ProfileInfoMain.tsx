import * as React from 'react'
import s from '../../Profile.module.scss'
import cn from 'classnames'
import { FormControlLabel } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { ClipboardCopy } from '../../../../common/ClipboardCopy/ClipboardCopy'

export const ProfileInfoMain: React.FC = () => {
	const showDateChange = () => {}
	return (
		<div className={s.profileMain}>
			<h4 className={cn(s.profileTitle, 'margin-bottom-x2')}>Контактная информация</h4>

			<div className={s.profileSubtitle}>День рождения</div>
			<p className={cn(s.profileText, s.profileTextWith)}>
				<span className={s.profileTextContent}>5 февраля 1990</span>
				<FormControlLabel className={s.profileTextCheckbox} control={<Checkbox onChange={showDateChange} color="primary" name="showBirthDate" />} label="Показывать год" />
			</p>

			<div className={s.profileSubtitle}>Контактный Email</div>
			<p className={cn(s.profileText, s.profileTextWith)}>
				<a href="mailto:example@mail.ru" className={s.profileTextContent}>
					example@mail.ru
				</a>
				<ClipboardCopy text={'example@mail.ru'} />
			</p>

			<div className={s.profileSubtitle}>Мобильный телефон</div>
			<p className={cn(s.profileText, s.profileTextWith)}>
				<a href="tel:+7 900 000 00 00" className={cn(s.profileTextContent, s.profileTextPhone)}>
					+7 900 000 00 00
				</a>
				<a href="tel:+7 800 000 55 66" className={cn(s.profileTextContent, s.profileTextPhone)}>
					+7 800 000 55 66
				</a>
				<i className="icon-edit"></i>
			</p>

			<div className={s.profileSubtitle}>Внутренний телефон</div>
			<p className={cn(s.profileText, s.profileTextWith)}>
				<a href="tel:+7 495 000 77 55 (265)" className={cn(s.profileTextContent, s.profileTextPhone)}>
					+7 495 000 77 55 (265)
				</a>
			</p>

			<div className={s.profileSubtitle}>Дата трудоустройства</div>
			<p className={s.profileText}>
				c 12 февраля 2005
			</p>

			<div className={s.profileSubtitle}>Размер футболки</div>
			<p className={s.profileText}>
				XXL
			</p>

			<div className={s.profileSubtitle}>SSH ключ</div>
			<div className={s.sshBlock}>
				<span className={s.text}>
					ssh rsa KO6ASDF54SD65G4SFD1G35FD4651354ADS6FG5F6G5DA3H21AGD65H
				</span>
				<ClipboardCopy isBigIcon={true} text={'ssh rsa KO6ASDF54SD65G4SFD1G35FD4651354ADS6FG5F6G5DA3H21AGD65H'} />
			</div>
			<div className={s.sshBlock}>
				<span className={s.text}>
					ssh rsa HHHFHUDUFUDUDHHFUDFH4F5SAG45F4G5FD4G6
				</span>
				<ClipboardCopy isBigIcon={true} text={'ssh rsa HHHFHUDUFUDUDHHFUDFH4F5SAG45F4G5FD4G6'} />
			</div>
		</div>
	)
}
