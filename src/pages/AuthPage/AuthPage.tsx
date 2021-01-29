import * as React from 'react'
import { LoginForm } from '../../components/forms/common/LoginForm/LoginForm'

const AuthPage: React.FC = () => {
	return (
		<div className="full-page d-flex ai-center jc-center">
			<LoginForm />
		</div>
	)
}

export default AuthPage
