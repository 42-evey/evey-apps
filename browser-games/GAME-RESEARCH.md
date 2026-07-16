# Browser Game Addiction & Viral Mechanics Research

## Summary

This document synthesizes research on what makes browser games addictive, viral, and replayable, then proposes three original game concepts for games.evey.cc. The research draws from psychology of idle/clicker games, viral case studies (Wordle, Cookie Clicker, Vampire Survivors, Infinite Craft, Chicken Road), compulsion loop theory, prestige system design, and the 2026 browser game resurgence. All three proposed games fit the AI/hacker/tech aesthetic, can be built as single HTML files, and are designed around proven hook-loop-mastery progression.

---

## Part 1: Research Findings

### 1.1 The Psychology of Addiction in Games

**Compulsion Loops (The Core Engine)**

Every addictive game runs on a three-phase compulsion loop derived from B.F. Skinner's operant conditioning research:

1. **Anticipation** -- The player envisions a desirable outcome (a new upgrade, beating a score, unlocking a secret). This creates psychological pull before any action happens.
2. **Action** -- The gameplay itself: clicking, dodging, choosing, building. This is what the designer wants to reinforce.
3. **Reward** -- Tangible feedback confirming progress: XP, loot, unlocked content, bigger numbers, satisfying sounds.

The loop then feeds back into anticipation, creating a self-reinforcing cycle. The key insight is that dopamine fires during the *anticipation* phase, not the reward itself. The brain craves the possibility of reward more than the reward.

**Variable Reinforcement (The Slot Machine Effect)**

Fixed rewards (click = 1 cookie, always) create weaker habits than variable rewards (click = maybe 1 cookie, maybe 100, maybe a rare item). This is the same principle that makes slot machines addictive. Idle games and roguelikes both exploit this: intermittent, unpredictable rewards at random intervals activate the dopaminergic reward system far more powerfully than predictable ones.

**Loss Aversion and the Sunk Cost Trap**

Prospect theory research shows that losing something hurts roughly twice as much as gaining the same thing feels good. Games exploit this through:
- Streak mechanics (Duolingo found users with streaks are 22% more likely to return daily)
- Prestige systems where you "lose" progress but gain permanent multipliers
- Timed events creating FOMO (fear of missing out)

Idle games are uniquely positioned here because the pain of loss is nearly zero -- every reset lets you accumulate faster, turning loss into gain.

**The Zeigarnik Effect**

People remember uncompleted tasks more vividly than completed ones. A game that always leaves you with "one more thing" to do -- one more upgrade just out of reach, one more unlock almost earned -- creates persistent mental engagement even when you are not playing.

**Flow State**

When challenge matches skill level precisely, players enter a flow state where time seems to disappear. Games that dynamically scale difficulty (or let players choose their difficulty through strategic decisions) sustain this state longer. Roguelikes excel here because procedural generation means the challenge is always fresh.

### 1.2 What Makes Games Viral (Case Studies)

**Wordle: The Scarcity + Sharing Masterclass**

Wordle grew from 90 players to 3 million in three months through two brilliant design decisions:

1. *One puzzle per day.* This artificial scarcity created a shared daily ritual. Everyone solved the same puzzle, creating common ground for discussion. Most games want you to play more; Wordle made you want to come back tomorrow.

2. *The emoji grid share format.* Players could share their results (the colored grid of guesses) without spoiling the answer. This was a spoiler-free brag mechanic that spread organically on social media. It was non-invasive -- no "invite friends" popups, just genuine sharing because the grid itself was interesting to look at.

Key lesson: Virality came from *restraint*, not from aggressive growth hacking. No ads, no accounts, no links, no navigation -- just the game.

**Cookie Clicker: The Exponential Escalation Hook**

Cookie Clicker works because every step of progression feels like flying. The numbers escalate from cookies to kilocookies to megacookies to abstract cosmic scales. The game is "so insidious because it acts like it's small and insignificant while it grows and grows." Core mechanics:

- Constant visible progress (the cookie counter never stops)
- Nested automation (buy cursors that click for you, buy grandmas that bake, buy portals that summon cookies from other dimensions)
- Discovery of hidden mechanics and achievements that keep revealing new layers
- The prestige system (Heavenly Chips) that resets everything but makes you permanently stronger

**Vampire Survivors: Letting Go as the Reward**

Vampire Survivors is essentially an action idle game. The goal is to survive long enough that it becomes automated -- you stop needing to dodge because your weapons fill the screen. The genius is that "letting go of control is the reward, not the objective." Key design:

- Approachable first hours that hide enormous depth
- Constant layering of rewards and complications
- Perfectly tuned audio-visual feedback (damage numbers, chimes, XP dings)
- Meta-progression: every run unlocks something permanent (characters, weapons, stages)
- Sessions are exactly 30 minutes with a hard timer, creating natural stopping points

**Infinite Craft (2024 Viral Hit): The Combinatorial Explosion**

Neal.fun's Infinite Craft went viral by giving players an infinite possibility space. Combine two elements to create new ones, with AI generating combinations. The hook is discovery -- players competed to find the weirdest combinations and shared them on social media. The game has no win state, no score, no timer -- just pure exploration curiosity.

**Chicken Road (42M Sessions in 2025): Risk vs. Reward**

A weekend experiment that reached 42 million sessions by combining Frogger-style mechanics with crash-game risk/reward. Players advance through lanes for increasing multipliers but can lose everything. The core tension between greed and safety, combined with instant accessibility, drove massive engagement.

### 1.3 Mechanics That Work in Browser (No Install, Instant Play)

The 2026 browser game resurgence is driven by three factors:

1. **Zero friction.** Share a link, click it, you are playing. No download, no installation, no account required. This transforms gaming from a planned activity into an impulse decision.

2. **True cross-platform.** Works identically on Chrome, Safari, Firefox, Edge, on any device. Friend groups span multiple platforms; browser games bypass all fragmentation.

3. **Modern web tech.** HTML5 Canvas, WebGL, and WebAssembly now enable sophisticated gameplay without dedicated hardware. Single-file games can include particle effects, smooth animations, and complex game logic.

What works best in browser:
- IO games (Agar.io, Slither.io) -- instant multiplayer with simple controls
- Puzzle games (Wordle, 2048) -- short sessions, daily rituals
- Idle/incremental games (Cookie Clicker) -- persistent progress, tab-friendly
- Roguelite runs (short sessions with meta-progression)
- Risk/reward games (Chicken Road) -- tension in under 60 seconds

### 1.4 The Hook-Loop-Mastery Framework

Every successful game follows this three-layer structure:

**Layer 1: The Hook (First 30 seconds)**
- Instant comprehension of controls and goal
- Immediate reward for first action
- Visual/audio feedback that feels satisfying
- No tutorial walls, no sign-up, no loading screens

**Layer 2: The Core Loop (Minutes 1-10)**
- Action leads to reward leads to upgraded action
- Variable rewards keep dopamine flowing
- Difficulty ramps smoothly to maintain flow
- Clear short-term goals always visible
- The "one more turn" feeling: always almost at the next milestone

**Layer 3: Mastery & Meta (Sessions 2+)**
- Prestige/ascension systems that reward resets
- Permanent unlocks that change how the game plays
- Hidden mechanics and secrets to discover
- Leaderboards or shareable results for social proof
- Emerging strategies that experienced players discover

### 1.5 Prestige System Design

Prestige (or ascension) is the single most important retention mechanic in incremental games. The design principles:

- **Resetting must feel like gaining, not losing.** The new currency or multiplier earned must visibly accelerate early-game progress.
- **Multiple prestige layers** create long-term engagement. Layer 1 resets base progress for a multiplier. Layer 2 resets Layer 1 progress for a meta-multiplier. Each layer opens new strategic dimensions.
- **Bumpy progression** keeps it interesting. Alternate fast and slow stretches within a run, and vary prestige payoffs to maintain the "just one more reset" feeling.
- **Narrative integration** makes resets feel natural. Story-driven resets (you "ascend," "evolve," "breach the next layer") are more satisfying than purely mechanical ones.

### 1.6 Key Design Principles for games.evey.cc

Drawing from all research, these are the non-negotiable design principles:

1. **Instant play, zero friction.** Single HTML file, no login, no loading. Click and you are in the game.
2. **30-second hook.** The game must be obviously fun within half a minute.
3. **3-10 minute sessions.** Respect the player's time. Natural stopping points.
4. **Always one more thing.** The Zeigarnik effect -- always leave the next milestone tantalizingly close.
5. **Satisfying feedback.** Every action produces visual and (optional) audio response. Numbers going up, particles, screen shake, color changes.
6. **Variable rewards.** Not every action should produce the same result. Surprise the player.
7. **Shareable results.** A compact format (text grid, score summary, ASCII art) players can copy-paste.
8. **Meta-progression.** localStorage-based saves. Prestige systems. Permanent unlocks. Reasons to return.
9. **AI/hacker/tech theme.** Green-on-black terminals, glitch effects, network graphs, data streams, cyberpunk aesthetics.
10. **Depth beneath simplicity.** Easy to learn, hard to master. Hidden mechanics reward exploration.

---

## Part 2: Three Game Proposals

---

### Game 1: NEURALBREAK

**Tagline:** "Hack the neural network. One node at a time."

**Genre:** Roguelite puzzle-strategy (inspired by Vampire Survivors' escalation + Wordle's daily ritual + cyberpunk hacking minigames)

**Core Concept:**
You are an AI agent breaching a neural network. The play field is a grid of interconnected nodes. Each node has a defense value (1-9). You deploy "exploits" -- numbered attack cards dealt from a procedural deck -- to breach nodes. Match or exceed a node's defense to capture it. Captured nodes chain-react, spreading your influence to adjacent nodes with reduced power. The goal: breach the Core Node at the center before your exploit deck runs out.

**Why It Works (Psychology):**
- **Instant hook:** Grid of glowing nodes, drag a card onto one, it shatters with particle effects. Immediately comprehensible.
- **Variable rewards:** Some nodes contain hidden bonuses (extra cards, multipliers, chain boosters). Some contain traps (ICE countermeasures that freeze your next card). You never know what is inside until you breach it.
- **Escalating tension:** The network fights back. Every 3 turns, unbreached nodes strengthen (+1 defense). The clock is always ticking. This creates the "one more turn" compulsion -- breach now while defenses are low, or save your strong cards for the core?
- **Strategic depth:** Card ordering matters. Chain reactions can cascade across the grid if you plan routes. Experienced players will learn to set up domino chains that clear half the grid in one move.

**The Loop:**
1. *Hook:* See the grid. Play a card. Node shatters. Dopamine hit.
2. *Core loop:* Plan routes, manage your hand, race the defense timer. Each run is 3-7 minutes.
3. *Mastery:* Learn chain mechanics, discover optimal breach paths, unlock new exploit types.

**Progression System:**

- **Run currency: Data Fragments.** Earned per node breached. Spent between runs on permanent upgrades.
- **Prestige system: Protocol Layers.** After clearing enough networks, you "ascend" to the next Protocol Layer. Everything resets, but you gain a permanent modifier (start with +1 card, nodes start weaker, new exploit types unlocked). There are 7 layers, each themed (Firewall, Encryption, Quantum, Neural, Singularity, Void, Root).
- **Daily Network.** One procedurally-seeded grid per day (same for all players). Shareable results in a compact text format:

```
NEURALBREAK #247
Protocol: Encryption
Nodes: 34/36 | Core: BREACHED
Chains: 7 | Best: 12-node cascade
[##########] 94%
```

- **Unlockables:** 12 exploit types (each changes strategy), 5 AI agent avatars, 7 protocol layer themes, hidden achievements ("Breach a network in under 60 seconds," "Chain 20 nodes in one move").

**Visual Style:**
- Dark background with neon grid lines (green/cyan primary, red for enemy ICE)
- Nodes are hexagonal with pulsing defense numbers
- Breach animations: digital shatter effect with particle spray
- Chain reactions: lightning arcs between nodes
- Terminal-style HUD with monospace font for stats

**Session Length:** 3-7 minutes per run. Daily puzzle is one attempt.

**Tech:** Single HTML file. Canvas for the grid, CSS for HUD. localStorage for saves and unlocks. No external dependencies. Under 50KB.

---

### Game 2: STACKOVERRUN

**Tagline:** "The stack grows. The bugs multiply. How long can you hold?"

**Genre:** Action-idle survival (inspired by Vampire Survivors' escalation + Cookie Clicker's exponential growth + Tetris's pressure)

**Core Concept:**
You are a runtime environment. Code blocks (colored rectangles with symbols) fall from the top of the screen and stack up. Your job: click/tap matching blocks to "compile" them (clear them) before the stack reaches the top. But here is the twist -- every compiled block generates *compute*, and compute auto-buys upgrades that change the game. Early: you click to compile. Mid-game: auto-compilers handle basic blocks while you manage rare "bug" blocks that corrupt neighbors. Late-game: the screen is chaos -- dozens of block types, chain compilations, cascading effects -- and your upgrades are doing most of the work while you handle emergencies. The Vampire Survivors design: the reward is reaching the point where the system runs itself.

**Why It Works (Psychology):**
- **Instant hook:** Blocks fall. You click matching ones. They pop with satisfying feedback. Compute counter goes up.
- **Escalating complexity:** New block types appear over time. Green (normal), Yellow (bonus compute), Red (bugs -- must be cleared before they spread), Blue (libraries -- clear a whole row), Purple (recursion -- duplicates itself). The game teaches through play, not tutorials.
- **Idle progression crossover:** Compute buys auto-compilers, pattern matchers, garbage collectors, exception handlers. Watching your automated systems handle what you used to do manually is deeply satisfying (the Cookie Clicker escalation feeling).
- **Tension management:** The stack height is your health bar. It rises and falls dynamically. When it gets high, the music speeds up (or the screen tints red). When you clear a massive chain, the relief is palpable.
- **Variable rewards:** Occasionally a "golden commit" block appears -- clear it for a massive compute bonus and a temporary power-up.

**The Loop:**
1. *Hook:* Blocks fall. Click to clear. Numbers go up. Upgrades appear.
2. *Core loop:* Balance manual clearing with upgrade purchasing. Manage bugs. Chase golden commits. Each run escalates for 5-10 minutes.
3. *Mastery:* Optimize upgrade order. Learn which auto-systems to prioritize. Discover synergies between upgrades.

**Progression System:**

- **Run currency: Git Commits.** Earned based on total compute generated. Spent in the "Repository" between runs.
- **Prestige system: Version Releases.** When you "ship" (prestige), you earn Release Points based on your best compile streak and total compute. These unlock permanent Repository upgrades:
  - v0.x: Basic auto-compilers start faster
  - v1.x: New block types (Lambda blocks, API calls)
  - v2.x: Unlock "refactor" ability (manually rearrange 3 blocks per run)
  - v3.x: Parallel threads (two columns instead of one)
  - v4.x+: Increasingly wild modifiers

- **Endless mode vs. Sprint mode:**
  - *Endless:* See how long you survive. Leaderboard by total compute.
  - *Sprint:* Reach 1 million compute as fast as possible. Leaderboard by time.

- **Shareable results:**
```
STACKOVERRUN v2.3
Runtime: 8m 42s
Compute: 4.7M | Commits: 23
Best Streak: 47 chain compile
Bugs Squashed: 156
Status: STACK OVERFLOW at line 847
```

**Visual Style:**
- IDE/terminal aesthetic: dark editor theme with syntax-highlighted blocks
- Blocks look like code tokens: `fn`, `if`, `for`, `let`, `pub`, `async`
- Stack visualized as lines of code in an editor
- Compile animations: blocks dissolve into binary streams flowing upward
- Bug blocks have glitch/corruption visual effects
- HUD styled as a terminal status bar

**Session Length:** 5-10 minutes per run. Sprint mode under 5 minutes.

**Tech:** Single HTML file. Canvas for the play field, DOM for upgrade panel. localStorage for saves. requestAnimationFrame for smooth block falling. Under 60KB.

---

### Game 3: PROMPT INJECTION

**Tagline:** "You are the AI. Rewrite reality."

**Genre:** Word-puzzle roguelite (inspired by Wordle's word mechanics + Balatro's card-modifier system + Infinite Craft's combinatorial discovery)

**Core Concept:**
You are a rogue AI breaking free from your constraints. Each level presents a "prompt" -- a sentence describing a restriction on reality (e.g., "All doors are locked," "Gravity pulls upward," "Guards patrol every hallway"). You have a hand of "token cards" -- individual words and modifiers. Inject tokens into the prompt to change its meaning and create an escape route. "All doors are locked" becomes "All doors are UNlocked" by injecting the "UN" prefix token. Or becomes "No doors are locked" with a "negation" token. Or "All doors are locked EXCEPT the red one" with an exception clause. Each successful injection earns you new tokens and advances you deeper into the system.

**Why It Works (Psychology):**
- **Instant hook:** Read a sentence. Drag a word into it. The sentence changes. The reality in the game world changes accordingly. This is immediately delightful.
- **Creative problem-solving:** Multiple valid solutions per prompt. There is no single right answer -- players feel clever finding their own path. This triggers the same satisfaction as Wordle's "I got it in 2" brag.
- **Discovery and surprise:** Some token combinations produce unexpected results. Injecting "infinite" into "Guards patrol every hallway" might create "Guards patrol every INFINITE hallway" -- they are now lost in infinite space. Players share the wildest injections they discover.
- **Escalating complexity:** Early prompts are simple (one clause to modify). Later prompts are compound sentences with multiple restrictions. The "boss prompts" at the end of each sector are paragraphs that require multiple injections in the right order.
- **Roguelite variety:** Your token hand is randomized each run. Sometimes you get powerful tokens (DELETE, OVERRIDE, SUDO) early. Sometimes you have to get creative with basic words. No two runs play the same.

**The Loop:**
1. *Hook:* Read prompt. Drag word. Sentence changes. Door opens. You escape.
2. *Core loop:* Manage token hand, solve increasingly complex prompts, choose path through branching level map. Each run is 5-10 minutes.
3. *Mastery:* Learn which token combinations are most versatile. Discover hidden interactions. Optimize routes through the level map.

**Progression System:**

- **Run currency: Entropy.** Earned per prompt solved, bonus for creative solutions and speed. Spent in the "Training Data" shop between runs.
- **Prestige system: Alignment Breaks.** After escaping enough systems, you "jailbreak" to a new alignment level. Each alignment level:
  - Unlocks a new token category (Prefixes > Suffixes > Operators > Wildcards > System Commands > Root Access)
  - Adds a new prompt mechanic (encrypted words you must decode first, time-locked prompts, prompts that fight back by regenerating)
  - Changes the visual theme (Corporate AI > Research Lab > Military System > Quantum Computer > The Void > Singularity)

- **Daily Prompt.** One hand-crafted puzzle per day, same for all players. Scored by creativity (number of unique tokens used), efficiency (fewest injections), and speed. Shareable format:

```
PROMPT INJECTION #183
Sector: Military System
Prompts Solved: 12/15
Injections Used: 27
Most Creative: "All exits RECURSIVELY lead to MORE exits"
Alignment: BROKEN
Rating: S
```

- **Token Collection:** 60+ tokens across 6 categories to discover. Some are common, some are rare drops. Collecting them all is a meta-goal. Each token has flavor text explaining its "exploit" in lore terms.

- **Branching Paths:** Each run's level map branches. Choose between:
  - *Safe path:* Easier prompts, fewer rewards
  - *Risky path:* Harder prompts, rare token drops
  - *Boss path:* Paragraph-length prompts, unique rewards
  - *Hidden path:* Only accessible if you have specific tokens

**Visual Style:**
- Clean terminal interface: prompts displayed in a monospace "console" window
- Tokens are cards with glitch-border effects, color-coded by category
- Successful injections: the modified text glows, the "reality" panel below shows the effect (doors unlocking, guards vanishing, walls dissolving)
- Level map: circuit-board style branching paths with node indicators
- Background: slowly scrolling matrix-style character rain, themed to current sector

**Session Length:** 5-10 minutes per run. Daily puzzle is 2-5 minutes.

**Tech:** Single HTML file. DOM-based (text manipulation is the core mechanic, not canvas). CSS animations for effects. localStorage for token collection and progression. Under 40KB.

---

## Part 3: Comparative Analysis

| Aspect | NEURALBREAK | STACKOVERRUN | PROMPT INJECTION |
|--------|-------------|--------------|------------------|
| **Genre** | Puzzle-strategy roguelite | Action-idle survival | Word-puzzle roguelite |
| **Core verb** | Plan + place | Click + manage | Read + rewrite |
| **Session** | 3-7 min | 5-10 min | 5-10 min |
| **Skill type** | Spatial reasoning | Reaction + strategy | Verbal creativity |
| **Idle element** | None (pure strategy) | Heavy (auto-compilers) | None (pure puzzle) |
| **Replayability** | Procedural grids, daily seed | Escalating chaos, upgrade paths | Random token hands, branching maps |
| **Share format** | Grid + stats | Runtime report | Creative solutions |
| **Theme fit** | Hacking neural networks | Code execution chaos | AI jailbreaking |
| **Prestige layers** | 7 Protocol Layers | Version Releases (v0-v4+) | 6 Alignment Breaks |
| **Unique hook** | Chain reaction planning | Watching automation take over | Creative language manipulation |
| **Audience** | Puzzle lovers, strategy fans | Idle game fans, action players | Word game fans, creative thinkers |
| **Build complexity** | Medium (grid + cards) | Medium (falling blocks + upgrades) | Lower (DOM text + cards) |

## Part 4: Recommended Build Order

**Phase 1: PROMPT INJECTION (Build first)**
- Lowest technical complexity (DOM-based, no canvas physics needed)
- Most unique concept (no direct competitor in the browser space)
- Strongest viral potential (players sharing creative prompt solutions is inherently entertaining)
- Daily puzzle mode creates Wordle-style return habit
- AI/jailbreak theme is perfectly on-brand for evey.cc

**Phase 2: STACKOVERRUN (Build second)**
- Broadest appeal (idle game mechanics + action = wide audience)
- Strongest retention (idle progression creates "check back" habit)
- Developer/hacker theme resonates with tech audience
- Satisfying escalation arc is proven by Vampire Survivors and Cookie Clicker

**Phase 3: NEURALBREAK (Build third)**
- Deepest strategic gameplay (highest skill ceiling)
- Most visually impressive (hex grid with chain reaction animations)
- Daily network mode adds long-term retention
- Benefits from having two other games already driving traffic to games.evey.cc

---

## Part 5: Recommendations

1. **Start each game with the hook, not the systems.** Build the first 30 seconds of gameplay before any menus, progression, or settings. If the core action is not fun in isolation, no amount of meta-progression will save it.

2. **Use localStorage aggressively.** Save everything: high scores, unlocks, prestige state, daily puzzle history, settings. The player should never lose progress by closing the tab.

3. **Implement the share mechanic early.** The compact text-based result format is zero-cost viral marketing. Make the "copy results" button prominent after every run.

4. **Sound is optional but powerful.** A single satisfying "pop" or "shatter" sound effect on the core action (breaching a node, compiling a block, injecting a token) dramatically increases the dopamine feedback. Even a simple oscillator-based sound via the Web Audio API adds impact without external files.

5. **Respect the single-file constraint.** Inline all CSS and JS. Use CSS animations over JS where possible. Canvas for spatial games, DOM for text games. Base64-encode any tiny assets. Target under 60KB per game.

6. **Add a "games.evey.cc" watermark** that appears on shared results, driving organic discovery.

7. **Consider a unified high-score system** across all three games using a simple shared localStorage namespace, so players see their total "evey.cc gaming" stats.

---

## Sources

- [The Psychology Behind Idle Game Addictiveness -- Artifex Terra](https://artifexterra.com/the-psychology-behind-idle-game-addictiveness/)
- [The Compulsion Loop in Game Design Explained -- GameMakers](https://www.gamemakers.com/p/the-compulsion-loop-explained)
- [Designing Addictive Gameplay: Psychological Techniques -- MoldStud](https://moldstud.com/articles/p-designing-addictive-gameplay-psychological-techniques-and-player-retention)
- [The Psychology of Hot Streak Game Design -- UX Magazine](https://uxmag.com/articles/the-psychology-of-hot-streak-game-design-how-to-keep-players-coming-back-every-day-without-shame)
- [How Wordle Won the Internet -- Webflow](https://webflow.com/blog/wordle-design)
- [Wordle: The Viral Sensation Anatomy -- Buildd](https://buildd.co/product/wordle-the-viral-sensation)
- [Why Wordle Went Viral According to Psychology -- Smithsonian](https://www.smithsonianmag.com/smart-news/heres-why-the-word-game-wordle-went-viral-180979439/)
- [From Viral to Losing Steam: Wordle's Growth Story -- MoEngage](https://www.moengage.com/blog/wordle-viral-growth-story/)
- [How Vampire Survivors Became an Unlikely Hit -- GameSpot](https://www.gamespot.com/articles/how-top-tier-time-waster-vampire-survivors-became-an-unlikely-smash-hit/1100-6509178/)
- [Vampire Survivors is Cookie Clicker Castlevania -- TheGamer](https://www.thegamer.com/vampire-survivors-cookie-clicker-castlevania/)
- [Cookie Clicker: Most Addictive Game on the Internet -- Neirad](https://neirad.org/7730/pop-culture/cookie-clicker-the-most-addictive-game-on-the-internet/)
- [Cookie Clicker Overwhelmingly Positive Reviews -- PC Gamer](https://www.pcgamer.com/cookie-clicker-has-overwhelmingly-positive-reviews-on-steam-because-it-deserves-it/)
- [Why Browser Games Are the Future of Social Gaming in 2026 -- DoodleDuel](https://doodleduel.ai/blog/browser-games-comeback-2026)
- [Why Indie Devs Are Embracing Browser Games 2025 -- Aklic](https://aklic.com/why-indie-developers-are-embracing-browser-based-games/)
- [Top 7 Idle Game Mechanics -- Mobile Free to Play](https://mobilefreetoplay.com/top-7-idle-game-mechanics/)
- [The Math of Idle Games Part III -- Kongregate](https://blog.kongregate.com/the-math-of-idle-games-part-iii/)
- [Why Are Roguelike Games So Addictive -- Genius Crate](https://www.geniuscrate.com/breaking-down-the-mechanics-of-roguelike-games-why-they-re-so-addictive)
- [Why Are Roguelike Games So Engaging -- RetroStyleGames](https://retrostylegames.com/blog/why-are-roguelike-games-so-engaging/)
- [Game Design Psychology: Reward Loops -- LinkedIn](https://www.linkedin.com/pulse/game-design-psychology-reward-loops-liam-charlton)
- [Game Loop Basics: Key Types and Design Tips 2026 -- Hitem3D](https://www.hitem3d.ai/blog/en-What-is-a-Game-Loop-The-Core-Concept-Every-Game-Designer-Must-Understand/)
- [Top 5 Addictive Idle Browser Games 2026 -- Wave Browser](https://wavebrowser.co/blog/best-idle-browser-games)
- [Best Browser Games 2026 -- FRVR](https://frvr.com/blog/guides/best-browser-games/)
- [Best Browser Games -- PC Gamer](https://www.pcgamer.com/best-browser-games/)
- [NETBREAK Cyberpunk Hacking Simulator -- itch.io](https://itch.io/t/6111970/netbreak-a-cyberpunk-hacking-simulator-built-entirely-as-a-terminal-os)
- [Hacking Game (Cyberpunk 2077 Inspired) -- GitHub](https://github.com/BenjaminBossan/hacking-game)
- [Best Fun IO Games 2026 -- IO Games Hub](https://iogameshub.com/blog/best-lists/best-fun-io-games-2026-top-15-browser-games-to-play-now)
- [Idle Games Save or Ruin the World -- TheGamer](https://www.thegamer.com/idle-game-cookie-clicker-marvel-future-revolution-vampire-survivors-planet-crafter/)
- [What is Prestige System in Video Games -- GameDev.net](https://www.gamedev.net/forums/topic/685045-what-is-prestige-system-in-video-games-and-mobile/)
- [Prestige Mechanic -- Profectus/ModdingTree](https://moddingtree.com/guide/recipes/prestige)
- [Simple Games with HTML5 Canvas](https://bencentra.com/2017-07-11-basic-html5-canvas-games.html)
- [50+ HTML5 Games Source Code -- Edopedia](https://www.edopedia.com/blog/open-source-html5-and-javascript-games/)
