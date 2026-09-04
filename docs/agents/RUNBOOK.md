<!-- agent-doc
summary: Records verified setup, launch, health, smoke, shutdown, and troubleshooting commands for the real app.
read_when: Running, testing, debugging, profiling, or validating the application.
owner: operations-reviewer
status: current
last_reviewed: 2026-09-03
-->

# Application runbook

## Prerequisites and setup

- Node.js 20 or newer and npm are required. No local database or required environment file is used by the marketing site.
- Install the lockfile exactly with `npm ci`.

## Start

- Run `npm run dev -- --hostname 127.0.0.1 --port 3000`.
- The app is ready when Next.js prints `Ready` and `http://127.0.0.1:3000` returns HTTP 200.

## Health and smoke path

- Health: `node -e "fetch('http://127.0.0.1:3000/').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))"` while the dev server is running.
- Smoke: open `/`, `/how-it-works`, `/insurance`, `/services/orthopedic-sports`, `/conditions/back-pain`, and `/blog/pelvic-floor-exercises-after-c-section`; each route must render without a console error or horizontal overflow.

## Stop and cleanup

- Stop the foreground development server with Ctrl+C. `.next/` and `node_modules/` are generated and ignored; deleting them is not part of routine cleanup.

## Known failure modes

- A stale browser favicon can survive a deployment. Verify in a fresh private/incognito tab and request `/favicon.ico` directly before diagnosing the build.
- If local fonts fail to download during `npm run build`, verify network access and rerun; `next/font` fetches the configured Google fonts at build time.
- The pinned Next.js 14 release currently reports known dependency advisories during `npm ci`. Treat framework upgrades as a separate, reviewed change rather than applying `npm audit fix --force`.
