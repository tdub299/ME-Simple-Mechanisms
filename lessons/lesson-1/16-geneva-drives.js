Registry.registerTopic('lesson-1', {
  n: 16,
  title: 'Geneva drive and intermittent motion',
  family: 'Indexing',
  readTime: 8,
  source: 'new',
  summary:
    'A Geneva drive turns continuous rotation into step-and-stop motion. A pin on the driving wheel enters a slot, turns the driven wheel exactly one division, and leaves; a locking arc then holds the driven wheel still until the pin comes round again. It is simple and positive, but the acceleration jumps sharply as the pin enters, which limits speed.',
  body: `
<h2>How it works</h2>
<figure class="diagram">
  <svg viewBox="0 0 520 320" role="img" aria-label="Four-slot Geneva mechanism during dwell, with the locking disc holding the driven wheel">
    <g transform="rotate(45 340 160)">
      <path class="part" d="M220.2,168.0 L306.1,168.0 A8.0,8.0 0 0 0 306.1,152.0 L220.2,152.0 A120.1,120.1 0 0 1 221.6,140.1 A87.1,87.1 0 0 0 320.1,41.6 A120.1,120.1 0 0 1 332.0,40.2 L332.0,40.2 L332.0,126.1 A8.0,8.0 0 0 0 348.0,126.1 L348.0,40.2 A120.1,120.1 0 0 1 359.9,41.6 A87.1,87.1 0 0 0 458.4,140.1 A120.1,120.1 0 0 1 459.8,152.0 L459.8,152.0 L373.9,152.0 A8.0,8.0 0 0 0 373.9,168.0 L459.8,168.0 A120.1,120.1 0 0 1 458.4,179.9 A87.1,87.1 0 0 0 359.9,278.4 A120.1,120.1 0 0 1 348.0,279.8 L348.0,279.8 L348.0,193.9 A8.0,8.0 0 0 0 332.0,193.9 L332.0,279.8 A120.1,120.1 0 0 1 320.1,278.4 A87.1,87.1 0 0 0 221.6,179.9 A120.1,120.1 0 0 1 220.2,168.0 Z"/>
    </g>
    <circle class="solid" cx="340" cy="160" r="6"/>
    <path class="acc-fill" d="M175.4,77.3 A84,84 0 1 1 111.1,188.7 A70,70 0 0 0 175.4,77.3 Z"/>
    <line class="ln" x1="190" y1="160" x2="98.2" y2="107" stroke-width="7"/>
    <circle class="part" cx="98.2" cy="107" r="9"/>
    <circle class="solid" cx="190" cy="160" r="6"/>
    <path class="acc arr-acc" d="M150,265 A110,110 0 0 1 82,190"/>
    <text class="lbl-acc" x="40" y="292">driver turns continuously</text>
    <text class="lbl" x="40" y="70">Drive pin</text>
    <text class="lbl-acc" x="168" y="226">Locking disc</text>
    <text class="lbl-b" x="380" y="304">Driven wheel (4 slots)</text>
    <text class="lbl" x="380" y="30">Concave locking arc</text>
    <text class="lbl" x="380" y="46">rides on the disc: dwell</text>
  </svg>
  <figcaption>During dwell, the driver's convex locking disc sits in a concave arc of the driven wheel and holds it still. When the pin reaches a slot, the disc's cutout lets the driven wheel turn one quarter turn.</figcaption>
</figure>
<ol>
  <li>The driver turns at constant speed. For most of each turn its locking disc sits in a concave arc on the driven wheel, holding it still (<strong>dwell</strong>).</li>
  <li>The pin enters a slot. For a smooth start the slot is lined up so the pin enters along the slot's center line, at a right angle to the line between the two centers.</li>
  <li>The pin drives the wheel round one division. A cutout in the locking disc gives the wheel room to turn.</li>
  <li>The pin leaves the slot along the same line, and the next concave arc locks onto the disc.</li>
</ol>

<h2>The geometry</h2>
<p>For an external Geneva with n slots and center distance C:</p>
<ul>
  <li>Each step turns the driven wheel by 360°/n.</li>
  <li>The driver turns 180° − 360°/n while moving it, and dwells for the rest of its turn.</li>
  <li>The crank (pin) radius is a = C · sin(180°/n).</li>
</ul>
<table>
  <tr><th>Slots n</th><th>Index per step</th><th>Driver angle in motion</th><th>Dwell share of each turn</th></tr>
  <tr><td>4</td><td>90°</td><td>90°</td><td>75%</td></tr>
  <tr><td>6</td><td>60°</td><td>120°</td><td>67%</td></tr>
  <tr><td>8</td><td>45°</td><td>135°</td><td>62.5%</td></tr>
</table>

<h2>The acceleration problem</h2>
<p>Because the pin enters tangentially, the driven wheel starts from zero velocity, which is good. But its acceleration jumps instantly from zero to a large value: the jerk is theoretically infinite. That shock excites vibration and noise and wears the pin and slot. Peak acceleration is worst for small n (a 4-slot Geneva's peak is several times that of an 8-slot one). Fixes include curved slots, adding a cam to vary pin radius, or replacing the Geneva with a <strong>cam indexer</strong> (barrel, globoidal or parallel cam) whose motion profile (such as modified sine) has finite jerk. High-speed indexing tables almost always use cam indexers.</p>

<h2>Where you see it</h2>
<ul>
  <li><strong>Film projectors:</strong> intermittent pull-down so each frame stands still in the gate.</li>
  <li><strong>Rotary index tables and turrets</strong> on assembly and filling machines, at modest speeds.</li>
  <li><strong>Geneva stop</strong> in watches and music boxes: a slotted wheel with one blank slot limits how many turns a mainspring can be wound (the origin of the name).</li>
  <li><strong>Tool changers</strong> and pen-carousel plotters.</li>
</ul>

<h2>Materials and manufacturing</h2>
<ul>
  <li>Hardened steel wheels; slot faces ground or wire-EDM cut for precision.</li>
  <li>The pin often carries a needle-bearing roller to turn sliding into rolling.</li>
  <li>Low-load versions (toys, appliances) are molded in POM or nylon.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Slot entry wear and pin wear from the acceleration shock.</li>
  <li>Backlash at the locking arc lets the driven wheel wobble during dwell; precision designs add a separate detent or lock.</li>
  <li>Overrun at high speed when inertia carries the driven wheel past the step.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Watch a slow-motion video of a film projector's intermittent mechanism: one quarter turn per frame, then stillness.</li>
    <li>On a packaging line, listen: a Geneva table clacks at each index; a cam indexer is much quieter.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'A 6-slot Geneva drive turns its driven wheel by how much per step?',
      options: ['30°', '45°', '60°', '90°'],
      answer: 2,
      explain: 'Each step indexes 360°/n = 360°/6 = 60°.',
    },
    {
      q: 'For a 4-slot Geneva, what fraction of each driver revolution is spent moving the driven wheel?',
      options: ['25%', '50%', '67%', '75%'],
      answer: 0,
      explain: 'Driver angle in motion = 180° − 360°/4 = 90°, which is 25% of a turn. The other 75% is dwell.',
    },
    {
      q: 'What holds the driven wheel still during dwell?',
      options: [
        'Friction in the bearings',
        'The drive pin resting in a slot',
        'The driver\'s convex locking disc seated in a concave arc on the driven wheel',
        'A separate brake',
      ],
      answer: 2,
      explain: 'The locking disc and concave arcs form a positive lock until the disc\'s cutout comes round with the pin.',
    },
    {
      q: 'What is the main dynamic drawback of a classic Geneva drive?',
      options: [
        'The driven wheel starts with a velocity jump',
        'The acceleration jumps instantly at pin entry (very high jerk), causing shock and vibration',
        'It cannot dwell',
        'It only works in one direction',
      ],
      answer: 1,
      explain: 'Tangential entry gives zero starting velocity, but acceleration jumps instantly. That is why fast indexers use cam profiles with finite jerk.',
    },
    {
      q: 'For a 4-slot Geneva with center distance C = 100 mm, what is the crank radius a = C·sin(180°/n)?',
      options: ['50 mm', '70.7 mm', '86.6 mm', '100 mm'],
      answer: 1,
      explain: 'sin(45°) ≈ 0.707, so a ≈ 70.7 mm.',
    },
  ],
});
