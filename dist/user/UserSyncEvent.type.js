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
export const USER_SYNC_EVENT_VERSION = 1;
/**
 * Keys copied into the sync snapshot. Kept explicit (rather than spreading the
 * whole entity) so a new column is never leaked by accident — adding a field to
 * the payload is a deliberate edit here. Mirrors the UserBase shape.
 */
export const UserSyncSnapshotKeys = [
    'id',
    'name',
    'email',
    'phone',
    'isActive',
    'isAdmin',
    'adminType',
    'isAdminFor',
    'emailVerified',
    'phoneVerified',
    'registeredVia',
    'usesProjects',
    'isBlocked',
    'whatsappId',
    'customProps',
    'created_at',
    'updated_at',
    'hashedPassword',
];
