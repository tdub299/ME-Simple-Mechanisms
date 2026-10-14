Registry.registerTopic('lesson-1', {
  n: 20,
  title: 'Quick-connect couplings (push-to-connect, cam-lock)',
  family: 'Fluid joining',
  readTime: 9,
  source: 'new',
  summary:
    'Quick-connects separate the two jobs of a fluid joint: <strong>holding</strong> (teeth, balls or cams that carry the pull-out force) and <strong>sealing</strong> (an O-ring or gasket that never carries load). Valved versions add a third job, <strong>shutting off</strong> each side when disconnected.',
  body: `
<h2>Push-to-connect fittings</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 230" role="img" aria-label="Half section of a push-to-connect fitting with collet teeth, O-ring and tube stop">
    <line class="dash" x1="20" y1="170" x2="540" y2="170"/>
    <rect class="fl" x="30" y="132" width="330" height="38"/>
    <rect class="fl" x="360" y="132" width="110" height="38"/>
    <rect class="part" x="30" y="120" width="330" height="12"/>
    <path class="hatch" d="M120,70 L470,70 L470,132 L360,132 L360,120 L262,120 L262,108 L230,108 L230,120 L200,120 L200,104 L120,104 Z"/>
    <path class="acc-fill" d="M98,90 L112,90 L112,104 L196,104 L196,118 L98,118 Z"/>
    <path class="hot" d="M172,106 L184,121 M182,106 L194,121"/>
    <circle class="acc-fill" cx="246" cy="114" r="6"/>
    <path class="ln arr" d="M80,146 L40,146"/>
    <text class="lbl" x="44" y="162">pull</text>
    <text class="lbl-acc" x="20" y="24">release collet: push in to lift the teeth</text>
    <line class="thin" x1="80" y1="28" x2="104" y2="90"/>
    <text class="lbl-hot" x="130" y="46">stainless teeth bite the tube;</text>
    <text class="lbl-hot" x="130" y="62">pulling wedges them in harder</text>
    <line class="thin" x1="180" y1="66" x2="184" y2="106"/>
    <text class="lbl-acc" x="330" y="24">O-ring seals on tube OD</text>
    <line class="thin" x1="340" y1="28" x2="250" y2="108"/>
    <text class="lbl" x="372" y="96">tube stop</text>
    <line class="thin" x1="390" y1="100" x2="362" y2="124"/>
    <text class="lbl" x="40" y="196">tube</text>
    <text class="lbl-sm" x="420" y="196">centerline</text>
  </svg>
  <figcaption>Upper half of a push-to-connect fitting. The tube pushes past the angled teeth and the O-ring until it hits the stop. The teeth hold; the O-ring seals. The two jobs are kept separate.</figcaption>
</figure>
<ol>
  <li>The tube slides in past a <strong>collet</strong> carrying a ring of angled stainless-steel teeth. Pushing in deflects them easily.</li>
  <li>It passes through an <strong>O-ring</strong> that seals on the tube's outside diameter, and stops against a <strong>tube stop</strong>.</li>
  <li>Pulling makes the teeth dig in and wedge harder. It is the self-energizing one-way geometry from ratchets (Topic 5), applied to a smooth tube.</li>
  <li>Pushing the collet in lifts the teeth off the tube for release (only when unpressurized).</li>
</ol>
<p>Design details that matter:</p>
<ul>
  <li><strong>Tube OD tolerance and hardness:</strong> the fitting seals on OD, so tube must be within tolerance, round and smooth. Soft tubing (and thin PEX or PE) needs an internal <strong>insert/stiffener</strong> so it does not collapse under the teeth and O-ring.</li>
  <li><strong>Tube preparation:</strong> square, deburred cuts and full insertion depth (water push-fits are marked for this). A burr can cut the O-ring.</li>
  <li><strong>O-ring squeeze:</strong> a radial squeeze of roughly 10–25% of cross-section seals well without making insertion too hard.</li>
  <li><strong>Side loads and vibration:</strong> repeated bending can work the tube against the teeth and leak, so tubing is clipped near fittings.</li>
</ul>

<h2>Quick couplings (plug and socket)</h2>
<ul>
  <li><strong>Ball-latch:</strong> a ring of balls in the socket drops into a groove on the plug; a spring-loaded sleeve locks them in. Retracting the sleeve frees the balls. Pneumatic couplers follow interchange profiles (such as those in ISO 6150) that are not cross-compatible.</li>
  <li><strong>Valved:</strong> spring-loaded poppets in one or both halves close as they separate. Single-shutoff couplings vent the downstream side; double-shutoff couplings seal both.</li>
  <li><strong>Flush-face / dry-break:</strong> flat mating faces leave almost no trapped volume, so very little fluid spills and little air gets in. Used in hydraulics and chemical transfer.</li>
  <li><strong>Safety-exhaust couplers:</strong> a two-stage release vents downstream air first, so a pressurized hose cannot whip when disconnected.</li>
</ul>

<h2>Cam-lock (camlock) couplings</h2>
<p>A grooved male adapter fits into a female coupler with two hinged arms. Closing the arms swings cams into the groove, pulling the adapter onto a flat gasket. They are fast, tool-free and robust for hoses carrying fuel, chemicals, slurries and food products. Sizes and dimensions follow standards such as A-A-59326 and EN 14420-7. Locking arms or pins stop the cams vibrating open.</p>

<figure class="diagram">
  <svg viewBox="0 0 560 270" role="img" aria-label="Camlock coupling with cam arms closed and open, and a section through a ball-latch quick coupler">
    <g>
      <text class="lbl-b" x="20" y="20">Camlock (side view)</text>
      <rect class="part" x="20" y="104" width="150" height="48"/>
      <line class="dash" x1="152" y1="104" x2="152" y2="152"/>
      <line class="dash" x1="162" y1="104" x2="162" y2="152"/>
      <rect class="part" x="140" y="88" width="120" height="80" rx="4" fill-opacity="0.85"/>
      <line class="hot" x1="176" y1="100" x2="176" y2="156" stroke-dasharray="4 3"/>
      <circle class="part" cx="150" cy="80" r="7"/>
      <circle class="part" cx="150" cy="176" r="7"/>
      <path class="acc-fill" d="M144,84 Q157,96 158,104 L150,104 Z"/>
      <path class="acc-fill" d="M144,172 Q157,160 158,152 L150,152 Z"/>
      <line class="acc" x1="150" y1="80" x2="262" y2="74" stroke-width="7"/>
      <line class="acc" x1="150" y1="176" x2="262" y2="182" stroke-width="7"/>
      <line class="dash" x1="150" y1="80" x2="96" y2="30" stroke-width="5"/>
      <line class="dash" x1="150" y1="176" x2="96" y2="226" stroke-width="5"/>
      <text class="lbl" x="22" y="176">grooved adapter</text>
      <text class="lbl" x="200" y="138">coupler</text>
      <text class="lbl-acc" x="170" y="62">cam arms (closed)</text>
      <text class="lbl" x="20" y="44">open</text>
      <text class="lbl-hot" x="180" y="200">gasket inside</text>
      <line class="thin" x1="184" y1="190" x2="176" y2="156"/>
      <text class="lbl" x="20" y="250">Closing the arms swings cam lobes into the</text>
      <text class="lbl" x="20" y="264">adapter's groove, drawing it onto the gasket.</text>
    </g>
    <g transform="translate(300,0)">
      <text class="lbl-b" x="10" y="20">Ball-latch coupler (section)</text>
      <path class="part" d="M10,116 L118,116 L118,122 L134,122 L134,116 L150,116 L150,164 L134,164 L134,158 L118,158 L118,164 L10,164 Z"/>
      <rect class="hatch" x="100" y="100" width="140" height="14"/>
      <rect class="hatch" x="100" y="166" width="140" height="14"/>
      <circle class="acc-fill" cx="126" cy="113" r="8"/>
      <circle class="acc-fill" cx="126" cy="167" r="8"/>
      <rect class="acc-fill" x="104" y="86" width="44" height="12"/>
      <rect class="acc-fill" x="104" y="182" width="44" height="12"/>
      <path class="spring" d="M148,92 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8"/>
      <path class="spring" d="M148,188 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8 l10,-8 l10,8"/>
      <rect class="part" x="226" y="82" width="10" height="20"/>
      <rect class="part" x="226" y="178" width="10" height="20"/>
      <text class="lbl" x="10" y="212">plug (with groove)</text>
      <text class="lbl-acc" x="150" y="64">sleeve holds</text>
      <text class="lbl-acc" x="150" y="78">balls in groove</text>
      <text class="lbl" x="190" y="150">socket</text>
      <text class="lbl" x="10" y="226">Pull the sleeve back and the balls can</text>
      <text class="lbl" x="10" y="240">move outward, freeing the plug. Valved</text>
      <text class="lbl" x="10" y="254">versions add a poppet in each half.</text>
    </g>
  </svg>
  <figcaption>Two ways to hold a hose joint together that come apart in seconds. The camlock uses levered cams in a groove; the ball-latch uses balls trapped by a sliding sleeve. In both, a separate gasket or O-ring does the sealing.</figcaption>
</figure>

<h2>Medical connectors</h2>
<p>Luer connectors use a 6% taper for a friction seal, with an optional threaded lock (ISO 80369-7). Because many lines share them, they caused misconnection errors, so the ISO 80369 family defines non-interchangeable small-bore connectors for other uses, such as ENFit for enteral feeding.</p>

<h2>Materials and manufacturing</h2>
<table>
  <tr><th>Part</th><th>Typical choices</th></tr>
  <tr><td>Bodies</td><td>Nickel-plated brass, stainless steel; PBT, POM or PPSU for plastic push-fits; aluminum or polypropylene for camlocks</td></tr>
  <tr><td>Collet teeth / grab ring</td><td>Stamped stainless spring steel</td></tr>
  <tr><td>Seals</td><td>NBR (air, oil), EPDM (water), FKM (chemicals, heat)</td></tr>
  <tr><td>Coupling balls and sleeves</td><td>Hardened steel or stainless</td></tr>
</table>

<h2>Failure modes</h2>
<ul>
  <li>Leaks from scored, oval or out-of-tolerance tube, or a cut O-ring.</li>
  <li>Tube pull-out when tube is too soft, too hard or not fully inserted.</li>
  <li>Couplings disconnected under pressure (hose whip) or valves left half-open.</li>
  <li>Camlock arms vibrating open without locking pins.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Look into a pneumatic push-fit: you can see the ring of stainless teeth behind the colored release collar.</li>
    <li>On a shop air hose, notice how the coupler sleeve must be pulled back before the plug drops out.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'Why can\'t you pull a tube out of a push-to-connect fitting just by pulling?',
      options: [
        'The O-ring grips it',
        'The angled teeth wedge deeper into the tube when pulled; pushing the collet in lifts them for release',
        'Adhesive inside the fitting',
        'Air pressure holds the tube in',
      ],
      answer: 1,
      explain: 'The teeth geometry is self-energizing in the pull direction, like a one-way clutch. The release collet lifts them off.',
    },
    {
      q: 'In a push-to-connect fitting, what provides the seal?',
      options: [
        'The metal teeth biting the tube',
        'An O-ring sealing on the tube\'s outside diameter',
        'Thread sealant',
        'The tube stop',
      ],
      answer: 1,
      explain: 'Holding and sealing are separated: teeth hold, the O-ring seals on the OD.',
    },
    {
      q: 'Why do soft or thin-walled tubes need an insert (stiffener) in push-fits?',
      options: [
        'To color-code the tube',
        'To stop the tube collapsing under the teeth and O-ring, so it holds and seals',
        'To increase flow',
        'To prevent corrosion',
      ],
      answer: 1,
      explain: 'Without internal support the tube deforms inward, losing O-ring squeeze and grip.',
    },
    {
      q: 'What is the purpose of a safety-exhaust pneumatic coupler?',
      options: [
        'It filters the air',
        'It vents downstream pressure before release so the hose cannot whip',
        'It doubles flow rate',
        'It locks permanently',
      ],
      answer: 1,
      explain: 'A two-stage release bleeds the trapped air first, then frees the plug.',
    },
    {
      q: 'What is the main benefit of flush-face (dry-break) valved couplings?',
      options: [
        'Higher pressure rating',
        'Minimal spillage and air inclusion when connecting and disconnecting',
        'They need no seals',
        'Lower cost than standard couplings',
      ],
      answer: 1,
      explain: 'Flat mating faces leave almost no trapped volume, so very little fluid escapes and little air enters.',
    },
  ],
});
