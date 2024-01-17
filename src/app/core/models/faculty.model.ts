import { BaseEntity } from "./base-entity.model";

export interface Faculty extends BaseEntity {
    facultyId: string;
    facultyName: string;
}