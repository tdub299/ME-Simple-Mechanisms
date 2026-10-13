Registry.registerTopic('lesson-1', {
  n: 13,
  title: 'Snap fits and living hinges',
  family: 'Joining',
  readTime: 10,
  source: 'new',
  summary:
    'Snap fits and living hinges replace screws and pins with the plastic\'s own elasticity. A snap fit is designed around the <strong>maximum strain</strong> the material can take during assembly. A living hinge depends on <strong>polypropylene</strong>\'s unusual fatigue life when molded so that the polymer chains line up across the hinge.',
  body: `
<h2>Cantilever snap fits</h2>
<figure class="diagram">
  <svg viewBox="0 0 590 250" role="img" aria-label="Cantilever snap-fit geometry and a living hinge cross-section">
    <rect class="hatch" x="40" y="40" width="20" height="170"/>
    <path class="part" d="M60,110 L270,110 L270,80 L285,80 L330,110 L330,130 L60,130 Z"/>
    <path class="dash" d="M60,120 Q200,124 330,152"/>
    <path class="thin" d="M60,104 L60,96 M270,104 L270,96 M60,100 L270,100"/>
    <text class="lbl" x="150" y="94">L</text>
    <path class="thin" d="M200,110 L200,130"/>
    <text class="lbl" x="206" y="126">h</text>
    <path class="thin" d="M342,80 L350,80 M342,110 L350,110 M346,80 L346,110"/>
    <text class="lbl" x="354" y="100">y</text>
    <path class="thin" d="M306,110 A24,24 0 0 0 310,96"/>
    <text class="lbl" x="296" y="74">α entry angle</text>
    <text class="lbl" x="214" y="60">retention</text>
    <text class="lbl" x="214" y="74">face</text>
    <line class="thin" x1="240" y1="78" x2="268" y2="90"/>
    <text class="lbl-sm" x="120" y="160">deflected shape during assembly</text>
    <path class="ln arr" d="M300,196 L230,196"/>
    <text class="lbl" x="70" y="200">mating part moves on</text>
    <text class="lbl" x="70" y="232">Max strain at the root: ε = 1.5 · y · h / L²</text>
    <g transform="translate(400,0)">
      <text class="lbl-b" x="0" y="40">Living hinge (section)</text>
      <path class="part" d="M0,110 L70,110 L74,124 Q90,132 106,124 L110,110 L180,110 L180,140 L0,140 Z"/>
      <path class="thin" d="M90,128 L90,140"/>
      <text class="lbl" x="56" y="168">0.2–0.5 mm web</text>
      <path class="fl-line arr-fl" d="M20,90 L160,90"/>
      <text class="lbl-fl" x="10" y="76">melt flows across the hinge</text>
      <text class="lbl" x="0" y="200">Chains align across the web;</text>
      <text class="lbl" x="0" y="216">flex it right after molding.</text>
    </g>
  </svg>
  <figcaption>Left: a constant-section cantilever snap. y is the undercut depth. Strain peaks at the root, so beam length L is the strongest lever. Right: a living hinge is a thin, short web molded so the plastic flows straight across it.</figcaption>
</figure>
<p>A cantilever snap is a beam with a hook on its end: an angled entry face that deflects it during assembly, and a retention face that holds afterward. For a constant rectangular section, the root strain during assembly is:</p>
<div class="formula">ε = <span class="frac"><span>1.5 · y · h</span><span>L<sup>2</sup></span></span></div>
<p>where y is the deflection (the undercut depth), h the beam thickness and L the beam length. So doubling the beam length allows four times the deflection for the same strain. Tapering the beam to about half thickness at the tip spreads strain along the beam and allows more deflection again. The insertion force follows from the deflection force P and the entry angle α:</p>
<div class="formula">W = P · <span class="frac"><span>μ + tan α</span><span>1 − μ tan α</span></span></div>
<p>The same expression with the retention angle gives the separation force. A 90° retention face makes the joint permanent; 30–45° makes it separable.</p>

<h2>Allowable strain (single assembly, approximate)</h2>
<table>
  <tr><th>Material</th><th>Allowable strain</th></tr>
  <tr><td>PC</td><td>~4%</td></tr>
  <tr><td>ABS</td><td>~2.5%</td></tr>
  <tr><td>POM (acetal)</td><td>~6%</td></tr>
  <tr><td>PA6 (conditioned, i.e. with absorbed moisture)</td><td>~6%; much less when dry</td></tr>
  <tr><td>PP</td><td>very high; limited by permanent set rather than fracture</td></tr>
  <tr><td>Glass-filled grades</td><td>~1–2%</td></tr>
</table>
<p>For snaps assembled many times, designers use roughly 60% of these values. Resin suppliers publish exact figures for each grade.</p>

<h2>Snap fit design rules</h2>
<ul>
  <li><strong>Root radius:</strong> a sharp corner at the root multiplies stress. A radius of about half the wall thickness is a common rule.</li>
  <li><strong>Do not preload:</strong> a snap that stays deflected after assembly will creep and relax. Design it to return to near zero strain once seated.</li>
  <li><strong>Other forms:</strong> annular snaps (pen caps, bottle closures) and torsion snaps follow the same strain logic.</li>
  <li><strong>Molding direction:</strong> the hook's underside is an undercut. Either use a side action or lifter in the mold, or cut a window through the wall under the hook so a straight-pull core can form it.</li>
  <li><strong>Tolerance:</strong> design the undercut so worst-case tolerances still give engagement but never exceed allowable strain.</li>
</ul>

<h2>Living hinges</h2>
<ul>
  <li><strong>Material:</strong> polypropylene (homopolymer or copolymer) is the standard; polyethylene works less well. Most other plastics crack within a few flexes.</li>
  <li><strong>Geometry:</strong> a thin web, typically 0.2–0.5 mm thick and around 1 mm long, with generous radii either side.</li>
  <li><strong>Gating:</strong> melt must flow straight across the hinge in one front. A weld line or flow along the hinge leaves it weak.</li>
  <li><strong>Post-mold flexing:</strong> bending the hinge several times right after ejection, while warm, cold-draws and orients the chains, greatly increasing life.</li>
  <li><strong>Life:</strong> a well-made PP hinge survives hundreds of thousands to millions of flexes. Flip-top caps, tic-tac boxes, cable clips and tool cases all rely on this.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Snap root cracking at the first assembly (strain too high, root radius too small, or a weld line at the root).</li>
  <li>Loss of retention from creep, stress relaxation or heat.</li>
  <li>Brittle dry nylon snaps breaking in winter (moisture content matters).</li>
  <li>Living hinge tearing from poor gating or a hinge that is too thick.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Look at a remote control's battery cover: find the cantilever snap and the window molded under it.</li>
    <li>Flip a shampoo cap lid and look for the thin PP hinge web.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'For a constant-section cantilever snap, ε = 1.5·y·h/L². If you double L and keep strain the same, the allowable deflection y becomes:',
      options: ['2×', '4×', '½×', 'Unchanged'],
      answer: 1,
      explain: 'y = ε L² / (1.5 h), so y scales with L². Doubling L allows 4× deflection.',
    },
    {
      q: 'Which material is the standard choice for a living hinge?',
      options: ['ABS', 'Polycarbonate', 'Polypropylene', 'Glass-filled nylon'],
      answer: 2,
      explain: 'PP\'s molecular structure and orientation give it exceptional flex-fatigue life. Most other plastics crack quickly.',
    },
    {
      q: 'How should melt flow relative to a living hinge during molding?',
      options: [
        'Along the hinge line from one end',
        'From both sides, meeting at the hinge',
        'Straight across the hinge in a single front',
        'It does not matter',
      ],
      answer: 2,
      explain: 'Flow across the hinge orients the chains for strength. Meeting flows create a weld line right where the hinge bends.',
    },
    {
      q: 'A snap fit is meant to be permanent. What retention face angle suits that?',
      options: ['About 90°', 'About 30°', 'About 10°', 'Same as the entry angle'],
      answer: 0,
      explain: 'A 90° retention face makes the separation-force expression go to infinity in theory, so the joint will not release without breaking.',
    },
    {
      q: 'Why do many molded snap hooks have a rectangular window through the wall under them?',
      options: [
        'To save material',
        'So a straight-pull core can form the hook\'s undercut without a side action',
        'To let the hook flex further',
        'To vent gas',
      ],
      answer: 1,
      explain: 'The underside of the hook is an undercut. A through-window lets a simple core form it and pull straight out.',
    },
  ],
});
