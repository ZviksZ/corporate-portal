import * as React from 'react'
import { UnitDetailInterface } from '../../../store/ducks/units/contracts/state'
import s from './Unit.module.scss'
import { NavLink } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import { MemberCard } from '../../cards/MemberCard/MemberCard'
import { UnitCard } from '../../cards/UnitCard/UnitCard'

type Props = {
	unit: UnitDetailInterface | null
}

export const Unit: React.FC<Props> = ({ unit }) => {
	if (!unit) {
		return <></>
	}

	return (
		<div className={s.unit}>
			<Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
				<NavLink to={`/units/`} className="breadcrumbsItem">
					Подразделения
				</NavLink>
				{unit.main && (
					<>
						<NavLink to={`/units/${unit.main}`} className="breadcrumbsItem">
							{unit.mainName}
						</NavLink>
					</>
				)}
				{unit.main !== unit.parent && (
					<NavLink to={`/units/${unit.parent}`} className="breadcrumbsItem">
						{unit.parentName}
					</NavLink>
				)}
				<span className="breadcrumbsItem">{unit.name}</span>
			</Breadcrumbs>
			<h1 className="section-title-small no-margin-top">{unit.name}</h1>
			{unit.lead && (
				<>
					<div className="sectionBigSubtitle text-uppercase">Руководитель</div>
					<MemberCard member={unit.lead} />
				</>
			)}

			{unit?.subUnits?.length && (
				<>
					<div className="sectionBigSubtitle text-uppercase margin-top-x2">Подотделы ({unit.subUnits.length})</div>
					{unit.subUnits.map((sub) => (
						<UnitCard linkPath={'units'} key={sub.id} item={sub} />
					))}
				</>
			)}

			{unit.members && unit?.members?.list?.length > 0 && (
				<>
					<div className="sectionBigSubtitle text-uppercase margin-top-x2">сотрудники ({unit.members.list.length})</div>
					{unit.members.list.map((member) => (
						<MemberCard member={member} key={member.id} />
					))}
				</>
			)}
		</div>
	)
}
