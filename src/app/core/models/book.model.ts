import { BaseEntity } from "./base-entity.model";
import { BookAuthor } from "./book-author.model";
import { BookCategory } from "./book-category.model";

export interface Book extends BaseEntity {
  bookId: string;
  languageId: string;
  categoryId: string;
  publisherId: string;
  locationId: string;
  bookName: string;
  pageCount: number;
  isbnNumber: string;
  publishedDate: Date;
  publishCount: number;
  stock: number;
  status: boolean;
  interpreter: string;
  fixtureNumber: string;
  bookCategories: BookCategory[];
  bookAuthors: BookAuthor[];
}
