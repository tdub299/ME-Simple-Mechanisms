Registry.registerTopic('lesson-1', {
  n: 4,
  title: 'Metered-dose and dry-powder inhalers',
  family: 'Medical device',
  readTime: 14,
  source: 'doc',
  summary:
    'An inhaler\'s job is to deliver the same tiny mass of drug, as particles roughly 1–5 µm in aerodynamic diameter, every time, for hundreds of doses. Metered-dose inhalers do it with a precision valve and a liquefied propellant; dry-powder inhalers use mechanical metering and the patient\'s own breath.',
  body: `
<p>Particle size is the governing requirement: above roughly 5 µm, particles impact in the mouth and throat; below about 1 µm, many are exhaled.</p>

<h2>Pressurized metered-dose inhaler (pMDI)</h2>
<p>Three subassemblies:</p>
<ul>
  <li><strong>Canister:</strong> deep-drawn aluminum can holding drug suspended or dissolved in liquefied propellant at roughly 4–6 bar vapor pressure. Interiors may be anodized or fluoropolymer-coated to stop drug sticking to the wall.</li>
  <li><strong>Metering valve:</strong> crimped onto the can neck with an aluminum ferrule. It contains a metering chamber of typically 25–100 µL, a spring-returned stem, and two elastomer seals.</li>
  <li><strong>Actuator</strong> (the plastic "boot"): holds the can upside down and contains the stem seat, an expansion chamber (sump) and a small spray orifice, typically around 0.25–0.6 mm.</li>
</ul>

<figure class="diagram">
  <svg viewBox="0 0 560 300" role="img" aria-label="Pressurized metered-dose inhaler assembly: canister upside down in the actuator boot, stem block, sump, spray orifice and mouthpiece">
    <rect class="part" x="186" y="26" width="108" height="150" rx="16"/>
    <rect class="fl" x="190" y="110" width="100" height="62" rx="10"/>
    <rect class="part" x="212" y="172" width="56" height="20" rx="3"/>
    <rect class="part" x="234" y="192" width="12" height="34"/>
    <path class="ln" stroke-width="5" d="M168,14 L168,250 L478,250 L478,186 L322,186 L322,14"/>
    <path class="part" d="M200,226 L280,226 L280,250 L200,250 Z"/>
    <path class="fl-line" d="M240,226 L240,238 L282,238"/>
    <path class="fl" opacity="0.55" d="M284,238 L470,200 L470,248 Z"/>
    <path class="ln arr" d="M240,0 L240,20" transform="translate(0,2)"/>
    <rect class="acc-fill" x="132" y="70" width="34" height="40" rx="4"/>
    <text class="lbl-b" x="250" y="14">press</text>
    <text class="lbl" x="20" y="44">Canister, upside down</text>
    <text class="lbl" x="20" y="60">(drug + propellant)</text>
    <line class="thin" x1="150" y1="56" x2="190" y2="70"/>
    <text class="lbl-acc" x="20" y="96">dose counter</text>
    <text class="lbl" x="20" y="150">metering valve,</text>
    <text class="lbl" x="20" y="166">crimped on the neck</text>
    <line class="thin" x1="128" y1="160" x2="212" y2="182"/>
    <text class="lbl" x="20" y="210">stem</text>
    <line class="thin" x1="52" y1="206" x2="234" y2="210"/>
    <text class="lbl" x="20" y="272">stem block with sump</text>
    <line class="thin" x1="150" y1="266" x2="210" y2="244"/>
    <text class="lbl-fl" x="300" y="276">spray orifice (≈0.25–0.6 mm) → plume</text>
    <line class="thin" x1="300" y1="266" x2="284" y2="240"/>
    <text class="lbl" x="340" y="176">actuator "boot" and mouthpiece</text>
  </svg>
  <figcaption>The whole device. The can sits upside down in the plastic boot. Pressing it pushes the valve body down onto the fixed stem, and the dose flows through the stem block's sump and out of a tiny orifice toward the mouthpiece.</figcaption>
</figure>

<figure class="diagram">
  <svg viewBox="0 0 600 270" role="img" aria-label="Metering valve at rest and when pressed, showing the two seals and the moving stem">
    <text class="lbl" x="6" y="58">Can (drug +</text>
    <text class="lbl" x="6" y="72">propellant)</text>
    <line class="thin" x1="84" y1="62" x2="158" y2="56"/>
    <text class="lbl" x="6" y="96">Inner seal</text>
    <line class="thin" x1="72" y1="92" x2="158" y2="76"/>
    <text class="lbl" x="6" y="118">Metering</text>
    <text class="lbl" x="6" y="132">chamber</text>
    <line class="thin" x1="70" y1="122" x2="158" y2="112"/>
    <text class="lbl" x="6" y="152">Outer seal</text>
    <line class="thin" x1="74" y1="148" x2="158" y2="145"/>
    <text class="lbl" x="6" y="176">Side port</text>
    <line class="thin" x1="70" y1="172" x2="246" y2="160"/>
    <text class="lbl" x="6" y="212">Stem (to</text>
    <text class="lbl" x="6" y="226">actuator)</text>
    <line class="thin" x1="66" y1="214" x2="232" y2="210"/>

    <g transform="translate(140,0)">
      <text class="lbl-b" x="40" y="22">At rest: chamber fills</text>
      <rect class="hot-fill" x="20" y="36" width="180" height="34"/>
      <rect class="fl" x="20" y="80" width="180" height="60"/>
      <rect class="hatch" x="20" y="70" width="72" height="10"/><rect class="hatch" x="108" y="70" width="92" height="10"/>
      <rect class="hatch" x="20" y="140" width="72" height="10"/><rect class="hatch" x="108" y="140" width="92" height="10"/>
      <path class="ln" d="M20,36 L20,150 M200,36 L200,150"/>
      <rect class="part" x="92" y="56" width="16" height="6"/>
      <rect class="part" x="97" y="62" width="6" height="24"/>
      <rect class="part" x="92" y="86" width="16" height="144"/>
      <path class="fl-line" d="M100,160 L100,230 M100,160 L108,160"/>
      <path class="fl-line arr-fl" d="M60,58 L60,104"/>
      <text class="lbl-sm" x="114" y="254">groove spans inner seal</text>
    </g>

    <g transform="translate(370,0)">
      <text class="lbl-b" x="30" y="22">Pressed: chamber empties</text>
      <rect class="hot-fill" x="20" y="36" width="180" height="34"/>
      <rect class="fl" x="20" y="80" width="180" height="60" opacity="0.55"/>
      <rect class="hatch" x="20" y="70" width="72" height="10"/><rect class="hatch" x="108" y="70" width="92" height="10"/>
      <rect class="hatch" x="20" y="140" width="72" height="10"/><rect class="hatch" x="108" y="140" width="92" height="10"/>
      <path class="ln" d="M20,36 L20,150 M200,36 L200,150"/>
      <rect class="part" x="92" y="32" width="16" height="6"/>
      <rect class="part" x="97" y="38" width="6" height="24"/>
      <rect class="part" x="92" y="62" width="16" height="144"/>
      <path class="fl-line" d="M100,136 L100,206 M100,136 L108,136"/>
      <path class="fl-line arr-fl" d="M150,110 C130,120 118,130 110,134"/>
      <path class="fl-line arr-fl" d="M100,212 L100,250"/>
      <path class="ln arr" d="M160,240 L160,196"/>
      <text class="lbl" x="122" y="262">stem pushed in</text>
    </g>
  </svg>
  <figcaption>Shown upside down, as in use. At rest the stem's groove links can and chamber. Pressing first seals the chamber from the can, then lifts the side port past the outer seal so the dose escapes down the stem.</figcaption>
</figure>

<p>The cycle:</p>
<ol>
  <li>At rest, the metering chamber is open to the can and fills with formulation.</li>
  <li>Pressing the can pushes the stem in. The inner seal closes the chamber off from the can first.</li>
  <li>The stem's side port then passes the outer seal and opens the chamber to the actuator.</li>
  <li>The propellant flashes to vapor as pressure drops, shattering the liquid into droplets that leave the orifice as a fast plume. Droplets evaporate to leave drug particles.</li>
  <li>On release, the spring returns the stem, and the chamber refills.</li>
</ol>
<p>The sequencing of the two seals is the core design: the chamber must never be open to both sides at once, or the device would vent continuously.</p>
<p>Design levers and issues:</p>
<ul>
  <li><strong>Orifice diameter and sump geometry</strong> set plume velocity and droplet size. Smaller orifices give finer particles and a slower, longer plume.</li>
  <li><strong>Loss of prime:</strong> in suspension products, drug can drain from the chamber during storage, so the first dose is low. Valve geometry and "priming" instructions deal with this.</li>
  <li><strong>Seal compatibility:</strong> gaskets (nitrile, EPDM, chloroprene, butyl) must resist swelling in propellant and not leach extractables into the drug.</li>
  <li><strong>Coordination:</strong> the patient must press and inhale at the same moment. Spacers and breath-actuated MDIs (a vane or diaphragm releases a preloaded spring when inhalation starts) address this.</li>
  <li><strong>Dose counters:</strong> regulators expect them on new products (FDA guidance dates from 2003). Most count a stroke with a ratchet wheel driven by can travel, with a threshold so a partial press does not count.</li>
  <li><strong>Propellant transition:</strong> current HFA-134a and HFA-227ea propellants have high global warming potential. The industry is moving to lower-GWP HFA-152a and HFO-1234ze, which requires requalifying valves, seals and formulations.</li>
</ul>

<h2>Dry-powder inhaler (DPI)</h2>
<p>No propellant: the patient's inhalation (typically 30–90 L/min) fluidizes and disperses a powder. The formulation is usually micronized drug (jet milled to a few microns) blended onto coarse lactose carrier particles (tens of microns), which flow well enough to meter. Turbulence and impaction inside the device strip drug particles off the carrier.</p>
<table>
  <tr><th>Format</th><th>Metering method</th><th>Examples of the principle</th></tr>
  <tr><td>Reservoir</td><td>A rotating dosing plate with small cavities is filled from a bulk powder store and scraped level</td><td>Twist-grip reservoir inhalers</td></tr>
  <tr><td>Pre-metered blister strip</td><td>Factory-filled foil blisters; a lever indexes the strip and peels the lid</td><td>Disc-shaped lever-operated devices</td></tr>
  <tr><td>Capsule</td><td>Patient loads a capsule; pins pierce it; inhalation spins it to release powder</td><td>Low-cost single-dose devices</td></tr>
</table>
<p>Design levers:</p>
<ul>
  <li><strong>Device resistance:</strong> a high-resistance device creates more turbulence at lower flow but is harder to breathe through. Designers balance dispersion against patient effort.</li>
  <li><strong>Moisture:</strong> powder cakes in humidity. Reservoirs carry a desiccant; blister strips use aluminum foil laminates as a moisture barrier.</li>
  <li><strong>Metering accuracy:</strong> depends on powder flow and how consistently cavities fill, so cavity geometry and scraper design matter as much as the formulation.</li>
</ul>

<h2>Soft mist inhaler (a third approach)</h2>
<p>A spring is wound by twisting the device base. Firing releases it to force about 15 µL of drug solution through a microfabricated nozzle block (two jets that collide) to make a slow mist lasting over a second. It decouples dose quality from both propellant and breath strength.</p>

<h2>Materials</h2>
<ul>
  <li><strong>Plastics:</strong> polypropylene for actuators and housings; acetal (POM) for gears, counters and cams; ABS, PC or PBT for structural parts. All must meet medical biocompatibility (ISO 10993) and extractables/leachables requirements.</li>
  <li><strong>Metals:</strong> aluminum for cans and ferrules; stainless steel for valve springs and sometimes stems (others use acetal or PBT stems).</li>
  <li><strong>Elastomers:</strong> valve gaskets chosen for propellant compatibility and low extractables.</li>
</ul>

<h2>Manufacturing</h2>
<ul>
  <li>High-cavity injection molding (often 32–96 cavities) with tight control of the actuator orifice, which is commonly formed by a core pin and is one of the most critical dimensions in the product.</li>
  <li>Canisters are impact-extruded or deep drawn, then coated.</li>
  <li>Filling is either cold fill (chilled propellant) or pressure fill through the valve after crimping.</li>
  <li>Automated assembly with 100% vision inspection and in-line checks for crimp height and leak rate.</li>
  <li>Product performance is tested with cascade impactors (Next Generation Impactor, Andersen) for particle size distribution, and for delivered dose uniformity across the device's life. ISO 20072 covers design verification for aerosol drug delivery devices.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Pop the can out of an MDI boot and look into the actuator: the tiny orifice and the stem seat are the precision features.</li>
    <li>On a DPI with a counter, click slowly and listen for the counter's ratchet advancing separately from the dose mechanism.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'Why do inhalers target particles of roughly 1–5 µm aerodynamic diameter?',
      options: [
        'Larger particles hit the mouth and throat; much smaller ones are largely exhaled',
        'That size is easiest to mold into the actuator',
        'Smaller particles would clog the spray orifice',
        'It matches the propellant droplet size exactly',
      ],
      answer: 0,
      explain: 'Above ~5 µm, particles impact in the mouth and throat. Below ~1 µm, many never deposit and are breathed out.',
    },
    {
      q: 'In a metering valve, what must the stem do as it is pressed?',
      options: [
        'Open the chamber to the actuator, then close it from the can',
        'Close the chamber from the can first, then open it to the actuator',
        'Open both seals at the same time for a fast dose',
        'Close the outer seal and leave the inner seal open',
      ],
      answer: 1,
      explain: 'The chamber must never be open to both sides at once, or the can would vent continuously. The inner seal closes before the side port passes the outer seal.',
    },
    {
      q: 'Making the actuator orifice smaller generally gives:',
      options: [
        'Larger particles and a faster plume',
        'No change, because only the valve sets particle size',
        'Finer particles and a slower, longer plume',
        'A larger dose per actuation',
      ],
      answer: 2,
      explain: 'Orifice size and sump geometry set plume velocity and droplet size. Smaller gives finer droplets and a slower, longer-lasting plume.',
    },
    {
      q: 'In a typical dry-powder inhaler, why is micronized drug blended onto coarse lactose particles?',
      options: [
        'Lactose acts as the propellant',
        'Lactose dissolves the drug for absorption',
        'The coarse blend flows well enough to meter, and turbulence strips the fine drug off during inhalation',
        'It keeps the powder dry without a desiccant',
      ],
      answer: 2,
      explain: 'Micron-size drug alone is cohesive and will not meter. The carrier gives flow, and the device turbulence separates the drug at inhalation.',
    },
    {
      q: 'Why do dose counters include a threshold in their stroke-counting ratchet?',
      options: [
        'So a partial press that does not fire a dose is not counted',
        'To slow down how fast the patient can fire doses',
        'To prevent loss of prime',
        'To meet the propellant GWP rules',
      ],
      answer: 0,
      explain: 'The counter should track doses actually delivered. The threshold makes sure a partial press does not register.',
    },
  ],
});
