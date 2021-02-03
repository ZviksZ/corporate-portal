import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { selectIsUnitsLoading, selectIsUnitsLoadingError, selectUnits } from '../../store/ducks/units/selectors'
import { getUnitData, setUnitData } from '../../store/ducks/units/actionCreators'
import { Unit } from '../../components/units/Unit/Unit'
import { Loader } from '../../components/common/Loader/Loader'
import { AppButton } from '../../components/common/ui/AppButton/AppButton'
import { AppSectionText } from '../../components/common/ui/AppSectionText/AppSectionText'

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
				<AppSectionText additionalClasses={'full-width text-align-center margin-bottom-x2 text-uppercase'}>Ошибка при загрузке. Попробуйте повторить попытку</AppSectionText>
				<AppButton size={'large'} onClick={repeatLoading}>
					Повторить загрузку
				</AppButton>
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
