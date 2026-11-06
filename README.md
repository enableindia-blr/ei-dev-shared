# @enable-india/ei-dev-shared

Shared TypeScript types and constants for the EI-Comm services (`ei-user-service`,
`ei-comms-service`) and the products that call them over NATS: NATS subject names
(`NATS_Patterns`), request/response DTOs, the `RegisteredVia` project enum, and
user-sync event types.

It contains types and constants only: no services, no runtime dependencies.

## Install

```bash
npm install @enable-india/ei-dev-shared
```

Works from both CommonJS (`require`, e.g. NestJS) and bundlers (`import`).

```ts
import { NATS_Patterns, RegisteredVia, CommsSMSVariant } from '@enable-india/ei-dev-shared'
```

> Plain Node ESM (`import` without a bundler) does not work yet: the ESM build's
> relative imports have no `.js` extension.

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

`RegisteredVia` is the list of project names (also a Postgres enum in user-service).
Adding one means editing `src/user/User.type.ts`, publishing a new version, and
extending the DB enum.

## License

`UNLICENSED`: for use by Enable India applications only. No public license is granted.
