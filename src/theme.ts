// @ts-nocheck
import { createMuiTheme, createStyles } from '@material-ui/core/styles'
import makeStyles from '@material-ui/core/styles/makeStyles'

const COLORS = {
	MAIN: '#29B6F6',
	MAIN_DARK: '#263238',
	DANGEROUS: '#E91212',
}

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: COLORS.MAIN,
		},
		secondary: {
			main: COLORS.MAIN_DARK,
		},
	},
	typography: {
		fontFamily: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Ubuntu', 'Helvetica Neue', 'sans-serif'],
	},
})

const useGlobalStyles = makeStyles(() =>
	createStyles({
		'@global': {
			'.MuiCheckbox-root': {
				padding: '0 9px',
			},
			'.MuiFormHelperText-root.Mui-error': {
				margin: '0',
				color: COLORS.DANGEROUS,
			},
			'.MuiFormLabel-root.Mui-error': {
				color: COLORS.DANGEROUS,
			},
			'.MuiAvatar-root.MuiAvatar-circle.MuiAvatarGroup-avatar.MuiAvatar-colorDefault': {
				fontSize: '12px',
			},
			'.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error': {
				position: 'absolute',
				bottom: '-18px',
				left: '0',
				margin: '0',
			},
			'.MuiFormLabel-filled': {
				color: COLORS.MAIN,
			},
			'.MuiFormLabel-filled + .MuiOutlinedInput-root': {
				background: '#fcfcfb',
			},
			'.MuiFormLabel-filled + .MuiOutlinedInput-root fieldset': {
				borderColor: COLORS.MAIN,
				borderWidth: '2px',
			},
			'.MuiFormLabel-filled + .MuiOutlinedInput-root:hover': {
				borderColor: COLORS.MAIN,
				borderWidth: '2px',
			},
			'.MuiFormLabel-filled + .MuiOutlinedInput-root:hover fieldset': {
				borderColor: COLORS.MAIN,
				borderWidth: '2px',
			},
			'.MuiPickersBasePicker-container .MuiPickersSlideTransition-transitionContainer > *': {
				textTransform: 'capitalize',
			},
			'.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody': {
				['@media (max-width:760px)']: {
					maxWidth: 'calc(100% - 30px)',
					width: 'calc(100% - 30px)',
					margin: '32px 15px',
				},
			},
			'.MuiFormControl-root .Mui-error fieldset': {
				borderColor: COLORS.DANGEROUS,
				borderWidth: '2px',
			},
			'.MuiFormControl-root .Mui-error:hover fieldset': {
				['@media (min-width:1000px)']: {
					borderColor: COLORS.DANGEROUS,
					borderWidth: '2px',
				},
			},
		},
	}),
)

export const GlobalStyles = (): null => {
	useGlobalStyles()

	return null
}
