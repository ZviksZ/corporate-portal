import * as React from 'react'
import cn from 'classnames'
import s from '../../Profile.module.scss'
import { useState } from 'react'

export const ProfileInfoContractors: React.FC = () => {
	const [showMore, setShowMore] = useState<boolean>(false)

	const toggleMoreItems = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		setShowMore((prev) => !prev)
	}
	//TODO число в показать еще

	return (
		<>
			<h4 className={cn(s.profileTitle, 'margin-bottom-x2', 'margin-top-x2')}>Дополнительная информация</h4>
			<div className={s.contractors}>
				<div className={s.item}>ООО первое</div>
				<div className={s.item}>ООО второе</div>
				<div className={s.item}>ООО третье</div>
				<div className={s.item}>ООО четвертое</div>
				{showMore && (
					<>
						<div className={s.item}>ООО первое</div>
						<div className={s.item}>ООО второе</div>
						<div className={s.item}>ООО третье</div>
						<div className={s.item}>ООО четвертое</div>
					</>
				)}
				<a href="#" className={s.showMore} onClick={toggleMoreItems}>
					{showMore ? 'скрыть' : `показать еще 4`}
				</a>
			</div>
		</>
	)
}
