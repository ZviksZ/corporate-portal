import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { selectIsUnitsLoading, selectIsUnitsLoadingError, selectUnits } from '../../store/ducks/units/selectors'
import { getUnitData, getUnits, setUnitData } from '../../store/ducks/units/actionCreators'
import { Unit } from '../../components/units/Unit/Unit'
import { Units } from '../../components/units/Units/Units'
import { Loader } from '../../components/common/Loader/Loader'
import { Button } from '@material-ui/core'

const UnitDetailPage: React.FC = () => {
	const dispatch = useDispatch()
	const { unitDetail } = useSelector(selectUnits)
	const isLoading = useSelector(selectIsUnitsLoading)
	const isLoadingError = useSelector(selectIsUnitsLoadingError)
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

	const repeatLoading = () => {
		if (id) {
			dispatch(getUnitData(id))
		}
	}

	if (isLoading) {
		return (
			<div className="full-page d-flex ai-center jc-center">
				<Loader />
			</div>
		)
	}
	if (isLoadingError) {
		return (
			<div className="full-page d-flex flex-column ai-center jc-center flex-wrap">
				<p className="full-width text-align-center margin-bottom-x2 sectionText text-uppercase">Ошибка при загрузке. Попробуйте повторить попытку</p>
				<Button className="btn" onClick={repeatLoading}>
					Повторить загрузку
				</Button>
			</div>
		)
	}

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

export default UnitDetailPage
