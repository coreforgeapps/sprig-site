# sprig-site STATUS

Public repo (github.com/topshopnation/sprig-site), serves heysprig.com. Do not put internal or legal material here.

## 2026-10-24: private items removed (pushed)
- Removed legal-evidence/, RELEASE_SITE_PLAN.md, topshopnation-draft/.
- legal-evidence/ copied to private repo sprig-ios at docs/legal-evidence/ (commit 02e3a54d on sync-rebuild, not pushed). Copy diffed identical before deletion.
- Checked before deleting: no site file referenced any of the three; CNAME (heysprig.com) and all other tracked files unchanged.
- Pushed to origin/main (rebased over two remote copy commits first; no conflicts). Pages build finished.
- Verified 2026-10-24 after the build: heysprig.com, /privacy, /faq return 200; the three items return 404 on heysprig.com, github.com and raw.githubusercontent.com.
- Git history still contains the removed files. A history rewrite is a separate decision.
- sprig-ios commit 02e3a54d (docs/legal-evidence) is still unpushed.
- Source: git and grep run in this session, 2026-10-24.
