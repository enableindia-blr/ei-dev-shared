import { AcceptableDataTypes } from "./UserProgress.type";
export declare enum CourseList {
    spellingTool = "spellingTool",
    excel = "excel"
}
export type CourseType = {
    id: CourseList;
    title: string;
    description: string;
    moduleIds: string[];
    thumbnailUrl?: string;
    data?: {
        template?: string;
        hideCompleteBtn?: boolean;
        showScoreAtEnd?: boolean;
        scorePageTemplate?: string;
    };
    custom?: {
        [key in CourseList]?: Record<string, AcceptableDataTypes>;
    };
};
//# sourceMappingURL=Course.type.d.ts.map