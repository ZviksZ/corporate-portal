import * as React from 'react'
import { Units } from '../../components/units/Units/Units'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUnits, setUnits } from '../../store/ducks/units/actionCreators'

export const UnitsPage: React.FC = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getUnits())

		return () => {
			dispatch(setUnits(null))
		}
	})

	return (
		<section className="section">
			<div className="container">
				<h1 className="section-title-small">Подразделения</h1>
				<Units />
			</div>
		</section>
	)
}
