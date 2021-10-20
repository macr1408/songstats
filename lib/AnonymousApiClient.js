export default class AnonymousApiClient {

    baseUrl = 'https://songstatsapi.site.macr1408.xyz'

    async getAuthLink(redirectUrl) {
        try {
            const response = await fetch(`${this.baseUrl}/api/v1/auth/link?redirect=${redirectUrl}`)
            return await response.json()
        } catch (error) {
            console.error(error.message)
            return { error: 'Something went wrong, please try again' }
        }
    }

    async getAuthToken(redirectUrl, code) {
        try {
            const response = await fetch(`${this.baseUrl}/api/v1/auth?redirect=${redirectUrl}&code=${code}`)
            return await response.json()
        } catch (error) {
            console.error(error.message)
            return { error: 'Something went wrong, please try again' }
        }
    }
}