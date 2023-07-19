class Show {
    constructor(title, author, isOver, imageUrl, upvotes = 0, downvotes = 0) {
        this.title = title;
        this.author = author;
        this.isOver = isOver;
        this.imageUrl = imageUrl;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
}
