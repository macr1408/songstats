export default class ApiClient {

    baseUrl = 'http://localhost:8000'
    loginToken = ''

    constructor(loginToken) {
        this.loginToken = loginToken
    }

    async currentPlaying() {
        const response = await fetch(`${this.baseUrl}/api/v1/user/current-playing`, {
            headers: {
                'Authorization': `bearer ${this.loginToken}`
            },
        })
        return await response.json()
    }
}