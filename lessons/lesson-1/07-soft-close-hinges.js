Registry.registerTopic('lesson-1', {
  n: 7,
  title: 'Self-closing cabinet and soft-close hinges',
  family: 'Damping',
  readTime: 9,
  source: 'new',
  summary:
    'A concealed cabinet hinge is a <strong>four-bar linkage</strong> that swings the door about a virtual pivot so it clears the cabinet. A spring-and-cam pulls the door shut over the last 30° or so, and a small <strong>linear damper</strong> slows that final motion so it closes quietly instead of banging.',
  body: `
<h2>The linkage</h2>
<p>A hinge with a single fixed pin would have to sit on the outside corner of the cabinet. The European-style concealed hinge instead puts a cup (usually 35 mm diameter) into a bored hole in the back of the door and mounts an arm inside the cabinet side. Between them, two links form a <strong>four-bar linkage</strong>: arm (ground), two links, and the cup (coupler).</p>
<ul>
  <li>The door rides on the coupler, so it does not rotate about any fixed point. It moves about an <strong>instant center</strong> that shifts as it opens, which lets the door's edge swing out and around the cabinet side.</li>
  <li>That geometry sets the <strong>overlay</strong> (how far the door covers the cabinet edge: full, half or inset) and the opening angle (typically 95–110°, up to 165–170° for special hinges with more links).</li>
  <li>Adjustment screws on the arm move the door sideways, in depth and in height, usually ±2 mm each, so a row of doors can be lined up after installation.</li>
</ul>

<figure class="diagram">
  <svg viewBox="0 0 560 260" role="img" aria-label="Four-bar linkage schematic and a graph of closing torque versus door angle">
    <g>
      <text class="lbl-b" x="10" y="20">Four-bar linkage (schematic)</text>
      <rect class="hatch" x="20" y="60" width="150" height="16"/>
      <text class="lbl-sm" x="24" y="54">Arm on cabinet side (ground)</text>
      <circle class="part" cx="60" cy="76" r="6"/><circle class="part" cx="130" cy="76" r="6"/>
      <line class="ln" x1="60" y1="76" x2="90" y2="176"/>
      <line class="ln" x1="130" y1="76" x2="190" y2="160"/>
      <path class="acc-fill" d="M84,170 L196,154 L204,190 L92,206 Z"/>
      <circle class="part" cx="90" cy="176" r="6"/><circle class="part" cx="190" cy="160" r="6"/>
      <text class="lbl-acc" x="106" y="226">Cup + door (coupler)</text>
      <text class="lbl" x="18" y="130">Link 1</text>
      <text class="lbl" x="170" y="112">Link 2</text>
    </g>
    <g transform="translate(280,0)">
      <text class="lbl-b" x="10" y="20">Closing torque vs door angle</text>
      <rect x="40" y="40" width="70" height="170" fill="var(--accent-soft)"/>
      <text class="lbl-sm" x="44" y="54">damper</text>
      <text class="lbl-sm" x="44" y="66">engaged</text>
      <line class="ln" x1="40" y1="210" x2="270" y2="210"/>
      <line class="ln" x1="40" y1="210" x2="40" y2="34"/>
      <line class="grid" x1="40" y1="150" x2="270" y2="150"/>
      <path class="acc" d="M40,80 C60,74 90,90 110,150 C130,166 160,158 270,156"/>
      <text class="lbl" x="128" y="120">spring + cam pulls</text>
      <text class="lbl" x="128" y="134">door shut</text>
      <text class="lbl" x="150" y="178">little or no torque:</text>
      <text class="lbl" x="150" y="192">door stays where left</text>
      <text class="lbl-sm" x="44" y="228">0° (closed)</text>
      <text class="lbl-sm" x="196" y="228">100° open</text>
    </g>
  </svg>
  <figcaption>Left: the door rides on the coupler of a four-bar, so it moves about a shifting instant center rather than a fixed pin. Right: typical closing torque. The spring only acts over the last ~30°, which is where the damper works.</figcaption>
</figure>

<h2>Self-closing</h2>
<p>A spring (often a torsion or leaf spring) bears on a cam surface on one of the links. Over most of the swing the cam profile gives almost no torque, so the door stays where it is left. In the last ~30° the cam drops away and the spring torque pulls the door closed and holds it against the cabinet. This replaces a magnetic or roller catch.</p>

<h2>Soft-close: the linear damper</h2>
<ul>
  <li>A small piston in a sealed cylinder of silicone oil, either built into the hinge cup or arm, or a separate damper that bumps the door.</li>
  <li>When the door pushes the rod, oil is forced through a small orifice or a tight annular gap. Force rises with speed (F ≈ c·v), so a hard push is resisted much more than a gentle one.</li>
  <li>A <strong>check valve</strong> in the piston (or a lip seal that collapses one way) lets oil flow freely on the return stroke. A return spring pushes the rod back out when the door opens, so the damper does not resist opening.</li>
  <li>Some hinges offer an on/off switch or adjustable bypass, because a light door with too much damping may not latch, while a heavy door may need two dampers.</li>
</ul>

<h2>Design trade-offs</h2>
<ul>
  <li><strong>Spring vs damper balance:</strong> the closing spring must overcome damper resistance at the slowest closing speed, plus seal friction, at the coldest expected temperature.</li>
  <li><strong>Temperature:</strong> silicone oil changes viscosity less than mineral oil, but a cold kitchen or garage still slows the final close; a hot one makes it faster.</li>
  <li><strong>Door weight and size:</strong> catalogs give hinge counts per door height and weight (often 2 hinges up to ~900 mm, 3 to ~1600 mm). Too few and the door sags or the damper bottoms out.</li>
  <li><strong>Screw retention:</strong> the cup is held by screws or press-in dowels into particleboard, which is often the weakest part of the system.</li>
</ul>

<h2>Materials and manufacturing</h2>
<table>
  <tr><th>Part</th><th>Typical choice</th></tr>
  <tr><td>Arm, links</td><td>Stamped cold-rolled steel, nickel plated</td></tr>
  <tr><td>Cup</td><td>Stamped steel or zinc die-cast; plastic on budget hinges</td></tr>
  <tr><td>Pins</td><td>Hardened steel rivets, orbital-riveted in place</td></tr>
  <tr><td>Damper</td><td>Molded plastic or steel body, steel rod, silicone oil, elastomer seals</td></tr>
  <tr><td>Springs</td><td>Music wire or stainless torsion/leaf springs</td></tr>
</table>
<p>Hinges are assembled automatically at high volume. Life testing cycles the door tens of thousands of times (furniture standards such as EN 15570 cover hinge strength and durability).</p>

<h2>Failure modes</h2>
<ul>
  <li>Damper oil leaks past the rod seal: the door starts banging again.</li>
  <li>Cup screws pull out of particleboard; the door sags or rubs.</li>
  <li>Spring fatigue: door no longer closes fully.</li>
  <li>Doors slammed hard overload the damper and can blow seals.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Open a kitchen cabinet slowly and feel where the hinge starts pulling the door closed: that is the cam's self-close zone.</li>
    <li>Look for the small cylinder in the hinge cup or arm: that is the damper. Some have a tiny switch to turn it off.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'Why do concealed cabinet hinges use a four-bar linkage instead of a single pin?',
      options: [
        'To make the door heavier and more stable',
        'So the door moves about a shifting instant center and swings clear of the cabinet while the hinge stays hidden',
        'Because a single pin cannot carry the door weight',
        'To add damping through friction in the links',
      ],
      answer: 1,
      explain: 'Mounted on the coupler, the door does not rotate about a fixed point. Its motion lets the door clear the cabinet edge with the hinge entirely inside.',
    },
    {
      q: 'What makes a self-closing hinge pull the door shut only over the last part of its travel?',
      options: [
        'A magnet in the cup',
        'A spring acting on a cam whose profile gives torque only near closed',
        'Gravity acting on the door',
        'The damper pushing the door closed',
      ],
      answer: 1,
      explain: 'The cam profile gives little torque over most of the swing, so the door stays open. Near closed, the spring pulls it in.',
    },
    {
      q: 'Why doesn\'t the soft-close damper resist opening the door?',
      options: [
        'The oil drains out during opening',
        'A check valve or one-way seal lets oil bypass on the return stroke, and a spring resets the rod',
        'The door pulls the rod away so the damper is never loaded',
        'The damper only works when the hinge is cold',
      ],
      answer: 1,
      explain: 'The damper is one-way. Oil bypasses through a check valve on return, and a spring pushes the rod back out ready for the next close.',
    },
    {
      q: 'Cabinet doors in an unheated garage close very slowly in winter and sometimes fail to latch. Why?',
      options: [
        'The steel links contract',
        'The damper oil is more viscous when cold, so damping force at a given speed rises',
        'The spring gets stronger in the cold',
        'Particleboard swells',
      ],
      answer: 1,
      explain: 'Viscous damping force ≈ c·v, and c rises as oil viscosity rises in the cold. The spring may then not overcome it before the door stalls.',
    },
    {
      q: 'Someone slams a soft-close door. How does the damper force compare with a gentle close?',
      options: [
        'It is the same, because the damper is a constant-force device',
        'It is much higher, because viscous force rises with speed',
        'It is lower, because the oil shears thin',
        'It is zero, because the check valve opens',
      ],
      answer: 1,
      explain: 'Damper force scales with velocity, so a fast slam meets much more resistance. Very hard slams can overload and damage the seals.',
    },
  ],
});
