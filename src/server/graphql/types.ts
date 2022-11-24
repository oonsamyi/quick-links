
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class LastQuickLinksInput {
    count: number;
}

export class CreateQuickLinkInput {
    link: string;
}

export abstract class IQuery {
    abstract lastQuickLinks(input: LastQuickLinksInput): QuickLink[] | Promise<QuickLink[]>;

    abstract redirectToLink(linkId: string): string | Promise<string>;
}

export abstract class IMutation {
    abstract createQuickLink(input: CreateQuickLinkInput): QuickLink | Promise<QuickLink>;
}

export class QuickLink {
    id: string;
    quickLink: string;
    longLink: string;
}

type Nullable<T> = T | null;
