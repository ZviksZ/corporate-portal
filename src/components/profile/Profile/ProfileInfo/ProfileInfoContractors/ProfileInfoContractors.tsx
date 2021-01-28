import * as React from 'react'
import cn from 'classnames'
import s from '../../Profile.module.scss'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectProfile } from '../../../../../store/ducks/profile/selectors'

export const ProfileInfoContractors: React.FC = () => {
	const [showMore, setShowMore] = useState<boolean>(false)
	const { profileData } = useSelector(selectProfile)
	const FIRST_SHOW_LIMIT = 4

	if (!profileData || !profileData?.additional?.contractors?.length) {
		return <></>
	}

	const contractors = profileData.additional.contractors

	const toggleMoreItems = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		setShowMore((prev) => !prev)
	}

	return (
		<>
			<h4 className={cn(s.profileTitle, 'margin-bottom-x2', 'margin-top-x2')}>Контрагенты</h4>
			<div className={s.contractors}>
				{contractors.map((item, index) => {
					if (index < FIRST_SHOW_LIMIT) {
						return (
							<div key={item.name + index} className={s.item}>
								{item.name}
							</div>
						)
					}
				})}
				{showMore && (
					<>
						{contractors.map((item, index) => {
							if (index >= FIRST_SHOW_LIMIT) {
								return (
									<div key={item.name + index} className={s.item}>
										{item.name}
									</div>
								)
							}
						})}
					</>
				)}
				{contractors.length > FIRST_SHOW_LIMIT && (
					<span className={s.showMore} onClick={toggleMoreItems}>
						{showMore ? 'скрыть' : `показать еще ${contractors.length - FIRST_SHOW_LIMIT}`}
					</span>
				)}
			</div>
		</>
	)
}
