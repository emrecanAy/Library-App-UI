import { BaseEntity } from "./base-entity.model";

export interface Language extends BaseEntity {
    languageId: string;
    languageName: string;
}