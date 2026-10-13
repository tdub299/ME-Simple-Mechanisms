Registry.registerTopic('lesson-1', {
  n: 22,
  title: 'Toggle clamps and over-center mechanisms',
  family: 'Linkages',
  readTime: 8,
  source: 'new',
  summary:
    'Two links meeting at a knee give a mechanical advantage that heads toward infinity as they straighten. Push the knee just <strong>past</strong> straight against a stop and the load itself holds the mechanism shut. That is the over-center lock, used in toggle clamps, locking pliers, circuit breakers and bike quick-releases.',
  body: `
<h2>The toggle</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 240" role="img" aria-label="Toggle linkage with knee angle theta and the over-center position">
    <circle class="part" cx="50" cy="150" r="9"/>
    <rect class="hatch" x="20" y="160" width="60" height="12"/>
    <line class="ln" x1="50" y1="150" x2="160" y2="110" stroke-width="6"/>
    <line class="ln" x1="160" y1="110" x2="270" y2="150" stroke-width="6"/>
    <circle class="part" cx="160" cy="110" r="8"/>
    <rect class="part" x="262" y="132" width="44" height="36"/>
    <rect class="hatch" x="230" y="168" width="140" height="10"/>
    <line class="dash" x1="50" y1="150" x2="300" y2="150"/>
    <line class="dash" x1="50" y1="150" x2="160" y2="160"/>
    <line class="dash" x1="160" y1="160" x2="270" y2="150"/>
    <circle class="dash" cx="160" cy="160" r="6"/>
    <path class="thin" d="M110,150 A60,60 0 0 0 106,130"/>
    <text class="lbl-b" x="114" y="144">θ</text>
    <path class="acc arr-acc" d="M160,40 L160,98"/>
    <text class="lbl-acc" x="168" y="58">F in (at knee)</text>
    <path class="hot arr" d="M308,150 L360,150"/>
    <text class="lbl-hot" x="312" y="140">F out</text>
    <text class="lbl" x="120" y="196">dashed: knee pushed just past</text>
    <text class="lbl" x="120" y="212">the line (over center) onto a stop</text>
    <g transform="translate(380,0)">
      <text class="lbl-b" x="0" y="24">Lock logic</text>
      <text class="lbl" x="0" y="52">Above the line: load</text>
      <text class="lbl" x="0" y="68">pushes the knee up</text>
      <text class="lbl" x="0" y="84">(clamp would open).</text>
      <text class="lbl" x="0" y="118">Past the line: load</text>
      <text class="lbl" x="0" y="134">pushes the knee down</text>
      <text class="lbl" x="0" y="150">into the stop (locked).</text>
    </g>
  </svg>
  <figcaption>As θ shrinks, a small force at the knee makes a large force along the line of the links. Just past θ = 0, the output reaction itself pushes the knee into a stop, so the clamp holds with no input.</figcaption>
</figure>
<p>For a symmetric toggle with force applied at the knee, perpendicular to the line of action:</p>
<div class="formula">F<sub>out</sub> = <span class="frac"><span>F<sub>in</sub></span><span>2 tan θ</span></span></div>

<figure class="diagram">
  <svg viewBox="0 0 540 240" role="img" aria-label="Mechanical advantage of a toggle versus knee angle">
    <line class="grid" x1="60" y1="115" x2="480" y2="115"/>
    <line class="grid" x1="60" y1="30" x2="480" y2="30"/>
    <line class="ln" x1="60" y1="200" x2="480" y2="200"/>
    <line class="ln" x1="60" y1="200" x2="60" y2="24"/>
    <path class="acc" d="M74.0,37.7 L78.7,78.3 L88.0,118.9 L97.3,139.2 L106.7,151.4 L116.0,159.6 L134.7,169.8 L153.3,175.9 L181.3,181.6 L209.3,185.2 L246.7,188.3 L293.3,190.9 L340.0,192.6 L386.7,193.9 L433.3,194.9 L480.0,195.8"/>
    <text class="lbl-sm" x="36" y="204">0</text>
    <text class="lbl-sm" x="30" y="119">10</text>
    <text class="lbl-sm" x="30" y="34">20</text>
    <text class="lbl-sm" x="56" y="218">0°</text>
    <text class="lbl-sm" x="148" y="218">10°</text>
    <text class="lbl-sm" x="241" y="218">20°</text>
    <text class="lbl-sm" x="334" y="218">30°</text>
    <text class="lbl-sm" x="470" y="218">45°</text>
    <text class="lbl-sm" x="230" y="234">knee angle θ</text>
    <text class="lbl-acc" x="104" y="80">F out / F in = 1 / (2 tan θ)</text>
    <text class="lbl" x="250" y="170">≈ 0.5 at 45°; ≈ 5.7 at 5°; ≈ 14 at 2°</text>
  </svg>
  <figcaption>Mechanical advantage of a symmetric toggle. It rises sharply in the last few degrees, which is where clamps do their clamping.</figcaption>
</figure>

<h2>What really sets clamping force</h2>
<p>The formula says force goes to infinity as θ → 0, but stroke also goes to zero. In practice, clamping force comes from <strong>elastic deflection</strong>: the clamp spindle meets the workpiece a little before dead center, and driving the knee through the last few degrees squeezes the rubber tip, workpiece and linkage. More interference (set by the spindle's adjusting nuts) means more preload. That is why toggle clamps are adjusted to touch the work just before the handle goes over center.</p>

<h2>Holding capacity vs clamping force</h2>
<ul>
  <li><strong>Holding capacity</strong> (the catalog number) is the external load the clamp resists once locked over center. It is limited by the strength of the links and pins and can be several times higher than the force the clamp applies.</li>
  <li><strong>Clamping force</strong> is what the clamp actually exerts on the work, from the preload described above. It is usually much lower.</li>
</ul>

<h2>Types of toggle clamp</h2>
<table>
  <tr><th>Type</th><th>Motion</th><th>Typical use</th></tr>
  <tr><td>Vertical hold-down</td><td>Handle vertical when clamped; arm swings clear</td><td>Fixtures, welding jigs</td></tr>
  <tr><td>Horizontal hold-down</td><td>Low profile, handle horizontal when clamped</td><td>Where vertical space is limited</td></tr>
  <tr><td>Push-pull (straight line)</td><td>Plunger moves along its axis</td><td>Pushing parts against stops, door latches</td></tr>
  <tr><td>Latch (draw) clamp</td><td>Hook pulls two parts together</td><td>Case lids, mold halves, drum lids</td></tr>
  <tr><td>Pneumatic toggle</td><td>Air cylinder drives the linkage; stays locked if air fails</td><td>Automated welding lines</td></tr>
</table>

<h2>Other over-center mechanisms</h2>
<ul>
  <li><strong>Locking pliers:</strong> an adjusting screw at the end of the handle sets where the toggle goes over center, which sets jaw opening and grip force; a release lever pushes it back.</li>
  <li><strong>Bike quick-release skewer:</strong> an over-center cam pulls the skewer tight and stays locked.</li>
  <li><strong>Light switches and circuit breakers:</strong> a spring and link go over center, so contacts snap open or shut regardless of how slowly you move the lever.</li>
  <li><strong>Folding table legs, stroller frames, jaw crushers.</strong></li>
</ul>

<h2>Materials and manufacturing</h2>
<ul>
  <li>Links and arms: stamped and formed steel, zinc-plated, or stainless for food and medical fixtures.</li>
  <li>Pins and rivets: hardened steel; wear at pins adds play and reduces clamping repeatability.</li>
  <li>Spindles: threaded steel with neoprene or urethane tips (the compliant element).</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Pin and bushing wear: the clamp no longer goes over center with preload, so it vibrates loose.</li>
  <li>Over-tightened spindle: the handle cannot go over center, or links bend.</li>
  <li>Exceeding holding capacity under shock loads: bent links.</li>
  <li>Locking pliers set too tight can crush thin-walled parts.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Close a pair of locking pliers slowly: feel the force peak, then drop as the toggle snaps over center.</li>
    <li>Flip a light switch very slowly: it still snaps, because of an over-center spring.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'For a symmetric toggle, F_out = F_in / (2 tan θ). What is the mechanical advantage at θ = 5°?',
      options: ['About 0.5', 'About 2', 'About 5.7', 'About 57'],
      answer: 2,
      explain: 'tan 5° ≈ 0.0875, so 1 / (2 × 0.0875) ≈ 5.7.',
    },
    {
      q: 'Why does an over-center clamp stay closed without anyone holding the handle?',
      options: [
        'Friction in the pins',
        'Past dead center, the clamp reaction pushes the knee further into a stop instead of back open',
        'A spring holds the handle',
        'The workpiece is magnetic',
      ],
      answer: 1,
      explain: 'Once the knee crosses the line between the end pivots, the load\'s moment reverses and drives the knee into the stop.',
    },
    {
      q: 'A toggle clamp lists a holding capacity of 2,000 N. What does that mean?',
      options: [
        'It presses on the workpiece with 2,000 N',
        'Once locked, it can resist an external load of about 2,000 N; actual clamping force is usually much lower',
        'The handle needs 2,000 N to close',
        'It can lift 2,000 N',
      ],
      answer: 1,
      explain: 'Holding capacity is resistance when locked, limited by link strength. Clamping force comes from preload and is smaller.',
    },
    {
      q: 'Near dead center, what actually determines how hard a toggle clamp squeezes the workpiece?',
      options: [
        'The operator\'s hand force alone',
        'The elastic interference (deflection of tip, workpiece and links), set by the spindle adjustment',
        'The handle length',
        'The pin diameter',
      ],
      answer: 1,
      explain: 'MA becomes huge but stroke tiny. The force comes from how much the system must deflect to let the knee pass center.',
    },
    {
      q: 'In locking pliers, what does the screw at the end of the handle adjust?',
      options: [
        'Spring stiffness of the release lever',
        'The point where the toggle goes over center, which sets jaw opening and grip force',
        'Jaw material hardness',
        'The cutting edge angle',
      ],
      answer: 1,
      explain: 'Moving the toggle\'s fixed pivot changes where over-center happens, so the jaws lock at a different size and preload.',
    },
  ],
});
