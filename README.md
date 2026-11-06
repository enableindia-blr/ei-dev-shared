# @enable-india/ei-dev-shared

Shared TypeScript types and constants for the EI-Comm services (`ei-user-service`,
`ei-comms-service`) and the products that call them over NATS: NATS subject names
(`NATS_Patterns`), request/response DTOs, the `RegisteredVia` project-name type, and
user-sync event types.

It contains types and constants only: no services, no runtime dependencies.

## Install

```bash
npm install @enable-india/ei-dev-shared
```

Works from both CommonJS (`require`, e.g. NestJS) and bundlers (`import`).

```ts
import { NATS_Patterns, CommsSMSVariant, type RegisteredVia } from '@enable-india/ei-dev-shared'
// Blimey's course / exercise / progress types live in their own entry:
import { CourseList, UserProgressActionType } from '@enable-india/ei-dev-shared/blimey'
```

> Plain Node ESM (`import` without a bundler) does not work yet: the ESM build's
> relative imports have no `.js` extension. For the same reason TypeScript's
> `moduleResolution: node16`/`nodenext` can't read the types; `node10` (`node`) and `bundler` work.

## Develop

```bash
npm install
npm run build   # ESM + types to dist/, CommonJS to dist/cjs/
npm test        # checks the CommonJS entry loads
```

`dist/` is committed: run `npm run build` and commit `dist/` with every source change.

## Publish

`npm publish` does not build. Run `npm run build` first, bump `version`, then publish
(needs the `ei.npm` account's 2FA code). A published version can never be overwritten.

## Adding a project

Projects are data, not code: register one with `./scripts/deploy.sh prod --add-project <name>`
(ei-comm repo), which calls `projectauth.create`. No new version of this package is needed.
`RegisteredVia` is just `string`; names use 1-50 of `a-z 0-9 _ .`.

## Upgrading from `@ei-dev/ei-dev-shared` 1.x

2.0.0 removed the `RegisteredVia` enum (it published every project name). Replace
`RegisteredVia.MY_APP` with `'my_app'` (the project's name); code that only uses the type is unchanged.

2.0.0 also moved the `Blimey/` types (`Course`, `Chapter`, `Module`, `Exercise`,
`UserProgress`, `actionKeyMap`, `systemActionValidators` and their enums) out of the main entry:
import them from `'@enable-india/ei-dev-shared/blimey'`. Everything else stays in the main entry.

## License

`UNLICENSED`: for use by Enable India applications only. No public license is granted.
