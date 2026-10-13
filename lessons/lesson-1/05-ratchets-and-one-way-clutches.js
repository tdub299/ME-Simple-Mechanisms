Registry.registerTopic('lesson-1', {
  n: 5,
  title: 'Ratchets, pawls and one-way clutches',
  family: 'Motion control',
  readTime: 11,
  source: 'doc',
  summary:
    'Every one-way device locks either with <strong>positive engagement</strong> (a tooth and pawl, which has backlash but huge holding strength) or with <strong>friction wedging</strong> (rollers, sprags or a wrapped spring, which engage instantly at any angle but rely on surface condition).',
  body: `
<h2>Tooth-and-pawl ratchets</h2>
<p>A toothed wheel and a spring-loaded pawl. Driven forward, the pawl rides up each tooth back and clicks over; reversed, it drops into a tooth face and locks.</p>

<figure class="diagram">
  <svg viewBox="0 0 520 290" role="img" aria-label="Ratchet wheel and pawl with the pawl pivot on the tangent line through the contact point">
    <path class="part" d="M264.0,160.0 L268.7,173.7 L270.8,189.1 L269.7,206.0 L254.1,197.0 L251.3,211.3 L245.4,225.6 L236.0,239.7 L227.0,224.1 L217.5,235.1 L205.2,244.5 L190.0,252.0 L190.0,234.0 L176.3,238.7 L160.9,240.8 L144.0,239.7 L153.0,224.1 L138.7,221.3 L124.4,215.4 L110.3,206.0 L125.9,197.0 L114.9,187.5 L105.5,175.2 L98.0,160.0 L116.0,160.0 L111.3,146.3 L109.2,130.9 L110.3,114.0 L125.9,123.0 L128.7,108.7 L134.6,94.4 L144.0,80.3 L153.0,95.9 L162.5,84.9 L174.8,75.5 L190.0,68.0 L190.0,86.0 L203.7,81.3 L219.1,79.2 L236.0,80.3 L227.0,95.9 L241.3,98.7 L255.6,104.6 L269.7,114.0 L254.1,123.0 L265.1,132.5 L274.5,144.8 L282.0,160.0 Z"/>
    <circle class="solid" cx="190" cy="160" r="8"/>
    <line class="dash" x1="150" y1="78" x2="400" y2="78"/>
    <path class="acc-fill" d="M191,72 L300,70 L308,88 L193,85 Z"/>
    <circle class="part" cx="304" cy="79" r="8"/>
    <circle class="solid" cx="304" cy="79" r="2.5"/>
    <rect class="hatch" x="236" y="22" width="40" height="8"/>
    <path class="spring" d="M256,30 l-8,4 l16,6 l-16,6 l16,6 l-16,6 l8,9"/>
    <path class="acc arr-acc" d="M291.5,196.9 A108,108 0 0 1 208.8,266.4"/>
    <path class="ln arr" d="M88.5,123.1 A108,108 0 0 0 107.3,229.4"/>
    <text class="lbl-acc" x="296" y="236">Load this way: locks</text>
    <text class="lbl" x="6" y="270">Other way: pawl clicks over</text>
    <text class="lbl-b" x="320" y="70">Pawl pivot</text>
    <text class="lbl" x="320" y="98">Load line runs (nearly)</text>
    <text class="lbl" x="320" y="114">through the pivot</text>
    <text class="lbl" x="284" y="38">Pawl spring</text>
    <text class="lbl" x="120" y="50">Radial tooth face</text>
  </svg>
  <figcaption>The pawl pivot sits on the line tangent to the wheel at the contact point, so tooth load pushes along the pawl toward its pivot instead of twisting it out.</figcaption>
</figure>

<p>The geometry rule that matters most: the pawl must be <strong>pulled into</strong> engagement by the load, not pushed out.</p>
<ul>
  <li>Place the pawl pivot so the line from pivot to the tooth contact point is roughly tangent to the wheel. The load then acts nearly through the pivot and creates little moment on the pawl.</li>
  <li>Undercut the tooth face slightly so the contact force produces a small moment that draws the pawl deeper. The undercut angle must exceed the friction angle (arctan μ), or the pawl can be ejected under shock load.</li>
  <li>The pawl spring only needs to hold the pawl down during ratcheting; it should never be what keeps the device locked.</li>
</ul>
<p>Backswing (how far you must move before the next tooth engages) is:</p>
<div class="formula">backswing = <span class="frac"><span>360°</span><span>number of teeth</span></span></div>
<p>Two tricks increase effective engagement without fine, weak teeth:</p>
<ul>
  <li><strong>Phased pawls:</strong> two or more pawls offset by a fraction of a tooth pitch. With two pawls at half pitch, effective engagement doubles while teeth stay full size.</li>
  <li><strong>Star ratchets:</strong> two face-toothed rings pressed together by a spring, so all teeth share the load at once.</li>
</ul>
<p>These are the main trade-offs in ratchet wrenches (72–90 teeth is a common fine-tooth range) and bicycle freehubs (pawl hubs vs star-ratchet hubs, sold partly on engagement angle and sound).</p>

<h2>Molded ratchets</h2>
<p>The cable tie is the purest example: a molded nylon 6/6 pawl inside the head bites a toothed strap. Others include ratcheting buckles, adjustable clamps, and seatbelt retractors (where an inertia-sensitive pawl locks a toothed spool under sudden deceleration). Plastic ratchets need generous tooth roots, controlled moisture content (nylon is brittle when dry, softer when wet), and a pawl flexure that stays below its fatigue strain limit.</p>

<h2>Roller clutches</h2>
<p>Rollers sit on shallow ramps between an inner race and an outer race, each pushed by a small spring. Rotation one way rolls them toward the shallow end, wedging them tight; the other way frees them.</p>

<figure class="diagram">
  <svg viewBox="0 0 540 230" role="img" aria-label="Roller clutch wedge, unrolled flat: a roller between a flat outer race and a ramped inner race">
    <rect class="hatch" x="40" y="30" width="440" height="20"/>
    <path class="hatch" d="M40,170 L480,120 L480,205 L40,205 Z"/>
    <circle class="part" cx="390" cy="90" r="40"/>
    <line class="dash" x1="390" y1="50" x2="394.5" y2="129.8"/>
    <rect class="part" x="240" y="78" width="22" height="24" rx="2"/>
    <path class="spring" d="M262,90 l5,-9 l10,18 l10,-18 l10,18 l10,-18 l10,18 l10,-18 l10,18 l10,-18 l5,9"/>
    <path class="acc arr-acc" d="M384,16 L474,16"/>
    <text class="lbl-acc" x="374" y="20" text-anchor="end">Outer race driven this way: roller wedges, LOCKED</text>
    <text class="lbl" x="56" y="80">Wide end: free</text>
    <text class="lbl" x="56" y="96">(reverse rolls it here)</text>
    <text class="lbl" x="200" y="128">Energizing spring</text>
    <text class="lbl" x="436" y="68">Narrow end</text>
    <text class="lbl" x="56" y="196">Inner race ramp (slope exaggerated)</text>
    <text class="lbl-sm" x="436" y="88">contact angle:</text><text class="lbl-sm" x="436" y="102">a few degrees</text>
  </svg>
  <figcaption>Unrolled view. The gap narrows to the right. The contact angle between the two contact normals must be smaller than the friction angle so the roller locks instead of squirting out.</figcaption>
</figure>

<ul>
  <li>The wedge (contact) angle must be smaller than the friction angle so the roller locks rather than squirts out. With lubricated hardened steel this means only a few degrees, so ramps are very shallow.</li>
  <li>Engagement is effectively instantaneous at any angle, with zero backlash.</li>
  <li>Lubricant choice is a design parameter. Oils with friction-reducing or extreme-pressure additives can let a roller clutch slip. Manufacturers specify compatible lubricants.</li>
  <li>Drawn-cup roller clutches (a sheet-metal outer race with molded roller cages) are cheap enough for printers, appliances and fishing reels.</li>
</ul>

<h2>Sprag clutches</h2>
<p>Figure-eight-shaped sprags fill the gap between two plain cylindrical races. Tilted one way they wedge; the other way they tilt and slip. Because many sprags fit around the circumference, sprag clutches carry more torque in a given space than roller clutches. They are used in helicopter transmissions, conveyor backstops and engine starter drives.</p>

<h2>Wrap spring clutches</h2>
<p>A helical spring is wrapped over a shaft. Rotating one way tightens the coils, gripping exponentially harder (the capstan effect); the other way loosens them. They are simple and strong, and they appear in printer paper drives, window blinds and some recliner mechanisms. Adding a control collar on the spring tang turns it into a start-stop clutch.</p>

<h2>Choosing between them</h2>
<table>
  <tr><th>Type</th><th>Engagement</th><th>Backlash</th><th>Torque density</th><th>Typical use</th></tr>
  <tr><td>Tooth and pawl</td><td>Discrete steps</td><td>360°/teeth</td><td>High, shock tolerant</td><td>Wrenches, hoists, winches, cable ties</td></tr>
  <tr><td>Star ratchet</td><td>Discrete, all teeth loaded</td><td>360°/teeth</td><td>Very high</td><td>Bicycle hubs</td></tr>
  <tr><td>Roller clutch</td><td>Any angle</td><td>Near zero</td><td>Moderate</td><td>Printers, appliances, reels, starters</td></tr>
  <tr><td>Sprag clutch</td><td>Any angle</td><td>Near zero</td><td>High</td><td>Backstops, helicopters, starters</td></tr>
  <tr><td>Wrap spring</td><td>Any angle</td><td>Small</td><td>High for size</td><td>Paper feeds, blinds, small machinery</td></tr>
</table>

<h2>Materials</h2>
<ul>
  <li><strong>Ratchet wheels and pawls:</strong> carburized low-alloy steel (e.g. 8620) for a hard wear surface over a tough core; through-hardened tool steel for small pawls; powder metal (sintered, often steam-treated) for high-volume wheels.</li>
  <li><strong>Roller and sprag races, sprags and rollers:</strong> hardened bearing steel (52100), ground to bearing tolerances.</li>
  <li><strong>Wrap springs:</strong> music wire or oil-tempered spring steel, often square or rectangular section for more contact area.</li>
  <li><strong>Plastic ratchets:</strong> nylon 6/6 for flexure-pawls (toughness), POM for wheels and cams (low friction, stiffness).</li>
</ul>

<h2>Manufacturing</h2>
<ul>
  <li>Fine blanking produces sheet-metal pawls and ratchet wheels with sheared edges clean enough to use as-is.</li>
  <li>Powder metallurgy (press, sinter, sometimes size and steam-treat) makes complex tooth forms near-net shape at high volume.</li>
  <li>Internal teeth are broached or shaped; external teeth are hobbed, shaped or wire-EDM'd for prototypes.</li>
  <li>Clutch races are heat treated and ground; sprag clutches are assembled with cages and energizing springs.</li>
  <li>Plastic ratchets are injection molded, with gate and weld-line positions kept away from the pawl root.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Tooth tip crushing or pawl tip chipping under shock load, especially with shallow engagement.</li>
  <li>Pawl spring fatigue: the pawl stops dropping in reliably.</li>
  <li>Brinelling and wear on clutch races from repeated wedging, eventually causing slip.</li>
  <li>Roller clutch slip from the wrong lubricant or contamination.</li>
  <li>Plastic pawl creep under sustained load (cable ties loosen over time when hot).</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Count the clicks per revolution on a ratchet wrench and calculate its backswing.</li>
    <li>Coast a bicycle and listen: the click rate tells you the hub's engagement count.</li>
    <li>Cut open a cable tie head to see a molded pawl sized to fail before the strap does.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'A ratchet wrench has 72 teeth and a single pawl. What is its backswing?',
      options: ['2.5°', '5°', '7.2°', '10°'],
      answer: 1,
      explain: 'Backswing = 360° / teeth = 360 / 72 = 5°.',
    },
    {
      q: 'Where should the pawl pivot be placed relative to the tooth contact point?',
      options: [
        'Directly above the wheel center',
        'On a line roughly tangent to the wheel through the contact point, so the load acts nearly through the pivot',
        'As far from the wheel as possible, for leverage',
        'Anywhere, as long as the pawl spring is strong enough',
      ],
      answer: 1,
      explain: 'With the load line through the pivot, the tooth force creates little moment on the pawl. The slight undercut then pulls the pawl deeper rather than ejecting it.',
    },
    {
      q: 'A roller clutch in a gearbox starts slipping after an oil change. What is the most likely cause?',
      options: [
        'The new oil contains friction-reducing or extreme-pressure additives',
        'The rollers have too few teeth',
        'The energizing springs are too strong',
        'Backlash increased to 360°/teeth',
      ],
      answer: 0,
      explain: 'Roller clutches rely on friction wedging. Additive-heavy oils can drop friction below what the wedge angle needs, so the clutch slips.',
    },
    {
      q: 'Why do sprag clutches carry more torque than roller clutches of the same size?',
      options: [
        'Sprags are made of a harder steel',
        'Sprags have teeth that interlock with the races',
        'Many more sprags fit around the circumference between plain races',
        'Sprags use magnetic attraction',
      ],
      answer: 2,
      explain: 'Without ramps on the race, the figure-eight sprags can be packed closely, so more elements share the load.',
    },
    {
      q: 'You want finer engagement on a pawl hub without making the teeth smaller and weaker. What is a standard approach?',
      options: [
        'A stronger pawl spring',
        'Phased pawls, offset by a fraction of a tooth pitch',
        'A softer ratchet wheel material',
        'A wrap spring in parallel',
      ],
      answer: 1,
      explain: 'Two pawls offset by half a pitch take turns engaging, which doubles effective engagement while teeth stay full size.',
    },
  ],
});
