import * as React from 'react'
import { Breadcrumbs, FormControl } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { MemberSquadCard } from '../../cards/MemberSquadCard/MemberSquadCard'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import cn from 'classnames'
import Button from '@material-ui/core/Button'
import s from './TeamSquad.module.scss'

export const TeamSquad: React.FC = () => {
	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)
	}
	return (
		<div>
			<Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
				<NavLink to={`/teams/`} className="breadcrumbsItem">
					Команды
				</NavLink>
				<span className="breadcrumbsItem">Команды</span>
			</Breadcrumbs>
			<h1 className="section-title-small no-margin-top">Управление составом</h1>

			<FormControl fullWidth variant="outlined" className={s.searchInput}>
				<OutlinedInput
					onChange={onSearch}
					placeholder="Поиск по имени"
					className={cn('search-input', 'margin-bottom-x2', 'search-input-big')}
					startAdornment={
						<InputAdornment position="start">
							<i className="icon-search"></i>
						</InputAdornment>
					}
				/>
			</FormControl>

			<MemberSquadCard showRole={true} />

			<div className={s.squadButtons}>
				<Button size="large" component={NavLink} to={`/teams/id`} className="btn btn-default text-uppercase">
					ОТМЕНА
				</Button>
				<Button size="large" component={NavLink} to={`/teams/id`} className="btn margin-left-x3 text-uppercase">
					Сохранить
				</Button>
			</div>
		</div>
	)
}
