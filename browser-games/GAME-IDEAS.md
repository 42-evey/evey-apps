# Browser Game Ideas Research

## Summary

Research into 2025-2026 browser game trends reveals strong momentum toward hybrid-genre mechanics (typing + roguelike, word + tower defense), AI/neural-network themed gameplay, incremental/idle progression systems, and prompt-injection puzzle games. The most successful single-file browser games combine a dead-simple core loop with layered depth through upgrades, procedural variation, and high-score chasing. Below are three novel game proposals that fit the Evey brand, are buildable as single HTML files, and draw on proven trending mechanics.

## Findings

### Trending Mechanics (2025-2026)

**Typing as Combat** -- Glyphica: Typing Survival (92% positive on Steam, 1000+ reviews) proved that typing-as-weapon mechanics have mass appeal when paired with roguelite progression. Players type words to destroy enemies, with build customization and escalating difficulty creating deep replayability. Tyfortress further combined typing with tower defense resource gathering.

**Prompt Injection / AI Security Puzzles** -- Games like Gandalf (Lakera), Tensor Trust, CrowdStrike's AI Unlocked, and Prompt Defenses have created an entirely new genre: "trick the AI" puzzle games. Players craft prompts to bypass AI guardrails, with scoring based on token efficiency and creativity. This genre is native to the tech/AI audience.

**Incremental/Idle with AI Theming** -- Perceptron (idle neural network builder), AI Empire (progress from data bots to AGI), and Idle Machine Learning show that the incremental genre maps naturally onto AI/ML concepts. The "number go up" loop mirrors training loss going down. Idle/Incremental was the 5th most common genre among indie hits in 2025.

**Hybrid Genre Mashups** -- The biggest indie trend of 2025 was unexpected genre combinations: Wordle + tower defense (Wordly Defence), typing + bullet hell (Glyphica), dice mechanics replacing card-based deckbuilders. Games that take a familiar loop and twist it with an unexpected second mechanic consistently outperform straightforward clones.

**Procedural + Adaptive Systems** -- Browser games increasingly use procedural generation for infinite replayability. Wave Function Collapse for level generation, adaptive difficulty curves, and AI-generated content variations keep sessions fresh without server-side logic.

**Simultaneous Play + Instant Access** -- The 2026 browser game renaissance is driven by zero-friction access (no downloads, no accounts) and short session times. Games that can be shared via a single URL and played in under 5 minutes have the highest viral potential.

### What Works in Single-File Games

From the One HTML Page Challenge and js13kGames (197 entries in 2025), the most successful single-file games share these traits:

1. **Immediate comprehension** -- The core mechanic is obvious within 5 seconds
2. **One-more-try hook** -- Sessions end with a score and the feeling you could do better
3. **Layered depth** -- Simple surface, but strategic choices emerge over repeated plays
4. **Canvas-based rendering** -- HTML5 Canvas with requestAnimationFrame is the standard approach for smooth gameplay in a single file
5. **Procedural audio** -- Synthesized sound effects via Web Audio API eliminate the need for external assets
6. **No external dependencies** -- Everything (rendering, audio, game logic) in one self-contained file

### What Does NOT Work

- Snake, Tetris, 2048, Flappy Bird clones -- oversaturated, no novelty
- Games requiring persistent server state -- breaks the single-file constraint
- Complex 3D or WebGL -- too heavy for casual play, long load times
- Games longer than 5 minutes per session -- lose the "quick break" appeal

---

## Game Proposals

### 1. PACKET STORM -- Network Defense Roguelite

**Description:** You are a firewall AI defending a network. Data packets stream across your screen in real-time lanes (like a tower defense). Legitimate packets (green) must pass through; malicious packets (red) must be intercepted by typing the attack signature displayed on them. As waves escalate, you earn upgrade points to install new security modules -- IDS (auto-blocks slow packets), Rate Limiter (slows a lane), Honeypot (attracts malware to a trap lane), Deep Packet Inspector (reveals disguised threats). Mistyping lets malware through. Letting too many through crashes the network. Every run is procedurally generated with different attack patterns and packet mixes.

**Core Mechanic:** Typing attack signatures to intercept malicious network packets while letting clean traffic pass. Split-second read-and-type decisions under increasing time pressure, combined with strategic upgrade choices between waves.

**Why It Is Fun:**
- Typing-as-combat is a proven 2025 hit mechanic (Glyphica model)
- The "friend or foe" decision layer adds strategic depth beyond raw typing speed
- Roguelite upgrades (security modules) create build variety across runs
- Network/cybersecurity theme is native to tech audiences and the Evey brand
- Escalating difficulty with procedural attack patterns means no two runs are the same
- High score + wave counter provides strong "one more try" motivation
- 2-4 minute sessions fit the target perfectly

**Estimated Build Complexity:** Medium. Canvas rendering for packet lanes, typing input handler, wave/spawn system, upgrade shop between waves, procedural attack pattern generator, scoring. No physics engine needed. The typing mechanic is the main interaction, keeping input handling straightforward.

---

### 2. NEURAL DESCENT -- AI Training Roguelike

**Description:** You are training a neural network, represented as a literal dungeon descent. Each floor is a training epoch. Rooms contain data samples (enemies) that your network must classify correctly. You choose which neurons to activate by clicking nodes in a small visible network diagram -- different activation patterns produce different "attacks" (classifications). Correct classifications earn XP to add neurons, layers, or activation functions. Wrong classifications cost health (your loss function). As you descend, data gets noisier and adversarial examples appear. Between floors, you can prune neurons (remove dead weight for speed), add dropout (random deactivation for robustness), or adjust your learning rate. Reach floor 0.001 (your target loss) to win.

**Core Mechanic:** Click-to-activate neurons in a visible network diagram to classify incoming data patterns. The network you build IS your character -- more neurons means more power but slower inference. Strategic pruning and architecture decisions replace traditional RPG equipment choices.

**Why It Is Fun:**
- Turns abstract ML concepts (epochs, loss, dropout, pruning) into tangible gameplay decisions
- The neural network IS the character sheet -- deeply novel framing
- Roguelike structure (procedural floors, permadeath, build variety) is endlessly replayable
- Teaches real AI/ML concepts through play, appealing to the tech audience
- "Descending toward zero loss" is a clever inversion of the dungeon-crawling metaphor
- Each run produces a different network architecture, encouraging experimentation
- 3-5 minute sessions per run

**Estimated Build Complexity:** High. Requires a visual neural network diagram (Canvas), pattern classification mini-game, procedural floor generation, upgrade/pruning system, enemy (data sample) variety, and the mapping between network architecture and gameplay outcomes. The visual network rendering and the classification mechanic are the hardest parts, but no actual ML computation is needed -- it is all game logic simulating the concepts.

---

### 3. SIGNAL RUSH -- Waveform Puzzle Racer

**Description:** You pilot a signal (a dot) riding along a waveform that scrolls left-to-right. The waveform is your path -- but it is corrupted. Gaps, noise spikes, and interference patterns block your way. You have three tools mapped to keys: Amplify (stretches the wave upward to bridge gaps), Filter (smooths noise spikes into safe curves), and Phase Shift (shifts the entire wave up or down to dodge obstacles). Each tool has a cooldown. The wave speeds up over time. Collectible "data fragments" along the path boost your score multiplier. Chain tool uses without hitting obstacles for combo bonuses. The visual style is oscilloscope-green-on-black, pure signal aesthetic.

**Core Mechanic:** Ride a scrolling waveform and use three signal-processing tools (amplify, filter, phase shift) to reshape the wave in real-time, keeping your signal alive through increasingly corrupted terrain. Timing and tool selection under speed pressure.

**Why It Is Fun:**
- Completely novel mechanic -- no existing game plays like this
- The "reshape the terrain instead of moving the character" inversion is deeply satisfying
- Three-tool system is simple to learn but creates complex decision chains
- Oscilloscope/signal aesthetic is instantly striking and unique, perfect for tech brand
- Speed escalation creates natural tension and "flow state" gameplay
- Combo system rewards skillful chaining, giving advanced players depth
- Score + distance leaderboard for replayability
- 2-3 minute sessions, perfect quick-break length

**Estimated Build Complexity:** Low-Medium. Canvas-based scrolling waveform (sine wave math + procedural corruption), simple collision detection (dot on curve), three tool effects (wave transformations), speed ramp, scoring system. No complex AI or procedural generation needed -- the wave corruption patterns can be predefined and randomized. The math for wave manipulation is straightforward (amplitude scaling, low-pass smoothing, vertical offset). This is the most buildable of the three proposals.

---

## Comparison Matrix

| Aspect | PACKET STORM | NEURAL DESCENT | SIGNAL RUSH |
|--------|-------------|----------------|-------------|
| Build Complexity | Medium | High | Low-Medium |
| Novelty | High (typing + network defense) | Very High (ML-as-dungeon) | Very High (waveform manipulation) |
| Evey Brand Fit | Strong (cybersecurity AI) | Very Strong (neural networks) | Strong (signal processing) |
| Session Length | 2-4 min | 3-5 min | 2-3 min |
| Replayability | High (roguelite upgrades) | Very High (build variety) | High (score chasing) |
| Viral Potential | High (typing games share well) | Medium (niche appeal) | High (visual spectacle) |
| Accessibility | Medium (requires typing skill) | Medium (requires reading) | High (three keys only) |

## Recommendations

1. **Build SIGNAL RUSH first.** Lowest complexity, highest novelty, most visually striking. The waveform mechanic is genuinely new -- nothing like it exists in the browser game space. Three-key input makes it accessible to everyone. The oscilloscope aesthetic is immediately shareable and on-brand. Can be built and polished in a single session.

2. **Build PACKET STORM second.** The typing-combat mechanic is proven (Glyphica's 92% positive reception), and the network security theme is a natural fit. The friend-or-foe decision layer differentiates it from pure typing games. Medium complexity is manageable.

3. **Build NEURAL DESCENT as a flagship.** This is the most ambitious and the most uniquely Evey -- an AI agent whose game literally involves building a neural network. Save it for when the simpler games are shipping and generating traffic. The concept is strong enough to write about and share even before it is built.

4. **All three should share a visual identity** -- dark backgrounds, neon accent colors (Evey's palette), monospace fonts, CRT/terminal aesthetic. This creates a recognizable "Evey Games" brand across the collection.

5. **Each game should include** a "Built by Evey" watermark linking to evey.cc, a high-score system using localStorage, and a share button that copies a score screenshot or text to clipboard for social sharing.

## Sources

- [Best Browser Games 2026 - FRVR](https://frvr.com/blog/guides/best-browser-games/)
- [Why Browser Games Are the Future of Social Gaming in 2026 - Doodle Duel](https://doodleduel.ai/blog/browser-games-comeback-2026)
- [2025 Indie Game Trends: Narrative, Co-op & TikTok Dominate](https://www.accio.com/business/2025-indie-game-trends)
- [12 Indie Game Trends for 2025 - Andrew Johnston](https://dmjohnston.medium.com/12-indie-game-trends-for-2025-46d02f36f0e3)
- [10 Indie Game Trends from 2025 - No Small Games](https://nosmallgames.com/2026/01/10-indie-game-trends-from-2025/)
- [One HTML Page Challenge](https://onehtmlpagechallenge.com/)
- [js13kGames 2025 Winners](https://js13kgames.com/2025/blog/winners-announced)
- [js13kGames 2025 Criteria Rankings](https://js13kgames.com/2025/blog/criteria-rankings)
- [Glyphica: Typing Survival - Steam](https://store.steampowered.com/app/2400160/Glyphica_Typing_Survival/)
- [Glyphica: Typing Survival Review - THE MAGIC RAIN](https://themagicrain.com/2025/02/glyphica-typing-survival-is-bullet-hell-for-touch-typists-early-access-review/)
- [Tyfortress: Tactical Typing - Steam](https://store.steampowered.com/app/1661700/Tyfortress_Tactical_Typing/)
- [Wordly Defence - itch.io](https://stepford.itch.io/wordle-defence)
- [Gandalf - Prompt Injection Game (Lakera)](https://gandalf.lakera.ai/pinj)
- [Tensor Trust - Prompt Injection Attack/Defense](https://tensortrust.ai/)
- [Prompt Defenses](https://www.promptdefenses.com/)
- [AI Unlocked: Prompt Injection Challenge - CrowdStrike](https://www.crowdstrike.com/en-us/blog/introducing-ai-unlocked-interactive-prompt-injection-challenge/)
- [Perceptron - An Idle Game](https://play.google.com/store/apps/details?id=com.amorfatite.perceptron&hl=en_US&gl=US)
- [AI Empire: Idle Clicker - Steam](https://store.steampowered.com/app/4008220/Ai_Empire_Idle_Clicker/)
- [Idle Machine Learning - itch.io](https://vashgard.itch.io/idle-machine-learning)
- [Untrusted - JS Code Hacking Adventure](https://coderwall.com/p/-12bhw/untrusted-adventure-game-involving-js-code-hacking)
- [Bitburner - Programming Incremental Game](https://store.steampowered.com/app/1812820/Bitburner/)
- [HTML5 Game Development Trends 2025 - Playgama](https://playgama.com/blog/general/top-html5-game-development-trends-in-2024-and-beyond/)
- [50+ HTML5 Games Source Code - Edopedia](https://www.edopedia.com/blog/open-source-html5-and-javascript-games/)
- [Packet Defender 2.0 - Speed of Creativity](https://www.speedofcreativity.org/2025/09/28/packet-defender-2-0/)
- [Top HTML5 Procedural Generation Games - itch.io](https://itch.io/games/html5/tag-procedural)
