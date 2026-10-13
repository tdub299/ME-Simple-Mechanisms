Registry.registerTopic('lesson-1', {
  n: 6,
  title: 'Check valves (duckbill, umbrella, ball, flapper)',
  family: 'Fluid control',
  readTime: 9,
  source: 'new',
  summary:
    'A check valve lets fluid flow one way and blocks it the other, with no actuator. Every design is a closing element held against a seat by preload, gravity or back pressure. The two numbers that matter are <strong>cracking pressure</strong> (the forward pressure that opens it) and how tightly it <strong>reseals</strong> against backflow.',
  body: `
<h2>The four common families</h2>
<figure class="diagram">
  <svg viewBox="0 0 540 380" role="img" aria-label="Cross-sections of duckbill, umbrella, spring-loaded ball and swing check valves">
    <g>
      <text class="lbl-b" x="20" y="22">Duckbill</text>
      <path class="ln" d="M20,45 L250,45 M20,135 L250,135"/>
      <path class="acc-fill" d="M60,45 L72,45 L176,86 L176,94 L72,135 L60,135 Z"/>
      <line class="ln" x1="150" y1="90" x2="178" y2="90"/>
      <path class="fl-line arr-fl" d="M24,90 L56,90"/>
      <path class="hot arr" d="M232,58 L160,76"/>
      <path class="hot arr" d="M232,122 L160,104"/>
      <text class="lbl-sm" x="20" y="158">Forward flow parts the slit;</text>
      <text class="lbl-sm" x="20" y="172">back pressure squeezes the lips shut.</text>
    </g>
    <g transform="translate(275,0)">
      <text class="lbl-b" x="20" y="22">Umbrella</text>
      <rect class="hatch" x="20" y="105" width="60" height="14"/>
      <rect class="hatch" x="100" y="105" width="22" height="14"/>
      <rect class="hatch" x="138" y="105" width="22" height="14"/>
      <rect class="hatch" x="180" y="105" width="60" height="14"/>
      <rect class="part" x="125" y="70" width="10" height="62"/>
      <ellipse class="part" cx="130" cy="136" rx="10" ry="6"/>
      <path class="acc-fill" d="M44,102 Q130,46 216,102 L208,105 Q130,62 52,105 Z"/>
      <path class="fl-line arr-fl" d="M90,158 L90,112"/>
      <path class="fl-line arr-fl" d="M170,158 L170,112"/>
      <text class="lbl-sm" x="20" y="172">Pressure under the rim lifts it; dome preload</text>
      <text class="lbl-sm" x="20" y="186">sets cracking pressure.</text>
    </g>
    <g transform="translate(0,195)">
      <text class="lbl-b" x="20" y="22">Spring-loaded ball</text>
      <path class="ln" d="M20,70 L95,70 L110,45 L250,45 M20,110 L95,110 L110,135 L250,135"/>
      <circle class="acc-fill" cx="126" cy="90" r="24"/>
      <path class="spring" d="M150,90 l6,-14 l12,28 l12,-28 l12,28 l12,-28 l12,28 l6,-14"/>
      <rect class="hatch" x="222" y="62" width="10" height="56"/>
      <path class="fl-line arr-fl" d="M24,90 L88,90"/>
      <path class="fl-line arr-fl" d="M130,58 L200,58"/>
      <text class="lbl-sm" x="20" y="158">Cracking pressure ≈ spring preload ÷ seat area.</text>
      <text class="lbl-sm" x="20" y="172">Works in any orientation.</text>
    </g>
    <g transform="translate(275,195)">
      <text class="lbl-b" x="20" y="22">Swing (flapper)</text>
      <path class="ln" d="M20,45 L250,45 M20,135 L250,135"/>
      <rect class="hatch" x="110" y="45" width="10" height="18"/>
      <rect class="hatch" x="110" y="117" width="10" height="18"/>
      <line class="dash" x1="124" y1="54" x2="124" y2="126"/>
      <line class="acc" x1="124" y1="54" x2="186" y2="112" stroke-width="6"/>
      <circle class="solid" cx="124" cy="54" r="5"/>
      <path class="fl-line arr-fl" d="M24,90 L100,90"/>
      <path class="fl-line arr-fl" d="M150,124 L240,124"/>
      <text class="lbl-sm" x="20" y="158">Lowest pressure drop for big pipes,</text>
      <text class="lbl-sm" x="20" y="172">but can slam when flow reverses.</text>
    </g>
  </svg>
  <figcaption>Blue arrows show forward flow. In the duckbill, back pressure (orange) helps seal: the harder it pushes, the tighter the lips close.</figcaption>
</figure>

<h2>How they work</h2>
<ul>
  <li><strong>Duckbill:</strong> a one-piece elastomer part with two lips that meet at a slit. Forward pressure parts the lips; back pressure presses them together. There is no separate seat, so it seals well on low-pressure, dirty or viscous fluids. Used in IV sets, food pouches, drain lines and toothpaste-style dispensing closures.</li>
  <li><strong>Umbrella:</strong> an elastomer dome sits over a ring of holes, held by a stem through the center. The dome's stretch preloads the rim against the seat. Forward pressure lifts the rim; back pressure pushes it down harder. Cheap, compact, common in pumps, breathing devices and vents.</li>
  <li><strong>Ball (spring-loaded):</strong> a ball pressed onto a conical or chamfered seat. The spring sets cracking pressure and lets it work in any orientation. Gravity-only ball checks also exist but must be mounted the right way up.</li>
  <li><strong>Flapper / swing:</strong> a hinged disc that swings out of the flow path. Lowest pressure drop for large pipes, but the disc can slam shut when flow reverses, causing water hammer.</li>
</ul>
<p>The cracking pressure of a spring- or preload-closed valve is set by a simple force balance:</p>
<div class="formula">P<sub>crack</sub> ≈ <span class="frac"><span>F<sub>preload</sub></span><span>A<sub>seat</sub></span></span></div>

<h2>Key design parameters</h2>
<ul>
  <li><strong>Cracking pressure:</strong> from near zero (swing, low-durometer duckbill) to several bar (stiff spring). Too low and the valve may not reseal under small back pressure; too high and you waste pump energy.</li>
  <li><strong>Reseal pressure:</strong> usually lower than cracking pressure. Elastomer valves seal better as back pressure rises; hard-seat ball valves leak a little at very low back pressure.</li>
  <li><strong>Flow vs. pressure drop:</strong> characterized by a flow coefficient (Cv or Kv). Spring designs have a rising pressure drop with flow, because the spring pushes back harder as it opens.</li>
  <li><strong>Chatter:</strong> at flows just above cracking, a spring valve can oscillate open and shut, causing noise and wear. Size the valve so normal flow holds it fully open.</li>
  <li><strong>Slam and water hammer:</strong> a valve that closes only after flow has already reversed lets a column of fluid accelerate backwards, then stops it suddenly. Spring-assisted or "non-slam" designs close before reversal.</li>
</ul>

<h2>Elastomer design</h2>
<p>For duckbills and umbrellas, the elastomer <em>is</em> the valve. Durometer, lip or dome thickness and the preload geometry set cracking pressure. Silicone is common for medical and food use; EPDM for water; fluorocarbon (FKM) for fuels and chemicals. Compression set slowly lowers preload over time, so cracking pressure drifts down with age and temperature. Liquid silicone rubber (LSR) injection molding gives tight control of thin lips and slits; slits are often cut after molding.</p>

<h2>Materials and manufacturing</h2>
<table>
  <tr><th>Part</th><th>Common choices</th></tr>
  <tr><td>Bodies</td><td>Brass, stainless steel, PVC/CPVC, PP, PVDF, molded PC or ABS for medical</td></tr>
  <tr><td>Balls</td><td>Stainless steel, ceramic, PTFE, or elastomer-coated for soft sealing</td></tr>
  <tr><td>Springs</td><td>302/316 stainless or Hastelloy for corrosive media</td></tr>
  <tr><td>Elastomer parts</td><td>Silicone (LSR), EPDM, nitrile, FKM</td></tr>
</table>

<h2>Failure modes</h2>
<ul>
  <li>Debris holding the element off the seat, so backflow leaks.</li>
  <li>Compression set or swelling that changes cracking pressure.</li>
  <li>Elastomer lips sticking together after long storage (higher first-crack pressure).</li>
  <li>Spring fatigue or corrosion; chatter wear on seats.</li>
  <li>Slam damage in swing checks on long pipelines.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Squeeze a squeeze-bottle with a slit valve cap and watch the slit open only when you press; it reseals and does not drip.</li>
    <li>Look at a sump pump or pool pump discharge line for the check valve that stops the pipe draining back.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'What sets the cracking pressure of a spring-loaded ball check valve?',
      options: [
        'Spring preload divided by seat area',
        'Ball mass only',
        'Pipe length upstream',
        'The fluid viscosity',
      ],
      answer: 0,
      explain: 'The valve opens when forward pressure × seat area exceeds spring preload: P_crack ≈ F_preload / A_seat.',
    },
    {
      q: 'Why does a duckbill valve seal better as back pressure rises?',
      options: [
        'Back pressure presses the lips together',
        'A spring inside the bill stiffens',
        'The elastomer hardens under pressure',
        'Back pressure pushes a ball onto the seat',
      ],
      answer: 0,
      explain: 'The duckbill shape turns back pressure into a clamping force on the slit. More back pressure means a tighter seal.',
    },
    {
      q: 'A spring check valve buzzes and wears quickly at low flow. What is happening?',
      options: [
        'Cracking pressure is too low',
        'Chatter: the flow is just above cracking, so the valve opens and shuts repeatedly',
        'The ball is too heavy',
        'Water hammer from a swing check',
      ],
      answer: 1,
      explain: 'If normal flow is not enough to hold the valve fully open, it oscillates near cracking. Fix it by sizing the valve so normal flow holds it open.',
    },
    {
      q: 'Which design generally gives the lowest pressure drop in a large pipe, but risks slam?',
      options: ['Duckbill', 'Umbrella', 'Swing (flapper)', 'Spring-loaded ball'],
      answer: 2,
      explain: 'The swing disc moves out of the flow path, so losses are low. Because it closes only after flow reverses, it can slam and cause water hammer.',
    },
    {
      q: 'Over months in service, an umbrella valve cracks at a lower pressure than when new. The most likely cause is:',
      options: [
        'Compression set in the elastomer reducing preload',
        'The holes in the seat getting larger',
        'The fluid becoming more viscous',
        'Spring fatigue in the umbrella stem',
      ],
      answer: 0,
      explain: 'The dome preload comes from stretched elastomer. Compression set relaxes it over time, especially when hot, so cracking pressure drifts down.',
    },
  ],
});
