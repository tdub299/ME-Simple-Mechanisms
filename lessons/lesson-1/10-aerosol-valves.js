Registry.registerTopic('lesson-1', {
  n: 10,
  title: 'Aerosol valve and actuator',
  family: 'Fluid / consumer',
  readTime: 9,
  source: 'new',
  summary:
    'An aerosol valve is a spring-returned stem whose tiny side orifice is hidden inside a rubber gasket. Press the stem and the orifice slides past the gasket into the pressurized housing, so product flows out. Everything else (the crimped mounting cup, the propellant, the actuator\'s breakup insert) exists to make that seal reliable and the spray consistent.',
  body: `
<h2>Anatomy</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 350" role="img" aria-label="Cross-section of an aerosol valve and actuator on a can">
    <rect class="hot-fill" x="82" y="140" width="316" height="120" opacity="0.5"/>
    <rect class="fl" x="82" y="260" width="316" height="80"/>
    <path class="ln" d="M80,340 L80,128 Q80,112 96,112 M400,340 L400,128 Q400,112 384,112"/>
    <path class="ln" d="M76,116 Q76,96 96,96 L208,96 L208,110 L272,110 L272,96 L384,96 Q404,96 404,116" stroke-width="3"/>
    <rect class="acc-fill" x="206" y="111" width="68" height="10"/>
    <path class="ln" d="M210,121 L210,226 L232,240 L232,262 M270,121 L270,148 M270,158 L270,226 L248,240 L248,262"/>
    <rect class="part" x="234" y="262" width="12" height="78"/>
    <rect class="part" x="190" y="14" width="100" height="36" rx="5"/>
    <rect class="part" x="290" y="22" width="36" height="16"/>
    <rect class="part" x="229" y="50" width="22" height="112"/>
    <rect class="part" x="214" y="160" width="52" height="8"/>
    <path class="fl-line" d="M240,120 L240,30 L322,30"/>
    <line class="ln" x1="240" y1="116" x2="251" y2="116" stroke-width="3"/>
    <path class="spring" d="M240,168 l-20,5 l40,8 l-40,8 l40,8 l-40,8 l40,8 l-40,8 l20,5"/>
    <path class="fl-line arr-fl" d="M240,330 L240,272"/>
    <path class="fl-line arr-fl" d="M330,30 L366,30"/>
    <text class="lbl" x="300" y="14">Actuator + nozzle insert</text>
    <text class="lbl" x="418" y="92">Mounting cup</text>
    <text class="lbl" x="418" y="108">(crimped to can)</text>
    <text class="lbl-acc" x="418" y="128">Stem gasket</text>
    <line class="thin" x1="414" y1="124" x2="274" y2="116"/>
    <text class="lbl" x="418" y="150">Vapor-phase tap</text>
    <text class="lbl" x="418" y="166">(optional hole)</text>
    <line class="thin" x1="414" y1="152" x2="272" y2="153"/>
    <text class="lbl" x="418" y="196">Housing + spring</text>
    <text class="lbl" x="418" y="250">Tailpiece orifice</text>
    <line class="thin" x1="414" y1="246" x2="250" y2="248"/>
    <text class="lbl" x="418" y="300">Dip tube</text>
    <text class="lbl" x="96" y="160">propellant vapor</text>
    <text class="lbl-fl" x="96" y="290">liquid product +</text>
    <text class="lbl-fl" x="96" y="306">liquefied propellant</text>
    <text class="lbl" x="8" y="62">Stem orifice is</text>
    <text class="lbl" x="8" y="78">sealed by the</text>
    <text class="lbl" x="8" y="94">gasket at rest</text>
    <line class="thin" x1="96" y1="84" x2="236" y2="116"/>
  </svg>
  <figcaption>At rest the stem orifice (black dash) sits inside the gasket. Pressing the actuator pushes it below the gasket into the housing, which is full of product at can pressure.</figcaption>
</figure>

<h2>How it works</h2>
<ol>
  <li>The valve sits in a <strong>mounting cup</strong> (a standard 1-inch opening on most cans) that is crimped (clinched) under the can's rolled bead, sealed by a cup gasket.</li>
  <li>The hollow <strong>stem</strong> passes through a rubber <strong>stem gasket</strong>. One or more side orifices, typically 0.3–0.6 mm, are covered by the gasket at rest.</li>
  <li>Pressing the actuator pushes the stem down and flexes the gasket. The orifice moves into the <strong>housing</strong>, and product flows up the stem to the actuator.</li>
  <li>Product reaches the housing through the <strong>dip tube</strong> and a <strong>tailpiece orifice</strong>, which together limit flow rate.</li>
  <li>The <strong>actuator</strong> carries a nozzle insert, often a mechanical breakup (swirl) design like a trigger sprayer's, to shape the spray. Foams and gels use open spouts instead.</li>
  <li>Release the actuator and the spring pushes the stem back up; the gasket seals the orifice again.</li>
</ol>

<h2>Propellant phase</h2>
<table>
  <tr><th>Propellant type</th><th>Examples</th><th>Behavior</th></tr>
  <tr><td>Liquefied gas</td><td>Propane/butane/isobutane blends, DME, HFC-152a, HFO-1234ze</td><td>Pressure stays nearly constant as the can empties, because liquid evaporates to refill the headspace. Pressure depends on temperature.</td></tr>
  <tr><td>Compressed gas</td><td>Nitrogen, CO₂, compressed air</td><td>Pressure falls as product leaves, so spray weakens toward the end. Non-flammable.</td></tr>
  <tr><td>Bag-on-valve</td><td>Product in a laminate bag welded to the valve; air or N₂ outside it</td><td>Product never mixes with propellant; works at any angle; nearly complete evacuation.</td></tr>
</table>
<p>Liquefied propellant that is mixed into the product also flashes to vapor at the nozzle and helps break the liquid into fine droplets, the same effect used in metered-dose inhalers (Topic 4).</p>

<h2>Key design parameters</h2>
<ul>
  <li><strong>Stem orifice, tailpiece orifice and nozzle</strong> together set flow rate and droplet size. Smaller orifices give finer, slower sprays.</li>
  <li><strong>Vapor-phase tap (VPT):</strong> a small hole in the housing lets propellant vapor mix into the liquid stream. That gives a finer, drier spray and reduces product per second.</li>
  <li><strong>Gasket compatibility:</strong> nitrile, neoprene, butyl or EPDM, chosen so the product and propellant do not swell or extract it. Swollen gaskets leak or stick.</li>
  <li><strong>Crimp dimensions:</strong> crimp depth and diameter are measured on the line. A poor crimp leaks slowly over months.</li>
  <li><strong>Upright vs inverted use:</strong> with a dip tube the valve only works upright. Inverted-use valves (for whipped cream and spray foam) have no dip tube or a ball-switch valve.</li>
</ul>

<h2>Materials and manufacturing</h2>
<ul>
  <li>Cans: three-piece welded tinplate steel, or one-piece aluminum monobloc (impact extruded from a slug). Cans are rated so they survive the pressure reached at 50 °C with a safety margin.</li>
  <li>Mounting cups: tinplate or aluminum, often lacquered or laminated inside.</li>
  <li>Stems, housings and actuators: molded acetal, nylon, PP or PE. Springs are stainless steel.</li>
  <li>Filling: product is filled first, the valve is crimped, then liquefied propellant is pressure-filled through the valve. Every filled can then passes a hot-water bath (or an approved alternative) to find leaks and weak cans.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Clogged orifice from dried product (why some cans tell you to spray upside down to clear the valve).</li>
  <li>Slow leakage through a swollen gasket or poor crimp: the can loses pressure on the shelf.</li>
  <li>Loss of propellant before product when sprayed inverted with a dip-tube valve.</li>
  <li>Can deformation or rupture if overheated.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Pull the actuator off an empty can and look at the stem: the side orifice is just visible near the top.</li>
    <li>Compare an air duster (liquefied propellant, gets very cold) with a compressed-gas can whose spray fades toward the end.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'What actually opens the flow path when you press an aerosol actuator?',
      options: [
        'A ball lifts off its seat',
        'The stem\'s side orifice moves past the stem gasket into the pressurized housing',
        'The mounting cup flexes and lets gas escape',
        'A diaphragm ruptures',
      ],
      answer: 1,
      explain: 'At rest the gasket covers the stem orifice. Pushing the stem down moves the orifice into the housing, where product is at can pressure.',
    },
    {
      q: 'Why does a can with liquefied propellant keep nearly constant pressure as it empties?',
      options: [
        'The valve regulates pressure',
        'Liquid propellant evaporates to refill the headspace at its vapor pressure, which depends only on temperature',
        'The can shrinks as it empties',
        'The dip tube restricts flow more as the level drops',
      ],
      answer: 1,
      explain: 'As long as liquid propellant remains, the headspace stays at the propellant\'s vapor pressure for that temperature.',
    },
    {
      q: 'What is the main drawback of compressed-gas propellants such as nitrogen?',
      options: [
        'They are flammable',
        'Pressure, and so spray quality, falls as the product is used',
        'They dissolve the gasket',
        'They only work upside down',
      ],
      answer: 1,
      explain: 'A fixed mass of gas expands into more space as product leaves, so pressure drops (roughly per Boyle\'s law).',
    },
    {
      q: 'What does a vapor-phase tap (VPT) in the valve housing do?',
      options: [
        'Vents excess pressure to atmosphere',
        'Mixes propellant vapor into the liquid stream for a finer, drier spray',
        'Lets the can be refilled',
        'Prevents the stem from sticking',
      ],
      answer: 1,
      explain: 'The small hole lets headspace vapor join the liquid, which helps atomization and lowers the product delivery rate.',
    },
    {
      q: 'Which system lets a product spray at any angle with no propellant in contact with it?',
      options: ['Vapor-phase tap valve', 'Bag-on-valve', 'Dip-tube valve with liquefied propellant', 'Metered valve'],
      answer: 1,
      explain: 'In bag-on-valve, product sits in a bag welded to the valve. Compressed gas outside the bag squeezes it, so orientation does not matter.',
    },
  ],
});
