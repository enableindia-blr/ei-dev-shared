export type ChatMessage = {
    text: string;
    type: "user" | "bot" | "articulation";
    isAudio?: boolean;
    audioURI?: string;
    audioBlob?: Blob;
    links?: {
        url: string;
        title: string;
    }[];
};
export type ChatDetectedLanguageResponse = {
    lang_code?: string;
    lang_name?: string;
    error?: string;
};
export type ChatTranslationResponse = {
    text?: string;
    error?: string;
    lang_code?: string;
};
export type ChatTranscriptionResponse = {
    source_lang_name?: string;
    source_lang_code?: string;
    error?: string;
    text?: string;
};
export type ChatQueryResponse = {
    answer?: string;
    completion_tokens?: number;
    error?: string;
};
export type ChatVoiceResponse = {
    links?: {
        url: string;
        title: string;
    }[];
    audioPath?: string;
    error?: string;
};
export type ChatArticulationResponse = {
    text: string;
    error?: string;
};
export type ChatQuery = {
    sessionId: string;
    sourceProject: "blimey" | "dish";
    sourceMode: "wa" | "web" | "windows" | "mac" | "linux" | "ios" | "android";
    queryTimestamp: Date;
    responseTimestamp?: Date;
    history: ChatHistoryItem[];
};
export type ChatHistoryItem = (Omit<ChatQueryPayloadText, "sessionId" | "sourceProject" | "sourceMode"> & {
    type: "query";
    timestamp: Date;
}) | (Omit<ChatQueryPayloadVoice, "sessionId" | "sourceProject" | "sourceMode"> & {
    type: "voice-query";
    timestamp: Date;
}) | (Omit<ChatQueryPayloadText, "sessionId" | "sourceProject" | "sourceMode"> & {
    type: "detect-language-query";
    timestamp: Date;
}) | (Omit<ChatQueryPayloadTTS, "sessionId" | "sourceProject" | "sourceMode"> & {
    type: "tts-query";
    timestamp: Date;
}) | (Omit<ChatQueryPayloadTranslation, "sessionId" | "sourceProject" | "sourceMode"> & {
    type: "translation-query";
    timestamp: Date;
}) | (Omit<ChatDetectedLanguageResponse, "sessionId" | "sourceProject" | "sourceMode"> & {
    type: "detected-language";
    timestamp: Date;
}) | (Omit<ChatTranslationResponse, "sessionId" | "sourceProject" | "sourceMode"> & {
    type: "translation";
    timestamp: Date;
}) | (Omit<ChatTranscriptionResponse, "sessionId" | "sourceProject" | "sourceMode"> & {
    type: "transcription";
    timestamp: Date;
}) | (Omit<ChatQueryResponse, "sessionId" | "sourceProject" | "sourceMode"> & {
    type: "query-response";
    timestamp: Date;
}) | (Omit<ChatVoiceResponse, "sessionId" | "sourceProject" | "sourceMode"> & {
    type: "voice-response";
    timestamp: Date;
}) | {
    type: "error";
    message: string;
    timestamp: Date;
};
export type ChatQueryPayloadText = Pick<ChatQuery, "sessionId" | "sourceProject" | "sourceMode"> & {
    query: string;
};
export type ChatQueryPayloadVoice = Pick<ChatQuery, "sessionId" | "sourceProject" | "sourceMode"> & {
    audioPath?: string;
    audioBuffer?: ArrayBuffer;
};
export type ChatQueryPayloadTranslation = Pick<ChatQuery, "sessionId" | "sourceProject" | "sourceMode"> & {
    query: string;
    source_lang_name: string;
    target_lang_name: string;
    target_lang_code: string;
};
export type ChatQueryPayloadTTS = Pick<ChatQuery, "sessionId" | "sourceProject" | "sourceMode"> & {
    text: string;
};
export type ChatResponsePayload = Pick<ChatQuery, "sessionId"> & {
    response?: ChatQueryResponse | ChatVoiceResponse | ChatArticulationResponse;
};
export type ChatIncomingMessageEvent = {
    event: "answer-text" | "answer-voice" | "articulating";
    content: ChatResponsePayload;
};
export type ChatOutgoingMessageEvent = {
    event: "question-text" | "question-voice";
    content: ChatQueryPayloadText | ChatQueryPayloadVoice;
};
export type RAGContext = {
    id: number;
    distance: number;
    entity: {
        content: string;
        org: string;
        url: string;
        title: string;
    };
};
export type RAGResponse = {
    query: string;
    session_id: string;
    context: RAGContext[];
};
export type UserMessage = {
    message: {
        role: "user";
        content: string;
    };
    promptTokens: number;
};
export type SystemMessage = {
    message: {
        role: "system";
        content: string;
    };
    promptTokens: number;
};
export type AssistantMessage = {
    message: {
        role: "assistant";
        content: string;
    };
    promptTokens: number;
};
