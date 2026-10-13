Registry.registerTopic('lesson-1', {
  n: 26,
  title: 'Syringe pump and plunger stopper',
  family: 'Medical / fluid',
  readTime: 9,
  source: 'new',
  summary:
    'A syringe pump pushes a plunger at a precisely controlled speed, so flow = barrel area × plunger speed. At the very low flows it is used for (down to fractions of a mL per hour), accuracy is lost not in the motor but in the <strong>compliance</strong> of the syringe and line and the <strong>stiction</strong> of the rubber stopper.',
  body: `
<h2>How it works</h2>
<figure class="diagram">
  <svg viewBox="0 0 580 210" role="img" aria-label="Syringe pump schematic: motor, lead screw, pusher block with force sensor, syringe and line">
    <rect class="part" x="20" y="96" width="60" height="50" rx="4"/>
    <line class="ln" x1="80" y1="121" x2="320" y2="121" stroke-width="5"/>
    <line class="ln" x1="80" y1="121" x2="320" y2="121" stroke="var(--surface)" stroke-width="2" stroke-dasharray="3 5"/>
    <line class="thin" x1="80" y1="160" x2="320" y2="160"/>
    <rect class="part" x="232" y="70" width="34" height="96" rx="3"/>
    <rect class="acc-fill" x="266" y="80" width="8" height="40"/>
    <rect class="part" x="274" y="70" width="8" height="70"/>
    <rect class="part" x="282" y="100" width="70" height="10"/>
    <rect class="fl" x="358" y="84" width="122" height="42"/>
    <rect class="solid" x="350" y="84" width="14" height="42"/>
    <path class="ln" d="M350,82 L480,82 L480,96 L496,100 L496,110 L480,114 L480,128 L350,128"/>
    <line class="ln" x1="340" y1="76" x2="350" y2="76"/>
    <path class="fl-line" d="M496,105 C520,105 520,160 548,160"/>
    <path class="acc arr-acc" d="M236,52 L286,52"/>
    <text class="lbl" x="22" y="88">stepper motor</text>
    <text class="lbl" x="110" y="112">lead screw</text>
    <text class="lbl" x="110" y="178">guide rod</text>
    <text class="lbl-b" x="218" y="190">pusher block</text>
    <text class="lbl-acc" x="120" y="56">plunger speed v</text>
    <text class="lbl-acc" x="290" y="30">force sensor</text>
    <line class="thin" x1="300" y1="34" x2="272" y2="80"/>
    <text class="lbl" x="350" y="70">stopper</text>
    <text class="lbl-fl" x="390" y="150">barrel (area A)</text>
    <text class="lbl-fl" x="500" y="190">to patient</text>
  </svg>
  <figcaption>A stepper motor turns a lead screw that drives the pusher block at a set speed. A force sensor between pusher and plunger detects occlusions.</figcaption>
</figure>
<div class="formula">Q = A<sub>barrel</sub> · v<sub>plunger</sub></div>
<p>A stepper motor with microstepping and a fine-pitch lead screw (Topic 19) can move the pusher in sub-micron steps. Because flow depends on barrel area, the pump must know the exact syringe model; pumps measure barrel diameter with the clamp and ask the user to confirm the brand and size.</p>

<h2>Where accuracy is lost</h2>
<ul>
  <li><strong>Compliance:</strong> the rubber stopper compresses, the barrel and tubing expand, and any air bubble compresses. Before any fluid leaves, the pump must build up the pressure needed to overcome the line and catheter resistance, by squeezing all that compliance. At 0.5 mL/h this can take many minutes: the <strong>startup delay</strong>.</li>
  <li><strong>Stiction:</strong> a stopper that has sat in a barrel needs a higher <strong>break-loose</strong> force to start moving than the <strong>glide</strong> force to keep moving. At very low speeds the stopper can stick, build pressure, then slip forward, so flow arrives in pulses (stick-slip).</li>
  <li><strong>Height changes:</strong> raising or lowering the pump relative to the patient changes hydrostatic pressure, which changes how much the compliance is squeezed, causing a bolus or a pause.</li>
  <li><strong>Mechanical play:</strong> backlash between pusher and plunger flange, taken up at start.</li>
</ul>

<figure class="diagram">
  <svg viewBox="0 0 540 220" role="img" aria-label="Delivered flow versus time at a low set rate, showing startup delay and stick-slip pulsation">
    <line class="ln" x1="60" y1="180" x2="500" y2="180"/>
    <line class="ln" x1="60" y1="180" x2="60" y2="24"/>
    <line class="dash" x1="60" y1="70" x2="500" y2="70"/>
    <path class="acc" d="M60,180 L150,178 C190,170 210,110 240,90 L260,84 L262,62 L280,80 L282,58 L300,78 L302,60 L320,76 L322,62 L340,74 L342,64 L360,72 L362,66 L380,72 L382,66 L400,70 L402,68 L500,70"/>
    <text class="lbl" x="420" y="62">set rate</text>
    <text class="lbl-acc" x="70" y="150">startup delay</text>
    <text class="lbl-acc" x="70" y="166">(compliance filling)</text>
    <text class="lbl-acc" x="270" y="112">stick-slip pulses</text>
    <text class="lbl-sm" x="270" y="200">time →</text>
    <text class="lbl-sm" x="10" y="30">flow</text>
  </svg>
  <figcaption>Typical behavior at low set rates, exaggerated. Delivered flow lags the setting while compliance is pressurized, then oscillates if the stopper sticks and slips.</figcaption>
</figure>

<h2>Design responses</h2>
<ul>
  <li><strong>Use the smallest practical syringe for low flows.</strong> For the same flow it moves faster, which reduces stick-slip and improves resolution, and it has less compliant volume.</li>
  <li><strong>Prime and purge:</strong> pumps offer a purge/prime function that takes up mechanical slack and pressurizes the line before connecting to the patient.</li>
  <li><strong>Stopper design:</strong> siliconized barrels (sprayed silicone oil or baked-on silicone), and stoppers with a fluoropolymer film, reduce break-loose force and its growth during storage.</li>
  <li><strong>Plunger capture:</strong> the pusher clamps the plunger flange so the syringe cannot siphon when it sits above the patient; anti-siphon valves in the line add protection.</li>
  <li><strong>Occlusion detection:</strong> the force sensor alarms at a set pressure. At low rates, compliance means it can take a long time to build enough pressure to alarm, and a bolus is released when the occlusion clears, so pumps offer low thresholds and bolus reduction after an alarm.</li>
</ul>
<p>Accuracy is specified under IEC 60601-2-24 with <strong>trumpet curves</strong>: the maximum and minimum flow error over observation windows of different lengths. Short windows show large errors (pulsation); long windows converge on the mean error.</p>

<h2>Materials and manufacturing</h2>
<table>
  <tr><th>Part</th><th>Typical material</th></tr>
  <tr><td>Barrel and plunger</td><td>Polypropylene (disposable syringes); glass or cyclic olefin polymer for prefilled</td></tr>
  <tr><td>Stopper</td><td>Synthetic polyisoprene or bromobutyl rubber, often film-coated</td></tr>
  <tr><td>Lubricant</td><td>Medical silicone oil</td></tr>
  <tr><td>Pump mechanism</td><td>Stepper motor, rolled or ground lead screw, polymer half-nut that disengages for loading</td></tr>
</table>

<h2>Failure modes</h2>
<ul>
  <li>Wrong syringe type selected: flow is wrong by the area ratio.</li>
  <li>Unclamped plunger: free flow by siphoning.</li>
  <li>Long startup delay or undetected occlusion at very low rates.</li>
  <li>Stopper stiction causing pulsatile delivery of potent drugs.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Push a plastic syringe plunger very slowly: feel it stick, then jump. That is break-loose versus glide.</li>
    <li>In a lab, notice the half-nut lever on the pusher that disengages the lead screw for loading.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'A syringe barrel has an area of 165 mm² and the plunger moves at 0.1 mm/min. What is the flow?',
      options: ['About 0.1 mL/h', 'About 1 mL/h', 'About 10 mL/h', 'About 100 mL/h'],
      answer: 1,
      explain: '165 mm² × 0.1 mm/min = 16.5 mm³/min = 16.5 µL/min ≈ 0.99 mL/h.',
    },
    {
      q: 'Why use the smallest practical syringe for very low flow rates?',
      options: [
        'It is cheaper',
        'For the same flow the plunger moves faster, reducing stick-slip and compliance effects and improving resolution',
        'It holds more drug',
        'It needs less force so the motor runs cooler',
      ],
      answer: 1,
      explain: 'Smaller area means higher plunger speed per mL/h and less compliant volume to pressurize.',
    },
    {
      q: 'What mainly causes the startup delay at low rates?',
      options: [
        'The motor warming up',
        'Compliance: the stopper, barrel, tubing and any air must be pressurized before fluid flows',
        'The software calibrating',
        'The occlusion alarm',
      ],
      answer: 1,
      explain: 'The pump first spends its displacement compressing and expanding compliant parts until there is enough pressure to drive flow.',
    },
    {
      q: 'What causes stick-slip pulsation in a syringe pump?',
      options: [
        'Stopper break-loose force exceeding glide force at very low speeds',
        'Lead screw efficiency above 90%',
        'Too-large barrel diameter',
        'Air in the motor',
      ],
      answer: 0,
      explain: 'The stopper sticks while pressure builds, then slips forward and delivers a small burst.',
    },
    {
      q: 'What does a "trumpet curve" (IEC 60601-2-24) show?',
      options: [
        'Motor torque versus speed',
        'Maximum and minimum flow error over observation windows of different lengths',
        'Pressure versus time during occlusion',
        'Syringe size versus cost',
      ],
      answer: 1,
      explain: 'Short windows show large errors from pulsation; long windows narrow toward the mean error, giving a trumpet shape.',
    },
  ],
});
