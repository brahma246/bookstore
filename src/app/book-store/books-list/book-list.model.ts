export interface BookData {
    data: BookStore;
}

export interface BookStore {
  author: string;
  birthday: string;
  birthPlace: string;
  books: Book[];
}
export interface Book {
  imageUrl: string;
  title: string;
  purchaseLink: string;
  PublishDate: string;
}
