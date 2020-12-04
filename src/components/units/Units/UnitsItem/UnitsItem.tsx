import * as React from 'react'
import { useEffect, useState } from 'react'
import s from '../Units.module.scss'
import cn from 'classnames'
import { TeamCard } from '../../../cards/TeamCard/TeamCard'
import { Unit } from '../../../../store/ducks/units/contracts/state'

type Props = {
	item: Unit
}

export const UnitsItem: React.FC<Props> = ({ item }) => {
	const [showSub, setShowSub] = useState(false)

	const toggleOpen = () => {
		if (item.subUnits) {
			setShowSub((prev) => !prev)
		}
	}

	useEffect(() => {
		if (!item.subUnits) {
			setShowSub(true)
		}
	}, [item])

	return (
		<div className={cn(s.unit, { [s.unitOpen]: showSub })}>
			<div onClick={toggleOpen} className={s.unitShowBtn}>
				{showSub ? '-' : '+'}
			</div>
			<div className={s.unitBorder}></div>

			<TeamCard key={item.id} item={item} />

			{showSub && item.subUnits && item.subUnits.map((unit) => <UnitsItem key={unit.id} item={unit} />)}
		</div>
	)
}
