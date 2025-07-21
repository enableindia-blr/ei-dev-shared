import { AcceptableDataTypes } from './UserProgress.type';
export type ChapterType = {
    id: string;
    title: string;
    description: string;
    content?: {
        videos?: ChapterVideo[];
        texts?: ChapterText[];
    };
    thumbnailUrl?: string;
    exerciseIds: string[];
    data?: {
        template?: string;
        showScoreAtEnd?: boolean;
        scorePageTemplate?: string;
    };
    custom?: {
        [key: string]: AcceptableDataTypes;
    };
};
export type ChapterText = {
    sectionTitle: string;
    content: string[];
};
export type ChapterVideo = {
    url: string;
    thumbnail?: string;
    title?: string;
};
//# sourceMappingURL=Chapter.type.d.ts.map