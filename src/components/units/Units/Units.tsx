import * as React from 'react'
import { UnitsItem } from './UnitsItem/UnitsItem'
import { useSelector } from 'react-redux'
import { selectUnitsList } from '../../../store/ducks/units/selectors'

export const Units: React.FC = () => {
	const units = useSelector(selectUnitsList)
	return <>{units && units.map((item) => <UnitsItem key={item.id} item={item} />)}</>
}
