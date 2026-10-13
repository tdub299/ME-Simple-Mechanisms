Registry.registerTopic('lesson-1', {
  n: 30,
  title: 'Compliant mechanisms and flexure stages',
  family: 'Precision',
  readTime: 10,
  source: 'new',
  summary:
    'A compliant mechanism gets its motion from parts that <strong>bend</strong> rather than parts that slide or roll. With no joints there is no friction, backlash, wear or lubrication, so motion is smooth and repeatable down to nanometers. The price is limited range, a restoring stiffness you must drive against, and stresses that set fatigue life.',
  body: `
<h2>The building blocks</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 260" role="img" aria-label="Parallelogram leaf flexure, undeflected and deflected, and a circular notch hinge">
    <g>
      <text class="lbl-b" x="40" y="22">Parallelogram (leaf) flexure</text>
      <rect class="hatch" x="40" y="210" width="220" height="14"/>
      <rect class="part" x="70" y="80" width="6" height="130"/>
      <rect class="part" x="224" y="80" width="6" height="130"/>
      <rect class="part" x="60" y="60" width="180" height="20"/>
      <path class="dash" d="M73,210 C73,160 113,136 113,86 M227,210 C227,160 267,136 267,86"/>
      <rect class="dash" x="100" y="66" width="180" height="20"/>
      <path class="acc arr-acc" d="M150,48 L190,48"/>
      <text class="lbl-acc" x="160" y="40">δ</text>
      <path class="hot arr" d="M290,60 L290,68"/>
      <text class="lbl-hot" x="296" y="68">Δ (parasitic)</text>
      <text class="lbl" x="40" y="244">L = leaf length, t = leaf thickness</text>
    </g>
    <g transform="translate(320,0)">
      <text class="lbl-b" x="10" y="22">Notch hinge</text>
      <rect class="part" x="10" y="90" width="200" height="80"/>
      <circle cx="110" cy="84" r="36" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="110" cy="176" r="36" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
      <rect fill="var(--surface)" x="60" y="40" width="100" height="48"/>
      <rect fill="var(--surface)" x="60" y="172" width="100" height="50"/>
      <path class="acc arr-acc" d="M196,64 A80,80 0 0 1 214,100"/>
      <text class="lbl" x="10" y="210">Rotation concentrates at the</text>
      <text class="lbl" x="10" y="226">thin neck: a pivot with no pin.</text>
    </g>
  </svg>
  <figcaption>Left: two parallel leaves guide the stage in near-straight-line motion δ; the stage also drops slightly by Δ. Right: two circular cutouts leave a thin neck that acts as a frictionless rotary joint over a small angle.</figcaption>
</figure>

<ul>
  <li><strong>Leaf (blade) flexures:</strong> thin strips that bend. Two parallel leaves form a <strong>parallelogram flexure</strong>, guiding a stage in near-linear motion.</li>
  <li><strong>Notch hinges:</strong> a short, thin neck (circular, elliptical or corner-filleted) that acts as a pivot over small angles.</li>
  <li><strong>Cross-spring pivots:</strong> two leaves crossing at an angle give a larger-range rotary joint whose center shifts slightly.</li>
  <li><strong>Compound (double) parallelogram:</strong> two parallelograms in series, folded back on each other, cancel the parasitic motion and double the range.</li>
</ul>

<h2>Sizing a parallelogram flexure</h2>
<p>Each leaf bends as a fixed-guided beam (both ends stay parallel). For two leaves of width b, thickness t and length L in a material of modulus E, with stage travel δ, the stiffness, peak leaf stress and parasitic drop Δ (the stage moving slightly perpendicular to its travel) are:</p>
<div class="formula">k = <span class="frac"><span>2 E b t<sup>3</sup></span><span>L<sup>3</sup></span></span></div>
<div class="formula">σ<sub>max</sub> = <span class="frac"><span>3 E t δ</span><span>L<sup>2</sup></span></span></div>
<div class="formula">Δ ≈ <span class="frac"><span>3 δ<sup>2</sup></span><span>5 L</span></span> (parasitic drop)</div>
<ul>
  <li>Stiffness falls with L³ and rises with t³, so long, thin leaves give soft, long-range stages.</li>
  <li>Maximum travel before yield is δ<sub>max</sub> = σ<sub>y</sub>L² / (3Et), so the material figure of merit for range is <strong>σ<sub>y</sub> / E</strong>. For infinite fatigue life, use the fatigue limit instead of yield, with margin.</li>
  <li>Parasitic motion grows with δ², so it is tiny for small strokes but must be compensated (compound flexures) for longer ones.</li>
  <li>Off-axis stiffness (in the other directions) is what makes a flexure a good guide. Wide leaves are very stiff sideways and in twist.</li>
</ul>

<h2>Materials (approximate σ<sub>y</sub>/E)</h2>
<table>
  <tr><th>Material</th><th>σ<sub>y</sub> / E</th><th>Notes</th></tr>
  <tr><td>Polypropylene</td><td>~2%</td><td>Living hinges (Topic 13); creep limits precision</td></tr>
  <tr><td>Silicon (single crystal)</td><td>~1% (fracture-limited)</td><td>MEMS; no fatigue or creep at room temperature</td></tr>
  <tr><td>Beryllium copper, titanium alloys</td><td>~0.7–0.8%</td><td>Excellent fatigue; titanium is light</td></tr>
  <tr><td>Aluminum 7075-T6</td><td>~0.7%</td><td>Easy to machine; lower fatigue limit</td></tr>
  <tr><td>Precipitation-hardened or spring steels</td><td>~0.5–0.7%</td><td>Stiff, strong, low cost</td></tr>
</table>

<h2>Manufacturing</h2>
<ul>
  <li><strong>Wire EDM</strong> cuts monolithic flexure stages from one block, with no assembly and no joints, which gives the best precision.</li>
  <li><strong>Photolithography and deep reactive ion etching</strong> for MEMS silicon flexures.</li>
  <li><strong>Injection molding and 3D printing</strong> for polymer compliant mechanisms (grippers, clips, consumer products).</li>
  <li>Surface finish and edge quality matter: fatigue cracks start at machining marks on the highly strained leaf surfaces.</li>
</ul>

<h2>Where you see them</h2>
<ul>
  <li><strong>Nanopositioning stages:</strong> piezo actuators push flexure-guided stages, often with flexure lever amplifiers to multiply the piezo's tiny stroke.</li>
  <li><strong>MEMS accelerometers and gyroscopes</strong> in every phone: a proof mass on silicon flexures.</li>
  <li><strong>Optics mounts</strong> and alignment stages; <strong>space mechanisms</strong> where lubrication is a problem.</li>
  <li><strong>Watchmaking:</strong> some modern oscillators replace the balance and hairspring with a silicon flexure.</li>
  <li><strong>Everyday parts:</strong> flip-top caps, bistable switches, compliant grippers, binder clips.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Fatigue cracking at the most strained surface of a leaf or notch.</li>
  <li>Overtravel causing yield, which permanently shifts the zero; hard stops prevent it.</li>
  <li>Buckling of leaves under axial compressive load.</li>
  <li>Creep and stress relaxation in polymer flexures under sustained deflection.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Look at a binder clip or a plastic buckle: find the part that bends instead of pivots.</li>
    <li>Search for images of a wire-EDM flexure stage: one block of metal with hair-thin cuts, and no screws in the moving path.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'Using k = 2Ebt³/L³, what happens to a parallelogram flexure\'s stiffness if leaf thickness doubles?',
      options: ['2× stiffer', '4× stiffer', '8× stiffer', 'Half as stiff'],
      answer: 2,
      explain: 'Stiffness scales with t³, so 2³ = 8×.',
    },
    {
      q: 'Doubling leaf length L (same t, same material) allows how much more travel before reaching the same stress?',
      options: ['2×', '4×', '8×', 'No change'],
      answer: 1,
      explain: 'σ_max = 3Etδ/L², so for the same stress δ scales with L². Doubling L allows 4× travel.',
    },
    {
      q: 'What is the parasitic motion of a simple parallelogram flexure, and how is it usually removed?',
      options: [
        'Twisting; fixed by thicker leaves',
        'A small drop of the stage, ∝ δ²; removed with a compound (double) parallelogram',
        'Backlash; removed with preload',
        'Friction; removed with lubrication',
      ],
      answer: 1,
      explain: 'Bending leaves shorten in projection, so the stage drops by about 3δ²/(5L). Folding two parallelograms in series cancels it.',
    },
    {
      q: 'Which material property best predicts how far a flexure can move before yielding?',
      options: ['Density', 'Yield strength divided by Young\'s modulus (σ_y / E)', 'Hardness', 'Thermal conductivity'],
      answer: 1,
      explain: 'The allowable strain σ_y/E sets the travel for a given geometry. That is why polypropylene, titanium and BeCu flex so well.',
    },
    {
      q: 'What is the main advantage of flexure stages for nanopositioning?',
      options: [
        'Unlimited travel',
        'No friction, backlash or wear, so motion is smooth and repeatable at very small scales',
        'They need no actuator',
        'They are stiffer in the direction of motion than bearings',
      ],
      answer: 1,
      explain: 'With no sliding or rolling contacts there is no stick-slip or play, so motion can be controlled to nanometers.',
    },
  ],
});
