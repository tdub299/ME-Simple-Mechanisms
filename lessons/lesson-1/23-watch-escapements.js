Registry.registerTopic('lesson-1', {
  n: 23,
  title: 'Mechanical watch escapement',
  family: 'Timekeeping',
  readTime: 10,
  source: 'new',
  summary:
    'A mechanical watch is a spring-driven gear train held back by an <strong>escapement</strong>. The escapement lets the train advance one tooth per beat and gives the oscillating <strong>balance wheel</strong> a small push each swing to keep it going. The balance and its hairspring, not the mainspring, keep time. The escapement\'s job is to disturb them as little as possible.',
  body: `
<h2>The Swiss lever escapement</h2>
<figure class="diagram">
  <svg viewBox="0 0 540 270" role="img" aria-label="Swiss lever escapement: escape wheel, pallet fork with two jewels, and balance wheel with roller jewel and hairspring">
    <path class="part" d="M127.0,130.0 L139.5,137.5 L139.1,140.5 L130.0,140.2 L122.9,149.1 L131.3,161.1 L129.7,163.6 L121.5,159.6 L111.4,164.9 L114.2,179.3 L111.7,180.9 L105.9,174.0 L94.5,174.7 L91.2,188.9 L88.3,189.4 L85.8,180.7 L75.1,176.7 L66.3,188.4 L63.4,187.7 L64.6,178.6 L56.5,170.7 L43.7,177.8 L41.4,175.9 L46.2,168.2 L42.0,157.6 L27.4,158.9 L26.0,156.2 L33.6,151.1 L34.0,139.8 L20.2,135.0 L20.0,132.0 L29.0,130.4 L34.0,120.2 L23.3,110.3 L24.4,107.4 L33.2,109.6 L42.0,102.4 L36.3,88.9 L38.4,86.8 L45.6,92.4 L56.5,89.3 L56.7,74.7 L59.6,73.6 L63.8,81.6 L75.1,83.3 L81.3,70.0 L84.3,70.2 L84.9,79.2 L94.5,85.3 L105.5,75.7 L108.2,77.1 L105.1,85.6 L111.4,95.1 L125.4,90.8 L127.3,93.1 L121.0,99.7 L122.9,110.9 L137.4,112.7 L138.2,115.6 L129.8,119.0 Z"/>
    <circle class="solid" cx="80" cy="130" r="5"/>
    <path class="part" d="M175,124 L146,96 L140,102 L166,130 L140,158 L146,164 L175,136 L330,134 L330,126 Z"/>
    <rect class="acc-fill" x="133" y="92" width="14" height="8" transform="rotate(45 140 96)"/>
    <rect class="acc-fill" x="133" y="160" width="14" height="8" transform="rotate(-45 140 164)"/>
    <path class="part" d="M330,118 L400,118 L400,124 L382,124 L382,136 L400,136 L400,142 L330,142 Z"/>
    <circle class="solid" cx="175" cy="130" r="5"/>
    <circle class="thin" cx="430" cy="130" r="92"/>
    <circle class="ln" cx="430" cy="130" r="86"/>
    <line class="thin" x1="344" y1="130" x2="516" y2="130"/>
    <line class="thin" x1="430" y1="44" x2="430" y2="216"/>
    <circle class="part" cx="430" cy="130" r="26"/>
    <path class="acc" stroke-width="1.4" d="M438,130 Q438,118 430,118 Q416,118 416,130 Q416,146 430,146 Q450,146 450,130 Q450,106 430,106 Q404,106 404,130 Q404,158 430,158 Q462,158 462,130 Q462,94 430,94"/>
    <rect class="hot-fill" x="388" y="126" width="16" height="8"/>
    <circle class="solid" cx="430" cy="130" r="4"/>
    <path class="acc arr-acc" d="M480,40 A100,100 0 0 1 524,92"/>
    <path class="acc arr-acc" d="M524,168 A100,100 0 0 1 480,220"/>
    <text class="lbl-b" x="20" y="20">Escape wheel</text>
    <text class="lbl" x="20" y="36">(driven by the mainspring</text>
    <text class="lbl" x="20" y="52">through the gear train)</text>
    <text class="lbl-acc" x="150" y="80">entry pallet jewel</text>
    <text class="lbl-acc" x="150" y="196">exit pallet jewel</text>
    <text class="lbl" x="200" y="116">pallet fork (lever)</text>
    <text class="lbl-hot" x="196" y="186">fork horns + roller jewel</text>
    <text class="lbl-b" x="370" y="262">Balance wheel</text>
    <text class="lbl-acc" x="468" y="240">hairspring</text>
  </svg>
  <figcaption>Simplified layout. The escape wheel pushes on the pallet jewels; the pallet fork rocks and its horns flick the roller jewel on the balance staff, then let it go. The balance swings freely for most of its arc.</figcaption>
</figure>

<p>Each beat has four phases:</p>
<ol>
  <li><strong>Lock:</strong> an escape wheel tooth rests on one pallet jewel's locking face. The train is stopped, and the balance swings freely, detached from everything.</li>
  <li><strong>Unlock:</strong> the balance's roller jewel swings into the fork notch and nudges the lever, sliding the pallet jewel off the tooth. This is the only time the balance does work for the escapement.</li>
  <li><strong>Impulse:</strong> the freed tooth slides across the jewel's angled impulse face, rocking the lever, which gives the roller jewel a push. This tops up the balance's energy.</li>
  <li><strong>Drop and lock:</strong> the wheel jumps forward a small distance (the "drop") and the next tooth lands on the other pallet's locking face. The tick sound is this drop.</li>
</ol>
<p><strong>Draw:</strong> the locking faces are angled so the wheel's pressure pulls the pallet deeper into lock and the lever against its banking pins. A knock to the watch cannot unlock it. This is the same idea as the undercut ratchet tooth that pulls a pawl in (Topic 5).</p>

<h2>The oscillator: balance and hairspring</h2>
<p>The balance wheel and its spiral hairspring form a torsional mass-spring oscillator. Its period is:</p>
<div class="formula">T = 2π <span style="white-space:nowrap">√(I / k)</span></div>
<p>where I is the balance's moment of inertia and k the hairspring's torsional stiffness. Ideally the period does not depend on amplitude (<strong>isochronism</strong>), so the watch keeps the same rate as the mainspring runs down and the swing gets smaller. In practice the escapement's impulse, the hairspring's breathing and gravity acting on any imbalance all make the rate drift with amplitude and position.</p>
<ul>
  <li>Common beat rates: 18,000, 21,600, 28,800 and 36,000 vibrations per hour (2.5–5 Hz). A faster beat is less sensitive to shocks but wears parts faster.</li>
  <li>The hairspring is the heart of accuracy. Self-compensating alloys (Nivarox-type) keep stiffness nearly constant with temperature. Silicon hairsprings are non-magnetic and can be shaped precisely.</li>
  <li>Regulation adjusts effective hairspring length (regulator index) or balance inertia (adjustable screws or weights).</li>
  <li>Good certified chronometers run within about −4/+6 seconds per day.</li>
</ul>

<h2>Why the lever escapement won</h2>
<p>It is "detached": the balance is free for most of its swing, which reduces interference. It is self-starting, and the draw makes it tolerant of shocks. Alternatives include the detent (chronometer) escapement (very accurate, but shock-sensitive), the co-axial escapement (less sliding friction, longer service intervals) and older designs such as the cylinder and verge.</p>

<h2>Materials and manufacturing</h2>
<table>
  <tr><th>Part</th><th>Material</th></tr>
  <tr><td>Escape wheel and lever</td><td>Hardened steel; increasingly silicon (made by deep reactive ion etching, DRIE)</td></tr>
  <tr><td>Pallet stones and roller jewel</td><td>Synthetic ruby (corundum)</td></tr>
  <tr><td>Balance wheel</td><td>Beryllium-copper alloys (e.g. Glucydur)</td></tr>
  <tr><td>Hairspring</td><td>Nivarox-type Fe-Ni alloy or silicon</td></tr>
</table>
<p>Parts are tiny: an escape wheel is a few millimeters across. Pallet stones are set and adjusted under a microscope, and the escapement is lubricated with a tiny drop of special oil on the pallet faces.</p>

<h2>Failure modes</h2>
<ul>
  <li>Magnetized hairspring: coils stick and the watch runs very fast.</li>
  <li>Old or dried oil on the pallets: lower amplitude and erratic rate.</li>
  <li>Shock damage to balance pivots (shock protection systems spring-mount the jewels).</li>
  <li>Over-banking from a violent shock: the roller jewel ends up on the wrong side of the fork and the watch stops.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Through a display caseback, watch the balance swing back and forth, and the pallet fork flick at each tick.</li>
    <li>Count the ticks against a second hand: 8 per second means 28,800 vph.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'What actually keeps time in a mechanical watch?',
      options: [
        'The mainspring',
        'The escape wheel',
        'The balance wheel and hairspring oscillator',
        'The gear train ratio',
      ],
      answer: 2,
      explain: 'The balance and hairspring set the period. The escapement releases the train in step with it and keeps it swinging.',
    },
    {
      q: 'What is "draw" in a lever escapement?',
      options: [
        'The friction on the impulse face',
        'Angled locking faces that pull the pallet deeper into lock, so shocks do not unlock it',
        'The amount the escape wheel jumps after impulse',
        'The pull of the mainspring',
      ],
      answer: 1,
      explain: 'Like an undercut ratchet tooth pulling a pawl in, draw keeps the lever safely locked against its banking until the balance unlocks it.',
    },
    {
      q: 'Using T = 2π√(I/k), what happens to the period if the hairspring\'s stiffness k falls as it warms?',
      options: [
        'Period gets shorter, watch runs fast',
        'Period gets longer, watch runs slow',
        'No change',
        'The watch stops',
      ],
      answer: 1,
      explain: 'Lower k gives a longer period, so fewer beats per hour and the watch loses time. Self-compensating alloys prevent this.',
    },
    {
      q: 'What does isochronism mean for a balance oscillator?',
      options: [
        'Its period does not depend on its amplitude',
        'It beats at exactly 4 Hz',
        'It has no friction',
        'It is non-magnetic',
      ],
      answer: 0,
      explain: 'An isochronous oscillator keeps the same period whether it swings widely (full mainspring) or less (nearly unwound).',
    },
    {
      q: 'A watch runs 28,800 vibrations per hour. How many ticks per second is that?',
      options: ['4', '6', '8', '10'],
      answer: 2,
      explain: '28,800 / 3,600 = 8 ticks per second (4 Hz, since each oscillation has two beats).',
    },
  ],
});
