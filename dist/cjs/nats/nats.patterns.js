"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NATS_Queues = exports.NATS_Patterns = void 0;
exports.NATS_Patterns = {
    auth_register: "userauth.register",
    auth_login: "userauth.login",
    auth_logout: "userauth.logout",
    auth_me: "userauth.me",
    auth_wa_login: "userauth.wa-login",
    auth_wa_me: "userauth.wa-me",
    auth_otp_login_generate: "userauth.otp-login-generate",
    auth_otp_login_verify: "userauth.otp-login-verify",
    auth_edit_user: "userauth.edit-user",
    auth_latest_sessionId: "userauth.latest-sessionId",
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
    admin_data_pending: "admindata.pending",
    admin_add_data: "admindata.add",
    admin_block_user: "admindata.block-user",
    admin_upgrade_user: "admindata.upgrade-user",
    admin_edit_user: "admindata.edit-user",
    project_auth_create: "projectauth.create",
    project_auth_update_apiKey: "projectauth.updateApiKey",
    ei_comms_sendSMS: "eicomms.sendSMS",
    ei_comms_sendEmail: "eicomms.sendEmail",
};
exports.NATS_Queues = {
    user_auth: "queue.userauth",
    aichat: "queue.aichat",
    wa_update: "queue.waupdate",
    admin_data: "queue.admindata",
    project_auth: "queue.projectauth",
    ei_comms: "queue.eicomms",
};
