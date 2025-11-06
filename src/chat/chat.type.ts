import { RAGResourceLineItemTypes } from '../adminQueries/adminQueries.type'
import { RegisteredVia } from '../user/User.type'

export type ArticulatingItem = {
  baseText: string
  translatedText: string
  langCode: string
  langName: string
}

export type ArticulatingItemQuery = {
  sessionId: string
  message: string
  langCode: string
  langName: string
}

export type ChatMessage = {
  text: string
  type: 'user' | 'bot' | 'articulation'
  isAudio?: boolean
  audioURI?: string
  audioBlob?: Blob
  links?: { url: string; title: string }[]
}

export type ChatDetectedLanguageResponse = {
  lang_code?: string
  lang_name?: string
  error?: string
}

export type ChatTranslationResponse = {
  text?: string
  error?: string
  lang_code?: string
}

export type ChatTranscriptionResponse = {
  source_lang_name?: string
  source_lang_code?: string
  error?: string
  text?: string
}

export type ChatQueryResponse = {
  answer?: string
  completion_tokens?: number
  error?: string
  context?: RAGStatsResponse['context']
}

export type ChatVoiceResponse = {
  links?: { url: string; title: string }[]
  audioPath?: string
  error?: string
}

export type ChatArticulationResponse = {
  text: string
  error?: string
}

export type ChatQuery = {
  sessionId: string
  project: RegisteredVia
  sourceMode: 'wa' | 'web' | 'windows' | 'mac' | 'linux' | 'ios' | 'android'
  queryTimestamp: Date
  responseTimestamp?: Date
  history: ChatHistoryItem[]
}

export type ChatHistoryItem =
  | (Omit<ChatQueryPayloadText, 'sessionId' | 'project' | 'sourceMode'> & {
      type: 'query'
      timestamp: Date
    })
  | (Omit<ChatQueryPayloadVoice, 'sessionId' | 'project' | 'sourceMode'> & {
      type: 'voice-query'
      timestamp: Date
    })
  | (Omit<ChatQueryPayloadText, 'sessionId' | 'project' | 'sourceMode'> & {
      type: 'detect-language-query'
      timestamp: Date
    })
  | (Omit<ChatQueryPayloadTTS, 'sessionId' | 'project' | 'sourceMode'> & {
      type: 'tts-query'
      timestamp: Date
    })
  | (Omit<
      ChatQueryPayloadTranslation,
      'sessionId' | 'project' | 'sourceMode'
    > & {
      type: 'translation-query'
      timestamp: Date
    })
  | (Omit<
      ChatDetectedLanguageResponse,
      'sessionId' | 'project' | 'sourceMode'
    > & {
      type: 'detected-language'
      timestamp: Date
    })
  | (Omit<ChatTranslationResponse, 'sessionId' | 'project' | 'sourceMode'> & {
      type: 'translation'
      timestamp: Date
    })
  | (Omit<ChatTranscriptionResponse, 'sessionId' | 'project' | 'sourceMode'> & {
      type: 'transcription'
      timestamp: Date
    })
  | (Omit<ChatQueryResponse, 'sessionId' | 'project' | 'sourceMode'> & {
      type: 'query-response'
      timestamp: Date
    })
  | (Omit<ChatVoiceResponse, 'sessionId' | 'project' | 'sourceMode'> & {
      type: 'voice-response'
      timestamp: Date
    })
  | {
      type: 'error'
      message: string
      timestamp: Date
    }

export type ChatQueryPayloadText = Pick<
  ChatQuery,
  'sessionId' | 'project' | 'sourceMode'
> & {
  query: string
  page?: number
}

export type ChatQueryPayloadVoice = Pick<
  ChatQuery,
  'sessionId' | 'project' | 'sourceMode'
> & {
  audioPath?: string
  audioBuffer?: ArrayBuffer
  page?: number
}

export type ChatQueryPayloadTranslation = Pick<
  ChatQuery,
  'sessionId' | 'project' | 'sourceMode'
> & {
  query: string
  source_lang_name: string
  target_lang_name: string
  target_lang_code: string
}

export type ChatQueryPayloadTTS = Pick<
  ChatQuery,
  'sessionId' | 'project' | 'sourceMode'
> & {
  text: string
}

export type ChatResponsePayload = Pick<ChatQuery, 'sessionId'> & {
  response?: ChatQueryResponse | ChatVoiceResponse | ChatArticulationResponse
}

export type ChatIncomingMessageEvent = {
  event: 'answer-text' | 'answer-voice' | 'articulating' | 'answer-stats'
  content: ChatResponsePayload
}

export type ChatOutgoingMessageEvent = {
  event: 'question-text' | 'question-voice' | 'question-stats'
  content: ChatQueryPayloadText | ChatQueryPayloadVoice
}

export type RAGContext = {
  resource_id: string
  url: string
  title: string
  resource_type: RAGResourceLineItemTypes
  source: string
  content: string
  thumbnail: string
}

export type RAGResponse = {
  query: string
  session_id: string
  context: RAGContext[]
}

export type RAGStatsResponse = {
  query: string
  session_id: string
  context: {
    error?: string
    mongo_query?: string
    results?: Record<string, any>[]
  }
}

export type UserMessage = {
  message: {
    role: 'user'
    content: string
  }
  promptTokens: number
}

export type SystemMessage = {
  message: {
    role: 'system'
    content: string
  }
  promptTokens: number
}

export type AssistantMessage = {
  message: {
    role: 'assistant'
    content: string
  }
  promptTokens: number
}
