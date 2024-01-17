import { BaseEntity } from "./base-entity.model";

export interface Location extends BaseEntity {
    locationId: string;
    shelf: string;
    categoryId: string;
}