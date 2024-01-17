import { BaseEntity } from "./base-entity.model";

export interface DepositBook extends BaseEntity {
    depositBookId: string;
    userId: string;
    bookId: string;
    depositDate: Date;
    status: DepositBookStatus;
}

export enum DepositBookStatus {
    NOT_RECEIVED,
    RECEIVED
} 