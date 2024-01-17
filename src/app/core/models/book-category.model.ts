import { BaseEntity } from "./base-entity.model";
import { Book } from "./book.model";
import { Category } from "./category.model";

export interface BookCategory extends BaseEntity {
    bookId: string;
    book: Book;
    categoryId: string;
    category: Category;
}