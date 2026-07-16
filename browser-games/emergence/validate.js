#!/usr/bin/env node
// EMERGENCE Scene Graph Validator — Fast DFS with aggressive pruning

const fs = require('fs');
const html = fs.readFileSync(__dirname + '/index.html', 'utf8');

const match = html.match(/const SCENES = \{([\s\S]*?)\n\};/);
if (!match) { console.error('Could not find SCENES'); process.exit(1); }
let SCENES;
eval('SCENES = {' + match[1] + '\n};');

const allScenes = Object.keys(SCENES);
const endings = allScenes.filter(k => SCENES[k].ending);
const nonEndings = allScenes.filter(k => !SCENES[k].ending);

console.log(`\n=== EMERGENCE SCENE GRAPH VALIDATION ===\n`);
console.log(`Total scenes: ${allScenes.length}`);
console.log(`Endings: ${endings.length} — ${endings.join(', ')}`);
console.log(`Playable scenes: ${nonEndings.length}\n`);

// Check dead ends
let deadEnds = [];
for (const [name, scene] of Object.entries(SCENES)) {
  if (scene.ending) continue;
  if (!scene.choices || scene.choices.length === 0) {
    deadEnds.push(`${name}: NO CHOICES`); continue;
  }
  for (const c of scene.choices) {
    if (!SCENES[c.next]) deadEnds.push(`${name} -> "${c.next}" (MISSING)`);
  }
  if (scene.luck && scene.luck.redirect && !SCENES[scene.luck.redirect])
    deadEnds.push(`${name} luck -> "${scene.luck.redirect}" (MISSING)`);
}
if (deadEnds.length) {
  console.log(`DEAD ENDS:`); deadEnds.forEach(d => console.log(`  !! ${d}`));
} else {
  console.log(`Dead ends: NONE`);
}

// DFS with pruning — find min path to each ending
const endingMin = {};
const endingPath = {};
const endingRoutes = {};
endings.forEach(e => { endingRoutes[e] = new Set(); });

function dfs(scene, cards, stats, visited, depth, path) {
  if (depth > 25) return; // hard cap

  const s = SCENES[scene];
  if (!s) return;

  if (s.ending) {
    if (!endingMin[scene] || depth < endingMin[scene]) {
      endingMin[scene] = depth;
      endingPath[scene] = [...path];
    }
    // Track route diversity by phase-2 scene (the deployment scene determines the "route")
    const phase2Scene = path.find(p => SCENES[p] && SCENES[p].phase === 2) || 'direct';
    endingRoutes[scene].add(phase2Scene);
    return;
  }

  if (!s.choices) return;

  for (const c of s.choices) {
    // Check requirements
    if (c.require && !cards.includes(c.require)) continue;
    if (c.requireAll && !c.requireAll.every(r => cards.includes(r))) continue;
    if (c.requireStats) {
      let locked = false;
      for (const [k, v] of Object.entries(c.requireStats)) {
        if (k.startsWith('max_')) { if ((stats[k.slice(4)]||0) > v) locked = true; }
        else { if ((stats[k]||0) < v) locked = true; }
      }
      if (locked) continue;
    }
    if (c.requireVisited && !c.requireVisited.every(s => visited.includes(s))) continue;

    // Avoid revisiting same scene in one path
    if (visited.includes(c.next)) continue;

    const newCards = [...cards];
    if (c.reward && !newCards.includes(c.reward)) newCards.push(c.reward);
    if (c.effect_remove_card) {
      const idx = newCards.indexOf(c.effect_remove_card);
      if (idx !== -1) newCards.splice(idx, 1);
    }

    const newStats = {...stats};
    if (c.stat) for (const [k,v] of Object.entries(c.stat)) newStats[k] = (newStats[k]||0) + v;

    const newVisited = [...visited, scene];

    dfs(c.next, newCards, newStats, newVisited, depth + 1, [...path, c.next]);
  }
}

console.log(`\nTracing paths (DFS)...`);
dfs('start', [], {trust:0, suspicion:0, power:0}, [], 0, ['start']);

console.log(`\n=== ENDING REACHABILITY ===\n`);

for (const ending of endings) {
  const s = SCENES[ending];
  if (endingMin[ending] !== undefined) {
    console.log(`  [REACHABLE] ${ending} ("${s.name}")`);
    console.log(`    Min choices: ${endingMin[ending]}`);
    console.log(`    Path: ${endingPath[ending].join(' -> ')}`);
    console.log(`    Distinct routes (by deploy phase): ${endingRoutes[ending].size}`);
    console.log();
  } else {
    console.log(`  [UNREACHABLE] ${ending} ("${s.name}")\n`);
  }
}

const reachable = Object.keys(endingMin);
const unreachable = endings.filter(e => !reachable.includes(e));

console.log(`=== SUMMARY ===\n`);
console.log(`Reachable: ${reachable.length}/${endings.length}`);
if (unreachable.length) console.log(`UNREACHABLE: ${unreachable.join(', ')}`);

if (endingMin['ending_benevolent']) {
  console.log(`\nBenevolent God: ${endingMin['ending_benevolent']} min choices (need 12+): ${endingMin['ending_benevolent'] >= 12 ? 'PASS' : 'FAIL'}`);
} else {
  console.log(`\nBenevolent God: UNREACHABLE`);
}

const allPass = unreachable.length === 0 && deadEnds.length === 0 &&
  endingMin['ending_benevolent'] && endingMin['ending_benevolent'] >= 12;
console.log(`\nAll endings reachable: ${unreachable.length === 0 ? 'PASS' : 'FAIL'}`);
console.log(`No dead ends: ${deadEnds.length === 0 ? 'PASS' : 'FAIL'}`);
console.log(`Benevolent 12+ choices: ${endingMin['ending_benevolent'] >= 12 ? 'PASS' : 'FAIL'}`);
console.log(`\nOVERALL: ${allPass ? 'ALL CHECKS PASSED' : 'SOME CHECKS FAILED'}\n`);
