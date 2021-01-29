import * as React from 'react'
import { Units } from '../../components/units/Units/Units'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUnits, setUnits } from '../../store/ducks/units/actionCreators'
import { Loader } from '../../components/common/Loader/Loader'
import { selectIsUnitsLoading, selectIsUnitsLoadingError } from '../../store/ducks/units/selectors'
import { Button } from '@material-ui/core'
import { getProfile } from '../../store/ducks/profile/actionCreators'
import { AppButton } from '../../components/common/AppButton/AppButton'

const UnitsPage: React.FC = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsUnitsLoading)
	const isLoadingError = useSelector(selectIsUnitsLoadingError)
	useEffect(() => {
		dispatch(getUnits())

		return () => {
			dispatch(setUnits(null))
		}
	}, [])

	const repeatLoading = () => {
		dispatch(getUnits())
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
				<AppButton size={'large'} onClick={repeatLoading}>
					Повторить загрузку
				</AppButton>
			</div>
		)
	}

	return (
		<section className="section">
			<div className="container">
				<h1 className="section-title-small">Подразделения</h1>
				<Units />
			</div>
		</section>
	)
}

export default UnitsPage
