import React from 'react'
import s from '../../../Profile.module.scss'
import cn from 'classnames'
import InputLabel from '@material-ui/core/InputLabel'
import { Select } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'

type Props = {
	editSize: boolean
	isMyProfile: boolean
	roleAdmin: boolean | null
	tshirtSize: string
	size: string
	setSize: (text: string) => void
	openSizeEdit: () => void
}

export const ProfileInfoMainSize: React.FC<Props> = ({ setSize, tshirtSize, openSizeEdit, editSize, isMyProfile, roleAdmin, size}) => {
	const handleChangeSize = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSize(event.target.value as string)
	}
	return (
		<>
			{editSize ? (
				<>
					<FormControl fullWidth variant="outlined" className="margin-bottom-x2">
						<InputLabel id="simple-select-outlined-label">Размер футболки</InputLabel>
						<Select labelId="simple-select-outlined-label" id="simple-select-outlined" value={size} onChange={handleChangeSize} label="Размер футболки">
							<MenuItem value="" disabled>
								Не выбран
							</MenuItem>
							<MenuItem value={'S'}>S</MenuItem>
							<MenuItem value={'M'}>M</MenuItem>
							<MenuItem value={'L'}>L</MenuItem>
							<MenuItem value={'XL'}>XL</MenuItem>
							<MenuItem value={'XXL'}>XXL</MenuItem>
						</Select>
					</FormControl>
				</>
			) : isMyProfile || roleAdmin ? (
				<>
					<div className="sectionSubtitle">Размер футболки</div>
					<p className={cn('sectionText', 'sectionTextWith', s.profileEdit)} onClick={openSizeEdit}>
						{tshirtSize || 'Не указан'}
						<i className={cn('icon-edit', s.editIcon)}></i>
					</p>
				</>
			) : (
				<>
					{tshirtSize && (
						<>
							<div className="sectionSubtitle">Размер футболки</div>
							<p className={cn('sectionText', 'sectionTextWith', s.profileEdit)}>{tshirtSize}</p>
						</>
					)}
				</>
			)}
		</>
	)
}
