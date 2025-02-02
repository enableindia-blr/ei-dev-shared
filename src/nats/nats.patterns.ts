export const NATS_Patterns = {
  auth_register: "userauth.register",
  auth_login: "userauth.login",
  auth_me: "userauth.me",
  aichat_questionText: "aichat.question-text",
  aichat_questionVoice: "aichat.question-voice",
  aichat_translate: "aichat.translate",
  aichat_getLanguage: "aichat.get-language",
  aichat_tts: "aichat.tts",
}

export const NATS_Queues = {
  user_auth: "queue.userauth",
  aichat: "queue.aichat",
}
