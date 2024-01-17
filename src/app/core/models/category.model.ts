import { BaseEntity } from "./base-entity.model";
import { BookCategory } from "./book-category.model";

export interface Category extends BaseEntity{
    categoryId: string;
    categoryName: string;
    bookCategories: [BookCategory];
}