import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { selectUnits } from '../../store/ducks/units/selectors'
import { getUnitData, setUnitData } from '../../store/ducks/units/actionCreators'
import { Unit } from '../../components/units/Unit/Unit'
import { Units } from '../../components/units/Units/Units'

export const UnitDetailPage: React.FC = () => {
	const dispatch = useDispatch()
	const { unitDetail } = useSelector(selectUnits)
	const params: { id?: string } = useParams()
	const id = params.id

	useEffect(() => {
		if (id) {
			dispatch(getUnitData(id))
		}
		return () => {
			dispatch(setUnitData(null))
		}
	}, [dispatch, id])

	return (
		<>
			<section className="section">
				<div className="container">
					<Unit unit={unitDetail} />
				</div>
			</section>

		</>
	)
}
