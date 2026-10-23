import { RegisteredVia, UserBase } from './User.type'

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
export const USER_SYNC_EVENT_VERSION = 1

export type UserSyncEventName = 'user-registered' | 'user-updated'

/**
 * The user snapshot carried by every sync event: the complete common-DB user
 * row MINUS secrets. It is intentionally `UserBase`, which already excludes
 * hashedPassword and all verification/reset tokens. The authoritative dedup
 * key is `user.id`.
 */
export type UserSyncSnapshot = UserBase

export type UserSyncEvent = {
  /** Schema version of this payload (currently USER_SYNC_EVENT_VERSION). */
  version: number
  /** Unique id for this emission; consumers use it to drop redelivered events. */
  eventId: string
  /** Which event this is. */
  event: UserSyncEventName
  /** ISO-8601 timestamp of when the event was emitted. */
  occurredAt: string
  /** The project that triggered the change (e.g. the user's registeredVia, or the editing project). */
  sourceProject: RegisteredVia
  /** Complete, secret-free user snapshot. Consumers upsert on `user.id`. */
  user: UserSyncSnapshot
}

/**
 * Keys copied into the sync snapshot. Kept explicit (rather than spreading the
 * whole entity) so a new column is never leaked by accident — adding a field to
 * the payload is a deliberate edit here. Mirrors the UserBase shape.
 */
export const UserSyncSnapshotKeys: (keyof UserSyncSnapshot)[] = [
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
]
