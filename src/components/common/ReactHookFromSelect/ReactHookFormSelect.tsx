import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import { Controller, FieldError } from 'react-hook-form'
import { FormHelperText } from '@material-ui/core'

type Props = {
	name: string
	error?: string | FieldError
	label: string
	control: any
}

const ReactHookFormSelect: React.FC<Props> = ({ name, label, control, error, children, ...props }) => {
	const labelId = `${name}-label`
	return (
		<FormControl variant="outlined" fullWidth {...props}>
			<InputLabel id={labelId}>{label}</InputLabel>
			<Controller
				as={
					<Select labelId={labelId} label={label}>
						{children}
					</Select>
				}
				name={name}
				control={control}
			/>
			{error && <FormHelperText>{error}</FormHelperText>}
		</FormControl>
	)
}
export default ReactHookFormSelect
