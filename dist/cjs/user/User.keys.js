"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForAdminDTOKeys = exports.UserDTOKeys = void 0;
// E2: typed so a renamed/misspelled field fails the build instead of vanishing from responses.
exports.UserDTOKeys = [
    'id',
    'email',
    'phone',
    'adminType',
    'emailVerified',
    'phoneVerified',
    'registeredVia',
    'isBlocked',
    'name',
    'isActive',
    'isAdmin',
    'sessionId',
    'whatsappId',
    'customProps',
    'updated_at',
    'isAdminFor',
];
exports.UserForAdminDTOKeys = [
    'id',
    'email',
    'phone',
    'adminType',
    'emailVerified',
    'phoneVerified',
    'registeredVia',
    'isBlocked',
    'name',
    'isActive',
    'isAdmin',
    'whatsappId',
    'customProps',
];
