import { ChatQuery } from "../chat/chat.type";
import { DishData } from "../dataSrouces/DishData.type";
import { RegisteredVia, UserForAdminDTO } from "../user/User.type";
export type AdminDataUsersQuery = {
    query: Partial<UserForAdminDTO>;
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
    data: DishData[] | DishData;
    total: number;
};
export type AdminDataBankQueryResponse = AdminDataBankQuerySourcesOnlyResponse | AdminDataBankQueryCountOnlyResponse | AdminDataBankQueryDataResponse;
//# sourceMappingURL=adminQueries.type.d.ts.map