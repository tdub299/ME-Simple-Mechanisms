Registry.registerTopic('lesson-1', {
  n: 1,
  title: 'Pressure regulators',
  family: 'Fluid control',
  readTime: 12,
  source: 'doc',
  summary:
    'A pressure-reducing regulator is a force-balance valve: a spring pushes the valve open, outlet pressure acting on a diaphragm pushes it closed, and the valve settles wherever those forces balance.',
  body: `
<h2>What it does</h2>
<p>It takes a high, often falling, inlet pressure (a 200 bar gas cylinder, 7 bar shop air, a 10 bar water main) and delivers a lower, steadier outlet pressure regardless of flow demand. It is a proportional controller with no electronics: the sensing element, setpoint and actuator are all mechanical.</p>

<figure class="diagram">
  <svg viewBox="0 0 540 310" role="img" aria-label="Cross-section of a direct-acting spring-loaded pressure regulator">
    <rect class="hot-fill" x="120" y="214" width="280" height="78"/>
    <rect class="hot-fill" x="20" y="240" width="100" height="32"/>
    <rect class="fl" x="120" y="132" width="280" height="74"/>
    <rect class="fl" x="400" y="160" width="110" height="32"/>
    <path class="ln" d="M120,40 L120,240 M120,272 L120,292 L400,292 L400,192 M400,160 L400,90 M400,80 L400,40 L120,40"/>
    <path class="ln" d="M20,240 L120,240 M20,272 L120,272 M400,160 L510,160 M400,192 L510,192"/>
    <path class="hatch" d="M120,206 L242,206 L242,214 L120,214 Z"/>
    <path class="hatch" d="M278,206 L400,206 L400,214 L278,214 Z"/>
    <rect class="part" x="235" y="10" width="50" height="16" rx="3"/>
    <line class="ln" x1="260" y1="26" x2="260" y2="52"/>
    <rect class="part" x="225" y="52" width="70" height="8" rx="2"/>
    <path class="spring" d="M260,60 l-28,5 l56,8 l-56,8 l56,8 l-56,8 l56,8 l-56,8 l56,8 l-28,3"/>
    <path class="acc" d="M120,131 Q260,137 400,131"/>
    <rect class="part" x="222" y="124" width="76" height="9" rx="2"/>
    <line class="ln" x1="260" y1="133" x2="260" y2="222"/>
    <rect class="part" x="232" y="222" width="56" height="14" rx="3"/>
    <path class="spring" d="M260,236 l-14,4 l28,8 l-28,8 l28,8 l-28,8 l28,8 l-28,8 l14,4"/>
    <path class="fl-line arr-fl" d="M34,256 L196,256 C222,256 224,218 246,218 C254,204 280,188 320,180 L500,176"/>
    <path class="acc arr-acc" d="M330,66 L330,112"/>
    <path class="fl-line arr-fl" d="M170,196 L170,144"/>
    <path class="fl-line arr-fl" d="M360,196 L360,144"/>
    <path class="hot arr" d="M300,286 L300,240"/>
    <text class="lbl-acc" x="338" y="94">F spring</text>
    <text class="lbl-fl" x="128" y="172">P out</text>
    <text class="lbl-hot" x="308" y="270">P in</text>
    <text class="lbl" x="292" y="22">Adjusting knob</text>
    <text class="lbl" x="128" y="62">Loading spring</text>
    <text class="lbl" x="406" y="128">Diaphragm</text>
    <text class="lbl" x="406" y="86">vent</text>
    <text class="lbl" x="126" y="228">Seat</text>
    <text class="lbl" x="294" y="233">Poppet</text>
    <text class="lbl-b" x="22" y="232">Inlet (high P)</text>
    <text class="lbl-b" x="410" y="152">Outlet</text>
  </svg>
  <figcaption>Spring force (blue) pushes the diaphragm and poppet down, opening the seat. Outlet pressure under the diaphragm and inlet pressure under the poppet both push it closed.</figcaption>
</figure>

<h2>How it works (direct-acting, spring-loaded)</h2>
<ol>
  <li>Turning the adjusting knob compresses the loading spring, which presses down on the diaphragm.</li>
  <li>The diaphragm is linked to a poppet (valve plug) and lifts it off its seat, letting gas flow from inlet to outlet.</li>
  <li>Outlet pressure fills the chamber under the diaphragm and pushes up against the spring.</li>
  <li>When outlet pressure × diaphragm area equals spring force, the poppet sits at just the opening needed to pass the current flow.</li>
  <li>If demand rises, outlet pressure dips slightly, the spring wins, and the poppet opens further. If demand stops, outlet pressure rises until the poppet seals ("lock-up").</li>
</ol>
<p>The simplified force balance on the moving assembly, for a poppet that inlet pressure pushes closed:</p>
<div class="formula">P<sub>out</sub> ≈ <span class="frac"><span>F<sub>spring</sub> − P<sub>in</sub>·A<sub>seat</sub></span><span>A<sub>diaphragm</sub></span></span></div>
<p>Every classic regulator behavior falls out of this equation.</p>

<h2>The four behaviors to know</h2>
<ul>
  <li><strong>Droop (offset).</strong> As flow rises the poppet must open further, so the spring extends and loses force (k × lift). Outlet pressure therefore falls with flow. Droop is reduced by a large diaphragm area and a soft, long spring. This is why low-pressure propane regulators have dinner-plate diaphragms.</li>
  <li><strong>Supply pressure effect.</strong> The P<sub>in</sub> × A<sub>seat</sub> term means inlet pressure changes shift the outlet. In a typical cylinder regulator, outlet pressure rises as the cylinder empties. Fixes: a small seat orifice, a balanced poppet (inlet pressure acts on equal areas both ways), or a two-stage regulator where stage one feeds stage two a nearly constant intermediate pressure.</li>
  <li><strong>Lock-up and creep.</strong> At zero flow, outlet pressure must climb a little above setpoint to crush the seat closed. If the seat is damaged or contaminated, gas leaks past and outlet pressure creeps upward toward inlet pressure. Creep is the main safety failure mode, which is why downstream relief valves exist.</li>
  <li><strong>Hysteresis and instability.</strong> Diaphragm and O-ring friction make the curve differ for rising and falling flow. The poppet, spring and downstream gas volume also form a mass-spring system that can chatter or "hum". Designers add a damping orifice, a friction element, or more downstream volume.</li>
</ul>

<figure class="diagram">
  <svg viewBox="0 0 520 240" role="img" aria-label="Regulator flow curve: outlet pressure versus flow showing lock-up and droop">
    <line class="ln" x1="60" y1="200" x2="490" y2="200"/>
    <line class="ln" x1="60" y1="200" x2="60" y2="20"/>
    <line class="dash" x1="60" y1="84" x2="490" y2="84"/>
    <path class="acc" d="M62,56 L76,78 C150,90 300,104 380,120 C430,132 460,158 482,192"/>
    <circle class="acc-fill" cx="62" cy="56" r="4"/>
    <text class="lbl" x="420" y="78">Setpoint</text>
    <text class="lbl-acc" x="72" y="46">Lock-up (zero flow)</text>
    <text class="lbl-acc" x="230" y="122">Droop</text>
    <text class="lbl" x="394" y="166">Seat fully open</text>
    <text class="lbl" x="420" y="222">Flow →</text>
    <text class="lbl" x="14" y="110" transform="rotate(-90 26 110)">Outlet pressure</text>
  </svg>
  <figcaption>A typical flow curve. Lock-up sits above setpoint, droop pulls pressure down as flow rises, and pressure collapses once the seat cannot open further.</figcaption>
</figure>

<h2>Common variants</h2>
<table>
  <tr><th>Type</th><th>Key difference</th><th>Typical use</th></tr>
  <tr><td>Relieving (self-venting)</td><td>Diaphragm has a vent seat that bleeds excess outlet pressure to atmosphere</td><td>Pneumatic FRL units, instrument air</td></tr>
  <tr><td>Non-relieving</td><td>No vent; outlet stays high if the setpoint is lowered</td><td>Toxic, flammable or costly gases</td></tr>
  <tr><td>Two-stage</td><td>Two regulators in series in one body</td><td>Lab and cylinder gases needing flat output</td></tr>
  <tr><td>Piston-sensing</td><td>Piston and O-ring instead of diaphragm</td><td>High outlet pressures, rugged service; more friction</td></tr>
  <tr><td>Pilot-operated</td><td>A small pilot regulator loads the main valve</td><td>Large flows, gas distribution, low droop</td></tr>
  <tr><td>Back-pressure regulator</td><td>Senses inlet and opens to hold it below setpoint</td><td>Process control, relieving upstream systems</td></tr>
  <tr><td>Balanced poppet (scuba first stage)</td><td>Inlet pressure cancels on the poppet</td><td>Cylinder-fed devices where supply decays</td></tr>
</table>

<h2>Materials</h2>
<ul>
  <li><strong>Bodies:</strong> forged brass (CW617N / C37700) is the default for gas and water; 316L stainless for corrosive or high-purity service; aluminum where weight matters (medical oxygen, paintball); zinc die-cast or glass-filled nylon/PBT for low-cost pneumatic units.</li>
  <li><strong>Diaphragms:</strong> fabric-reinforced elastomer (nitrile for air and oil, EPDM for water, fluorocarbon for chemicals and heat). Ultra-high-purity semiconductor regulators use thin metal diaphragms (316L, Hastelloy, Elgiloy) to eliminate outgassing and permeation.</li>
  <li><strong>Seats:</strong> soft seats seal at low lock-up force. PCTFE (Kel-F) is common for oxygen and high pressure; PTFE, nylon, PEEK and polyimide (Vespel) are also used depending on pressure, temperature and chemical compatibility.</li>
  <li><strong>Springs:</strong> music wire, 302 stainless, or 17-7PH stainless when relaxation at temperature matters.</li>
  <li><strong>Oxygen service</strong> is a special case: oxygen-compatible materials, no hydrocarbon lubricants (fluorinated greases only), cleaning to a standard such as ASTM G93, and avoiding fast adiabatic compression of oxygen onto polymer seats, which can ignite them.</li>
</ul>

<h2>Manufacturing</h2>
<ul>
  <li>Brass bodies are typically hot forged near-net shape and then CNC machined (drilled passages, threaded ports, seat bore). Low-volume and stainless bodies are machined from bar.</li>
  <li>Seat geometry is the critical feature: a sharp, concentric, burr-free seat edge sets lock-up and leak rate.</li>
  <li>Diaphragms are compression or injection molded, often with a fabric insert for burst strength.</li>
  <li>UHP regulators are electropolished, cleaned, and assembled in cleanrooms.</li>
  <li>Production tests usually include proof pressure, helium or bubble leak tests across the seat and to atmosphere, and a set-point check. Pneumatic regulator flow characteristics are commonly reported per ISO 6953; gas-welding regulators fall under ISO 2503.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>The small hole in a BBQ regulator bonnet is the atmospheric vent above the diaphragm. Block it and the regulator cannot sense properly.</li>
    <li>On a shop-air regulator, open a downstream valve and watch the gauge drop: that is droop.</li>
    <li>Two-gauge cylinder regulators show inlet and outlet; watch outlet slowly rise as the cylinder empties on a single-stage unit.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'In a direct-acting, spring-loaded regulator, what force acts to close the valve as outlet pressure rises?',
      options: [
        'Outlet pressure acting on the diaphragm area',
        'The loading spring',
        'Atmospheric pressure through the bonnet vent',
        'Gravity on the poppet',
      ],
      answer: 0,
      explain: 'The spring opens the valve; outlet pressure × diaphragm area pushes back. The valve settles where those forces balance.',
    },
    {
      q: 'Which change reduces droop?',
      options: [
        'A smaller diaphragm and a stiffer spring',
        'A larger diaphragm and a softer, longer spring',
        'A larger seat orifice',
        'Removing the bonnet vent',
      ],
      answer: 1,
      explain: 'Droop comes from the spring losing k × lift of force as the poppet opens. A soft spring loses less force, and a big diaphragm turns that small force change into a smaller pressure change.',
    },
    {
      q: 'On a single-stage cylinder regulator whose poppet is pushed closed by inlet pressure, what happens to outlet pressure as the cylinder empties?',
      options: [
        'It falls in step with inlet pressure',
        'It stays exactly constant',
        'It rises slightly',
        'It oscillates',
      ],
      answer: 2,
      explain: 'The P_in × A_seat term opposes the spring. As P_in falls, that closing force shrinks and outlet pressure creeps up: the supply pressure effect.',
    },
    {
      q: 'At zero flow, outlet pressure slowly climbs toward inlet pressure. What is the most likely cause?',
      options: [
        'Normal lock-up',
        'Droop',
        'Hysteresis from O-ring friction',
        'A damaged or contaminated seat leaking (creep)',
      ],
      answer: 3,
      explain: 'Lock-up overshoots setpoint only slightly and then holds. Continuous rise means gas is leaking past the seat. This is creep, the main safety failure and the reason downstream relief valves exist.',
    },
    {
      q: 'You are regulating a toxic gas. Which variant is the right choice, and why?',
      options: [
        'Relieving, so excess pressure vents automatically',
        'Non-relieving, because it never vents the gas to atmosphere',
        'Piston-sensing, because it has more friction',
        'Back-pressure regulator, because it senses the outlet',
      ],
      answer: 1,
      explain: 'A relieving regulator bleeds outlet gas through a vent seat. With toxic, flammable or costly gases you do not want that, so you use a non-relieving design.',
    },
  ],
});
