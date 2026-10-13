Registry.registerTopic('lesson-1', {
  n: 27,
  title: 'Locks: pin tumbler and wafer',
  family: 'Security',
  readTime: 9,
  source: 'new',
  summary:
    'A pin tumbler lock is a rotating plug blocked by stacks of pins that cross the gap between plug and housing. The right key lifts every stack so its break lands exactly on that gap, the <strong>shear line</strong>, and the plug can turn. The design is an exercise in tolerances: the key\'s cut depths must be distinguishable, and the parts must clear one another, but every bit of clearance also weakens security.',
  body: `
<h2>How a pin tumbler works</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 250" role="img" aria-label="Pin tumbler lock with the correct key: every pin break aligned at the shear line">
    <rect class="hatch" x="60" y="40" width="380" height="80"/>
    <rect class="part" x="60" y="120" width="380" height="80"/>
    <rect fill="var(--surface)" x="102" y="44" width="16" height="76"/>
    <rect fill="var(--surface)" x="162" y="44" width="16" height="76"/>
    <rect fill="var(--surface)" x="222" y="44" width="16" height="76"/>
    <rect fill="var(--surface)" x="282" y="44" width="16" height="76"/>
    <rect fill="var(--surface)" x="342" y="44" width="16" height="76"/>
    <path class="acc-fill" d="M30,190 L30,148 L95,148 L105,166 L115,166 L125,148 L155,148 L165,156 L175,156 L185,148 L215,148 L225,172 L235,172 L245,148 L275,148 L285,160 L295,160 L305,148 L335,148 L345,152 L355,152 L365,148 L420,148 L430,190 Z"/>
    <rect class="part" x="104" y="120" width="12" height="46" rx="3"/>
    <rect class="part" x="164" y="120" width="12" height="36" rx="3"/>
    <rect class="part" x="224" y="120" width="12" height="52" rx="3"/>
    <rect class="part" x="284" y="120" width="12" height="40" rx="3"/>
    <rect class="part" x="344" y="120" width="12" height="32" rx="3"/>
    <rect class="hot-fill" x="104" y="90" width="12" height="30" rx="2"/>
    <rect class="hot-fill" x="164" y="90" width="12" height="30" rx="2"/>
    <rect class="hot-fill" x="224" y="90" width="12" height="30" rx="2"/>
    <rect class="hot-fill" x="284" y="90" width="12" height="30" rx="2"/>
    <rect class="hot-fill" x="344" y="90" width="12" height="30" rx="2"/>
    <path class="spring" d="M110,90 l-5,-6 l10,-8 l-10,-8 l10,-8 l-5,-6"/>
    <path class="spring" d="M170,90 l-5,-6 l10,-8 l-10,-8 l10,-8 l-5,-6"/>
    <path class="spring" d="M230,90 l-5,-6 l10,-8 l-10,-8 l10,-8 l-5,-6"/>
    <path class="spring" d="M290,90 l-5,-6 l10,-8 l-10,-8 l10,-8 l-5,-6"/>
    <path class="spring" d="M350,90 l-5,-6 l10,-8 l-10,-8 l10,-8 l-5,-6"/>
    <line class="acc" x1="40" y1="120" x2="460" y2="120" stroke-dasharray="6 4"/>
    <text class="lbl-acc" x="448" y="114">shear line</text>
    <text class="lbl" x="448" y="66">housing</text>
    <text class="lbl" x="448" y="170">plug (turns)</text>
    <text class="lbl-hot" x="448" y="92">driver pins</text>
    <text class="lbl" x="448" y="140">key pins</text>
    <text class="lbl" x="448" y="44">springs</text>
    <text class="lbl-acc" x="40" y="222">key: each cut depth matches one key-pin length</text>
  </svg>
  <figcaption>With the correct key, every key pin's top sits exactly at the shear line. Driver pins are entirely in the housing, key pins entirely in the plug, and the plug can rotate.</figcaption>
</figure>
<ol>
  <li>The <strong>plug</strong> turns inside the <strong>housing</strong> (cylinder shell). Holes drilled through both line up when the plug is in its home position.</li>
  <li>Each hole holds a stack: a <strong>key pin</strong> (bottom, varying lengths), a <strong>driver pin</strong> (top) and a <strong>spring</strong>.</li>
  <li>With no key, the springs push the drivers down across the shear line, blocking rotation.</li>
  <li>The key's cuts lift each stack by a different amount. With the right key, every key-pin/driver interface lands on the shear line.</li>
</ol>
<p>A cut that is too shallow pushes the key pin up across the shear line; a cut that is too deep leaves the driver pin across it. Either way, one pin bridges the gap and the plug cannot turn.</p>

<figure class="diagram">
  <svg viewBox="0 0 540 170" role="img" aria-label="One pin stack with the correct cut, a cut too shallow, and a cut too deep">
    <g>
      <text class="lbl-b" x="10" y="18">Correct cut</text>
      <rect class="hatch" x="20" y="30" width="120" height="50"/><rect class="part" x="20" y="80" width="120" height="50"/>
      <rect fill="var(--surface)" x="72" y="32" width="16" height="48"/>
      <rect class="hot-fill" x="74" y="50" width="12" height="30"/><rect class="part" x="74" y="80" width="12" height="34"/>
      <line class="acc" x1="10" y1="80" x2="150" y2="80" stroke-dasharray="5 3"/>
      <text class="lbl" x="20" y="152">break at the line: turns</text>
    </g>
    <g transform="translate(180,0)">
      <text class="lbl-b" x="10" y="18">Cut too shallow</text>
      <rect class="hatch" x="20" y="30" width="120" height="50"/><rect class="part" x="20" y="80" width="120" height="50"/>
      <rect fill="var(--surface)" x="72" y="32" width="16" height="48"/>
      <rect class="hot-fill" x="74" y="38" width="12" height="30"/><rect class="part" x="74" y="68" width="12" height="34"/>
      <line class="acc" x1="10" y1="80" x2="150" y2="80" stroke-dasharray="5 3"/>
      <text class="lbl" x="20" y="152">key pin crosses the line</text>
    </g>
    <g transform="translate(360,0)">
      <text class="lbl-b" x="10" y="18">Cut too deep</text>
      <rect class="hatch" x="20" y="30" width="120" height="50"/><rect class="part" x="20" y="80" width="120" height="50"/>
      <rect fill="var(--surface)" x="72" y="32" width="16" height="48"/>
      <rect class="hot-fill" x="74" y="62" width="12" height="30"/><rect class="part" x="74" y="92" width="12" height="34"/>
      <line class="acc" x1="10" y1="80" x2="150" y2="80" stroke-dasharray="5 3"/>
      <text class="lbl" x="20" y="152">driver pin crosses the line</text>
    </g>
  </svg>
  <figcaption>Any pin bridging the shear line, from either side, blocks rotation. Cut depths are spaced far enough apart that one step always blocks.</figcaption>
</figure>

<h2>Tolerance stack as a feature</h2>
<ul>
  <li><strong>Depth increments:</strong> cut depths come in fixed steps (often a few tenths of a millimeter). Each step must be larger than the combined tolerances of key cutting, pin length and hole position, or a near-miss key would work.</li>
  <li><strong>Clearances:</strong> the plug needs running clearance in the housing, and pins need clearance in their holes. Real holes are never perfectly in line, so under turning torque the pins do not all bind at once. Precision manufacturing and <strong>security pins</strong> (spool or serrated drivers that catch at the shear line) are how manufacturers counter the resulting weaknesses.</li>
  <li><strong>Master keying:</strong> adding a thin <strong>master wafer</strong> to a stack creates a second break, so two different cut depths both work. A building's master key and each room's key can both open a door. Each extra shear point increases the number of keys that will open the lock, so master-keyed systems trade security for convenience.</li>
  <li><strong>MACS (maximum adjacent cut specification):</strong> limits the depth difference between neighboring cuts so the key can slide in and pins ride smoothly over the cuts.</li>
  <li><strong>Keyway warding:</strong> the profile of the keyway restricts which key blanks fit at all; restricted keyways are a commercial control on duplicates.</li>
</ul>

<h2>Wafer locks</h2>
<p>A wafer lock replaces pin stacks with single flat <strong>wafers</strong> sliding in slots across the plug, each with a hole for the key and a spring. With no key (or the wrong key), wafers stick out of the plug into a slot in the housing. The right key positions every wafer entirely within the plug's diameter. They are cheaper and more compact, and are used in desk drawers, cabinets, mailboxes and many older car locks, but their tolerances are generally looser and security lower.</p>

<h2>Materials and manufacturing</h2>
<table>
  <tr><th>Part</th><th>Typical material</th></tr>
  <tr><td>Plug and housing</td><td>Free-machining brass, often from extruded profile; zinc die-cast on low-cost locks</td></tr>
  <tr><td>Pins</td><td>Brass or nickel silver; hardened steel anti-drill pins in high-security cylinders</td></tr>
  <tr><td>Wafers</td><td>Stamped brass or steel</td></tr>
  <tr><td>Keys</td><td>Nickel silver or brass blanks, cut by code or duplicated by tracing</td></tr>
</table>

<h2>Failure modes</h2>
<ul>
  <li>Worn key and pin tips: an old key works intermittently; a fresh code-cut key may work better than a copy of a copy.</li>
  <li>Dirt or the wrong lubricant (oil gathers grit): pins stick; dry graphite or PTFE lubricants are often recommended.</li>
  <li>Broken springs or seized pins.</li>
  <li>Poorly controlled tolerances reduce security without the user noticing.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Look at a house key edge-on: count the cuts and how the depths vary in steps.</li>
    <li>Compare a desk-drawer key (wafer lock, simpler cuts, often double-sided) with a front-door key.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'When can the plug of a pin tumbler lock rotate?',
      options: [
        'When all springs are compressed',
        'When every key-pin/driver-pin break lies exactly at the shear line',
        'When the key is fully inserted, regardless of cuts',
        'When the driver pins are all in the plug',
      ],
      answer: 1,
      explain: 'Only then does no pin bridge the gap between plug and housing.',
    },
    {
      q: 'A key\'s cut at one position is too shallow. What blocks rotation?',
      options: [
        'The driver pin drops into the plug',
        'The key pin is pushed up past the shear line into the housing',
        'The spring breaks',
        'Nothing; the lock turns',
      ],
      answer: 1,
      explain: 'A shallow cut lifts the stack too far, so the key pin itself bridges the shear line.',
    },
    {
      q: 'What is the security cost of master keying?',
      options: [
        'Keys wear faster',
        'Master wafers add extra shear points, so more different keys can open each lock',
        'It needs more springs',
        'Plugs become harder to turn',
      ],
      answer: 1,
      explain: 'Each extra break per stack adds possible working depths, increasing the number of keys that operate the cylinder.',
    },
    {
      q: 'How does a wafer lock block rotation without the right key?',
      options: [
        'Pin stacks cross a shear line',
        'Single spring-loaded wafers stick out of the plug into a housing slot unless the key positions them all within the plug',
        'A magnet holds the plug',
        'A disc must be rotated to a gate',
      ],
      answer: 1,
      explain: 'Each wafer must sit entirely inside the plug\'s diameter; only the right key positions them all.',
    },
    {
      q: 'What does MACS (maximum adjacent cut specification) control?',
      options: [
        'The maximum key length',
        'How different two neighboring cut depths may be, so the key inserts and pins ride smoothly',
        'Plug-to-housing clearance',
        'The number of keys in a master system',
      ],
      answer: 1,
      explain: 'Too steep a step between adjacent cuts would jam pins and make the key hard or impossible to insert.',
    },
  ],
});
