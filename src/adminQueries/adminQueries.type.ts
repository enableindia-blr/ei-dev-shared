import { ChatQuery } from '../chat/chat.type'
import { MongoTypeToQuery } from '../helpers/mongoquery'
import { RAGResource } from '../ragResources/RAGResource.type'
import { RegisteredVia, User, UserForAdminDTO } from '../user/User.type'

export enum RAGResourceLineItemTypes {
  WEB = 'web',
  YT_VIDEO = 'yt_video',
  YT_CHANNEL = 'yt_channel',
  XML_DB = 'xml_db',
  PDFORDOC = 'pdfOrDoc',
}

export enum IngestionProcessingStatus {
  PENDING = 'pending',
  STARTED = 'started',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export type AdminDataFilterQuery<T> = {
  column: keyof T
  operator:
    | 'equals'
    | 'not_equals'
    | 'contains'
    | 'not_contains'
    | 'starts_with'
    | 'ends_with'
    | 'greater_than'
    | 'less_than'
    | 'greater_or_equal'
    | 'less_or_equal'
    | 'before'
    | 'after'
    | 'on'
    | 'is_true'
    | 'is_false'
  value: any
}

export type AdminDataUsersQuery = {
  query:
    | (Omit<Partial<UserForAdminDTO>, 'customProps'> & {
        customProps?: Record<string, any>
      })
    | AdminDataFilterQuery<UserForAdminDTO>[]
  queryingApp: RegisteredVia
  queryOptions: {
    skip?: number
    limit?: number
    sort?: {
      [key in keyof UserForAdminDTO]?: 'ASC' | 'DESC' | 1 | -1
    }
  }
  adminHasAccessFor?: RegisteredVia[]
}

export type AdminDataUsersQueryResponse = {
  data: UserForAdminDTO[] | UserForAdminDTO
  total: number
}

export type AdminDataBlockUserQuery = {
  userId: number
  queryingApp: RegisteredVia
  block: boolean
}

export type AdminDataBlockUserQueryResponse = {
  success: boolean
}

export type AdminDataMakeUserAdminQuery = {
  userId: number
  queryingApp: RegisteredVia
  makeAdmin: boolean
  adminFor: RegisteredVia[]
}

export type AdminDataMakeUserAdminQueryResponse = {
  success: boolean
}

export type AdminDataEditUserQuery = {
  userId: number
  queryingApp: RegisteredVia
  userData: Omit<Partial<UserForAdminDTO>, 'customProps'> & {
    customProps?: Record<string, any>
  }
}

export type AdminDataEditUserQueryResponse = {
  success: boolean
  data?: UserForAdminDTO
}

export type AdminDataQuestionsQuery = {
  query: MongoTypeToQuery<Partial<ChatQuery>>
  queryingApp: RegisteredVia
  queryOptions: {
    skip?: number
    limit?: number
    sort?: {
      [key in keyof ChatQuery]?: 'ASC' | 'DESC' | 1 | -1
    }
  }
  adminHasAccessFor?: RegisteredVia[]
}

export type AdminDataQuestionsQueryResponse = {
  data: ChatQuery[] | ChatQuery
  total: number
}

export type AdminDataBankQuery = {
  query: MongoTypeToQuery<Partial<RAGResource | AdminAddDataLineItem>>
  queryingApp: RegisteredVia
  queryOptions: {
    onlySources?: boolean
    onlyActiveSources?: boolean
    onlyCount?: boolean
    skip?: number
    limit?: number
    sort?: {
      [key in keyof RAGResource]?: 'ASC' | 'DESC' | 1 | -1
    }
  }
  adminHasAccessFor?: RegisteredVia[]
}

export type AdminDataBankQuerySourcesOnlyResponse = {
  sources: Array<
    AdminAddDataSource & {
      _id?: string
    }
  >
}

export type AdminDataBankQueryCountOnlyResponse = {
  count: number
}

export type AdminDataBankQueryDataResponse = {
  data:
    | RAGResource[]
    | RAGResource
    | AdminAddDataLineItem
    | AdminAddDataLineItem[]
  total: number
}

export type AdminDataBankPendingResponse = {
  data: AdminAddDataLineItem[]
  total: number
}

export type AdminDataBankQueryResponse =
  | AdminDataBankQuerySourcesOnlyResponse
  | AdminDataBankQueryCountOnlyResponse
  | AdminDataBankQueryDataResponse
  | AdminDataBankPendingResponse

export type AdminAddDataLineItem = {
  data_type: RAGResourceLineItemTypes
  source: string
  project: RegisteredVia
  url: string
  location: string
  depth?: number
  isLocalFile?: boolean
  localFilePath?: string
  title?: string
  description?: string
  processLinks?: boolean
  linkColumnHeader?: string
  channelIdForVideo?: string
  status?: IngestionProcessingStatus
  error?: string
  shouldScrapeUrl?: boolean
  originalFileName?: string
  createdAt?: Date
  updatedAt?: Date
}

export type AdminAddDataSource = {
  name: string
  project: RegisteredVia
  is_active: boolean
  createdAt?: Date
  updatedAt?: Date
  uniqueId?: string
}

export type AdminDeleteDataSourceQuery = {
  sourceId: string
}

export type AdminDeleteDataSourceQueryResponse = {
  success: boolean
}

export type AdminEditDataSourceQuery = {
  sourceId: string
  sourceData: Omit<Partial<AdminAddDataSource>, 'createdAt' | 'updatedAt'>
}

export type AdminEditDataSourceQueryResponse = {
  success: boolean
}
