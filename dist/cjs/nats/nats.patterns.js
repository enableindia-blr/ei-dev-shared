"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NATS_Queues = exports.NATS_Patterns = void 0;
exports.NATS_Patterns = {
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
    admin_data_users: "admindata.users",
    admin_data_questions: "admindata.questions",
    admin_data_bank: "admindata.bank",
};
exports.NATS_Queues = {
    user_auth: "queue.userauth",
    aichat: "queue.aichat",
    wa_update: "queue.waupdate",
    admin_data: "queue.admindata",
};
