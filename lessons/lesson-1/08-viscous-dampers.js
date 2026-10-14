Registry.registerTopic('lesson-1', {
  n: 8,
  title: 'Rotary and linear viscous dampers',
  family: 'Damping',
  readTime: 9,
  source: 'new',
  summary:
    'A viscous damper turns motion into heat by shearing a thin film of fluid, usually silicone oil. Force or torque rises with speed, so it slows fast motion while letting slow motion through. The design comes down to three things: fluid viscosity, the size of the gap, and how much area is being sheared.',
  body: `
<h2>How it works</h2>
<p>A rotary damper is a rotor sitting in a sealed cup of silicone fluid, with gaps of a few tenths of a millimeter between rotor and housing. Turning the rotor shears the fluid. In a thin gap the velocity profile is linear (Couette flow), so the shear stress is:</p>
<div class="formula">τ = μ · <span class="frac"><span>v</span><span>h</span></span></div>
<p>where μ is dynamic viscosity, v the surface speed and h the gap. Integrating over a disc face of radius R turning at ω gives:</p>
<div class="formula">T = <span class="frac"><span>π μ ω R<sup>4</sup></span><span>2h</span></span> (per face)</div>
<p>Torque scales with R<sup>4</sup> and with 1/h. Radius is the strongest lever and gap control is the critical tolerance.</p>

<figure class="diagram">
  <svg viewBox="0 0 572 250" role="img" aria-label="Cross-section of a rotary damper and the linear velocity profile in a thin fluid gap">
    <rect class="fl" x="42" y="92" width="216" height="96"/>
    <path class="ln" d="M40,90 L132,90 M168,90 L260,90 L260,190 L40,190 Z"/>
    <rect class="part" x="58" y="104" width="184" height="72" rx="3"/>
    <rect class="part" x="142" y="40" width="16" height="136"/>
    <path class="part" d="M110,48 L110,36 l8,-6 l8,6 l8,-6 l8,6 l8,-6 l8,6 l8,-6 l8,6 l8,-6 l8,6 L190,48 Z"/>
    <circle class="acc-fill" cx="136" cy="86" r="5"/><circle class="acc-fill" cx="164" cy="86" r="5"/>
    <text class="lbl" x="200" y="34">Gear (input)</text>
    <text class="lbl" x="176" y="74">O-ring seal</text>
    <text class="lbl-b" x="70" y="146">Rotor</text>
    <text class="lbl-fl" x="40" y="214">Silicone fluid in thin gaps</text>
    <text class="lbl" x="40" y="232">(gaps exaggerated)</text>
    <g transform="translate(300,0)">
      <text class="lbl-b" x="10" y="26">Inside one gap</text>
      <rect class="part" x="20" y="54" width="220" height="12"/>
      <path class="acc arr-acc" d="M90,44 L170,44"/>
      <text class="lbl-acc" x="176" y="48">v</text>
      <rect class="fl" x="20" y="66" width="220" height="100"/>
      <rect class="hatch" x="20" y="166" width="220" height="12"/>
      <path class="ln arr" d="M60,146 L76,146"/>
      <path class="ln arr" d="M60,126 L100,126"/>
      <path class="ln arr" d="M60,106 L124,106"/>
      <path class="ln arr" d="M60,86 L148,86"/>
      <line class="dash" x1="60" y1="166" x2="160" y2="66"/>
      <line class="thin" x1="250" y1="66" x2="250" y2="166"/>
      <text class="lbl" x="256" y="120">h</text>
      <text class="lbl" x="20" y="200">Fluid speed rises linearly from 0 at the</text>
      <text class="lbl" x="20" y="216">wall to v at the rotor: τ = μ v / h</text>
    </g>
  </svg>
  <figcaption>Left: a typical gear-driven rotary damper. Right: the shear in each gap. Halve the gap and torque doubles.</figcaption>
</figure>

<h2>Linear dampers</h2>
<p>A piston in a cylinder pushes fluid through either a long thin annular gap or a short orifice:</p>
<ul>
  <li><strong>Annular gap / capillary (laminar):</strong> force ∝ viscosity × velocity. Smooth and linear, but strongly temperature-dependent because it depends directly on viscosity.</li>
  <li><strong>Orifice (turbulent):</strong> pressure drop ∝ density × velocity². Much less sensitive to viscosity and temperature, but force climbs steeply with speed. Vehicle shock absorbers use orifices plus spring-loaded valve stacks to shape the curve.</li>
</ul>
<figure class="diagram">
  <svg viewBox="0 0 560 230" role="img" aria-label="Cross-section of a one-way linear damper: oil-filled cylinder, piston with small orifice and check valve, return spring, rod seal and air pocket">
    <rect class="fl" x="62" y="72" width="336" height="76"/>
    <rect class="hot-fill" x="62" y="72" width="30" height="76" opacity="0.6"/>
    <rect class="ln" x="60" y="70" width="340" height="80"/>
    <rect class="part" x="220" y="72" width="18" height="76"/>
    <line class="fl-line" x1="220" y1="88" x2="238" y2="88" stroke="var(--surface)" stroke-width="3"/>
    <rect x="220" y="122" width="18" height="12" fill="var(--surface)"/>
    <line class="acc" x1="242" y1="116" x2="242" y2="140" stroke-width="4"/>
    <rect class="part" x="238" y="103" width="272" height="14"/>
    <rect class="acc-fill" x="392" y="90" width="8" height="13"/><rect class="acc-fill" x="392" y="117" width="8" height="13"/>
    <path class="spring" d="M240,110 l10,-24 l10,24 l10,-24 l10,24 l10,-24 l10,24 l10,-24 l10,24 l10,-24 l10,24 l10,-24 l10,24 l10,-24 l10,24 l10,-24"/>
    <path class="hot arr" d="M540,110 L514,110"/>
    <path class="fl-line arr-fl" d="M200,88 L216,88"/>
    <text class="lbl-hot" x="476" y="96">door pushes</text>
    <text class="lbl" x="40" y="40">air pocket or foam takes up</text>
    <text class="lbl" x="40" y="56">the volume of the entering rod</text>
    <line class="thin" x1="76" y1="60" x2="76" y2="80"/>
    <text class="lbl-fl" x="120" y="184">small orifice: the only path on the push stroke</text>
    <line class="thin" x1="200" y1="174" x2="228" y2="92"/>
    <text class="lbl-acc" x="250" y="202">check valve: shut on push, open on return</text>
    <line class="thin" x1="260" y1="192" x2="244" y2="140"/>
    <text class="lbl" x="300" y="56">return spring</text>
    <text class="lbl-acc" x="404" y="62">rod seal</text>
  </svg>
  <figcaption>A typical soft-close damper. Pushed in, the piston forces oil through a tiny orifice, so force rises with speed. On the way back out, the check valve opens and the spring resets the rod with almost no resistance.</figcaption>
</figure>

<p>A check valve in the piston makes a damper one-way (soft-close drawers and hinges, Topic 7). Rotary dampers get the same effect with a one-way clutch on the shaft (Topic 5).</p>

<h2>Key design parameters</h2>
<ul>
  <li><strong>Viscosity grade:</strong> silicone fluids are sold from about 1,000 to over 1,000,000 cSt, so one housing can cover a wide torque range by changing fluid alone.</li>
  <li><strong>Gap:</strong> typically 0.1–0.5 mm. A ±10% gap variation gives roughly ±10% torque, so molded-part tolerances and rotor wobble matter.</li>
  <li><strong>Shear thinning:</strong> very high-viscosity silicone becomes non-Newtonian at high shear rates, so torque rises less than linearly with speed. Catalogs list torque at a stated speed for this reason.</li>
  <li><strong>Temperature:</strong> silicone's viscosity changes far less with temperature than mineral oil's, which is the main reason it is used. Damping still drifts noticeably between a cold car and a hot one.</li>
  <li><strong>Air and fill:</strong> trapped air makes a spongy, inconsistent damper, so housings are filled under vacuum or in a controlled sequence.</li>
  <li><strong>Sealing:</strong> an O-ring or lip seal on the shaft; leakage slowly lowers torque. Silicone fluid has very low vapor pressure, so it does not evaporate away.</li>
</ul>

<h2>Where you see them</h2>
<table>
  <tr><th>Application</th><th>Type</th></tr>
  <tr><td>Glovebox lids, car grab handles, cupholders</td><td>Rotary, gear-driven from a molded rack or sector</td></tr>
  <tr><td>Soft-close toilet seats</td><td>Rotary, built into the hinge, one-way</td></tr>
  <tr><td>Printer and scanner lids, appliance doors</td><td>Rotary or linear</td></tr>
  <tr><td>Soft-close drawers and hinges</td><td>Linear, one-way</td></tr>
  <tr><td>Vehicle shock absorbers</td><td>Linear, orifice + valve stacks, mineral oil</td></tr>
</table>

<h2>Materials and manufacturing</h2>
<ul>
  <li>Housing and rotor: injection-molded POM, PBT or nylon on consumer parts; die-cast zinc or aluminum on heavier ones.</li>
  <li>Fluid: polydimethylsiloxane (silicone oil); chemically inert, wide temperature range, low volatility.</li>
  <li>Seals: silicone-compatible elastomers (often EPDM or nitrile; silicone seals swell in silicone oil).</li>
  <li>Assembly: automated fill and seal, then 100% torque test at a set speed.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Seal leakage: torque fades and fluid weeps out.</li>
  <li>Air ingress: lost motion or "dead spot" at direction reversal.</li>
  <li>Gear teeth stripping when the damped part is forced quickly.</li>
  <li>Temperature extremes: too stiff when cold, too weak when hot.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Open a car glovebox and look for the small gear damper running on a curved rack.</li>
    <li>Push a soft-close toilet seat down fast and slow: the resistance rises with speed.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'For a rotary disc damper, T ≈ πμωR⁴ / (2h). If you double the rotor radius, the torque becomes roughly:',
      options: ['2×', '4×', '8×', '16×'],
      answer: 3,
      explain: 'Torque scales with R⁴, so 2⁴ = 16×. Radius is the strongest design lever.',
    },
    {
      q: 'What happens to damping torque if the shear gap is halved (all else equal)?',
      options: ['It halves', 'It doubles', 'It quadruples', 'It is unchanged'],
      answer: 1,
      explain: 'Shear stress τ = μv/h, so torque is proportional to 1/h. Halving h doubles torque.',
    },
    {
      q: 'What is the main reason silicone oil is the default damping fluid?',
      options: [
        'It is the cheapest oil available',
        'Its viscosity changes much less with temperature than mineral oil, and it is inert with low volatility',
        'It is non-Newtonian at all speeds',
        'It is compressible, which adds spring',
      ],
      answer: 1,
      explain: 'Stable viscosity over temperature, chemical inertness and very low vapor pressure make silicone predictable across a product\'s life.',
    },
    {
      q: 'A damper filled with very high-viscosity silicone gives less torque at high speed than a linear-in-speed prediction. Why?',
      options: [
        'The fluid boils',
        'Shear thinning: the fluid\'s apparent viscosity drops at high shear rates',
        'The gap gets larger at speed',
        'The O-ring stops sealing',
      ],
      answer: 1,
      explain: 'Very high-viscosity silicones are non-Newtonian. Their apparent viscosity falls at high shear rates, so torque grows less than linearly.',
    },
    {
      q: 'Compared with a laminar annular-gap damper, an orifice damper is:',
      options: [
        'More temperature sensitive, force ∝ v',
        'Less temperature sensitive, force ∝ v²',
        'Identical in behavior',
        'Only usable with silicone oil',
      ],
      answer: 1,
      explain: 'Turbulent orifice pressure drop depends mainly on density and v², not viscosity, so it varies less with temperature but rises steeply with speed.',
    },
  ],
});
