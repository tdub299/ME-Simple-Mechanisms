Registry.registerTopic('lesson-1', {
  n: 29,
  title: 'Harmonic (strain wave) and cycloidal drives',
  family: 'Gearing',
  readTime: 10,
  source: 'new',
  summary:
    'Both drives get very large reductions (30:1 to over 100:1) in a single compact stage, with near-zero backlash, using the same trick. A part with <strong>almost the same number of teeth</strong> as its mating ring is made to roll around inside it. Each input turn advances it by only the tooth difference. That is why they are the default joints in robot arms.',
  body: `
<h2>Harmonic (strain wave) drive</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 270" role="img" aria-label="Cycloidal disc inside a ring of pins, and a harmonic drive with elliptical wave generator inside a flexspline and circular spline">
    <g>
      <text class="lbl-b" x="70" y="20">Cycloidal drive</text>
      <circle class="part" cx="150" cy="130" r="98"/>
      <circle cx="150" cy="130" r="82" fill="var(--surface)"/>
      <circle class="part" cx="228.0" cy="130.0" r="7"/><circle class="part" cx="215.6" cy="172.2" r="7"/><circle class="part" cx="182.4" cy="201.0" r="7"/><circle class="part" cx="138.9" cy="207.2" r="7"/><circle class="part" cx="98.9" cy="188.9" r="7"/><circle class="part" cx="75.2" cy="152.0" r="7"/><circle class="part" cx="75.2" cy="108.0" r="7"/><circle class="part" cx="98.9" cy="71.1" r="7"/><circle class="part" cx="138.9" cy="52.8" r="7"/><circle class="part" cx="182.4" cy="59.0" r="7"/><circle class="part" cx="215.6" cy="87.8" r="7"/>
      <path class="acc-fill" d="M221.0,130.0 L222.0,125.9 L223.3,123.7 L224.4,122.2 L225.4,120.5 L226.3,118.4 L226.9,115.8 L227.2,112.9 L227.0,109.8 L226.3,106.7 L225.0,103.7 L223.4,101.1 L221.4,98.9 L219.4,97.2 L217.4,96.1 L215.6,95.3 L213.8,94.6 L211.5,93.7 L208.3,90.9 L206.7,87.0 L206.5,84.5 L206.4,82.6 L206.2,80.6 L205.7,78.4 L204.8,76.0 L203.3,73.4 L201.3,71.0 L198.9,68.9 L196.1,67.2 L193.2,66.1 L190.4,65.5 L187.7,65.4 L185.5,65.6 L183.5,66.0 L181.7,66.5 L179.3,67.1 L175.0,66.8 L171.4,64.5 L169.8,62.6 L168.6,61.1 L167.3,59.7 L165.6,58.2 L163.4,56.7 L160.7,55.6 L157.7,54.8 L154.5,54.5 L151.3,54.8 L148.3,55.6 L145.6,56.7 L143.4,58.2 L141.7,59.7 L140.4,61.1 L139.2,62.6 L137.6,64.5 L134.0,66.8 L129.7,67.1 L127.3,66.5 L125.5,66.0 L123.5,65.6 L121.3,65.4 L118.6,65.5 L115.8,66.1 L112.9,67.2 L110.1,68.9 L107.7,71.0 L105.7,73.4 L104.2,76.0 L103.3,78.4 L102.8,80.6 L102.6,82.6 L102.5,84.5 L102.3,87.0 L100.7,90.9 L97.5,93.7 L95.2,94.6 L93.4,95.3 L91.6,96.1 L89.6,97.2 L87.6,98.9 L85.6,101.1 L84.0,103.7 L82.7,106.7 L82.0,109.8 L81.8,112.9 L82.1,115.8 L82.7,118.4 L83.6,120.5 L84.6,122.2 L85.7,123.7 L87.0,125.9 L88.0,130.0 L87.0,134.1 L85.7,136.3 L84.6,137.8 L83.6,139.5 L82.7,141.6 L82.1,144.2 L81.8,147.1 L82.0,150.2 L82.7,153.3 L84.0,156.3 L85.6,158.9 L87.6,161.1 L89.6,162.8 L91.6,163.9 L93.4,164.7 L95.2,165.4 L97.5,166.3 L100.7,169.1 L102.3,173.0 L102.5,175.5 L102.6,177.4 L102.8,179.4 L103.3,181.6 L104.2,184.0 L105.7,186.6 L107.7,189.0 L110.1,191.1 L112.9,192.8 L115.8,193.9 L118.6,194.5 L121.3,194.6 L123.5,194.4 L125.5,194.0 L127.3,193.5 L129.7,192.9 L134.0,193.2 L137.6,195.5 L139.2,197.4 L140.4,198.9 L141.7,200.3 L143.4,201.8 L145.6,203.3 L148.3,204.4 L151.3,205.2 L154.5,205.5 L157.7,205.2 L160.7,204.4 L163.4,203.3 L165.6,201.8 L167.3,200.3 L168.6,198.9 L169.8,197.4 L171.4,195.5 L175.0,193.2 L179.3,192.9 L181.7,193.5 L183.5,194.0 L185.5,194.4 L187.7,194.6 L190.4,194.5 L193.2,193.9 L196.1,192.8 L198.9,191.1 L201.3,189.0 L203.3,186.6 L204.8,184.0 L205.7,181.6 L206.2,179.4 L206.4,177.4 L206.5,175.5 L206.7,173.0 L208.3,169.1 L211.5,166.3 L213.8,165.4 L215.6,164.7 L217.4,163.9 L219.4,162.8 L221.4,161.1 L223.4,158.9 L225.0,156.3 L226.3,153.3 L227.0,150.2 L227.2,147.1 L226.9,144.2 L226.3,141.6 L225.4,139.5 L224.4,137.8 L223.3,136.3 L222.0,134.1 L221.0,130.0 Z"/>
      <circle class="thin" cx="154.5" cy="130" r="22"/>
      <circle class="ln" cx="154.5" cy="130" r="16" fill="var(--surface)"/>
      <circle class="solid" cx="150" cy="130" r="5"/>
      <circle class="thin" cx="122" cy="98" r="10"/><circle class="thin" cx="186" cy="98" r="10"/><circle class="thin" cx="122" cy="162" r="10"/><circle class="thin" cx="186" cy="162" r="10"/>
      <text class="lbl" x="10" y="250">10-lobe disc, 11 ring pins:</text>
      <text class="lbl" x="10" y="266">eccentric input → 10:1, reversed</text>
    </g>
    <g>
      <text class="lbl-b" x="350" y="20">Harmonic drive</text>
      <circle class="part" cx="420" cy="130" r="104"/>
      <path fill="var(--surface)" stroke="var(--ink)" stroke-width="1.2" d="M512.0,130.0 L505.9,134.5 L511.5,139.6 L504.9,143.5 L510.0,149.1 L503.1,152.3 L507.5,158.4 L500.3,160.8 L504.0,167.4 L496.6,169.0 L499.7,176.0 L492.1,176.8 L494.4,184.1 L486.8,184.1 L488.4,191.6 L480.8,190.8 L481.6,198.4 L474.1,196.8 L474.1,204.4 L466.8,202.1 L466.0,209.7 L459.0,206.6 L457.4,214.0 L450.8,210.3 L448.4,217.5 L442.3,213.1 L439.1,220.0 L433.5,214.9 L429.6,221.5 L424.5,215.9 L420.0,222.0 L415.5,215.9 L410.4,221.5 L406.5,214.9 L400.9,220.0 L397.7,213.1 L391.6,217.5 L389.2,210.3 L382.6,214.0 L381.0,206.6 L374.0,209.7 L373.2,202.1 L365.9,204.4 L365.9,196.8 L358.4,198.4 L359.2,190.8 L351.6,191.6 L353.2,184.1 L345.6,184.1 L347.9,176.8 L340.3,176.0 L343.4,169.0 L336.0,167.4 L339.7,160.8 L332.5,158.4 L336.9,152.3 L330.0,149.1 L335.1,143.5 L328.5,139.6 L334.1,134.5 L328.0,130.0 L334.1,125.5 L328.5,120.4 L335.1,116.5 L330.0,110.9 L336.9,107.7 L332.5,101.6 L339.7,99.2 L336.0,92.6 L343.4,91.0 L340.3,84.0 L347.9,83.2 L345.6,75.9 L353.2,75.9 L351.6,68.4 L359.2,69.2 L358.4,61.6 L365.9,63.2 L365.9,55.6 L373.2,57.9 L374.0,50.3 L381.0,53.4 L382.6,46.0 L389.2,49.7 L391.6,42.5 L397.7,46.9 L400.9,40.0 L406.5,45.1 L410.4,38.5 L415.5,44.1 L420.0,38.0 L424.5,44.1 L429.6,38.5 L433.5,45.1 L439.1,40.0 L442.3,46.9 L448.4,42.5 L450.8,49.7 L457.4,46.0 L459.0,53.4 L466.0,50.3 L466.8,57.9 L474.1,55.6 L474.1,63.2 L481.6,61.6 L480.8,69.2 L488.4,68.4 L486.8,75.9 L494.4,75.9 L492.1,83.2 L499.7,84.0 L496.6,91.0 L504.0,92.6 L500.3,99.2 L507.5,101.6 L503.1,107.7 L510.0,110.9 L504.9,116.5 L511.5,120.4 L505.9,125.5 Z"/>
      <ellipse class="acc-fill" cx="420" cy="130" rx="87" ry="72"/>
      <ellipse cx="420" cy="130" rx="80" ry="65" fill="var(--surface)" stroke="var(--accent)" stroke-width="1"/>
      <ellipse class="part" cx="420" cy="130" rx="72" ry="57"/>
      <circle class="solid" cx="420" cy="130" r="8"/>
      <path class="hot" d="M326,116 L326,144 M514,116 L514,144" stroke-width="5"/>
      <text class="lbl-acc" x="492" y="28">flexspline</text>
      <text class="lbl" x="374" y="112">wave generator</text>
      <text class="lbl" x="376" y="160">(elliptical cam)</text>
      <text class="lbl" x="340" y="250">circular spline (rigid,</text>
      <text class="lbl" x="340" y="266">2 more teeth)</text>
      <text class="lbl-hot" x="486" y="236">mesh zones</text>
    </g>
  </svg>
  <figcaption>Left: the eccentric input makes the lobed disc roll around inside the ring of pins; output pins (thin circles) pass through oversized holes in the disc. Right: the elliptical wave generator pushes the thin flexspline into mesh with the rigid circular spline at two zones on its long axis.</figcaption>
</figure>
<ol>
  <li>A <strong>wave generator</strong> (an elliptical cam with a thin, flexible ball bearing on it) is the input.</li>
  <li>It sits inside the <strong>flexspline</strong>, a thin-walled steel cup with external teeth. The ellipse deforms the flexspline so its teeth mesh with the <strong>circular spline</strong> (a rigid ring with internal teeth) at two zones, at the ends of the long axis.</li>
  <li>The circular spline has two more teeth than the flexspline. As the wave generator turns once, the mesh zones travel all the way round, and the flexspline ends up shifted by two teeth relative to the ring.</li>
</ol>
<p>With the circular spline fixed and the flexspline as output:</p>
<div class="formula">ratio = <span class="frac"><span>N<sub>flexspline</sub></span><span>N<sub>circular</sub> − N<sub>flexspline</sub></span></span> (output reversed)</div>
<p>200 and 202 teeth give 100:1 in one stage. Around 30% of the teeth are in mesh at once, so torque capacity is high for the size and backlash is near zero. The costs: the flexspline is a fatigue-critical thin shell; torsional stiffness is low at small loads (wind-up), which can matter for position accuracy; efficiency falls at low temperature and high ratio; and severe overload can make teeth jump ("ratcheting").</p>

<figure class="diagram">
  <svg viewBox="0 0 560 250" role="img" aria-label="Side section of a harmonic drive: input shaft and elliptical wave generator inside a thin flexspline cup whose teeth mesh with a fixed circular spline; cup bottom drives the output shaft">
    <line class="dash" x1="10" y1="125" x2="550" y2="125"/>
    <line class="ln" x1="20" y1="125" x2="124" y2="125" stroke-width="12"/>
    <rect class="part" x="120" y="72" width="40" height="106" rx="4"/>
    <circle class="thin" cx="140" cy="66" r="5"/><circle class="thin" cx="140" cy="184" r="5"/>
    <path class="acc" stroke-width="4" d="M108,58 L318,58 Q330,58 330,70 L330,104"/>
    <path class="acc" stroke-width="4" d="M108,192 L318,192 Q330,192 330,180 L330,146"/>
    <path class="acc" d="M108,50 L114,56 L120,50 L126,56 L132,50 L138,56 L144,50 L150,56 L156,50 L162,56 L168,50"/>
    <path class="acc" d="M108,206 L114,200 L120,206 L126,200 L132,206 L138,200 L144,206 L150,200 L156,206 L162,200 L168,206"/>
    <rect class="hatch" x="100" y="30" width="76" height="18"/>
    <rect class="hatch" x="100" y="202" width="76" height="18"/>
    <path class="thin" d="M100,54 L106,48 L112,54 L118,48 L124,54 L130,48 L136,54 L142,48 L148,54 L154,48 L160,54 L166,48 L172,54"/>
    <path class="thin" d="M100,196 L106,202 L112,196 L118,202 L124,196 L130,202 L136,196 L142,202 L148,196 L154,202 L160,196 L166,202 L172,196"/>
    <rect class="part" x="326" y="100" width="26" height="50"/>
    <rect class="part" x="352" y="117" width="168" height="16"/>
    <text class="lbl" x="20" y="110">input</text>
    <text class="lbl" x="20" y="232">wave generator: elliptical cam + thin bearing</text>
    <line class="thin" x1="120" y1="222" x2="136" y2="180"/>
    <text class="lbl-acc" x="176" y="82">flexspline: thin steel</text>
    <text class="lbl-acc" x="176" y="98">cup, teeth at open end</text>
    <text class="lbl" x="186" y="26">circular spline (fixed, 2 more teeth)</text>
    <text class="lbl-hot" x="186" y="168">mesh at the ends of the</text>
    <text class="lbl-hot" x="186" y="184">ellipse's long axis</text>
    <text class="lbl" x="380" y="104">cup bottom → output</text>
  </svg>
  <figcaption>Side section through the long axis of the ellipse. The input spins the elliptical wave generator inside the flexible cup, pushing its teeth into the rigid ring at top and bottom. The cup's closed end is bolted to the output, which turns slowly backward, two teeth per input turn.</figcaption>
</figure>

<h2>Cycloidal drive</h2>
<ol>
  <li>An <strong>eccentric</strong> on the input shaft drives a <strong>cycloidal disc</strong> through a bearing.</li>
  <li>The disc has lobes shaped as an epitrochoid and one fewer lobe than there are <strong>ring pins</strong> around it.</li>
  <li>As the eccentric turns, the disc rolls around inside the pins, wobbling. Each input revolution it rotates backwards by one lobe.</li>
  <li>Output pins (often with rollers) pass through holes in the disc, oversized by twice the eccentricity, and pick up just the disc's slow rotation, not its wobble.</li>
</ol>
<div class="formula">ratio = <span class="frac"><span>N<sub>lobes</sub></span><span>N<sub>pins</sub> − N<sub>lobes</sub></span></span> = N<sub>lobes</sub> (for a difference of one), reversed</div>
<ul>
  <li>Many lobes share the load in rolling contact, giving very high shock-load capacity, good efficiency and long life.</li>
  <li>Two discs 180° out of phase are normally used to balance the eccentric forces and vibration and to share the load.</li>
  <li>The disc profile must be ground precisely; profile modifications set backlash and how smoothly it runs.</li>
  <li><strong>RV reducers</strong>, common in industrial robot joints, put a small planetary stage in front of a cycloidal stage for higher ratios and stiffness.</li>
</ul>

<h2>Comparing them</h2>
<table>
  <tr><th></th><th>Harmonic</th><th>Cycloidal / RV</th></tr>
  <tr><td>Typical single-stage ratio</td><td>30:1 – 160:1</td><td>10:1 – 100:1 (RV over 100:1)</td></tr>
  <tr><td>Backlash</td><td>Near zero</td><td>Very low (arc-minutes)</td></tr>
  <tr><td>Torsional stiffness</td><td>Lower, nonlinear</td><td>Higher</td></tr>
  <tr><td>Shock load</td><td>Moderate</td><td>Excellent</td></tr>
  <tr><td>Weight and size</td><td>Very light, flat, hollow shaft possible</td><td>Heavier for the same torque</td></tr>
  <tr><td>Typical use</td><td>Collaborative robot joints, space mechanisms, camera gimbals</td><td>Industrial robot base and shoulder joints, positioners</td></tr>
</table>

<h2>Materials and manufacturing</h2>
<ul>
  <li>Flexspline: high-strength alloy steel, thin-wall machined, with shot-peening or similar fatigue treatments; teeth hobbed or shaped.</li>
  <li>Circular spline: alloy steel or ductile iron.</li>
  <li>Cycloidal discs and pins: hardened bearing steel, profile ground; pins often as needle rollers.</li>
  <li>Plastic versions (3D-printed or molded cycloidal and strain-wave drives) are popular for hobby robots, with lower torque and life.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Flexspline fatigue cracks, often at the tooth root or the cup-to-diaphragm transition.</li>
  <li>Wave generator bearing failure from overload or poor lubrication.</li>
  <li>Ratcheting (tooth skip) on harmonic drives under shock.</li>
  <li>Cycloidal disc and pin wear increasing backlash; eccentric bearing failure.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Watch a slow video of a harmonic drive: the flexspline visibly flexes as the ellipse rotates.</li>
    <li>Look at a printed cycloidal drive model: turn the input many times to see the disc wobble and the output creep the other way.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'A harmonic drive has a 200-tooth flexspline and a 202-tooth circular spline (fixed). What is the ratio?',
      options: ['2:1', '50:1', '100:1', '202:1'],
      answer: 2,
      explain: 'Ratio = N_fs / (N_cs − N_fs) = 200 / 2 = 100:1, with the output reversed.',
    },
    {
      q: 'Why does a harmonic drive\'s circular spline typically have exactly two more teeth than the flexspline?',
      options: [
        'To reduce noise',
        'The elliptical wave generator creates two mesh zones, so the flexspline shifts by two teeth per input turn',
        'For manufacturing convenience',
        'To allow lubrication',
      ],
      answer: 1,
      explain: 'An ellipse has two lobes, giving two mesh zones; the tooth difference matches the number of lobes.',
    },
    {
      q: 'A cycloidal drive has 11 ring pins and a 10-lobe disc. What is the ratio?',
      options: ['1.1:1', '10:1, reversed', '11:1, same direction', '110:1'],
      answer: 1,
      explain: 'Ratio = lobes / (pins − lobes) = 10 / 1 = 10:1, with the disc turning opposite to the input.',
    },
    {
      q: 'Why do cycloidal drives usually have two discs 180° out of phase?',
      options: [
        'To double the ratio',
        'To balance eccentric forces and vibration and share the load',
        'To allow reverse rotation',
        'To eliminate the need for output pins',
      ],
      answer: 1,
      explain: 'A single eccentric disc is unbalanced. A second disc opposite cancels the radial forces and shares torque.',
    },
    {
      q: 'What is a key limitation of harmonic drives compared with cycloidal/RV drives?',
      options: [
        'Large backlash',
        'Lower, nonlinear torsional stiffness and a fatigue-critical thin flexspline',
        'Very heavy for their torque',
        'Cannot achieve ratios above 10:1',
      ],
      answer: 1,
      explain: 'The flexible element that makes it work also makes it more compliant and fatigue-limited under shock.',
    },
  ],
});
