export enum ResourceType {
  Web = "web",
  Video = "video",
}

export type DishData = {
  title: string
  body: string
  tags: string[]
  country: string
  url: string
  resource_type: ResourceType
  source: string
  thumbnail?: string
}
