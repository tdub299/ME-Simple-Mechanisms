Registry.registerTopic('lesson-1', {
  n: 24,
  title: 'Gas springs',
  family: 'Energy storage',
  readTime: 8,
  source: 'new',
  summary:
    'A gas spring is a sealed tube of high-pressure nitrogen with a piston and rod. The pressure is the same on both sides of the piston, so the only net force is <strong>pressure × rod cross-section</strong>. A small amount of oil and an orifice in the piston make it a damper too.',
  body: `
<h2>How it works</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 220" role="img" aria-label="Gas spring cross-section with nitrogen, piston orifice, oil, seal and rod">
    <rect class="hot-fill" x="62" y="92" width="268" height="56" opacity="0.6"/>
    <rect class="hot-fill" x="244" y="92" width="86" height="20" opacity="0.6"/>
    <rect class="hot-fill" x="244" y="128" width="86" height="20" opacity="0.6"/>
    <rect class="fl" x="330" y="128" width="48" height="20"/>
    <rect class="hot-fill" x="330" y="92" width="48" height="36" opacity="0.6"/>
    <path class="ln" d="M60,90 L400,90 M60,150 L400,150 M60,90 L60,150"/>
    <rect class="part" x="226" y="92" width="18" height="56"/>
    <line class="fl-line" x1="232" y1="100" x2="240" y2="100"/>
    <rect class="part" x="244" y="113" width="276" height="14"/>
    <rect class="acc-fill" x="378" y="92" width="22" height="20"/>
    <rect class="acc-fill" x="378" y="128" width="22" height="20"/>
    <rect class="part" x="40" y="108" width="20" height="24" rx="4"/>
    <rect class="part" x="520" y="108" width="20" height="24" rx="4"/>
    <path class="hot arr" d="M210,120 L190,120"/>
    <path class="hot arr" d="M262,104 L282,104"/>
    <path class="acc arr-acc" d="M440,170 L520,170"/>
    <text class="lbl-acc" x="430" y="190">F = P × A(rod)</text>
    <text class="lbl-hot" x="70" y="143">nitrogen at high pressure</text>
    <text class="lbl" x="196" y="76">piston with orifice</text>
    <text class="lbl-fl" x="296" y="174">oil</text>
    <line class="thin" x1="310" y1="166" x2="346" y2="140"/>
    <text class="lbl-acc" x="360" y="76">seal + guide</text>
    <text class="lbl" x="420" y="104">rod</text>
    <text class="lbl-sm" x="90" y="208">Same pressure pushes on both piston faces; only the rod's cross-section is unbalanced.</text>
  </svg>
  <figcaption>The piston has a small orifice (or groove), so gas pressure is equal on both sides. The pressure acting on the rod's cross-sectional area pushes the rod out.</figcaption>
</figure>
<div class="formula">F ≈ P · A<sub>rod</sub> − friction</div>
<ul>
  <li><strong>Why rod area:</strong> pressure on the piston's two faces cancels except for the area the rod takes up on one side. A 10 mm rod at 150 bar gives about 1,180 N.</li>
  <li><strong>Progression:</strong> pushing the rod in reduces the gas volume by the rod volume that enters, so pressure and force rise along the stroke. The ratio of force at full compression to force at full extension (often 1.2–1.6) is set by tube volume relative to rod volume.</li>
  <li><strong>Damping:</strong> gas must squeeze through the piston orifice, which limits extension speed. Near the end of the stroke the piston enters the oil, which flows through the orifice much more slowly. That gives a soft hydraulic stop.</li>
  <li><strong>Orientation:</strong> they are installed <strong>rod down</strong> where possible, so the oil sits at the seal, keeping it lubricated and providing end damping.</li>
</ul>

<figure class="diagram">
  <svg viewBox="0 0 540 230" role="img" aria-label="Gas spring force versus stroke, showing progression and friction hysteresis">
    <line class="ln" x1="60" y1="190" x2="480" y2="190"/>
    <line class="ln" x1="60" y1="190" x2="60" y2="24"/>
    <path class="hot" d="M80,110 L440,64"/>
    <path class="acc" d="M80,134 L440,90"/>
    <path class="dash" d="M440,64 L440,90 M80,110 L80,134"/>
    <text class="lbl-hot" x="250" y="72">compressing (rod in)</text>
    <text class="lbl-acc" x="250" y="128">extending (rod out)</text>
    <text class="lbl" x="448" y="82">friction</text>
    <text class="lbl" x="448" y="98">band</text>
    <text class="lbl-sm" x="70" y="208">extended</text>
    <text class="lbl-sm" x="410" y="208">compressed</text>
    <text class="lbl-sm" x="230" y="222">stroke →</text>
    <text class="lbl-sm" x="8" y="30">force</text>
  </svg>
  <figcaption>Force rises with stroke as the gas is compressed. Seal friction makes compression force higher than extension force; the gap is the hysteresis band.</figcaption>
</figure>

<h2>Temperature</h2>
<p>The charge is a fixed mass of gas, so pressure is proportional to absolute temperature (P ∝ T). Force changes about 3–4% per 10 °C. A tailgate that opens nicely at 20 °C has about 14% less lift at −20 °C (253 K / 293 K ≈ 0.86), which is why car hatches sag in winter.</p>

<h2>Variants</h2>
<table>
  <tr><th>Type</th><th>Difference</th><th>Typical use</th></tr>
  <tr><td>Standard (compression)</td><td>Pushes the rod out</td><td>Car tailgates, hoods, lids, cabinets</td></tr>
  <tr><td>Traction (tension)</td><td>Pulls the rod in</td><td>Doors and panels that must be held shut</td></tr>
  <tr><td>Locking</td><td>A valve in the piston, opened by a pin through a hollow rod, can lock it at any position</td><td>Office chair height adjustment, adjustable beds, recliners</td></tr>
  <tr><td>Adjustable / bleedable</td><td>Force set by venting a little gas through a valve</td><td>Prototypes, custom equipment</td></tr>
  <tr><td>Stainless / food-grade</td><td>Corrosion-resistant materials and lubricants</td><td>Medical, marine, food equipment</td></tr>
</table>

<h2>Materials and manufacturing</h2>
<ul>
  <li>Tube: precision drawn or welded steel tube, painted or coated; stainless in harsh environments.</li>
  <li>Rod: hardened steel, hard-chrome plated or nitrided and polished. Its surface finish is critical, because the seal slides on it for the whole life.</li>
  <li>Seals: lip seals in NBR or polyurethane, with a guide bushing.</li>
  <li>Filling: assembled, then charged with nitrogen through the seal or a valve to the target force, and 100% force-tested.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Gas slowly leaking past the seal, which is the normal end of life: the hatch no longer stays up.</li>
  <li>Scratched or corroded rod damaging the seal and accelerating leakage.</li>
  <li>Side loads causing seal wear (they are not designed to carry bending).</li>
  <li>Hazard: they stay pressurized. Never cut, puncture or heat them; dispose of them according to the maker's instructions.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Look at how car tailgate struts are mounted: usually rod-down when the tailgate is closed.</li>
    <li>Pull an office chair lever while sitting: you are opening the valve in a locking gas spring.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'A gas spring has a 10 mm diameter rod and 150 bar (15 N/mm²) internal pressure. Ignoring friction, what is the output force?',
      options: ['About 120 N', 'About 1,180 N', 'About 4,700 N', 'About 11,800 N'],
      answer: 1,
      explain: 'Rod area = π × 5² ≈ 78.5 mm². 15 N/mm² × 78.5 mm² ≈ 1,180 N. Piston area does not matter, because pressure cancels across it.',
    },
    {
      q: 'Why does a gas spring\'s force rise as it is compressed?',
      options: [
        'Friction increases',
        'The entering rod reduces gas volume, so pressure rises',
        'The oil compresses',
        'The orifice closes',
      ],
      answer: 1,
      explain: 'The rod takes up volume as it enters. Less gas volume means higher pressure and more force.',
    },
    {
      q: 'Why are gas springs usually mounted rod-down?',
      options: [
        'To look neater',
        'So the oil sits at the seal, lubricating it and giving end-of-stroke damping',
        'So the gas collects at the piston',
        'To lower the force',
      ],
      answer: 1,
      explain: 'Oil at the seal end keeps the seal lubricated (so less leakage) and damps the last part of extension.',
    },
    {
      q: 'Approximately how much does gas spring force drop between 20 °C and −20 °C?',
      options: ['About 2%', 'About 14%', 'About 40%', 'It does not change'],
      answer: 1,
      explain: 'P ∝ absolute T: 253 K / 293 K ≈ 0.86, so about 14% less force.',
    },
    {
      q: 'How does an office chair\'s height adjustment lock?',
      options: [
        'A friction clamp on the rod',
        'A valve in the piston (opened by a pin through the hollow rod) isolates the two chambers',
        'A ratchet inside the tube',
        'Releasing all the gas',
      ],
      answer: 1,
      explain: 'With the valve closed, fluid cannot move between chambers, so the rod is locked. The lever pushes the pin to open it.',
    },
  ],
});
