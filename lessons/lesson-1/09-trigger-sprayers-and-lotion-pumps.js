Registry.registerTopic('lesson-1', {
  n: 9,
  title: 'Trigger sprayer and lotion pump',
  family: 'Fluid / consumer',
  readTime: 9,
  source: 'new',
  summary:
    'A lotion pump or trigger sprayer is a tiny positive-displacement piston pump: a piston, a return spring and <strong>two check valves</strong>, all in about eight molded parts. The inlet valve stops product going back into the bottle; the outlet valve stops air coming back in through the nozzle.',
  body: `
<h2>How a lotion pump works</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 370" role="img" aria-label="Cross-section of a lotion pump: actuator, stem, piston, spring, chamber, inlet ball valve and dip tube">
    <path class="ln" d="M90,96 L90,360 M330,96 L330,360"/>
    <rect class="fl" x="92" y="292" width="236" height="68" opacity="0.6"/>
    <rect class="part" x="150" y="18" width="120" height="42" rx="6"/>
    <rect class="part" x="270" y="28" width="96" height="18"/>
    <rect class="part" x="200" y="60" width="20" height="96"/>
    <rect class="hatch" x="84" y="78" width="114" height="18"/>
    <rect class="hatch" x="222" y="78" width="114" height="18"/>
    <path class="ln" d="M170,96 L170,256 L202,256 L202,290 M250,96 L250,256 L218,256 L218,290"/>
    <rect class="fl" x="172" y="168" width="76" height="88"/>
    <rect class="fl" x="204" y="264" width="12" height="26"/>
    <rect class="part" x="204" y="290" width="12" height="70"/>
    <rect class="fl" x="207" y="290" width="6" height="70"/>
    <rect class="part" x="172" y="152" width="76" height="16" rx="2"/>
    <rect class="acc-fill" x="203" y="140" width="14" height="10"/>
    <path class="fl-line" d="M210,140 L210,37 L362,37"/>
    <path class="spring" d="M210,168 l-24,6 l48,10 l-48,10 l48,10 l-48,10 l48,10 l-48,10 l48,10 l-24,6"/>
    <circle class="acc-fill" cx="210" cy="252" r="9"/>
    <path class="ln arr" d="M136,10 L136,50"/>
    <text class="lbl-b" x="92" y="34">press</text>
    <path class="fl-line arr-fl" d="M372,37 L410,37"/>
    <text class="lbl" x="350" y="64">Spout</text>
    <text class="lbl" x="350" y="90">Closure (screws onto bottle)</text>
    <text class="lbl-acc" x="350" y="146">Outlet valve (in piston/stem)</text>
    <line class="thin" x1="346" y1="142" x2="220" y2="145"/>
    <text class="lbl" x="350" y="168">Piston with lip seal</text>
    <line class="thin" x1="346" y1="164" x2="250" y2="160"/>
    <text class="lbl" x="350" y="210">Return spring (in product)</text>
    <line class="thin" x1="346" y1="206" x2="236" y2="206"/>
    <text class="lbl-fl" x="350" y="232">Pump chamber</text>
    <text class="lbl-acc" x="350" y="258">Inlet ball valve</text>
    <line class="thin" x1="346" y1="254" x2="220" y2="252"/>
    <text class="lbl" x="350" y="320">Dip tube</text>
    <line class="thin" x1="346" y1="316" x2="216" y2="316"/>
    <text class="lbl-sm" x="16" y="340">bottle</text>
  </svg>
  <figcaption>Press: chamber pressure seats the inlet ball and opens the outlet valve, so product goes up the stem and out the spout. Release: the spring lifts the piston, the outlet valve closes, and suction lifts the ball and draws product up the dip tube.</figcaption>
</figure>

<ol>
  <li><strong>Press:</strong> the piston moves down and pressurizes the chamber. The inlet ball is pushed onto its seat. The outlet valve (often a step between piston and stem, or a small flap) opens, and product travels up the hollow stem and out of the spout.</li>
  <li><strong>Release:</strong> the spring pushes the piston back up. The outlet valve closes, so air cannot be sucked back through the spout. The chamber vacuum lifts the inlet ball and draws product up the dip tube.</li>
  <li><strong>Venting:</strong> each dose removes volume from the bottle, so air must get in. A small vent path past the stem or piston is uncovered during the stroke. Without it the bottle would build up vacuum and the pump would stop priming (or a soft bottle would collapse).</li>
</ol>
<p>Output per stroke is the swept volume minus losses: about 1–4 mL for lotion pumps and 0.7–1.3 mL for trigger sprayers. Fine-mist finger pumps deliver around 0.05–0.2 mL.</p>

<h2>Trigger sprayers</h2>
<ul>
  <li>The trigger is a lever that drives a horizontal piston. A metal coil spring or a molded plastic leaf spring returns it.</li>
  <li>The same two-valve logic applies: an inlet valve (ball or flap) at the dip tube, and an outlet valve before the nozzle.</li>
  <li><strong>Nozzle and swirl chamber:</strong> liquid enters a small chamber through tangential slots, spins, and leaves the orifice as a thin conical sheet that breaks into droplets. Turning the nozzle cap changes the path: tangential (spray), straight-through (stream) or blocked (off).</li>
  <li><strong>Precompression:</strong> better sprayers and finger pumps use an outlet valve that opens only above a set pressure, so the spray is fully atomized from the start and does not dribble at the end of the stroke.</li>
</ul>

<h2>Key design parameters</h2>
<ul>
  <li><strong>Stroke volume and force:</strong> the piston diameter sets both. A bigger piston gives a bigger dose but needs more finger force for viscous lotions.</li>
  <li><strong>Priming:</strong> the first few strokes must pull air out of the dip tube and chamber. Small dead volume and tight valves make priming faster.</li>
  <li><strong>Viscosity:</strong> thick creams need larger inlet passages and stronger springs to refill the chamber in reasonable time.</li>
  <li><strong>Lock mechanism:</strong> twist-lock (down-lock or up-lock) stops dispensing in shipping and prevents leaks.</li>
  <li><strong>Product contact:</strong> traditional springs sit in the product, so steel springs must be compatible. "Metal-free" designs move the spring out of the fluid path or use plastic springs so the whole pump is polypropylene and easier to recycle.</li>
</ul>

<h2>Materials and manufacturing</h2>
<table>
  <tr><th>Part</th><th>Typical material</th></tr>
  <tr><td>Actuator, closure, housing, piston</td><td>PP; LDPE for soft seals and pistons</td></tr>
  <tr><td>Dip tube</td><td>Extruded PP or PE</td></tr>
  <tr><td>Inlet ball</td><td>Glass or stainless steel</td></tr>
  <tr><td>Spring</td><td>Stainless steel, or molded plastic in recyclable mono-material designs</td></tr>
  <tr><td>Gaskets</td><td>LDPE or TPE</td></tr>
</table>
<p>All plastic parts come from high-cavity molds (often 32–64 cavities) and are assembled on rotary machines at hundreds of units per minute. The nozzle swirl chamber and orifice are the precision features.</p>

<h2>Failure modes</h2>
<ul>
  <li>Loss of prime: a leaky inlet valve lets product drain back, so the first strokes spray air.</li>
  <li>Blocked vent: the pump stops working halfway through the bottle, or the bottle panels in.</li>
  <li>Clogged orifice from dried product.</li>
  <li>Spring corrosion or chemical attack on seals from aggressive formulations.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Take apart a used trigger sprayer: find the two valves, the piston and the swirl chamber behind the nozzle.</li>
    <li>Rotate a sprayer nozzle slowly from spray to stream and watch the pattern change from cone to jet.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'Why does a lotion pump need both an inlet and an outlet check valve?',
      options: [
        'One for hot product, one for cold',
        'The inlet valve stops product going back to the bottle on the press; the outlet valve stops air being sucked back through the spout on the return',
        'To double the dose',
        'Both are needed to keep the spring dry',
      ],
      answer: 1,
      explain: 'Each stroke has a pressure phase and a suction phase. Each valve blocks the wrong-way path in one of them.',
    },
    {
      q: 'On the return stroke, what refills the pump chamber?',
      options: [
        'Air through the spout',
        'Product drawn up the dip tube past the lifted inlet ball by chamber vacuum',
        'Product flowing back down the stem',
        'Gravity alone',
      ],
      answer: 1,
      explain: 'The spring lifts the piston and creates suction. The inlet ball lifts and product flows up the dip tube, while the closed outlet valve keeps air out.',
    },
    {
      q: 'A pump stops dispensing halfway through a rigid bottle, but works again after you loosen the cap. What failed?',
      options: ['The inlet ball', 'The vent path', 'The spring', 'The swirl chamber'],
      answer: 1,
      explain: 'Without venting, the bottle builds vacuum as product leaves and the pump cannot draw more. Loosening the cap lets air in.',
    },
    {
      q: 'What does the swirl chamber in a trigger nozzle do?',
      options: [
        'Filters particles out of the product',
        'Spins the liquid through tangential slots so it leaves as a thin cone that breaks into droplets',
        'Mixes air into the product to foam it',
        'Stores pressure between strokes',
      ],
      answer: 1,
      explain: 'Tangential entry makes the liquid swirl. It leaves the orifice as a hollow conical sheet that atomizes into a spray.',
    },
    {
      q: 'What is the benefit of a precompression outlet valve?',
      options: [
        'It lets the pump work upside down',
        'It increases the dose per stroke',
        'It opens only above a set pressure, so spray is fully atomized from the start with no dribble at the end',
        'It removes the need for a return spring',
      ],
      answer: 2,
      explain: 'Holding the outlet shut until pressure builds means the product only leaves at atomizing pressure.',
    },
  ],
});
