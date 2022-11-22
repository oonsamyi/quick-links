
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateQuickLinkInput {
    link: string;
}

export abstract class IQuery {
    abstract stub(): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export abstract class IMutation {
    abstract createQuickLink(input: CreateQuickLinkInput): string | Promise<string>;
}

type Nullable<T> = T | null;
