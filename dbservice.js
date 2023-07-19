class DBService {
    static URL = 'https://64b512c3f3dbab5a95c6a4a9.mockapi.io/shows'

    static getShows() {
        let url = DBService.URL
        return fetch(url, { method: "get" })
            .then((resp) => resp.json())
        }
}