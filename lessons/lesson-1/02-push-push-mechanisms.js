Registry.registerTopic('lesson-1', {
  n: 2,
  title: 'Pen push-push (click) mechanisms',
  family: 'Bistable motion',
  readTime: 10,
  source: 'doc',
  summary:
    'A push-push mechanism turns identical, repeated linear inputs into two alternating stable states. The trick in almost every design is converting push into rotation with ramps, then using rotation to choose which stop it lands on.',
  body: `
<p>Two architectures dominate: the <strong>rotating cam indexer</strong> (retractable pens) and the <strong>heart-shaped cam track</strong> (push-to-open drawers, card slots, glovebox latches).</p>

<h2>Architecture 1: rotating cam indexer (the click pen)</h2>
<p>Three parts do the work inside the barrel:</p>
<ul>
  <li><strong>Barrel (housing)</strong> with internal axial ribs. Between ribs are channels of two depths: deep channels and shallow notches. Rib ends are angled.</li>
  <li><strong>Plunger (button)</strong> that slides axially but cannot rotate, with a sawtooth crown on its lower end.</li>
  <li><strong>Rotor (cam)</strong> that can slide and rotate, with lugs whose tops are angled to mate with the plunger's sawtooth. The refill sits against the rotor; a compression spring around the refill pushes everything upward.</li>
</ul>
<figure class="diagram">
  <svg viewBox="0 0 600 300" role="img" aria-label="The three parts of a click-pen mechanism: plunger with splines and sawtooth crown, rotor with angled lugs, and the barrel cut open to show ribs, deep channels and shallow notches">
    <g>
      <rect class="part" x="66" y="18" width="68" height="26" rx="8"/>
      <rect class="part" x="78" y="44" width="44" height="132"/>
      <rect class="acc-fill" x="84" y="56" width="6" height="120"/>
      <rect class="acc-fill" x="110" y="56" width="6" height="120"/>
      <path class="part" d="M78,176 L122,176 L122,180 L111,190 L111,180 L100,190 L100,180 L89,190 L89,180 L78,190 Z"/>
      <text class="lbl-acc" x="134" y="96">splines</text>
      <line class="thin" x1="132" y1="92" x2="117" y2="100"/>
      <text class="lbl" x="128" y="200">sawtooth</text>
      <text class="lbl" x="128" y="214">crown</text>
      <line class="thin" x1="126" y1="196" x2="116" y2="186"/>
      <text class="lbl-b" x="40" y="242">Plunger (button)</text>
      <text class="lbl-sm" x="40" y="258">Slides up and down only: its</text>
      <text class="lbl-sm" x="40" y="272">splines ride in the barrel channels.</text>
      <text class="lbl-sm" x="40" y="286">Its sawtooth pushes the rotor.</text>
    </g>
    <g>
      <path class="part" d="M276,122 L276,118 L287,108 L287,118 L298,108 L298,118 L309,108 L309,118 L320,108 L320,118 L324,114 L324,122 Z"/>
      <rect class="part" x="276" y="122" width="48" height="78"/>
      <path class="acc-fill" d="M262,132 L276,126 L276,168 L262,168 Z"/>
      <path class="acc-fill" d="M324,132 L338,126 L338,168 L324,168 Z"/>
      <path class="acc-fill" opacity="0.6" d="M293,134 L307,128 L307,170 L293,170 Z"/>
      <rect class="part" x="290" y="200" width="20" height="18"/>
      <line class="dash" x1="300" y1="218" x2="300" y2="226"/>
      <text class="lbl" x="214" y="98">mating</text>
      <text class="lbl" x="214" y="112">sawtooth</text>
      <line class="thin" x1="262" y1="108" x2="280" y2="112"/>
      <text class="lbl-acc" x="342" y="122">lugs with</text>
      <text class="lbl-acc" x="342" y="136">angled tops</text>
      <line class="thin" x1="342" y1="140" x2="336" y2="130"/>
      <text class="lbl-sm" x="316" y="214">refill + spring push up</text>
      <text class="lbl-b" x="228" y="242">Rotor (cam)</text>
      <text class="lbl-sm" x="228" y="258">Slides and rotates. Lugs land</text>
      <text class="lbl-sm" x="228" y="272">in deep channels (tip in) or</text>
      <text class="lbl-sm" x="228" y="286">shallow notches (tip out).</text>
    </g>
    <g>
      <rect class="hatch" x="418" y="20" width="12" height="176"/>
      <rect class="hatch" x="570" y="20" width="12" height="176"/>
      <rect x="430" y="20" width="140" height="176" fill="var(--surface-2)" opacity="0.8"/>
      <path class="part" d="M434,20 L456,20 L456,138 L434,150 Z"/>
      <path class="part" d="M474,20 L496,20 L496,138 L474,150 Z"/>
      <path class="part" d="M496,20 L514,20 L514,120 L496,120 Z"/>
      <path class="part" d="M514,20 L536,20 L536,138 L514,150 Z"/>
      <path class="part" d="M554,20 L570,20 L570,140 L554,150 Z"/>
      <line class="dash" x1="465" y1="30" x2="465" y2="140"/>
      <line class="dash" x1="505" y1="124" x2="505" y2="140"/>
      <text class="lbl" x="386" y="96">rib</text>
      <line class="thin" x1="406" y1="92" x2="440" y2="96"/>
      <text class="lbl-acc" x="440" y="178">deep</text>
      <line class="thin" x1="460" y1="168" x2="465" y2="150"/>
      <text class="lbl-acc" x="492" y="190">shallow</text>
      <line class="thin" x1="510" y1="180" x2="505" y2="142"/>
      <text class="lbl-b" x="410" y="242">Barrel (cut open)</text>
      <text class="lbl-sm" x="410" y="258">Fixed. Axial ribs with angled ends.</text>
      <text class="lbl-sm" x="410" y="272">Between ribs, deep channels</text>
      <text class="lbl-sm" x="410" y="286">alternate with shallow notches.</text>
    </g>
  </svg>
  <figcaption>The three parts that do the work, drawn side by side with the button at the top. Blue marks the features that index the rotor: the plunger's splines, the rotor's angled lugs, and the barrel's two kinds of gap between ribs. All the sloped faces (plunger teeth, rotor teeth, lug tops and rib ends) lean the same way, so every push turns the rotor in the same direction.</figcaption>
</figure>

<p>The cycle:</p>
<ol>
  <li>Pressing the button pushes the rotor down until its lugs clear the bottom of the barrel ribs.</li>
  <li>Once free, the plunger's sawtooth ramps rotate the rotor by a fraction of a tooth.</li>
  <li>On release, the spring drives the rotor up. Its angled lug tops strike the angled rib ends and rotate further.</li>
  <li>Depending on which phase it has reached, each lug lands in a shallow notch (latched, tip out) or slides up a deep channel (retracted).</li>
  <li>The next click repeats this and lands in the other channel type.</li>
</ol>
<figure class="diagram">
  <svg viewBox="0 0 600 284" role="img" aria-label="Unrolled view of the barrel wall showing one rotor lug moving from a shallow notch, down and sideways when pressed, then up into a deep channel when released">
    <path class="hatch" d="M60,30 L440,30 L440,137 L402,150 L402,36 L380,36 L380,137 L342,150 L342,122 L320,122 L320,137 L282,150 L282,36 L260,36 L260,137 L222,150 L222,122 L200,122 L200,137 L162,150 L162,36 L140,36 L140,137 L102,150 L102,122 L80,122 L80,137 L60,143.8 Z"/>
    <path class="ln arr" d="M24,140 L24,60"/>
    <text class="lbl-sm" x="8" y="160">toward</text>
    <text class="lbl-sm" x="8" y="174">button</text>
    <path class="acc-fill"  d="M82,129 L100,123 L100,149 L82,149 Z"/>
    <path class="acc-fill" opacity="0.55" stroke-dasharray="4 3" d="M106,164 L124,158 L124,184 L106,184 Z"/>
    <path class="acc-fill" opacity="0.55" stroke-dasharray="4 3" d="M143,46 L161,40 L161,66 L143,66 Z"/>
    <path class="dash"  d="M202,129 L220,123 L220,149 L202,149 Z"/>
    <path class="ln arr" d="M98,150 L110,160"/>
    <path class="acc arr-acc" d="M126,166 C140,160 146,140 152,120 L152,72"/>
    <text class="lbl-b" x="84" y="116">1</text>
    <text class="lbl-b" x="94" y="200">2</text>
    <text class="lbl-b" x="166" y="56">3</text>
    <text class="lbl-b" x="224" y="146">4</text>
    <text class="lbl-sm" x="134" y="26">deep channel ↑</text>
    <text class="lbl-sm" x="174" y="180">shallow notch</text>
    <line class="thin" x1="200" y1="170" x2="211" y2="152"/>
    <text class="lbl-b" x="460" y="54">Barrel ribs, unrolled</text>
    <text class="lbl-sm" x="460" y="70">(inside wall laid flat;</text>
    <text class="lbl-sm" x="460" y="84">left–right = around the pen)</text>
    <text class="lbl" x="20" y="224">1 Latched: lug sits in a shallow notch, so the tip is out.</text>
    <text class="lbl" x="20" y="240">2 Press: lug is pushed below the ribs; the plunger's teeth nudge it sideways.</text>
    <text class="lbl" x="20" y="256">3 Release: lug rides up the angled rib end into a deep channel, so the tip retracts.</text>
    <text class="lbl" x="20" y="272">4 Next click: the same moves carry it on into the next shallow notch (tip out).</text>
  </svg>
  <figcaption>The inside of the barrel unrolled flat, following one rotor lug (blue) through a click. Each press and release moves it one gap along, alternating between shallow notches (tip out) and deep channels (tip retracted).</figcaption>
</figure>
<p>Each click therefore indexes the rotor by half a rib pitch, alternating states. Some pens also rotate the refill each click, which spreads ball and socket wear.</p>

<h2>The ramp condition</h2>
<p>The rotor only turns if the ramp is steep enough to overcome friction. For a ramp at angle β measured from the plane perpendicular to the axis, sliding requires roughly:</p>
<div class="formula">tan β &gt; μ</div>

<figure class="diagram">
  <svg viewBox="0 0 520 240" role="img" aria-label="Force on a ramp: axial force splits into a component along the ramp and a normal component">
    <path class="hatch" d="M70,210 L340,48 L340,210 Z"/>
    <line class="ln" x1="40" y1="210" x2="480" y2="210"/>
    <path class="thin" d="M130,210 A60,60 0 0 0 121.4,179.2"/>
    <text class="lbl-b" x="136" y="200">β</text>
    <circle class="acc-fill" cx="230" cy="104" r="12"/>
    <path class="ln arr" d="M230,24 L230,88"/>
    <text class="lbl-b" x="238" y="40">F (axial push)</text>
    <path class="acc arr-acc" d="M218,112 L170,141"/>
    <text class="lbl-acc" x="40" y="128">F sin β drives sliding</text>
    <path class="hot arr" d="M250,120 L282,101"/>
    <text class="lbl-hot" x="290" y="102">friction μ F cos β</text>
    <text class="lbl" x="360" y="190">Ramp face (rib end</text>
    <text class="lbl" x="360" y="206">or lug top)</text>
  </svg>
  <figcaption>The rotor slides (and so rotates) only if the push along the ramp, F sin β, beats friction, μ F cos β. That simplifies to tan β &gt; μ.</figcaption>
</figure>

<p>You also need extra margin for friction at the rotor's bore and the spring end. With acetal on acetal (μ around 0.2–0.35), ramps need to be well above 20°; designs typically use 45° to 60°. Steeper ramps rotate reliably but give less rotation per millimeter of stroke, so stroke length, tooth count and ramp angle trade off against each other.</p>
<p>Other design parameters:</p>
<ul>
  <li><strong>Overtravel:</strong> the rotor must clear the rib ends by a margin before rotation begins, or it jams on tooth tips.</li>
  <li><strong>Tooth tips:</strong> sharp tips index precisely but wear and chip; tip radii must stay small compared with the indexing step.</li>
  <li><strong>Spring preload:</strong> enough to latch reliably and return the button, but light enough for a pleasant click (often a few newtons).</li>
  <li><strong>Click feel:</strong> the audible snap is the rotor dropping into its notch; designers tune it with notch depth and spring force.</li>
</ul>

<h2>Architecture 2: heart-shaped cam (push-to-open latch)</h2>
<p>A follower pin on a flexible arm rides in a closed track shaped like a heart, with a spring pushing the moving part outward.</p>

<figure class="diagram">
  <svg viewBox="0 0 520 290" role="img" aria-label="Heart-shaped cam track with the follower pin path in four steps">
    <path d="M260,250 C175,195 132,125 165,78 C190,44 240,52 260,100 C280,52 330,44 355,78 C388,125 345,195 260,250 Z" fill="none" stroke="var(--surface-2)" stroke-width="30" stroke-linejoin="round"/>
    <path class="thin" d="M260,250 C175,195 132,125 165,78 C190,44 240,52 260,100 C280,52 330,44 355,78 C388,125 345,195 260,250 Z"/>
    <path class="acc arr-acc" d="M250,236 C190,192 160,135 172,92"/>
    <path class="acc arr-acc" d="M186,70 C214,66 240,80 254,104"/>
    <path class="acc arr-acc" d="M268,104 C278,76 306,62 340,72"/>
    <path class="acc arr-acc" d="M356,98 C362,148 326,198 272,236"/>
    <circle class="solid" cx="260" cy="104" r="7"/>
    <circle class="part" cx="260" cy="246" r="7"/>
    <text class="lbl-acc" x="70" y="160">1 Push in</text>
    <text class="lbl-acc" x="150" y="40">2 Release: drops</text>
    <text class="lbl-acc" x="150" y="56">into the cusp</text>
    <text class="lbl-acc" x="300" y="40">3 Push again</text>
    <text class="lbl-acc" x="372" y="160">4 Release:</text>
    <text class="lbl-acc" x="372" y="176">pops out</text>
    <text class="lbl-b" x="212" y="140">Latched (cusp)</text>
    <text class="lbl-b" x="276" y="274">Out position</text>
    <path class="ln arr" d="M470,90 L470,40"/><text class="lbl" x="420" y="110">push</text>
    <path class="ln arr" d="M490,40 L490,90"/><text class="lbl" x="476" y="110">spring</text>
  </svg>
  <figcaption>The pin travels one way around the heart. Steps in the track floor stop it running backwards.</figcaption>
</figure>

<ol>
  <li>Pushing in drives the pin up one side of the heart.</li>
  <li>On release the pin drops into the cusp (the notch at the top center), holding the part in.</li>
  <li>Pushing again lifts the pin out of the cusp; angled walls steer it onto the other side.</li>
  <li>On release the pin travels the return path and the part pops out.</li>
</ol>
<p>The track has small steps (changes in floor depth) so the pin cannot run backwards. The follower arm is usually stainless spring wire or a molded flexure. This design suits short strokes and is common in furniture push latches, memory card sockets and automotive storage bins.</p>

<h2>Materials</h2>
<table>
  <tr><th>Part</th><th>Common materials</th><th>Reason</th></tr>
  <tr><td>Rotor / cam</td><td>POM (acetal)</td><td>Low friction, low wear, dimensional stability, good fatigue</td></tr>
  <tr><td>Plunger</td><td>POM, ABS, or metal on premium pens</td><td>Wear at the sawtooth; cosmetic surface</td></tr>
  <tr><td>Barrel</td><td>ABS, PC, PP; brass or aluminum on premium pens</td><td>Cosmetics, cost, ribs must not wear</td></tr>
  <tr><td>Spring</td><td>Music wire or 302 stainless</td><td>Fatigue life of tens of thousands of cycles</td></tr>
  <tr><td>Heart-cam follower</td><td>Stainless spring wire</td><td>Stiffness plus wear resistance in the track</td></tr>
</table>
<p>Acetal-on-acetal is common, though pairing acetal with nylon or a PTFE-filled grade lowers wear further. Lubricated grades are used where squeak matters.</p>

<h2>Manufacturing</h2>
<ul>
  <li>Everything is injection molded, in high-cavity tools (16–64 cavities) for pens.</li>
  <li>Barrel ribs run axially, so a straight-pull core forms them; angled rib ends are formed on the core tip.</li>
  <li>The rotor's angled lugs are molded with a two-plate tool; parting line placement is chosen so flash never lands on a ramp face.</li>
  <li>Gate location matters: weld lines across a tooth weaken it.</li>
  <li>Metal barrels are deep drawn or machined, then plated or anodized; the plastic mechanism usually sits in a molded insert.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Worn tooth tips: the pen stops latching or needs two clicks.</li>
  <li>Rotor stalls on a tip if overtravel is insufficient or flash sits on a ramp.</li>
  <li>Spring fatigue or set: weak return, mushy click.</li>
  <li>Heart cam: worn track steps let the pin reverse, so the latch occasionally fails to hold.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Take apart a cheap click pen: count the rotor lugs and barrel rib types, and you can predict the indexing angle.</li>
    <li>Push a push-to-open cabinet latch slowly and you will feel the moment the pin enters the cusp.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'In a click pen, what converts the straight push of the button into rotation of the rotor?',
      options: [
        'A torsion spring around the refill',
        'Angled ramps on the plunger sawtooth, rotor lugs and rib ends',
        'A helical thread inside the barrel',
        'Friction between the refill and the barrel',
      ],
      answer: 1,
      explain: 'Ramps turn axial force into a sideways component. The plunger sawtooth rotates the rotor on the press, and the angled rib ends rotate it further on the return.',
    },
    {
      q: 'How far does the rotor index on each click?',
      options: ['A full rib pitch', 'Half a rib pitch', 'Exactly 90°', 'One full turn'],
      answer: 1,
      explain: 'Half a rib pitch per click, which alternates each lug between a shallow notch (tip out) and a deep channel (retracted).',
    },
    {
      q: 'For acetal on acetal with μ ≈ 0.3, which ramp angle β is most likely to stall instead of rotating?',
      options: ['15°', '45°', '55°', '60°'],
      answer: 0,
      explain: 'The ramp slides only if tan β > μ. tan 15° ≈ 0.27, which is below 0.3, so it sticks. That is why designs use 45–60°.',
    },
    {
      q: 'In a heart-cam push latch, what holds the drawer closed?',
      options: [
        'A magnet at the back of the track',
        'Friction on the follower arm',
        'The follower pin seated in the cusp at the top of the heart',
        'The spring pushing the drawer inward',
      ],
      answer: 2,
      explain: 'On the first release the pin drops into the cusp. The outward spring force holds it there until the next push lifts it out.',
    },
    {
      q: 'A new pen design sometimes jams halfway through a click. Which pair of causes fits best?',
      options: [
        'Spring preload too low and barrel too long',
        'Insufficient overtravel past the rib ends, or flash on a ramp face',
        'Ramp angle too steep and teeth too blunt',
        'Barrel made of ABS instead of brass',
      ],
      answer: 1,
      explain: 'If the rotor does not fully clear the rib ends, or flash sits on a ramp, the rotor stalls on a tooth tip instead of indexing.',
    },
  ],
});
