import { RegisteredVia } from '../user/User.type'

export enum ResourceType {
  Web = 'web',
  Video = 'video',
  PDF = 'pdf',
  Document = 'document',
  XML = 'xml',
}

export type RAGResource = {
  title: string
  body: string
  tags: string[]
  country: string
  url: string
  resource_type: ResourceType
  source: string
  thumbnail?: string
  channelIdForVideo?: string
  isConsumed?: boolean
  project: RegisteredVia
  metadata?: Record<string, any>
}
