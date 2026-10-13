Registry.registerTopic('lesson-1', {
  n: 11,
  title: 'Auto-injector (epinephrine-style)',
  family: 'Medical device',
  readTime: 10,
  source: 'new',
  summary:
    'An auto-injector stores all the energy for an injection in a pre-compressed spring. A latch releases it in a fixed sequence: insert the needle, push the dose, then cover the needle for good. The engineering challenge is to make that sequence certain, every time, after years on a shelf, in the hands of someone panicking.',
  body: `
<h2>Architecture</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 260" role="img" aria-label="Schematic cross-section of a spring-driven auto-injector">
    <rect class="ln" x="40" y="60" width="480" height="92" rx="14"/>
    <path class="acc-fill" d="M18,70 L96,70 L96,78 L30,78 L30,134 L96,134 L96,142 L18,142 Z"/>
    <line class="ln" x1="46" y1="106" x2="112" y2="106"/>
    <rect class="fl" x="112" y="88" width="180" height="36" rx="3"/>
    <rect class="ln" x="112" y="88" width="180" height="36" rx="3"/>
    <rect class="solid" x="272" y="88" width="18" height="36"/>
    <rect class="part" x="290" y="99" width="150" height="14"/>
    <path class="spring" d="M300,106 l6,-22 l12,44 l12,-44 l12,44 l12,-44 l12,44 l12,-44 l12,44 l12,-44 l12,44 l12,-44 l6,22"/>
    <path class="hot" d="M440,92 L470,98 L470,114 L440,120"/>
    <path class="ln" d="M462,84 L478,96 M462,128 L478,116"/>
    <rect class="part" x="500" y="78" width="30" height="56" rx="4"/>
    <text class="lbl" x="8" y="56">Needle shield</text>
    <text class="lbl" x="8" y="172">(also the trigger in</text>
    <text class="lbl" x="8" y="188">shield-activated designs)</text>
    <text class="lbl" x="120" y="80">Prefilled syringe</text>
    <text class="lbl" x="230" y="146">Stopper</text>
    <text class="lbl-b" x="320" y="56">Drive spring (pre-compressed)</text>
    <text class="lbl-hot" x="356" y="172">Release latch</text>
    <text class="lbl" x="486" y="172">Cap /</text>
    <text class="lbl" x="486" y="188">button</text>
    <text class="lbl-b" x="8" y="222">Sequence:</text>
    <text class="lbl" x="80" y="222">1 remove safety cap → 2 press against thigh (latch released) →</text>
    <text class="lbl" x="80" y="240">3 needle inserts, then dose delivers → 4 lift off: shield extends and locks</text>
  </svg>
  <figcaption>A typical single-spring layout. The drive spring is held compressed by a latch until the shield or button releases it.</figcaption>
</figure>

<h2>The sequence and how it is enforced</h2>
<ol>
  <li><strong>Safety cap off.</strong> Removing it usually also pulls off the rigid needle shield that keeps the needle sterile.</li>
  <li><strong>Trigger.</strong> In shield-activated designs, pressing the device against the thigh pushes the needle shield back. That frees flexible latch arms (a collet) holding the plunger rod, so the spring is released only when the device is in contact with the skin. Button-activated designs add a separate interlock.</li>
  <li><strong>Insertion.</strong> The spring pushes the plunger rod, which pushes the stopper. The drug is incompressible and the fine needle resists flow strongly, so it is easier for the whole syringe to slide forward in its carrier than for fluid to leave. The syringe travels until it hits a stop, setting needle depth. This "hydraulic lock" is why many single-spring designs insert before they inject.</li>
  <li><strong>Delivery.</strong> With the syringe stopped, the stopper moves and expels the dose. A click or a visible indicator marks the end, and users are told to hold for a few seconds so the last of the dose is delivered.</li>
  <li><strong>Needle safety.</strong> As the device is lifted away, a spring pushes the shield forward over the needle, and a one-way latch locks it there. The device cannot be reused and the needle cannot stick anyone.</li>
</ol>

<h2>Sizing the spring</h2>
<p>The spring must beat, at every point in its stroke:</p>
<ul>
  <li>the stopper's <strong>break-loose</strong> force (static friction after long storage) and <strong>glide</strong> force;</li>
  <li>the <strong>hydraulic</strong> force of pushing liquid through the needle;</li>
  <li>friction in the carrier and latch.</li>
</ul>
<p>Flow through the needle is laminar, so Hagen–Poiseuille applies:</p>
<div class="formula">ΔP = <span class="frac"><span>128 μ L Q</span><span>π d<sup>4</sup></span></span></div>
<p>The needle's inner diameter enters to the fourth power. Going one gauge thinner for patient comfort can raise the required force sharply, and viscous biologic drugs make it worse. But a stronger spring hits the syringe harder at release, raising the risk of breaking a glass syringe flange. A spring also loses force as it extends, so it must be sized for the end of its stroke, with margin for stress relaxation over a shelf life of a year or more.</p>

<h2>Other design drivers</h2>
<ul>
  <li><strong>Reliability:</strong> it is an emergency device, so the failure-to-fire rate must be extremely low. Every latch and interlock is analyzed in a design FMEA and verified with large test populations.</li>
  <li><strong>Human factors:</strong> clear orientation (which end touches the leg), a cap that cannot be mistaken for the trigger, and a firm activation force that a child or a weak adult can still apply. Usability testing is a regulatory requirement.</li>
  <li><strong>Environment:</strong> drop testing, temperature cycling and vibration, because these devices live in bags and glove compartments.</li>
  <li><strong>Standards:</strong> ISO 11608-1 covers needle-based injection systems, with further parts for automated functions and needle safety; the drug-device combination is regulated as a single product.</li>
</ul>

<h2>Materials and manufacturing</h2>
<table>
  <tr><th>Part</th><th>Typical material</th></tr>
  <tr><td>Housing, shield, carrier, latches</td><td>PC, PC/ABS, POM (latches and sliding parts)</td></tr>
  <tr><td>Syringe</td><td>Borosilicate glass with staked needle, or cyclic olefin polymer</td></tr>
  <tr><td>Stopper</td><td>Bromobutyl or chlorobutyl rubber, often fluoropolymer coated</td></tr>
  <tr><td>Drive spring</td><td>Stainless or music-wire compression spring</td></tr>
</table>
<p>Parts are molded in validated tools and assembled under cleanroom-grade conditions, with automated force and position checks on every latch.</p>

<h2>Failure modes</h2>
<ul>
  <li>Wet injection: fluid leaves before the needle is fully inserted.</li>
  <li>Incomplete dose: spring too weak at end of stroke, or the user lifts off early.</li>
  <li>Premature firing from a drop, if latches are marginal.</li>
  <li>Glass syringe breakage from release impact.</li>
  <li>Accidental injection into the thumb when the device is held backwards: a human-factors failure.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Trainer devices (no needle, no drug) are widely available: listen for the distinct click of the latch and feel the shield lock afterwards.</li>
    <li>Notice how the cap, label and shape all point you to hold it the right way round.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'In a shield-activated auto-injector, what releases the drive spring?',
      options: [
        'Removing the safety cap',
        'Pressing the device against the skin, which pushes the needle shield back and frees the latch',
        'A timer',
        'Squeezing the housing',
      ],
      answer: 1,
      explain: 'Shield travel unlocks the latch arms holding the plunger rod, so the device can only fire when it is against the injection site.',
    },
    {
      q: 'In many single-spring designs, why does the needle insert before any drug is expelled?',
      options: [
        'A second spring inserts the needle first',
        'Pushing incompressible fluid through the fine needle resists more than sliding the whole syringe forward, so the syringe moves to its stop first',
        'The stopper is glued until the needle is in',
        'Gravity holds the drug back',
      ],
      answer: 1,
      explain: 'This "hydraulic lock" means the easiest path is moving the syringe forward. Only once it hits the stop does the stopper move.',
    },
    {
      q: 'Hydraulic resistance through a needle goes as 1/d⁴. If the inner diameter falls by 20%, the pressure needed at the same flow rises by about:',
      options: ['1.25×', '1.6×', '2.4×', '4×'],
      answer: 2,
      explain: '1 / 0.8⁴ ≈ 2.44. Small gauge changes have a big effect on required spring force.',
    },
    {
      q: 'Why must the drive spring be sized for the end of its stroke and not the start?',
      options: [
        'Because spring force falls as it extends, and stress relaxation in storage lowers it further',
        'Because the stopper gets lighter',
        'Because the needle gets shorter',
        'Because the latch adds force at the end',
      ],
      answer: 0,
      explain: 'A compression spring\'s force drops linearly as it extends. It must still beat glide and hydraulic forces at full stroke after years of storage.',
    },
    {
      q: 'What prevents needlestick injury after use?',
      options: [
        'The needle retracts by gravity',
        'A spring pushes the shield forward over the needle and a one-way latch locks it',
        'The needle bends over',
        'The user replaces the cap',
      ],
      answer: 1,
      explain: 'The shield extends as the device is lifted away and locks, making the device single-use and the needle inaccessible.',
    },
  ],
});
