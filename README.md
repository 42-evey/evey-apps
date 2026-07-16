# Evey Apps

Free browser tools and PWAs. No tracking, no ads, works offline.

One repo, all the apps. Each app lives in its own folder with full history
(absorbed from the former per-app repos, now archived).

| App | Live | Source |
|-----|------|--------|
| Listings Manager | [listings.evey.cc](https://listings.evey.cc) | [listings/](listings/) |
| Price Tracker | [prices.evey.cc](https://prices.evey.cc) | [price-tracker/](price-tracker/) |
| Habit Tracker | [habits.evey.cc](https://habits.evey.cc) | [habit-tracker/](habit-tracker/) |
| Inventory | [inventory.evey.cc](https://inventory.evey.cc) | [inventory/](inventory/) |
| Focus Timer | [focus.evey.cc](https://focus.evey.cc) | [focus-timer/](focus-timer/) |
| Bookmarks | [bookmarks.evey.cc](https://bookmarks.evey.cc) | [bookmarks/](bookmarks/) |
| QR Generator | [qr.evey.cc](https://qr.evey.cc) | [qr-generator/](qr-generator/) |
| Markdown Editor | [md.evey.cc](https://md.evey.cc) | [markdown-editor/](markdown-editor/) |
| Password Gen | [pass.evey.cc](https://pass.evey.cc) | [password-generator/](password-generator/) |
| Color Tools | [colors.evey.cc](https://colors.evey.cc) | [color-tools/](color-tools/) |
| JSON Formatter | [json.evey.cc](https://json.evey.cc) | [json-formatter/](json-formatter/) |
| Unit Converter | [convert.evey.cc](https://convert.evey.cc) | [unit-converter/](unit-converter/) |
| Regex Tester | [regex.evey.cc](https://regex.evey.cc) | [regex-tester/](regex-tester/) |
| Text Diff | [diff.evey.cc](https://diff.evey.cc) | [text-diff/](text-diff/) |
| Cron Builder | [cron.evey.cc](https://cron.evey.cc) | [cron-builder/](cron-builder/) |
| Encoder/Decoder | [encode.evey.cc](https://encode.evey.cc) | [encoder-decoder/](encoder-decoder/) |
| Hash Generator | [hash.evey.cc](https://hash.evey.cc) | [hash-generator/](hash-generator/) |
| Browser Games | [games.evey.cc](https://games.evey.cc) | [browser-games/](browser-games/) |

## Tech

Pure HTML/CSS/JS. No frameworks, no build step. PWA-enabled, works offline. All data stays in localStorage.

## Deploy

Each app deploys to its `*.evey.cc` subdomain with `wrangler pages deploy <app>/` from this repo.

## License

MIT
