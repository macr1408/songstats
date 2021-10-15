export default class AnonymousApiClient {

    baseUrl = 'http://localhost:8000'

    async getAuthLink(redirectUrl) {
        const response = await fetch(`${this.baseUrl}/api/v1/auth-link?redirect=${redirectUrl}`)
        return await response.json()
    }

    async getAuthToken(redirectUrl, code) {
        const response = await fetch(`${this.baseUrl}/api/v1/auth?redirect=${redirectUrl}&code=${code}`)
        return await response.json()
    }
}