import * as React from 'react'
import s from './Units.module.scss'
import { UnitsItem } from './UnitsItem/UnitsItem'
import { useSelector } from 'react-redux'
import { selectUnits } from '../../../store/ducks/units/selectors'

export const Units: React.FC = () => {
	const { units } = useSelector(selectUnits)
	return (
		<>
			{units && units.map((item) => (
				<UnitsItem key={item.id} item={item} />
			))}
		</>
	)
}
