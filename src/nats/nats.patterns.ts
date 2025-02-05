export const NATS_Patterns = {
  auth_register: "userauth.register",
  auth_login: "userauth.login",
  auth_me: "userauth.me",
  auth_wa_login: "userauth.wa-login",
  auth_wa_me: "userauth.wa-me",
  aichat_questionText: "aichat.question-text",
  aichat_transcribe: "aichat.transcribe",
  aichat_translate: "aichat.translate",
  aichat_getLanguage: "aichat.get-language",
  aichat_tts: "aichat.tts",
  aichat_clearContext: "aichat.clear-context",
  aichat_logQuery: "aichat.log-query",
  waupdate_progress: "waupdate.progress",
}

export const NATS_Queues = {
  user_auth: "queue.userauth",
  aichat: "queue.aichat",
  wa_update: "queue.waupdate",
}
