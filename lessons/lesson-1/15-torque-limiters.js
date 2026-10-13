Registry.registerTopic('lesson-1', {
  n: 15,
  title: 'Torque limiters and slip clutches',
  family: 'Overload protection',
  readTime: 9,
  source: 'new',
  summary:
    'A torque limiter is a deliberate weak link: it passes torque normally and slips or disconnects at a set overload, protecting the motor, gears and the thing being driven. The designs differ in <strong>how precisely they trip</strong> and <strong>what happens after</strong>: slip and keep slipping, click and re-engage, or break and wait to be reset.',
  body: `
<h2>Ball-detent limiters</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 260" role="img" aria-label="Ball-detent torque limiter: a spring presses a ball into a V-shaped pocket">
    <rect class="hatch" x="250" y="26" width="80" height="10"/>
    <path class="spring" d="M290,36 l-16,5 l32,8 l-32,8 l32,8 l-32,8 l32,8 l-32,8 l16,5"/>
    <rect class="part" x="276" y="94" width="28" height="36"/>
    <rect class="part" x="40" y="122" width="228" height="24"/>
    <rect class="part" x="312" y="122" width="208" height="24"/>
    <path class="part" d="M40,150 L262,150 L290,178 L318,150 L520,150 L520,210 L40,210 Z"/>
    <circle class="acc-fill" cx="290" cy="150" r="20"/>
    <circle class="dash" cx="352" cy="128" r="20"/>
    <path class="acc arr-acc" d="M346,46 L346,92"/>
    <text class="lbl-acc" x="354" y="72">spring force Fₛ</text>
    <path class="ln arr" d="M110,134 L200,134"/>
    <text class="lbl" x="60" y="112">driving member (holds the ball)</text>
    <text class="lbl" x="60" y="232">driven flange with V pockets</text>
    <path class="hot arr" d="M304,164 L330,190"/>
    <text class="lbl-hot" x="300" y="232">flank reaction (flank at angle α)</text>
    <text class="lbl" x="384" y="96">overload: ball climbs</text>
    <text class="lbl" x="384" y="112">out of the pocket</text>
  </svg>
  <figcaption>The pocket flank turns tangential drive force into an upward push on the ball. When that push beats the spring, the ball climbs out and the two halves slip.</figcaption>
</figure>
<p>Balls (or rollers) sit in pockets between a driving and a driven member, pressed in by a spring. Ignoring friction, the ball climbs out when the tangential force at the ball exceeds F<sub>s</sub>·tan α, where α is the pocket flank angle measured from the sliding plane. So trip torque is:</p>
<div class="formula">T<sub>trip</sub> ≈ n · F<sub>s</sub> · r · tan α</div>
<p>for n balls at radius r (friction raises it somewhat). Steeper flanks or more preload raise the trip torque. Ball detents trip sharply and repeatably, often within ±5–10%. Variants re-engage at the next pocket (a ratcheting "click"), only at one angular position (to keep timing on packaging machines), or stay disengaged until reset, often with a switch that stops the motor.</p>

<h2>The cordless drill clutch</h2>
<p>The numbered collar on a drill is a ball-detent limiter. The planetary gearbox's ring gear would normally be held still. Instead, its face has small ramps, and spring-loaded balls or pins press against them. Turning the collar changes spring preload. When screw torque exceeds the setting, the ring gear's reaction torque pushes the balls back, the ring gear spins, and the output stops turning while the drill makes its ratcheting noise.</p>

<h2>Friction slip clutches</h2>
<p>Friction discs are clamped between plates by a spring, usually a stack of Belleville (disc) springs. Slip torque is:</p>
<div class="formula">T = μ · F · r<sub>m</sub> · N</div>
<p>where r<sub>m</sub> is mean friction radius and N the number of friction faces. They slip smoothly and keep slipping while overloaded, which suits conveyors and winders but generates heat. Belleville springs are chosen because their load–deflection curve can be made nearly flat, so clamp force barely changes as the linings wear. Accuracy is lower (±20–30%), because μ varies with wear, temperature and contamination.</p>

<h2>Other types</h2>
<table>
  <tr><th>Type</th><th>Behavior</th><th>Good for</th></tr>
  <tr><td>Shear pin</td><td>Breaks at overload; must be replaced</td><td>Rare, severe overloads (snow blowers, boat props)</td></tr>
  <tr><td>Magnetic hysteresis</td><td>Smooth, wear-free slip; torque set by magnet gap or position</td><td>Tension control, capping heads, long-life slip</td></tr>
  <tr><td>Magnetic synchronous coupling</td><td>Transmits torque through a sealed wall; decouples above peak torque</td><td>Sealed pumps and mixers</td></tr>
  <tr><td>Wrap-spring / one-way slip</td><td>Slips in one direction only</td><td>Printers, mechanisms with reverse protection</td></tr>
  <tr><td>Molded plastic detent</td><td>Flexing arms in a notched ring</td><td>Toys, appliance knobs, low-cost gearheads</td></tr>
</table>

<h2>Choosing and setting</h2>
<ul>
  <li>Set trip torque above the highest normal running torque, including start-up inertia, and below the weakest downstream part's limit.</li>
  <li>Place the limiter close to the jam source, so the inertia of everything upstream does not hit the drive train when it trips.</li>
  <li>Decide what happens after a trip: auto-reset (risk of repeated hammering) or manual reset with a sensor.</li>
</ul>

<h2>Materials and manufacturing</h2>
<ul>
  <li>Hardened steel balls and through-hardened or case-hardened detent plates; nitrided or induction-hardened pocket surfaces.</li>
  <li>Friction linings: organic, sintered bronze or fiber-reinforced composites against steel.</li>
  <li>Belleville springs: 51CrV4 spring steel or stainless.</li>
  <li>Drill clutches: sintered or molded ring gears, stamped spring plates.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Pocket and ball wear lowering trip torque over many trips.</li>
  <li>Friction clutch glazing or overheating during long slip.</li>
  <li>Corrosion or seized parts so the limiter no longer slips at all, which defeats its purpose.</li>
  <li>Trip set too close to normal load, causing nuisance trips.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Set a drill clutch low and drive a screw: the clicking is balls jumping over the ring gear's ramps.</li>
    <li>Look for the spring stack and friction plates on a garden-tiller or conveyor drive.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'In a cordless drill clutch, which part slips when the torque setting is reached?',
      options: [
        'The motor shaft',
        'The planetary ring gear, normally held still by spring-loaded balls on face ramps',
        'The chuck jaws',
        'The battery contacts',
      ],
      answer: 1,
      explain: 'The collar sets spring preload on balls that hold the ring gear. At overload, the ring gear\'s reaction pushes them back and it spins.',
    },
    {
      q: 'A friction slip clutch has 2 friction faces. Redesigning it with 4 faces, same clamp force and radius, changes slip torque to:',
      options: ['Half', 'The same', 'Double', 'Four times'],
      answer: 2,
      explain: 'T = μ·F·r_m·N. Doubling N doubles the torque.',
    },
    {
      q: 'Why are Belleville springs common in friction torque limiters?',
      options: [
        'They are the cheapest spring available',
        'Their load–deflection curve can be nearly flat, so clamp force stays steady as linings wear',
        'They add damping',
        'They are non-magnetic',
      ],
      answer: 1,
      explain: 'As linings wear the spring extends slightly. A flat region of the Belleville curve keeps clamp force, and so slip torque, nearly constant.',
    },
    {
      q: 'For a ball-detent limiter, ignoring friction, T_trip ≈ n·Fₛ·r·tan α. Which change raises trip torque?',
      options: [
        'Shallower pocket flanks (smaller α)',
        'Steeper pocket flanks (larger α) or more spring preload',
        'Fewer balls',
        'Smaller ball radius r',
      ],
      answer: 1,
      explain: 'Steeper flanks need more tangential force to lift the ball, and more preload pushes it down harder.',
    },
    {
      q: 'What is an advantage of a magnetic hysteresis torque limiter?',
      options: [
        'It never slips',
        'It slips smoothly with no contact wear, so slip torque stays consistent',
        'It is the most compact shear-type device',
        'It locks in one direction',
      ],
      answer: 1,
      explain: 'Torque comes from magnetic hysteresis losses, not friction, so there is no wear and slip torque stays repeatable.',
    },
  ],
});
