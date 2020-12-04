import * as React from 'react'
import { UnitDetail } from '../../../store/ducks/units/contracts/state'
import s from './Unit.module.scss'
import { NavLink } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import { MemberCard } from '../../cards/MemberCard/MemberCard'

type Props = {
	unit: UnitDetail | null
}

export const Unit: React.FC<Props> = ({ unit }) => {
	if (!unit) {
		return <></>
	}

	return (
		<>
			<Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
				<NavLink to={`/units/`} className="breadcrumbsItem">
					Подразделения
				</NavLink>
				<NavLink to={`/units/${unit.main}`} className="breadcrumbsItem">
					{unit.mainName}
				</NavLink>
				{unit.main !== unit.parent && (
					<NavLink to={`/units/${unit.parent}`} className="breadcrumbsItem">
						{unit.parentName}
					</NavLink>
				)}
				<span className="breadcrumbsItem">{unit.name}</span>
			</Breadcrumbs>
			<h1 className="section-title-small no-margin-top">{unit.name}</h1>

			<div className="sectionBigSubtitle">Руководитель</div>

			<MemberCard member={unit.lead} />
		</>
	)
}
