Registry.registerTopic('lesson-1', {
  n: 12,
  title: 'Child-resistant closures',
  family: 'Consumer packaging',
  readTime: 9,
  source: 'new',
  summary:
    'A child-resistant (CR) closure asks for <strong>two different motions at the same time</strong>, such as push and turn or squeeze and turn. Young children struggle to coordinate that; adults do it without thinking. The design is judged by a standardized test on real children and older adults, not by a force number.',
  body: `
<h2>Push-and-turn: the classic two-piece cap</h2>
<p>An outer cap spins freely over an inner cap, which carries the thread. They are coupled by teeth on top of the inner cap and lugs inside the outer cap. Each tooth has a vertical face on one side and a ramp on the other. A light flex or spring holds the outer cap up.</p>

<figure class="diagram">
  <svg viewBox="0 0 560 270" role="img" aria-label="Cross-section of a push-and-turn child-resistant cap: outer cap with lugs over an inner threaded cap with teeth, on a bottle neck">
    <rect class="hatch" x="150" y="122" width="20" height="140"/>
    <rect class="hatch" x="390" y="122" width="20" height="140"/>
    <path class="hatch" d="M150,140 l-10,6 l10,6 Z M150,170 l-10,6 l10,6 Z M150,200 l-10,6 l10,6 Z M410,140 l10,6 l-10,6 Z M410,170 l10,6 l-10,6 Z M410,200 l10,6 l-10,6 Z"/>
    <rect class="hot-fill" x="150" y="116" width="260" height="6"/>
    <rect class="part" x="124" y="104" width="312" height="12"/>
    <rect class="part" x="124" y="116" width="10" height="100"/>
    <rect class="part" x="426" y="116" width="10" height="100"/>
    <path class="part" d="M134,152 l8,6 l-8,6 Z M134,182 l8,6 l-8,6 Z M426,152 l-8,6 l8,6 Z M426,182 l-8,6 l8,6 Z"/>
    <path class="part" d="M180,104 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 l14,-8 l0,8 L376,104 Z"/>
    <rect class="acc-fill" x="104" y="60" width="352" height="14"/>
    <rect class="acc-fill" x="104" y="74" width="10" height="150"/>
    <rect class="acc-fill" x="446" y="74" width="10" height="150"/>
    <rect class="acc-fill" x="114" y="216" width="14" height="8"/>
    <rect class="acc-fill" x="432" y="216" width="14" height="8"/>
    <rect class="acc-fill" x="214" y="74" width="10" height="16"/>
    <rect class="acc-fill" x="276" y="74" width="10" height="16"/>
    <rect class="acc-fill" x="338" y="74" width="10" height="16"/>
    <path class="ln arr" d="M280,20 L280,54"/>
    <text class="lbl-b" x="290" y="36">push</text>
    <text class="lbl-acc" x="466" y="70">outer cap</text>
    <text class="lbl-acc" x="466" y="86">(spins freely)</text>
    <text class="lbl-acc" x="16" y="70">lugs under the</text>
    <text class="lbl-acc" x="16" y="86">outer cap top</text>
    <line class="thin" x1="104" y1="80" x2="212" y2="84"/>
    <text class="lbl" x="16" y="104">teeth on the</text>
    <text class="lbl" x="16" y="118">inner cap top</text>
    <line class="thin" x1="98" y1="110" x2="186" y2="100"/>
    <text class="lbl" x="466" y="112">inner cap</text>
    <text class="lbl" x="466" y="126">(threaded)</text>
    <text class="lbl-hot" x="466" y="150">liner</text>
    <line class="thin" x1="464" y1="146" x2="408" y2="120"/>
    <text class="lbl" x="466" y="200">thread</text>
    <line class="thin" x1="464" y1="196" x2="422" y2="188"/>
    <text class="lbl-acc" x="16" y="232">retaining lip</text>
    <line class="thin" x1="98" y1="228" x2="114" y2="222"/>
    <text class="lbl" x="250" y="200">bottle neck</text>
  </svg>
  <figcaption>Section through a push-and-turn cap. The outer cap (blue) is held on by a lip under the inner cap's skirt but can spin. A small gap separates its lugs from the inner cap's teeth; pushing down closes the gap so the lugs can drive the teeth (next figure).</figcaption>
</figure>

<figure class="diagram">
  <svg viewBox="0 0 590 240" role="img" aria-label="Unrolled view of push-and-turn closure teeth, without and with downward push">
    <g>
      <text class="lbl-b" x="20" y="22">Turn to open, no push</text>
      <rect class="part" x="20" y="48" width="230" height="16"/>
      <text class="lbl-sm" x="24" y="42">outer cap</text>
      <rect class="acc-fill" x="106" y="64" width="20" height="50"/>
      <path class="part" d="M20,150 L40,150 L65,118 L70,118 L70,150 L95,150 L120,118 L125,118 L125,150 L150,150 L175,118 L180,118 L180,150 L205,150 L230,118 L235,118 L235,150 L250,150 L250,166 L20,166 Z"/>
      <text class="lbl-sm" x="24" y="184">inner cap (threaded to bottle)</text>
      <path class="acc arr-acc" d="M150,90 L210,90"/>
      <path class="ln arr" d="M240,90 L240,64"/>
      <text class="lbl" x="20" y="210">Lug rides up the ramp, lifting the cap.</text>
      <text class="lbl" x="20" y="226">It clicks over; the bottle stays shut.</text>
    </g>
    <g transform="translate(290,0)">
      <text class="lbl-b" x="20" y="22">Push down and turn</text>
      <rect class="part" x="20" y="70" width="230" height="16"/>
      <path class="ln arr" d="M125,30 L125,64"/>
      <text class="lbl" x="134" y="44">push</text>
      <rect class="acc-fill" x="72" y="86" width="20" height="62"/>
      <path class="part" d="M20,150 L40,150 L65,118 L70,118 L70,150 L95,150 L120,118 L125,118 L125,150 L150,150 L175,118 L180,118 L180,150 L205,150 L230,118 L235,118 L235,150 L250,150 L250,166 L20,166 Z"/>
      <path class="acc arr-acc" d="M150,100 L210,100"/>
      <text class="lbl" x="20" y="210">Held down, the lug cannot climb the ramp,</text>
      <text class="lbl" x="20" y="226">so it drives the inner cap round.</text>
    </g>
  </svg>
  <figcaption>Unrolled view of the coupling. Turning the closed way, the lugs meet the vertical tooth faces and always drive, so the cap can be tightened without pushing.</figcaption>
</figure>

<p>Turning to close, the lugs meet the vertical faces and drive the inner cap, so it can always be tightened. Turning to open, the lugs meet the ramps. Without a downward push they ride up and over: the cap clicks and spins. With a push, the lug cannot lift, and it drives the inner cap round. It is the ramp-and-friction condition from the click pen (Topic 2) used in reverse: the design makes sure the lug <em>does</em> slide unless it is held down.</p>

<h2>Other common designs</h2>
<table>
  <tr><th>Design</th><th>How it resists children</th><th>Typical use</th></tr>
  <tr><td>Squeeze-and-turn</td><td>Squeezing two marked points flexes the cap skirt and frees internal lugs from a ratchet ring on the bottle neck</td><td>Household chemicals, some pharmacy vials</td></tr>
  <tr><td>Align-and-lift (snap cap)</td><td>A tab can only be pushed off when arrows on cap and bottle line up</td><td>Pharmacy vials</td></tr>
  <tr><td>Reversible pharmacy cap</td><td>One side is CR; flipped over, it is a plain screw cap for adults without children at home</td><td>Prescription vials</td></tr>
  <tr><td>Peel-push blister</td><td>Tough foil-paper laminate must be peeled before the tablet can be pushed through</td><td>Tablets and capsules</td></tr>
  <tr><td>Lighter and pouch mechanisms</td><td>Hidden or two-stage actuation (guard plus wheel, pinch-and-slide zipper)</td><td>Lighters, cannabis and detergent pouches</td></tr>
</table>

<h2>Test protocols</h2>
<p>Closures are certified by test, not by drawing. The US protocol (16 CFR 1700.20, under the Poison Prevention Packaging Act) and ISO 8317 for reclosable packs are broadly similar:</p>
<ol>
  <li><strong>Child panel:</strong> children aged 42–51 months try in pairs for 5 minutes. Then a tester shows them how (without explaining), and they try for 5 more minutes. Testing runs in panels of 50, up to 200 children.</li>
  <li><strong>Pass for children:</strong> at least 85% must fail to open it in the first 5 minutes, and at least 80% over the full 10 minutes.</li>
  <li><strong>Adult panel:</strong> 100 adults aged 50–70 must open and properly reclose it, with only the instructions on the pack. At least 90% must succeed.</li>
</ol>
<p>The adult test matters as much as the child test. A cap that frustrates adults gets left off or decanted into another container, and then it protects nobody.</p>

<h2>Key design parameters</h2>
<ul>
  <li><strong>Push force and torque:</strong> high enough that a toddler's random efforts fail, low enough for arthritic hands. Designs are tuned through repeated panel tests.</li>
  <li><strong>Tooth geometry:</strong> the ramp angle and flex stiffness set how easily the lug slips without a push.</li>
  <li><strong>Visual cues:</strong> embossed "push down and turn" text and arrows help the adult panel pass.</li>
  <li><strong>Liners and seals:</strong> the CR mechanism must not compromise the moisture or vapor seal.</li>
</ul>

<h2>Materials and manufacturing</h2>
<ul>
  <li>Outer caps: PP for its toughness and fatigue-resistant flex features.</li>
  <li>Inner caps: PP or HDPE, with a liner (foam, induction-seal foil) for sealing.</li>
  <li>Both molded in high-cavity tools; inner and outer caps are snapped together on an assembly machine.</li>
  <li>Unscrewing molds or strip-off (bumped) threads are used to release the internal thread.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Teeth wear or round off: the cap opens without a push (it fails CR silently).</li>
  <li>The outer cap pulls off the inner cap.</li>
  <li>Users leave the cap loose, so CR is never engaged.</li>
  <li>Cold or stiff material raises forces beyond what older adults can manage.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Turn a push-and-turn cap the open way without pressing and listen to the lugs click over the ramps.</li>
    <li>Look inside a pill vial cap: you will see the two parts and the teeth.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'What is the core principle behind most child-resistant closures?',
      options: [
        'They need very high opening torque',
        'They need two dissimilar motions at the same time',
        'They need a key',
        'They are too large for small hands to grip',
      ],
      answer: 1,
      explain: 'Push and turn, squeeze and turn, align and lift: coordinating two motions at once is the barrier for young children.',
    },
    {
      q: 'In a push-and-turn cap, what happens if you turn to open without pushing?',
      options: [
        'The cap opens slowly',
        'The lugs ride up the tooth ramps and the outer cap clicks and spins freely',
        'The cap locks permanently',
        'The inner cap unscrews but the outer cap stays',
      ],
      answer: 1,
      explain: 'Without downward force the lugs lift over each ramp, so no torque reaches the inner, threaded cap.',
    },
    {
      q: 'Under the US child-panel protocol, what is the first-5-minute pass criterion?',
      options: [
        'At least 50% of children fail to open',
        'At least 85% of children fail to open',
        'No child opens it',
        'At least 90% of children open it',
      ],
      answer: 1,
      explain: 'At least 85% must fail before the demonstration, and at least 80% over the full 10 minutes.',
    },
    {
      q: 'Why is there an adult (50–70 years) panel test as well?',
      options: [
        'To check the cap is not too easy',
        'Because a cap adults cannot open and reclose gets left off or decanted, defeating its purpose',
        'To measure cap torque',
        'Because adults are more likely to be poisoned',
      ],
      answer: 1,
      explain: 'At least 90% of the adult panel must open and properly reclose it. Unusable CR packaging leads to unsafe workarounds.',
    },
    {
      q: 'Why can a push-and-turn cap be tightened without pushing?',
      options: [
        'The thread is reversed',
        'In the closing direction the lugs meet vertical tooth faces, which drive without lifting',
        'The cap has a separate spring for closing',
        'It cannot; you must always push',
      ],
      answer: 1,
      explain: 'The teeth are asymmetric: vertical drive faces for closing, ramps for opening. Closing always engages.',
    },
  ],
});
