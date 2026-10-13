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
<p>The cycle:</p>
<ol>
  <li>Pressing the button pushes the rotor down until its lugs clear the bottom of the barrel ribs.</li>
  <li>Once free, the plunger's sawtooth ramps rotate the rotor by a fraction of a tooth.</li>
  <li>On release, the spring drives the rotor up. Its angled lug tops strike the angled rib ends and rotate further.</li>
  <li>Depending on which phase it has reached, each lug lands in a shallow notch (latched, tip out) or slides up a deep channel (retracted).</li>
  <li>The next click repeats this and lands in the other channel type.</li>
</ol>
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
