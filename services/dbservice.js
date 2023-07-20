class DBService {
    static URL = 'https://64b512c3f3dbab5a95c6a4a9.mockapi.io/shows'

    static getShows() {
        let url = DBService.URL
        return fetch(url, { method: "get" })
            .then((resp) => resp.json())
        }

        static updateShow(show) {
            const updateUrl =
                "https://64b512c1f3dbab5a95c6a48c.mockapi.io/shows/" + show.id;
            return fetch(updateUrl, {
                method: "put",
                body: JSON.stringify(show),
                headers: { "content-type": "application/json" }
            }).then((resp) => resp.json());
        }
        
        static upvote(){
            show.upvotes++;
            this.updateShow(show)
        }

        static downvote(){
            show.downvotes++;
            this.updateShow(show)
        }
}