export type ChatMessage = {
  text: string
  type: "user" | "bot" | "articulation"
  clearTrigger?: boolean
  isAudio?: boolean
  audioURI?: string
}

export type ChatDetectedLanguage = {
  lang_code: string
  lang_name: string
}

export type ChatQuery = {
  query: string
  translatedQuery?: string
  response?: string
  translatedResponse?: string
  lang_code: string
  audioPath?: string
  sessionId: string
  sourceProject: "blimey" | "dish"
  sourceMode: "wa" | "web" | "windows" | "mac" | "linux" | "ios" | "android"
  queryTimestamp: Date
  responseTimestamp?: Date
  intermediateTimestamps?: {
    searchIntentFromHistory: Date
    ragContextGeneration: Date
    promptToOpenAI: Date
    openAIResponse: Date
  }
}

export type ChatQueryPayloadText =
  | Pick<ChatQuery, "query" | "sessionId" | "sourceProject" | "sourceMode"> & {
      needsTTS?: boolean
    }

export type ChatQueryPayloadVoice = Pick<
  ChatQuery,
  "audioPath" | "sessionId" | "sourceProject" | "sourceMode"
>

export type ChatResponsePayload = Pick<
  ChatQuery,
  "response" | "translatedResponse" | "sessionId"
> & {
  needsTTS?: boolean
  toUserLanguage?: boolean
  clearTrigger?: boolean
}

export type ChatIncomingMessageEvent = {
  event:
    | "answer-text"
    | "answer-voice"
    | "translation"
    | "language"
    | "articulating"
    | "tts"
  content: ChatResponsePayload
}

export type ChatOutgoingMessageEvent = {
  event:
    | "question-text"
    | "question-voice"
    | "translate"
    | "get-language"
    | "tts"
  content: ChatQueryPayloadText | ChatQueryPayloadVoice
}

export type RAGContext = {
  id: number
  distance: number
  entity: {
    content: string
    org: string
    url: string
    title: string
  }
}

export type RAGResponse = {
  query: string
  session_id: string
  context: RAGContext[][]
}

export type UserMessage = {
  message: {
    role: "user"
    content: string
  }
  promptTokens: number
}

export type SystemMessage = {
  message: {
    role: "system"
    content: string
  }
  promptTokens: number
}

export type AssistantMessage = {
  message: {
    role: "assistant"
    content: string
  }
  promptTokens: number
}
