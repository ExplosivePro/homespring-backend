export class Book {
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string
    categories: []
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    }
  }
  searchInfo: {
    textSnippet: string
  }
}

export class BooksQueryResult {
  totalItems: number
  items: Book[] 
}
