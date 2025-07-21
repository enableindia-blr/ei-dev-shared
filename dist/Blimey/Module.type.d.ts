import { AcceptableDataTypes } from './UserProgress.type';
export type ModuleType = {
    id: string;
    title: string;
    description: string;
    chapterIds?: string[];
    submoduleIds?: string[];
    thumbnailUrl?: string;
    data?: {
        template?: string;
        showScoreAtEnd?: boolean;
        scorePageTemplate?: string;
        sendToDashboardOnCompletion?: boolean;
    };
    custom?: {
        [key: string]: AcceptableDataTypes;
    };
};
//# sourceMappingURL=Module.type.d.ts.map