import * as React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setGlobalMessage } from '../../../store/ducks/global/actionCreators'
import { selectGlobal } from '../../../store/ducks/global/selectors'

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}

export const GlobalMessage: React.FC = () => {
	const dispatch = useDispatch()
	const [open, setOpen] = React.useState(false)
	const { user, globalMessage } = useSelector(selectGlobal)

	useEffect(() => {
		globalMessage && setOpen(true)
	}, [user, globalMessage])

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		dispatch(setGlobalMessage(null))
		setOpen(false)
	}
	return (
		<Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={open} autoHideDuration={3000} onClose={handleClose}>
			<Alert severity={(globalMessage && globalMessage.type) || undefined}>{globalMessage && globalMessage.text}</Alert>
		</Snackbar>
	)
}
