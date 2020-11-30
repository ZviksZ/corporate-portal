// @ts-nocheck
import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#E33E7F',
		},
		secondary: {
			main: '#000',
		},
	},
	typography: {
		fontFamily: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Ubuntu', 'Helvetica Neue', 'sans-serif'],
	},
})

export default theme
