export declare enum CommsSMSVariant {
    DEFAULT = "default",
    OTP = "otp",
    VERIFICATION = "verification"
}
export type CommsSMSRequest = {
    to: string;
    message: {
        [key in CommsSMSVariant]: string;
    };
    variant?: CommsSMSVariant;
};
export type CommsEmailRequest = {
    to: string;
    subject: string;
    message: string;
    htmlMessage: string;
};
export type CommsSMSResponse = {
    success: boolean;
    messageId: string;
    message: {
        [key in CommsSMSVariant]: string;
    };
};
export type CommsEmailResponse = {
    success: boolean;
    messageId: string;
    message: string;
    error?: string;
};
//# sourceMappingURL=Comms.type.d.ts.map