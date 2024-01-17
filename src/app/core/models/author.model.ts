import { BaseEntity } from "./base-entity.model";
import { BookAuthor } from "./book-author.model";

export interface Author extends BaseEntity {
  authorId: string;
  authorFirstName: string;
  authorLastName: string;
  bookAuthors: [BookAuthor];
}
