export default class ApiClient {

    baseUrl = 'https://songstatsapi.site.macr1408.xyz'
    loginToken = ''

    constructor(loginToken) {
        this.loginToken = loginToken
    }

    async currentPlaying() {
        try {
            const response = await fetch(`${this.baseUrl}/api/v1/user/playing`, {
                headers: {
                    'Authorization': `bearer ${this.loginToken}`
                },
            })
            return await response.json()
        } catch (error) {
            console.error(error.message)
            return { error: 'Something went wrong, please try again' }
        }
    }

    async stats(songId) {
        try {
            const response = await fetch(`${this.baseUrl}/api/v1/song/stats?song=${songId}`, {
                headers: {
                    'Authorization': `bearer ${this.loginToken}`
                },
            })
            return await response.json()
        } catch (error) {
            console.error(error.message)
            return { error: 'Something went wrong, please try again' }
        }
    }
}