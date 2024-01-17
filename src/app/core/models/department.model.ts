import { BaseEntity } from "./base-entity.model";

export interface Department extends BaseEntity {
    departmentId: string;
    departmentName: string;
}