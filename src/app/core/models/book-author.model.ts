import { Author } from "./author.model";
import { BaseEntity } from "./base-entity.model";
import { Book } from "./book.model";

export interface BookAuthor extends BaseEntity {
    bookId: string;
    book: Book;
    authorId: string;
    author: Author;
}