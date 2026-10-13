Registry.registerTopic('lesson-1', {
  n: 18,
  title: 'Solenoid valves (direct vs pilot-operated)',
  family: 'Fluid control',
  readTime: 9,
  source: 'new',
  summary:
    'A solenoid valve uses an electromagnet to move a plunger. A <strong>direct-acting</strong> valve lifts the plunger straight off the orifice, so the coil must beat the full pressure force, which limits it to small orifices. A <strong>pilot-operated</strong> valve uses the coil only to open a tiny pilot hole and lets line pressure lift a large diaphragm. A small coil can then switch a big flow.',
  body: `
<h2>The two architectures</h2>
<figure class="diagram">
  <svg viewBox="0 0 580 300" role="img" aria-label="Direct-acting and pilot-operated solenoid valves in cross-section">
    <g>
      <text class="lbl-b" x="20" y="24">Direct-acting (closed)</text>
      <rect class="hot-fill" x="22" y="152" width="216" height="38"/>
      <rect class="hot-fill" x="0" y="160" width="22" height="24"/>
      <rect class="fl" x="22" y="200" width="216" height="38"/>
      <rect class="fl" x="238" y="208" width="22" height="24"/>
      <rect class="hot-fill" x="117" y="60" width="26" height="92"/>
      <path class="ln" d="M22,150 L22,160 M22,184 L22,240 L238,240 L238,232 M238,208 L238,150 L145,150 M115,150 L22,150"/>
      <path class="ln" d="M115,150 L115,58 L145,58 L145,150"/>
      <rect class="hatch" x="22" y="190" width="98" height="10"/><rect class="hatch" x="140" y="190" width="98" height="10"/>
      <rect class="acc-fill" x="80" y="72" width="32" height="70"/><rect class="acc-fill" x="148" y="72" width="32" height="70"/>
      <rect class="solid" x="118" y="60" width="24" height="12"/>
      <path class="spring" d="M130,72 l-8,4 l16,6 l-16,6 l16,6 l-16,6 l8,4"/>
      <rect class="part" x="119" y="104" width="22" height="84"/>
      <rect class="solid" x="117" y="184" width="26" height="6"/>
      <text class="lbl-acc" x="186" y="96">coil</text>
      <text class="lbl" x="150" y="170">plunger</text>
      <text class="lbl" x="30" y="58">spring</text>
      <line class="thin" x1="70" y1="56" x2="122" y2="84"/>
      <text class="lbl-hot" x="30" y="178">inlet</text>
      <text class="lbl-fl" x="180" y="226">outlet</text>
      <text class="lbl" x="20" y="266">Coil must lift the plunger against</text>
      <text class="lbl" x="20" y="282">spring + P × A(orifice).</text>
    </g>
    <g transform="translate(300,0)">
      <text class="lbl-b" x="10" y="24">Pilot-operated (closed)</text>
      <rect class="hot-fill" x="32" y="122" width="216" height="46"/>
      <rect class="hot-fill" x="2" y="178" width="108" height="60"/>
      <rect class="hot-fill" x="0" y="186" width="22" height="26"/>
      <rect class="fl" x="112" y="182" width="36" height="58"/>
      <rect class="fl" x="148" y="214" width="110" height="26"/>
      <rect class="hot-fill" x="117" y="60" width="26" height="62"/>
      <path class="ln" d="M30,120 L30,176 M30,120 L115,120 L115,58 L145,58 L145,120 L250,120 L250,176"/>
      <path class="ln" d="M0,176 L250,176 M2,186 L2,240 L258,240 M110,176 L110,240 M150,176 L150,212 L258,212"/>
      <path class="acc" d="M30,172 L250,172" stroke-width="5"/>
      <circle class="hot-fill" cx="62" cy="172" r="3"/>
      <rect class="acc-fill" x="80" y="68" width="32" height="48"/><rect class="acc-fill" x="148" y="68" width="32" height="48"/>
      <rect class="solid" x="118" y="60" width="24" height="10"/>
      <rect class="part" x="119" y="84" width="22" height="82"/>
      <rect class="solid" x="124" y="164" width="12" height="4"/>
      <text class="lbl-acc" x="186" y="92">coil</text>
      <text class="lbl-acc" x="150" y="160">diaphragm</text>
      <text class="lbl" x="10" y="108">upper chamber</text>
      <text class="lbl" x="10" y="270">bleed hole: inlet → upper chamber</text>
      <line class="thin" x1="40" y1="258" x2="60" y2="176"/>
      <text class="lbl" x="100" y="290">pilot orifice → outlet</text>
      <line class="thin" x1="150" y1="278" x2="130" y2="172"/>
      <text class="lbl-hot" x="12" y="232">inlet</text>
      <text class="lbl-fl" x="196" y="232">outlet</text>
    </g>
  </svg>
  <figcaption>Orange is inlet pressure, blue outlet pressure. In the pilot valve the upper chamber sits at inlet pressure while closed. Opening the small pilot vents it to the outlet faster than the bleed hole can refill it, so inlet pressure under the diaphragm lifts it off the main seat (the top of the outlet tube).</figcaption>
</figure>

<h2>Direct-acting</h2>
<p>De-energized, a spring pushes the plunger onto the orifice (normally closed). Energized, the coil pulls the plunger up toward a fixed core. The coil must overcome the spring plus the pressure force on the orifice:</p>
<div class="formula">F<sub>pressure</sub> = ΔP · A<sub>orifice</sub></div>
<p>At 10 bar across a 3 mm orifice that is about 7 N, which is a lot for a small solenoid, especially since solenoid force falls steeply as the air gap grows. So direct-acting valves use small orifices and short strokes. Their advantage is that they work from 0 bar differential and switch fast. Coffee machines, analyzers and small gas valves use them.</p>

<h2>Pilot-operated (servo-assisted)</h2>
<ol>
  <li><strong>Closed:</strong> a bleed hole in the diaphragm lets inlet pressure fill the upper chamber. The diaphragm sees inlet pressure on top over its whole area, but only on the annulus underneath (the center sits over the outlet), so it is pushed shut.</li>
  <li><strong>Open:</strong> the coil lifts the plunger off a small pilot orifice in the diaphragm center, venting the upper chamber to the outlet. The pilot is much larger than the bleed hole, so upper pressure falls. Inlet pressure under the annulus now lifts the diaphragm and the main seat opens.</li>
  <li><strong>Close again:</strong> the plunger drops onto the pilot. The bleed hole refills the upper chamber, pressures equalize, and the larger top area pushes the diaphragm back down. The bleed size sets closing speed, which matters for water hammer.</li>
</ol>
<p>The catch: it needs a <strong>minimum pressure differential</strong>, often around 0.2–0.5 bar, to lift the diaphragm. <strong>Semi-direct</strong> (assisted-lift) valves link the plunger to the diaphragm so they work from 0 bar, at the cost of a bigger coil.</p>

<h2>Electrical details</h2>
<ul>
  <li><strong>Normally closed vs normally open:</strong> which state is safe when power is lost.</li>
  <li><strong>AC coils</strong> have a copper <strong>shading ring</strong> in the core face. Without it, the force drops to zero twice per cycle and the plunger buzzes. AC coils also draw high inrush current while the gap is open; a stuck plunger can overheat the coil.</li>
  <li><strong>DC coils</strong> give steady force and no buzz. "Peak-and-hold" drivers apply full current to pull in and then less to hold, cutting heat.</li>
  <li>Coil insulation class (such as F, 155 °C or H, 180 °C) limits duty cycle and ambient temperature.</li>
</ul>

<h2>Materials and manufacturing</h2>
<table>
  <tr><th>Part</th><th>Typical material</th></tr>
  <tr><td>Body</td><td>Brass, stainless steel; glass-filled nylon or PPS for appliance valves</td></tr>
  <tr><td>Plunger and fixed core</td><td>Magnetic stainless (430F type)</td></tr>
  <tr><td>Plunger tube</td><td>Non-magnetic 300-series stainless, so flux passes through to the plunger</td></tr>
  <tr><td>Seals and diaphragm</td><td>NBR, EPDM (water), FKM (fuels, heat); fabric-reinforced for large diaphragms</td></tr>
  <tr><td>Coil</td><td>Enamelled copper wire on a bobbin, overmolded in epoxy or thermoplastic</td></tr>
</table>

<h2>Failure modes</h2>
<ul>
  <li>Debris blocks the bleed hole: a pilot valve opens but will not close. This is the classic stuck irrigation valve.</li>
  <li>Debris blocks the pilot orifice: the valve will not open.</li>
  <li>Supply pressure below the minimum differential: a pilot valve will not open fully.</li>
  <li>Burned-out coil from a stuck plunger (AC) or excessive duty cycle.</li>
  <li>Water hammer from fast closing.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>A washing machine's inlet valve is a pilot-operated solenoid valve; the click and then the rush of water are the pilot and then the diaphragm.</li>
    <li>Irrigation valves have a manual bleed screw that vents the upper chamber, which is the pilot action done by hand.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'Why are direct-acting solenoid valves usually limited to small orifices?',
      options: [
        'Large orifices cannot be machined',
        'The coil must beat the full pressure force ΔP × A on the orifice, and solenoid force is limited and falls with gap',
        'They need a minimum pressure differential',
        'They only work with AC power',
      ],
      answer: 1,
      explain: 'Pressure force grows with orifice area, so a direct-acting valve with a bigger orifice needs a much bigger coil.',
    },
    {
      q: 'What actually lifts the main diaphragm in a pilot-operated valve?',
      options: [
        'The plunger pulling on it',
        'Inlet pressure under the diaphragm annulus, after the pilot vents the upper chamber faster than the bleed hole refills it',
        'A spring under the diaphragm',
        'Outlet suction',
      ],
      answer: 1,
      explain: 'Venting the upper chamber removes the closing force. Line pressure underneath then does the lifting.',
    },
    {
      q: 'A pilot-operated valve does not open when fed from a low-pressure rain barrel. The most likely reason is:',
      options: [
        'The coil is too strong',
        'The supply is below the valve\'s minimum pressure differential',
        'The bleed hole is too large',
        'The shading ring is missing',
      ],
      answer: 1,
      explain: 'Pilot valves need some pressure differential (often 0.2–0.5 bar) to lift the diaphragm. Use a direct-acting or semi-direct valve instead.',
    },
    {
      q: 'An irrigation valve turns on but will not turn off. What is the classic cause?',
      options: [
        'A burned-out coil',
        'Debris blocking the diaphragm\'s bleed hole, so the upper chamber cannot repressurize',
        'Too much supply pressure',
        'A missing shading ring',
      ],
      answer: 1,
      explain: 'Closing depends on the bleed hole refilling the upper chamber. Block it and the diaphragm stays open.',
    },
    {
      q: 'What is the pressure force on a 2 mm diameter orifice at 6 bar (0.6 N/mm²)?',
      options: ['About 0.19 N', 'About 1.9 N', 'About 19 N', 'About 190 N'],
      answer: 1,
      explain: 'Area = π × 1² ≈ 3.14 mm². Force ≈ 0.6 × 3.14 ≈ 1.9 N.',
    },
  ],
});
