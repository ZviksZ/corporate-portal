export class TokenService {
	token: string | null = null

	getToken() {
		return this.token
	}

	setToken(token: string | null) {
		this.token = token
	}
}
