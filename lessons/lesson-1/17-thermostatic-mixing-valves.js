Registry.registerTopic('lesson-1', {
  n: 17,
  title: 'Thermostatic mixing valve',
  family: 'Fluid control',
  readTime: 9,
  source: 'new',
  summary:
    'A thermostatic mixing valve (TMV) blends hot and cold water to a set temperature and holds it there when supply pressures or temperatures change. A <strong>wax-pellet element</strong> sits in the mixed water and moves a shuttle that trades hot flow for cold. If the cold supply fails, the same element shuts off the hot: that is the anti-scald function.',
  body: `
<h2>How it works</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 280" role="img" aria-label="Schematic of a thermostatic mixing valve with shuttle, wax element and adjusting spindle">
    <rect class="hot-fill" x="62" y="62" width="136" height="136"/>
    <rect class="hot-fill" x="100" y="20" width="32" height="42"/>
    <rect class="fl" x="302" y="62" width="176" height="136"/>
    <rect class="fl" x="380" y="198" width="32" height="44"/>
    <rect class="fl" x="202" y="62" width="98" height="136" opacity="0.7"/>
    <rect class="hot-fill" x="202" y="62" width="98" height="136" opacity="0.35"/>
    <rect class="fl" x="228" y="198" width="46" height="44" opacity="0.7"/>
    <rect class="hot-fill" x="228" y="198" width="46" height="44" opacity="0.35"/>
    <path class="ln" d="M100,20 L100,60 L60,60 L60,200 L228,200 L228,242 M274,242 L274,200 L380,200 L380,242 M412,242 L412,200 L480,200 L480,145 M480,115 L480,60 L132,60 L132,20"/>
    <rect class="hatch" x="196" y="60" width="8" height="52"/><rect class="hatch" x="196" y="148" width="8" height="52"/>
    <rect class="hatch" x="296" y="60" width="8" height="52"/><rect class="hatch" x="296" y="148" width="8" height="52"/>
    <path class="spring" d="M204,130 l4,-14 l8,28 l8,-28 l8,28 l8,-28 l4,14"/>
    <rect class="part" x="244" y="92" width="16" height="76"/>
    <rect class="acc-fill" x="260" y="116" width="28" height="28" rx="4"/>
    <rect class="part" x="288" y="126" width="10" height="8"/>
    <rect class="part" x="298" y="118" width="8" height="24"/>
    <line class="ln" x1="306" y1="130" x2="500" y2="130" stroke-width="4"/>
    <rect class="part" x="500" y="112" width="30" height="36" rx="4"/>
    <path class="hot arr" d="M150,124 L236,112"/>
    <path class="fl-line arr-fl" d="M360,100 L276,104"/>
    <path class="ln arr" d="M251,180 L251,262"/>
    <text class="lbl-hot" x="70" y="16">Hot in</text>
    <text class="lbl-fl" x="420" y="262">Cold in</text>
    <text class="lbl-b" x="190" y="272">Mixed out</text>
    <text class="lbl" x="66" y="190">return spring</text>
    <line class="thin" x1="150" y1="180" x2="214" y2="140"/>
    <text class="lbl" x="196" y="40">shuttle</text>
    <line class="thin" x1="228" y1="44" x2="250" y2="90"/>
    <text class="lbl-acc" x="300" y="40">wax element</text>
    <line class="thin" x1="320" y1="44" x2="276" y2="114"/>
    <text class="lbl" x="486" y="172">set-point</text>
    <text class="lbl" x="486" y="188">spindle</text>
    <text class="lbl-sm" x="140" y="232">hot gap ⇄ cold gap</text>
  </svg>
  <figcaption>Too hot: the wax expands, its piston pushes against the spindle stop, and the shuttle moves left. The hot gap closes and the cold gap opens. Too cold: the wax contracts and the spring pushes the shuttle right.</figcaption>
</figure>
<ol>
  <li>Hot and cold water enter on opposite sides of a sliding <strong>shuttle</strong>. Each flows through a gap between the shuttle and a seat. Moving the shuttle one way shrinks the hot gap and grows the cold gap.</li>
  <li>The water mixes and flows past a <strong>wax thermostat element</strong> on its way to the outlet.</li>
  <li>If the mix is too hot, the wax expands. Its piston bears on a stop set by the adjusting spindle, so the element and shuttle are pushed toward the hot seat, reducing hot flow.</li>
  <li>If the mix is too cold, the wax contracts and a return spring moves the shuttle back.</li>
  <li>Turning the spindle moves the stop, which changes the shuttle position for a given wax expansion: that is the temperature setting.</li>
</ol>

<h2>The wax element</h2>
<p>A sealed copper or brass cup holds a paraffin wax blend, often mixed with copper powder to conduct heat faster. As the wax melts over a narrow temperature band, its volume grows by roughly 10–15%. Because liquids and solids are nearly incompressible, the element produces a large force (tens to hundreds of newtons) over a short stroke of a few millimeters. Choosing the wax blend sets the operating range. The same element opens the thermostat in a car's engine cooling system.</p>

<h2>Anti-scald and fail-safe behavior</h2>
<ul>
  <li><strong>Cold supply fails:</strong> the outlet heats up, the wax expands fully and drives the shuttle onto the hot seat. Flow drops to a trickle or stops, rather than delivering scalding water.</li>
  <li><strong>Pressure change:</strong> if someone flushes a toilet and cold pressure dips, the mix warms, and the element corrects within a few seconds.</li>
  <li><strong>Why use one at all:</strong> stored hot water is kept at 60 °C or more to control Legionella bacteria, but water that hot can cause serious burns within seconds. The TMV mixes down to typically 38–46 °C at the outlet, depending on use.</li>
</ul>
<p>Performance is defined by standards such as ASSE 1016/1017/1070 in North America and EN 1111/EN 1287 (with the UK TMV2/TMV3 schemes) in Europe. They test temperature stability, response to supply failure and maximum temperature overshoot.</p>

<h2>Key design parameters</h2>
<ul>
  <li><strong>Gain:</strong> how far the shuttle moves per degree, which sets how tightly temperature is held versus stability.</li>
  <li><strong>Response time:</strong> element thermal mass and how well water flows over it.</li>
  <li><strong>Minimum temperature differential:</strong> the hot supply must be hotter than the setpoint by some margin (often 10 °C) for good control.</li>
  <li><strong>Inlet check valves and strainers:</strong> stop hot and cold crossing over between supplies and keep debris out of the shuttle.</li>
</ul>

<h2>Materials and manufacturing</h2>
<ul>
  <li>Bodies: dezincification-resistant (DZR) brass, forged and machined; plastic composites in some point-of-use valves.</li>
  <li>Shuttle: brass, stainless or engineering plastic (PPS, PSU) to resist scale.</li>
  <li>Seals: EPDM O-rings (good with hot water and chlorine).</li>
  <li>Elements: deep-drawn copper alloy cups, filled and crimped with a rubber diaphragm and piston.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Limescale on the shuttle and seats: sluggish or stuck response. This is the most common problem in hard-water areas.</li>
  <li>Clogged inlet strainers starve one supply.</li>
  <li>Element drift or fatigue after many cycles.</li>
  <li>Failed check valves allow cross-flow between hot and cold supplies.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>On a thermostatic shower, the temperature knob often has a safety stop button at about 38 °C: that is the set-point spindle.</li>
    <li>Flush a toilet while someone runs a thermostatic shower: the temperature barely changes.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'Why does a wax element produce a large force?',
      options: [
        'Wax is magnetic',
        'Paraffin expands by roughly 10–15% when it melts, and the nearly incompressible wax pushes the piston hard',
        'The element contains a compressed gas',
        'It uses the water pressure directly',
      ],
      answer: 1,
      explain: 'A volume increase in an incompressible medium inside a sealed cup gives high force over a short stroke.',
    },
    {
      q: 'The cold supply to a TMV fails. What should happen?',
      options: [
        'Full hot water flows to the outlet',
        'The wax expands fully, driving the shuttle onto the hot seat so flow drops to a trickle or stops',
        'The valve switches to cold only',
        'Nothing changes',
      ],
      answer: 1,
      explain: 'Rising outlet temperature drives the element to close the hot port: the anti-scald fail-safe.',
    },
    {
      q: 'Why is hot water often stored at 60 °C or more but delivered at around 41 °C through a TMV?',
      options: [
        'To save energy',
        'Storage temperature controls Legionella, and the TMV prevents scalding at the outlet',
        'Because pipes cannot carry hotter water',
        'To reduce limescale',
      ],
      answer: 1,
      explain: 'Hot storage kills Legionella, but 60 °C water burns within seconds. The TMV gives both safety goals.',
    },
    {
      q: 'The mixed water is too hot. How does the shuttle move?',
      options: [
        'To enlarge the hot gap and shrink the cold gap',
        'To shrink the hot gap and enlarge the cold gap',
        'It does not move; the spindle turns instead',
        'It closes both gaps equally',
      ],
      answer: 1,
      explain: 'Wax expansion pushes the shuttle toward the hot seat, trading hot flow for cold until the mix is back at setpoint.',
    },
    {
      q: 'What is the most common cause of a TMV responding slowly in a hard-water area?',
      options: [
        'Wax leaking out',
        'Limescale on the shuttle and seats',
        'The spring being too strong',
        'Too large a temperature differential',
      ],
      answer: 1,
      explain: 'Scale builds up on the sliding shuttle and seats, adding friction and making response sluggish or stuck.',
    },
  ],
});
