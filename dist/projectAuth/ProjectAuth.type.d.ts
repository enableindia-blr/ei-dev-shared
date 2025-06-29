import { RegisteredVia } from "../user/User.type";
export type AuthorizedProject = {
    id: number;
    projectId: string;
    name: RegisteredVia;
    description?: string;
    apiKey: string;
    created_at: Date;
    updated_at: Date;
};
export type CreateProjectDTO = Omit<AuthorizedProject, "id" | "created_at" | "updated_at" | "apiKey" | "projectId"> & {
    superAdminKey?: string;
};
export type UpdateAPIKeyDTO = {
    projectId: string;
    superAdminKey?: string;
};
export type CreateUpdateProjectResponse = {
    projectId: string;
    apiKey: string;
};
//# sourceMappingURL=ProjectAuth.type.d.ts.map