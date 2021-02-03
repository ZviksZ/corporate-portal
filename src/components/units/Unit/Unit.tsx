import * as React from 'react'
import { UnitDetailInterface } from '../../../store/ducks/units/contracts/state'
import s from './Unit.module.scss'
import { MemberCard } from '../../cards/MemberCard/MemberCard'
import { UnitCard } from '../../cards/UnitCard/UnitCard'
import { AppBreadcrumbsItem } from '../../common/ui/AppBreadcrumbs/AppBreadcrumbsItem/AppBreadcrumbsItem'
import { AppBreadcrumbs } from '../../common/ui/AppBreadcrumbs/AppBreadcrumbs'
import { AppSectionSubtitle } from '../../common/ui/AppSectionSubtitle/AppSectionSubtitle'
import { AppSectionPageTitle } from '../../common/ui/AppSectionPageTitle/AppSectionPageTitle'

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

			<AppSectionPageTitle isSmallPageTitle={true} additionalClasses={'no-margin-top'}>{unit.name}</AppSectionPageTitle>
			{unit.lead && (
				<>
					<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase'}>
						Руководитель
					</AppSectionSubtitle>
					<MemberCard member={unit.lead} />
				</>
			)}

			{unit.subUnits && unit?.subUnits?.length > 0 && (
				<>
					<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase margin-top-x2'}>
						Подотделы ({unit.subUnits.length})
					</AppSectionSubtitle>
					{unit.subUnits.map((sub) => (
						<UnitCard linkPath={'units'} key={sub.id} item={sub} />
					))}
				</>
			)}

			{unit.members && unit?.members?.list?.length > 0 && (
				<>
					<AppSectionSubtitle isBigSubtitle={true} additionalClasses={'text-uppercase margin-top-x2'}>
						сотрудники ({unit.members.list.length})
					</AppSectionSubtitle>
					{unit.members.list.map((member) => (
						<MemberCard member={member} key={member.id} />
					))}
				</>
			)}
		</div>
	)
}
