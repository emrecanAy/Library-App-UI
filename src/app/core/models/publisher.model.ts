import { BaseEntity } from "./base-entity.model";

export interface Publisher extends BaseEntity {
    publisherId: string;
    publisherName: string;
}