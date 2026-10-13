Registry.registerTopic('lesson-1', {
  n: 28,
  title: 'Capstan and band brakes',
  family: 'Friction',
  readTime: 8,
  source: 'new',
  summary:
    'Wrap a rope around a drum and friction multiplies the holding force <strong>exponentially</strong> with the wrap angle: T<sub>load</sub> = T<sub>hold</sub>·e<sup>μθ</sup>. A few turns let a hand hold a ship. The same equation governs band brakes, belt drives and wrap-spring clutches.',
  body: `
<h2>The capstan equation</h2>
<div class="formula">T<sub>load</sub> = T<sub>hold</sub> · e<sup>μθ</sup></div>
<p>θ is the total wrap angle in radians (one full turn = 2π) and μ the friction coefficient. The reason it is exponential: every small piece of wrap is pressed onto the drum in proportion to the local rope tension, so the friction it adds is a fixed fraction of the tension already there. Tension grows by the same percentage per degree of wrap, like compound interest. For an ideal flexible rope, the <strong>drum radius does not appear</strong> at all.</p>
<p>With μ = 0.3, half a turn multiplies holding force 2.6×, one turn 6.6×, two turns 43× and three turns about 286×.</p>

<figure class="diagram">
  <svg viewBox="0 0 560 266" role="img" aria-label="Rope around a capstan, and a band brake with lever">
    <g>
      <text class="lbl-b" x="10" y="20">Capstan</text>
      <circle class="part" cx="150" cy="125" r="55"/>
      <circle class="solid" cx="150" cy="125" r="5"/>
      <path class="acc" d="M20,180 L150,180 A55,55 0 0 0 150,70 L20,70" stroke-width="4"/>
      <path class="hot arr" d="M60,196 L14,196"/>
      <path class="acc arr-acc" d="M60,54 L34,54"/>
      <text class="lbl-hot" x="20" y="220">T load (large)</text>
      <text class="lbl-acc" x="20" y="44">T hold (small)</text>
      <path class="thin" d="M180,150 A35,35 0 0 0 180,100"/>
      <text class="lbl" x="214" y="130">θ = wrap angle</text>
    </g>
    <g transform="translate(290,0)">
      <text class="lbl-b" x="10" y="20">Band brake</text>
      <circle class="part" cx="120" cy="110" r="50"/>
      <circle class="solid" cx="120" cy="110" r="5"/>
      <path class="hot" d="M70,196 L70,110 A50,50 0 0 1 170,110 L170,196" stroke-width="5"/>
      <rect class="hatch" x="50" y="204" width="40" height="10"/>
      <line class="ln" x1="70" y1="198" x2="250" y2="198" stroke-width="6"/>
      <circle class="part" cx="70" cy="198" r="6"/>
      <path class="ln arr" d="M246,170 L246,192"/>
      <path class="acc arr-acc" d="M150,56 A60,60 0 0 0 82,62"/>
      <text class="lbl-acc" x="44" y="40">drum turning this way</text>
      <text class="lbl" x="0" y="236">anchored end = tight side</text>
      <text class="lbl" x="0" y="254">lever holds slack side</text>
      <text class="lbl" x="200" y="160">lever force</text>
    </g>
  </svg>
  <figcaption>Left: tension grows exponentially around the wrap, so a small holding force restrains a large load. Right: with the drum turning toward the anchored end, that end carries the large tension and the lever only holds the slack end, so the brake is self-energizing.</figcaption>
</figure>

<figure class="diagram">
  <svg viewBox="0 0 540 240" role="img" aria-label="Capstan tension ratio versus number of turns on a log scale, for mu = 0.3">
    <line class="grid" x1="60" y1="145" x2="480" y2="145"/>
    <line class="grid" x1="60" y1="90" x2="480" y2="90"/>
    <line class="grid" x1="60" y1="35" x2="480" y2="35"/>
    <line class="ln" x1="60" y1="200" x2="480" y2="200"/>
    <line class="ln" x1="60" y1="200" x2="60" y2="28"/>
    <path class="acc" d="M60.0,200.0 L74.0,195.5 L88.0,191.0 L102.0,186.5 L116.0,182.0 L130.0,177.5 L144.0,173.0 L158.0,168.5 L172.0,164.0 L186.0,159.5 L200.0,155.0 L214.0,150.5 L228.0,146.0 L242.0,141.5 L256.0,137.0 L270.0,132.5 L284.0,128.0 L298.0,123.5 L312.0,119.0 L326.0,114.5 L340.0,110.0 L354.0,105.4 L368.0,100.9 L382.0,96.4 L396.0,91.9 L410.0,87.4 L424.0,82.9 L438.0,78.4 L452.0,73.9 L466.0,69.4 L480.0,64.9"/>
    <circle class="acc-fill" cx="200" cy="155" r="4"/><text class="lbl" x="206" y="172">1 turn: 6.6×</text>
    <circle class="acc-fill" cx="340" cy="110" r="4"/><text class="lbl" x="346" y="128">2 turns: 43×</text>
    <circle class="acc-fill" cx="480" cy="64.9" r="4"/><text class="lbl" x="400" y="58">3 turns: 286×</text>
    <text class="lbl-sm" x="40" y="204">1</text>
    <text class="lbl-sm" x="34" y="149">10</text>
    <text class="lbl-sm" x="28" y="94">100</text>
    <text class="lbl-sm" x="22" y="39">1000</text>
    <text class="lbl-sm" x="56" y="218">0</text>
    <text class="lbl-sm" x="196" y="218">1</text>
    <text class="lbl-sm" x="336" y="218">2</text>
    <text class="lbl-sm" x="476" y="218">3</text>
    <text class="lbl-sm" x="210" y="234">turns of wrap (μ = 0.3)</text>
  </svg>
  <figcaption>On a log scale the exponential is a straight line. Each extra turn multiplies holding power by e^(2πμ), about 6.6× for μ = 0.3.</figcaption>
</figure>

<h2>Where the capstan effect is used</h2>
<ul>
  <li><strong>Winches and capstans:</strong> on a sailing winch, the tailer holds a few kilograms on the free end while the drum takes the sheet load.</li>
  <li><strong>Bollards and cleats:</strong> a few figure-eights hold a moored boat.</li>
  <li><strong>Belay and rope-descent devices</strong> control a falling load with a small hand force by varying the wrap.</li>
  <li><strong>Belt drives:</strong> the maximum ratio of tight-side to slack-side tension before slip is e<sup>μθ</sup>, which is why wrap angle on the small pulley matters, and why V-belts (which wedge, raising effective μ) transmit more.</li>
  <li><strong>Wrap-spring clutches</strong> (Topic 5): the spring is the "rope".</li>
</ul>

<h2>Band brakes</h2>
<p>A steel band lined with friction material wraps around a drum. One end is anchored; the other is pulled by a lever or actuator. The braking torque is:</p>
<div class="formula">T<sub>brake</sub> = (T<sub>tight</sub> − T<sub>slack</sub>) · r, with T<sub>tight</sub> = T<sub>slack</sub> · e<sup>μθ</sup></div>
<ul>
  <li><strong>Self-energizing:</strong> if the drum rotates toward the anchored end, the anchor carries the tight-side tension and the lever only supplies the small slack-side tension. Reverse the rotation and the same brake needs e<sup>μθ</sup> times more lever force.</li>
  <li><strong>Grabby and sensitive:</strong> because the torque depends exponentially on μ, small changes in friction (heat, wet, glazing) change braking a lot.</li>
  <li><strong>Differential band brakes</strong> attach both ends to the lever at different distances from its pivot; with the wrong proportions they become self-locking.</li>
  <li>Used in: automatic transmission bands (holding a planetary drum), chainsaw chain brakes (a spring-loaded band around the clutch drum), hoists, go-karts and some older bikes.</li>
</ul>

<h2>Materials</h2>
<ul>
  <li>Bands: spring steel with bonded woven or molded friction lining (organic or aramid-based); transmission bands run in oil with paper-based linings.</li>
  <li>Drums: cast iron or steel, ground for even contact.</li>
  <li>Ropes: μ varies widely. Polyester and nylon grip well; ultra-high-molecular-weight polyethylene (Dyneema, Spectra) is slippery and needs more wraps or a grippier cover.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Band brake fade from heat lowering μ; glazing of linings.</li>
  <li>Riding over (rope crossing over itself on a winch drum) jams the rope.</li>
  <li>Slippery rope or wet drum: holding power falls exponentially with μ.</li>
  <li>Band cracking at anchors from fatigue.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Wrap a rope once, then twice, around a post and feel how little force holds a heavy pull.</li>
    <li>On a chainsaw, the front hand guard is the lever that snaps a band brake onto the clutch drum.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'With μ = 0.3 and two full turns of wrap (θ = 4π), roughly what is T_load / T_hold?',
      options: ['About 2.6', 'About 6.6', 'About 43', 'About 290'],
      answer: 2,
      explain: 'e^(0.3 × 4π) = e^3.77 ≈ 43.',
    },
    {
      q: 'For an ideal flexible rope, how does drum radius affect the capstan ratio?',
      options: [
        'Larger radius increases it',
        'Larger radius decreases it',
        'It does not appear; only μ and wrap angle matter',
        'It depends on rope diameter',
      ],
      answer: 2,
      explain: 'T_load/T_hold = e^(μθ). Radius cancels out of the derivation.',
    },
    {
      q: 'When is a simple band brake self-energizing?',
      options: [
        'When the drum turns toward the anchored end, so the anchor carries the tight-side tension',
        'When the drum turns toward the lever end',
        'Always',
        'Only when wet',
      ],
      answer: 0,
      explain: 'Then the lever only has to supply the slack-side tension, which is e^(μθ) times smaller.',
    },
    {
      q: 'A band brake has T_slack = 100 N, T_tight/T_slack = 4 and drum radius 0.1 m. What is the braking torque?',
      options: ['10 N·m', '30 N·m', '40 N·m', '50 N·m'],
      answer: 1,
      explain: 'T_tight = 400 N. Torque = (400 − 100) × 0.1 = 30 N·m.',
    },
    {
      q: 'Why do slippery UHMWPE (Dyneema) lines need extra wraps on a winch?',
      options: [
        'They are thicker',
        'Their lower μ shrinks the exponent μθ, so holding power drops sharply',
        'They stretch more',
        'They are stiffer',
      ],
      answer: 1,
      explain: 'Holding power depends exponentially on μ. More wrap angle restores the product μθ.',
    },
  ],
});
