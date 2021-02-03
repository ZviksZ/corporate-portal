import * as React from 'react'
import { UnitDetailInterface } from '../../../store/ducks/units/contracts/state'
import s from './Unit.module.scss'
import { NavLink } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import { MemberCard } from '../../cards/MemberCard/MemberCard'
import { UnitCard } from '../../cards/UnitCard/UnitCard'
import { AppBreadcrumbsItem } from '../../common/ui/AppBreadcrumbs/AppBreadcrumbsItem/AppBreadcrumbsItem'
import { AppBreadcrumbs } from '../../common/ui/AppBreadcrumbs/AppBreadcrumbs'

type Props = {
	unit: UnitDetailInterface | null
}

export const Unit: React.FC<Props> = ({ unit }) => {
	if (!unit) {
		return <></>
	}

	return (
		<div className={s.unit}>
			<AppBreadcrumbs>
				<AppBreadcrumbsItem href={`/units/`}>Подразделения</AppBreadcrumbsItem>
				{unit.main && <AppBreadcrumbsItem href={`/units/${unit.main}`}>{unit.mainName}</AppBreadcrumbsItem>}
				{unit.main !== unit.parent && <AppBreadcrumbsItem href={`/units/${unit.parent}`}>{unit.parentName}</AppBreadcrumbsItem>}
				<AppBreadcrumbsItem isLink={false}>{unit.name}</AppBreadcrumbsItem>
			</AppBreadcrumbs>

			<h1 className="section-title section-title-small no-margin-top">{unit.name}</h1>
			{unit.lead && (
				<>
					<div className="sectionBigSubtitle text-uppercase">Руководитель</div>
					<MemberCard member={unit.lead} />
				</>
			)}

			{unit.subUnits && unit?.subUnits?.length > 0 && (
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
