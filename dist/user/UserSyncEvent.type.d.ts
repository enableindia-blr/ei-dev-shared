import { RegisteredVia, UserBase } from './User.type';
/**
 * Outbound user-sync events.
 *
 * The EI Common Service (ei-user-service) PUBLISHES these; consuming projects
 * (blimey today, gsc/opun later) SUBSCRIBE and mirror the user into their own
 * database. This is strictly one-way: the common service never subscribes to
 * these subjects, and consumers must not re-publish them.
 *
 * Transport note: emitted as NATS events (core NATS, at-most-once) via
 * ClientProxy.emit(). See docs/USER_SYNC_EVENTS.md for the consumer contract
 * and the JetStream hardening path for guaranteed delivery.
 */
/** Bump when the payload shape changes in a non-additive way. */
export declare const USER_SYNC_EVENT_VERSION = 1;
export type UserSyncEventName = 'user-registered' | 'user-updated';
/**
 * The user snapshot carried by every sync event: the complete common-DB user
 * row. It is `UserBase` PLUS the bcrypt `hashedPassword`, so a consuming project
 * (e.g. Blimey) can let the user log in with their existing password without
 * re-hashing. All OTHER secrets (verification/reset tokens) are still excluded —
 * only this one credential field is shared, deliberately. Consumers must store
 * `hashedPassword` as-is (never re-hash it) and upsert on `user.id`.
 */
export type UserSyncSnapshot = UserBase & {
    /** bcrypt hash of the user's password — store as-is on the consumer side. */
    hashedPassword?: string;
};
export type UserSyncEvent = {
    /** Schema version of this payload (currently USER_SYNC_EVENT_VERSION). */
    version: number;
    /** Unique id for this emission; consumers use it to drop redelivered events. */
    eventId: string;
    /** Which event this is. */
    event: UserSyncEventName;
    /** ISO-8601 timestamp of when the event was emitted. */
    occurredAt: string;
    /** The project that triggered the change (e.g. the user's registeredVia, or the editing project). */
    sourceProject: RegisteredVia;
    /** Complete user snapshot (incl. bcrypt hashedPassword). Consumers upsert on `user.id`. */
    user: UserSyncSnapshot;
};
/**
 * Keys copied into the sync snapshot. Kept explicit (rather than spreading the
 * whole entity) so a new column is never leaked by accident — adding a field to
 * the payload is a deliberate edit here. Mirrors the UserBase shape.
 */
export declare const UserSyncSnapshotKeys: (keyof UserSyncSnapshot)[];
//# sourceMappingURL=UserSyncEvent.type.d.ts.map