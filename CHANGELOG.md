# Changelog

## 1.0.12

- Feature: Terminal Access (P1) - Monitor and interact with terminal output from mobile.
- Feature: Changes Overview (P1) - View and manage pending file changes with a dedicated FAB.
- Feature: Artifacts Panel (P2) - Browse generated artifacts through a dedicated mobile view.
- UI: Improved native controls layout and responsiveness on mobile.

## 1.0.11

- Fix: Resolved `SyntaxError` in snapshot capture script affecting connection.
- Fix: Improved error handling and diagnostics for mobile bridge.
- Fix: Ensure correct discovery of Antigravity UI targets.

## 1.0.10

- Fix: Resilient DOM selectors for message injection (fixes broken chat in Google update).
- Fix: Hide legacy UI elements (Review Changes, Mic, etc.) in mobile client via post-processing.
- Improved diagnostic probing for future rapid fixes.


## 1.0.9

- Correct repository and issue URLs in `package.json` and `CHANGELOG.md`.

## 1.0.8

- Fix: Resolved `EROFS: read-only file system` error on macOS by moving SSL certificate storage to the extension directory.
- Closes [#1](https://github.com/cafeTechne/antigravity-link-extension/issues/1).


- Add README badges and repository links.
- Add contributing note and improve discoverability.

## 1.0.2

- Update README demo image links to public URLs.

## 1.0.1

- Clarify Windows Start Menu launch path and multi-session requirements.
