import { ChatQuery } from "../chat/chat.type";
import { DishData } from "../dataSources/DishData.type";
import { RegisteredVia, UserForAdminDTO } from "../user/User.type";
export declare enum DishDataLineItemTypes {
    WEB = "web",
    YT_VIDEO = "yt_video",
    YT_CHANNEL = "yt_channel",
    XML_DB = "xml_db",
    DE = "de"
}
export type AdminDataUsersQuery = {
    query: Omit<Partial<UserForAdminDTO>, "customProps"> & {
        customProps?: Record<string, any>;
    };
    queryingApp: RegisteredVia;
    queryOptions: {
        skip?: number;
        limit?: number;
        sort?: {
            [key in keyof UserForAdminDTO]?: "ASC" | "DESC" | 1 | -1;
        };
    };
};
export type AdminDataUsersQueryResponse = {
    data: UserForAdminDTO[] | UserForAdminDTO;
    total: number;
};
export type AdminDataQuestionsQuery = {
    query: Partial<ChatQuery>;
    queryingApp: RegisteredVia;
    queryOptions: {
        skip?: number;
        limit?: number;
        sort?: {
            [key in keyof ChatQuery]?: "ASC" | "DESC" | 1 | -1;
        };
    };
};
export type AdminDataBlockUserQuery = {
    userId: number;
    queryingApp: RegisteredVia;
    block: boolean;
};
export type AdminDataBlockUserQueryResponse = {
    success: boolean;
};
export type AdminDataMakeUserAdminQuery = {
    userId: number;
    queryingApp: RegisteredVia;
    makeAdmin: boolean;
};
export type AdminDataMakeUserAdminQueryResponse = {
    success: boolean;
};
export type AdminDataEditUserQuery = {
    userId: number;
    queryingApp: RegisteredVia;
    userData: Omit<Partial<UserForAdminDTO>, "customProps"> & {
        customProps?: Record<string, any>;
    };
};
export type AdminDataEditUserQueryResponse = {
    success: boolean;
    data?: UserForAdminDTO;
};
export type AdminDataQuestionsQueryResponse = {
    data: ChatQuery[] | ChatQuery;
    total: number;
};
export type AdminDataBankQuery = {
    query: Partial<DishData>;
    queryingApp: RegisteredVia;
    queryOptions: {
        onlySources?: boolean;
        onlyCount?: boolean;
        skip?: number;
        limit?: number;
        sort?: {
            [key in keyof DishData]?: "ASC" | "DESC" | 1 | -1;
        };
    };
};
export type AdminDataBankQuerySourcesOnlyResponse = {
    sources: string[];
};
export type AdminDataBankQueryCountOnlyResponse = {
    count: number;
};
export type AdminDataBankQueryDataResponse = {
    data: DishData[] | DishData | AdminAddDataLineItem | AdminAddDataLineItem[];
    total: number;
};
export type AdminDataBankQueryResponse = AdminDataBankQuerySourcesOnlyResponse | AdminDataBankQueryCountOnlyResponse | AdminDataBankQueryDataResponse | AdminDataBankPendingResponse;
export type AdminAddDataLineItem = {
    data_type: DishDataLineItemTypes;
    source: string;
    url: string;
    depth?: number;
    isLocalFile?: boolean;
    localFilePath?: string;
    description?: string;
    processLinks?: boolean;
    linkColumnHeader?: string;
};
export type AdminDataBankPendingResponse = {
    data: AdminAddDataLineItem[];
    total: number;
};
//# sourceMappingURL=adminQueries.type.d.ts.map