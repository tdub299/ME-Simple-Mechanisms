Registry.registerTopic('lesson-1', {
  n: 14,
  title: 'Constant-force springs and spring motors',
  family: 'Energy storage',
  readTime: 8,
  source: 'new',
  summary:
    'A constant-force spring is a pre-curled strip of spring steel. Pulling it out straightens one more bit of curl for every millimeter of travel, which takes the same energy each time. So the force stays almost flat, unlike the rising force of an ordinary spring (F = kx).',
  body: `
<h2>How it works</h2>
<figure class="diagram">
  <svg viewBox="0 0 580 240" role="img" aria-label="Constant-force spring on a drum and its force versus extension curve">
    <circle class="part" cx="110" cy="110" r="64"/>
    <circle class="thin" cx="110" cy="110" r="59"/>
    <circle class="thin" cx="110" cy="110" r="54"/>
    <circle class="thin" cx="110" cy="110" r="49"/>
    <circle class="part" cx="110" cy="110" r="42"/>
    <circle class="solid" cx="110" cy="110" r="5"/>
    <path class="ln" d="M110,174 L300,174" stroke-width="5"/>
    <rect class="part" x="296" y="166" width="12" height="16"/>
    <path class="acc arr-acc" d="M310,174 L350,174"/>
    <text class="lbl-acc" x="320" y="164">F</text>
    <text class="lbl" x="20" y="22">Coil on a free-spinning drum</text>
    <text class="lbl" x="170" y="200">extended strip (flat, stressed only</text>
    <text class="lbl" x="170" y="216">in the short transition zone)</text>
    <text class="lbl-sm" x="184" y="56">natural radius Rₙ</text>
    <g transform="translate(370,0)">
      <line class="ln" x1="20" y1="190" x2="200" y2="190"/>
      <line class="ln" x1="20" y1="190" x2="20" y2="30"/>
      <path class="dash" d="M20,190 L190,50"/>
      <path class="acc" d="M20,190 C30,110 40,96 60,94 L196,92"/>
      <text class="lbl-acc" x="70" y="84">constant-force spring</text>
      <text class="lbl" x="104" y="140">ordinary spring</text>
      <text class="lbl" x="104" y="154">(F = kx)</text>
      <text class="lbl-sm" x="110" y="208">extension →</text>
      <text class="lbl-sm" x="-4" y="22">force</text>
    </g>
  </svg>
  <figcaption>The force reaches its nominal value within roughly 1.25 coil diameters of extension and then stays flat for the rest of the strip.</figcaption>
</figure>
<p>The strip is stress-formed so its natural, unloaded shape is a tight curl. Only the short zone where the strip leaves the coil is bending at any moment. Every millimeter of extension does the same work (it un-bends the same amount of strip), so the force is essentially constant. A widely used handbook approximation is:</p>
<div class="formula">F ≈ <span class="frac"><span>E · b · t<sup>3</sup></span><span>26.4 · R<sub>n</sub><sup>2</sup></span></span></div>
<p>where b is strip width, t thickness and R<sub>n</sub> the natural radius. Force rises steeply with thickness (t³), so small thickness changes give big force changes.</p>

<h2>Key design parameters</h2>
<ul>
  <li><strong>Drum size:</strong> the coil is mounted on a drum about 10–20% larger than its natural diameter, so it grips the drum. Too small a drum overstresses the strip; too large and the coil can slip off.</li>
  <li><strong>Fatigue life vs size:</strong> bending stress is roughly proportional to E·t/R<sub>n</sub>. Manufacturers offer series rated from a few thousand to around a million cycles; the long-life ones have a larger coil for the same force.</li>
  <li><strong>Force tolerance:</strong> typically ±10%, set by strip thickness tolerance (because of t³) and forming.</li>
  <li><strong>Stacking:</strong> two or more springs nested on one drum, or side by side, add force; back-to-back mounting balances side loads.</li>
  <li><strong>Mounting:</strong> the free end is fixed with a hole, tab or rivet; the coil rides on a bushing or bearing so it spins freely.</li>
</ul>

<h2>Spring motors</h2>
<p>To get constant <em>torque</em> over many turns, the strip is wound off a storage drum onto an output drum, often bent the opposite way round ("back-bent"). The strip is flexed through its natural curvature and beyond, so the torque is high and nearly flat over the full run. Uses include retractable cord reels, clock and timer drives, cable retractors and film-camera winders.</p>

<h2>Where you see them</h2>
<table>
  <tr><th>Application</th><th>Why constant force helps</th></tr>
  <tr><td>Sash window and monitor counterbalances</td><td>Holds the weight at any height</td></tr>
  <tr><td>Retail shelf pushers</td><td>Same push on the last product as on the first</td></tr>
  <tr><td>Brush springs in motors</td><td>Constant brush pressure as the brush wears</td></tr>
  <tr><td>Cable and hose retractors</td><td>Smooth, even retraction along the whole length</td></tr>
  <tr><td>Exercise machines and medical arms</td><td>Weight-like feel without the mass</td></tr>
</table>
<p>Note: retractable tape measures use a different spring, a spiral clock spring (Topic 21), whose torque rises as it winds.</p>

<h2>Materials and manufacturing</h2>
<ul>
  <li>301 stainless steel in the high-yield (full-hard) condition is the default; carbon spring steel is cheaper; nickel alloys such as Inconel for high temperature.</li>
  <li>Strip is precision cold-rolled, then edges are deburred or rounded, because edge cracks start fatigue.</li>
  <li>The strip is wound on a mandrel under controlled stress and heat-set so it keeps its natural radius.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Fatigue cracks starting at strip edges or mounting holes.</li>
  <li>Coil telescoping sideways off the drum without guides.</li>
  <li>Loss of force from set if overstressed, or from corrosion in humid environments.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Pull a retail shelf pusher forward and feel the force stay flat.</li>
    <li>Look behind the brushes in an old universal motor (power tool, vacuum) for a curled strip spring.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'Why is the force of a constant-force spring nearly flat with extension?',
      options: [
        'The steel gets softer as it extends',
        'Each increment of extension straightens the same amount of pre-curled strip, taking the same energy',
        'A friction brake controls the force',
        'The drum changes diameter',
      ],
      answer: 1,
      explain: 'Only the transition zone bends at any instant. The same un-bending happens for every millimeter pulled, so force stays constant.',
    },
    {
      q: 'Using F ∝ b·t³ / Rₙ², what happens to force if strip thickness doubles (all else equal)?',
      options: ['2×', '4×', '6×', '8×'],
      answer: 3,
      explain: 'Force scales with t³, so 2³ = 8×. This is also why thickness tolerance dominates force tolerance.',
    },
    {
      q: 'How big should the mounting drum be relative to the spring\'s natural diameter?',
      options: [
        'Half the natural diameter',
        'Exactly equal',
        'About 10–20% larger, so the coil grips the drum',
        'At least twice as large',
      ],
      answer: 2,
      explain: 'A slightly larger drum makes the coil grip. Much smaller overstresses the strip; much larger lets it slip off.',
    },
    {
      q: 'You need a much longer cycle life at the same force. What generally changes?',
      options: [
        'Use a thinner, narrower strip on the same coil',
        'Use a larger natural radius (bigger coil), which lowers bending stress',
        'Use carbon steel instead of stainless',
        'Mount the coil on a smaller drum',
      ],
      answer: 1,
      explain: 'Bending stress ∝ E·t/Rₙ. Long-life series use larger coils, at the cost of space.',
    },
    {
      q: 'What makes a constant-torque spring motor?',
      options: [
        'A spiral clock spring fixed at its center',
        'A strip wound from a storage drum onto an output drum, typically back-bent',
        'Two constant-force springs pulling against each other',
        'A torsion bar',
      ],
      answer: 1,
      explain: 'Transferring the strip between two drums gives nearly constant torque over many turns.',
    },
  ],
});
