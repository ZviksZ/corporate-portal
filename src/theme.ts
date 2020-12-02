// @ts-nocheck
import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#29B6F6',
		},
		secondary: {
			main: '#263238',
		},
	},
	typography: {
		fontFamily: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Ubuntu', 'Helvetica Neue', 'sans-serif'],
	},
})

export default theme
