import { RegisteredVia } from '../user/User.type';
export declare enum ResourceType {
    Web = "web",
    Video = "video",
    PDF = "pdf",
    Document = "document",
    XML = "xml"
}
export type RAGResource = {
    title: string;
    body: string;
    tags: string[];
    country: string;
    url: string;
    resource_type: ResourceType;
    source: string;
    thumbnail?: string;
    channelIdForVideo?: string;
    isConsumed?: boolean;
    project: RegisteredVia;
};
//# sourceMappingURL=RAGResource.type.d.ts.map