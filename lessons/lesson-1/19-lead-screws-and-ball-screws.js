Registry.registerTopic('lesson-1', {
  n: 19,
  title: 'Lead screws, ball screws and anti-backlash nuts',
  family: 'Linear motion',
  readTime: 10,
  source: 'new',
  summary:
    'A screw turns rotation into linear motion by sliding (lead screw) or rolling (ball screw) a nut along an inclined plane wrapped around a shaft. Friction decides almost everything: lead screws are often 30–70% efficient and can hold a load without a brake; ball screws are about 90% efficient and will spin backwards under load.',
  body: `
<h2>The screw as a wrapped incline</h2>
<p>Unwrap one turn of thread and you get a ramp: the base is the circumference π·d<sub>m</sub> (at mean diameter) and the rise is the lead L. The lead angle λ is given by tan λ = L / (π·d<sub>m</sub>). Pushing a nut up that ramp is the same as pushing a block up an incline with friction μ. For a square thread, efficiency is:</p>
<div class="formula">η = <span class="frac"><span>tan λ · (1 − μ tan λ)</span><span>tan λ + μ</span></span></div>
<p>and the torque to drive an axial load F is:</p>
<div class="formula">T = <span class="frac"><span>F · L</span><span>2π · η</span></span></div>
<p>For scale: at μ = 0.1 a lead screw is about 46% efficient at a 5° lead angle and 80% at 30°, while a ball screw (μ ≈ 0.005) is about 95% efficient even at 5°.</p>

<figure class="diagram">
  <svg viewBox="0 0 540 250" role="img" aria-label="Screw efficiency versus lead angle for friction coefficients 0.2, 0.1 and a ball screw">
    <line class="grid" x1="60" y1="157.5" x2="480" y2="157.5"/>
    <line class="grid" x1="60" y1="115" x2="480" y2="115"/>
    <line class="grid" x1="60" y1="72.5" x2="480" y2="72.5"/>
    <line class="grid" x1="60" y1="30" x2="480" y2="30"/>
    <line class="ln" x1="60" y1="200" x2="480" y2="200"/>
    <line class="ln" x1="60" y1="200" x2="60" y2="24"/>
    <path class="acc" d="M64.7,91.9 L69.3,67.9 L78.7,51.3 L88.0,44.8 L97.3,41.4 L106.7,39.3 L116.0,37.8 L134.7,36.0 L153.3,34.8 L172.0,34.1 L200.0,33.3 L228.0,32.8 L256.0,32.5 L293.3,32.2 L340.0,31.9 L386.7,31.8 L433.3,31.7 L480.0,31.7"/>
    <path class="fl-line" d="M64.7,186.4 L69.3,174.8 L78.7,156.2 L88.0,141.8 L97.3,130.5 L106.7,121.4 L116.0,113.8 L134.7,102.1 L153.3,93.4 L172.0,86.8 L200.0,79.5 L228.0,74.2 L256.0,70.3 L293.3,66.5 L340.0,63.5 L386.7,61.7 L433.3,60.8 L480.0,60.9"/>
    <path class="hot" d="M64.7,192.9 L69.3,186.4 L78.7,174.9 L88.0,165.1 L97.3,156.6 L106.7,149.2 L116.0,142.7 L134.7,131.8 L153.3,123.2 L172.0,116.1 L200.0,107.9 L228.0,101.6 L256.0,96.8 L293.3,92.1 L340.0,88.3 L386.7,86.3 L433.3,85.8 L480.0,86.7"/>
    <line class="dash" x1="113.3" y1="200" x2="113.3" y2="24"/>
    <line class="dash" x1="165.6" y1="200" x2="165.6" y2="24"/>
    <text class="lbl-acc" x="300" y="24">ball screw (μ ≈ 0.005)</text>
    <text class="lbl-fl" x="330" y="56">lead screw μ = 0.1</text>
    <text class="lbl-hot" x="330" y="104">lead screw μ = 0.2</text>
    <text class="lbl-sm" x="70" y="214">self-locking zones →</text>
    <text class="lbl-sm" x="116" y="196">tan λ = 0.1</text>
    <text class="lbl-sm" x="168" y="186">tan λ = 0.2</text>
    <text class="lbl-sm" x="30" y="204">0%</text>
    <text class="lbl-sm" x="24" y="119">50%</text>
    <text class="lbl-sm" x="20" y="34">100%</text>
    <text class="lbl-sm" x="56" y="232">0°</text>
    <text class="lbl-sm" x="260" y="232">lead angle λ</text>
    <text class="lbl-sm" x="470" y="232">45°</text>
  </svg>
  <figcaption>Efficiency vs lead angle. Each lead screw is self-locking (cannot be back-driven) to the left of its dashed line, where tan λ &lt; μ, which is roughly where efficiency is below 50%. A ball screw is efficient at almost any lead.</figcaption>
</figure>

<h2>Lead screws</h2>
<ul>
  <li>Trapezoidal (Acme or metric Tr) threads with a bronze or polymer nut. The thread flank angle increases the effective friction slightly.</li>
  <li><strong>Self-locking</strong> when μ &gt; tan λ: the load cannot back-drive the screw, so a vertical axis holds position with the motor off. Vibration can still cause creep, so safety-critical axes add a brake anyway.</li>
  <li>Cheap, quiet, compact, tolerant of some contamination, but they wear, heat up at high duty cycles, and have backlash between nut and thread.</li>
</ul>

<h2>Ball screws</h2>
<ul>
  <li>Hardened balls roll in ground or rolled grooves (often a gothic-arch profile) between screw and nut, and recirculate through return tubes, internal deflectors or end caps.</li>
  <li>Efficiency of roughly 90% or more means much smaller motors, low heat and long, predictable life (rated like bearings, from dynamic load rating).</li>
  <li>The flip side: they <strong>back-drive</strong>. A vertical axis will fall if the motor loses power unless there is a brake.</li>
  <li><strong>Preload</strong> removes backlash and increases stiffness: two nuts pushed apart by a spacer, a single nut with a lead offset, or oversized balls for four-point contact. Preload adds friction and heat and shortens life, so it is chosen per application.</li>
  <li>Accuracy grades (C0–C10 under ISO 3408/JIS) specify lead error per 300 mm. Rolled screws (C7–C10) are cheaper; ground screws (C0–C5) go into machine tools.</li>
</ul>

<figure class="diagram">
  <svg viewBox="0 0 560 250" role="img" aria-label="Ball screw section: balls rolling between screw and nut grooves and recirculating through a return tube; inset of gothic-arch groove contact">
    <rect class="part" x="20" y="120" width="420" height="40"/>
    <path class="thin" d="M30,120 L30,160 M60,120 L60,160 M90,120 L90,160 M120,120 L120,160 M150,120 L150,160 M410,120 L410,160" opacity="0.5"/>
    <rect class="hatch" x="190" y="82" width="206" height="26"/>
    <rect class="hatch" x="190" y="172" width="206" height="26"/>
    <circle class="acc-fill" cx="204" cy="114" r="8"/><circle class="acc-fill" cx="222" cy="114" r="8"/><circle class="acc-fill" cx="240" cy="114" r="8"/><circle class="acc-fill" cx="258" cy="114" r="8"/><circle class="acc-fill" cx="276" cy="114" r="8"/><circle class="acc-fill" cx="294" cy="114" r="8"/><circle class="acc-fill" cx="312" cy="114" r="8"/><circle class="acc-fill" cx="330" cy="114" r="8"/><circle class="acc-fill" cx="348" cy="114" r="8"/><circle class="acc-fill" cx="366" cy="114" r="8"/><circle class="acc-fill" cx="384" cy="114" r="8"/><circle class="acc-fill" cx="213" cy="166" r="8"/><circle class="acc-fill" cx="231" cy="166" r="8"/><circle class="acc-fill" cx="249" cy="166" r="8"/><circle class="acc-fill" cx="267" cy="166" r="8"/><circle class="acc-fill" cx="285" cy="166" r="8"/><circle class="acc-fill" cx="303" cy="166" r="8"/><circle class="acc-fill" cx="321" cy="166" r="8"/><circle class="acc-fill" cx="339" cy="166" r="8"/><circle class="acc-fill" cx="357" cy="166" r="8"/><circle class="acc-fill" cx="375" cy="166" r="8"/>
    <path class="ln" stroke-width="10" d="M200,100 C200,30 386,30 386,100" stroke="var(--ink-2)"/>
    <path class="ln" stroke-width="6" d="M200,100 C200,30 386,30 386,100" stroke="var(--surface)"/>
    <circle class="acc-fill" opacity="0.5" cx="212" cy="72" r="6"/><circle class="acc-fill" opacity="0.5" cx="250" cy="50" r="6"/><circle class="acc-fill" opacity="0.5" cx="290" cy="44" r="6"/><circle class="acc-fill" opacity="0.5" cx="330" cy="50" r="6"/><circle class="acc-fill" opacity="0.5" cx="368" cy="72" r="6"/>
    <path class="acc arr-acc" d="M60,200 A30,12 0 1 0 100,204"/>
    <path class="ln arr" d="M300,222 L360,222"/>
    <text class="lbl" x="40" y="236">screw turns</text>
    <text class="lbl" x="296" y="242">nut travels</text>
    <text class="lbl" x="40" y="108">screw shaft</text>
    <text class="lbl" x="196" y="20">return tube carries balls back</text>
    <text class="lbl" x="410" y="96" >nut</text>
    <g>
      <text class="lbl-b" x="456" y="140">groove (inset)</text>
      <path class="hatch" d="M450,152 L540,152 L540,178 L520,178 A22,22 0 0 0 495,166 A22,22 0 0 0 470,178 L450,178 Z"/>
      <path class="part" d="M450,236 L540,236 L540,206 L520,206 A22,22 0 0 1 495,218 A22,22 0 0 1 470,206 L450,206 Z"/>
      <circle class="acc-fill" cx="495" cy="192" r="15"/>
      <circle class="solid" cx="484" cy="181" r="2.5"/><circle class="solid" cx="506" cy="181" r="2.5"/>
      <circle class="solid" cx="484" cy="203" r="2.5"/><circle class="solid" cx="506" cy="203" r="2.5"/>
    </g>
  </svg>
  <figcaption>Section through a ball nut. The balls roll in matching grooves on the screw and nut; as the screw turns they travel along the thread, and a return tube (or internal deflector) brings them back to the start of the nut. Inset: "gothic-arch" grooves touch each ball at two points per groove, which is what lets a preload remove all play.</figcaption>
</figure>

<h2>Anti-backlash nuts</h2>
<figure class="diagram">
  <svg viewBox="0 0 540 170" role="img" aria-label="Split anti-backlash nut with a spring pushing the two halves against opposite thread flanks">
    <path class="part" d="M20,70 L40,70 L50,50 L70,50 L80,70 L100,70 L110,50 L130,50 L140,70 L160,70 L170,50 L190,50 L200,70 L220,70 L230,50 L250,50 L260,70 L280,70 L290,50 L310,50 L320,70 L340,70 L350,50 L370,50 L380,70 L400,70 L410,50 L430,50 L440,70 L460,70 L460,120 L20,120 Z"/>
    <path class="acc-fill" d="M60,20 L176,20 L176,46 L162,46 L156,58 L134,58 L128,46 L102,46 L96,58 L74,58 L68,46 L60,46 Z"/>
    <path class="acc-fill" d="M250,20 L380,20 L380,46 L352,46 L346,58 L324,58 L318,46 L292,46 L286,58 L264,58 L258,46 L250,46 Z"/>
    <path class="spring" d="M176,30 l5,-8 l10,16 l10,-16 l10,16 l10,-16 l10,16 l10,-16 l9,8"/>
    <path class="hot arr" d="M150,10 L110,10"/>
    <path class="hot arr" d="M300,10 L340,10"/>
    <text class="lbl" x="40" y="150">Screw thread</text>
    <text class="lbl" x="196" y="64">spring</text>
    <text class="lbl" x="200" y="150">Each nut half is pushed against opposite thread flanks.</text>
  </svg>
  <figcaption>Split-nut anti-backlash: a spring (axial or torsional) pushes the two halves apart so one bears on the leading flank and one on the trailing flank. Wear is taken up automatically.</figcaption>
</figure>
<p>A load larger than the spring preload in the "wrong" direction will still compress the spring, so backlash reappears. Spring preload is chosen above the expected reversing load, at the cost of extra drag torque. Polymer anti-backlash nuts (acetal, PTFE-filled) are common in 3D printers, lab automation and camera sliders.</p>

<h2>Other limits</h2>
<ul>
  <li><strong>Critical speed:</strong> long, thin screws whip at a speed set by length, diameter and end support.</li>
  <li><strong>Column buckling:</strong> compressive loads on long screws; fixed–fixed ends carry much more than fixed–free.</li>
  <li><strong>Lubrication and sealing:</strong> ball screws need wipers and grease or oil; contamination shortens life fast.</li>
</ul>

<h2>Materials</h2>
<table>
  <tr><th>Part</th><th>Typical material</th></tr>
  <tr><td>Lead screw shaft</td><td>Rolled carbon or stainless steel</td></tr>
  <tr><td>Lead screw nut</td><td>Bronze, or acetal/PTFE-filled polymer</td></tr>
  <tr><td>Ball screw shaft</td><td>Induction-hardened alloy steel (e.g. 4150, 50CrMo4)</td></tr>
  <tr><td>Balls and ball nut</td><td>52100 bearing steel, carburized or through-hardened nut</td></tr>
</table>

<h2>Failure modes</h2>
<ul>
  <li>Lead screw nut wear: backlash grows; polymer nuts wear faster when hot.</li>
  <li>Ball screw spalling or brinelling from overload, shock or contamination.</li>
  <li>A vertical ball-screw axis dropping on power loss when there is no brake.</li>
  <li>Whip or buzzing at high speed on long screws.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Push on a 3D printer's Z gantry with the motors off: a lead screw holds; a ball screw would sink.</li>
    <li>Look at a CNC router's ball nut: you can see the return tubes or end caps that recirculate the balls.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'A lead screw has μ = 0.15 and a lead angle of 5° (tan 5° ≈ 0.087). Can an axial load back-drive it?',
      options: [
        'Yes, because the efficiency is above 50%',
        'No, it is self-locking because μ > tan λ',
        'Only if the nut is polymer',
        'Only at high speed',
      ],
      answer: 1,
      explain: 'Back-driving needs tan λ > μ. Here 0.087 < 0.15, so the screw self-locks (vibration aside).',
    },
    {
      q: 'Why do vertical ball-screw axes usually need a brake?',
      options: [
        'Ball screws are weaker than lead screws',
        'Their high efficiency (about 90%+) means the load can back-drive the screw when power is lost',
        'Their balls fall out without power',
        'Preload disappears when the motor stops',
      ],
      answer: 1,
      explain: 'Low friction works both ways. With no brake, gravity spins the screw and the axis drops.',
    },
    {
      q: 'Using T = F·L / (2π·η), what torque drives 1000 N with a 5 mm lead at η = 0.9?',
      options: ['About 0.18 N·m', 'About 0.88 N·m', 'About 5.6 N·m', 'About 8.8 N·m'],
      answer: 1,
      explain: 'T = 1000 × 0.005 / (2π × 0.9) ≈ 0.884 N·m.',
    },
    {
      q: 'What is the purpose of preloading a ball nut?',
      options: [
        'To increase efficiency',
        'To remove backlash and raise stiffness, at the cost of extra friction and shorter life',
        'To make it self-locking',
        'To allow higher critical speed',
      ],
      answer: 1,
      explain: 'Preload keeps balls in contact on both flanks so there is no play and the nut is stiffer. More friction and heat is the price.',
    },
    {
      q: 'How does a split anti-backlash nut work?',
      options: [
        'It uses balls instead of threads',
        'A spring pushes two nut halves apart so they bear on opposite thread flanks',
        'It is made of a soft polymer that fills the gaps',
        'It clamps the screw when stopped',
      ],
      answer: 1,
      explain: 'One half always bears on each flank, so reversing direction gives no lost motion as long as the load stays below spring preload.',
    },
  ],
});
