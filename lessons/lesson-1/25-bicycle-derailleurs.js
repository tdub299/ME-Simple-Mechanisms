Registry.registerTopic('lesson-1', {
  n: 25,
  title: 'Bicycle derailleur',
  family: 'Linkages',
  readTime: 9,
  source: 'new',
  summary:
    'A rear derailleur is a parallelogram linkage that moves a sprung pulley cage sideways across the cassette. The parallelogram is <strong>slanted</strong> so the guide pulley also moves down and out as it moves inboard, tracking the growing cogs at a constant gap. Indexed shifting works because each click of the shifter pulls a fixed length of cable, and the derailleur turns that into exactly one cog pitch of movement.',
  body: `
<h2>How it works</h2>
<figure class="diagram">
  <svg viewBox="0 0 560 300" role="img" aria-label="Rear derailleur side view and a rear view showing the slant parallelogram tracking the cassette profile">
    <g>
      <text class="lbl-b" x="10" y="20">Side view (schematic)</text>
      <circle class="thin" cx="120" cy="140" r="30"/>
      <circle class="thin" cx="120" cy="140" r="40"/>
      <circle class="thin" cx="120" cy="140" r="50"/>
      <circle class="ln" cx="120" cy="140" r="60"/>
      <circle class="solid" cx="120" cy="140" r="6"/>
      <path class="dash" d="M10,80 L120,80 A60,60 0 0 1 150,192 C166,196 188,200 184,214 C180,230 170,244 186,260 C198,272 160,280 10,280" stroke="var(--ink-2)" stroke-dasharray="3 3"/>
      <rect class="hatch" x="232" y="96" width="30" height="28"/>
      <line class="ln" x1="240" y1="124" x2="198" y2="184" stroke-width="5"/>
      <line class="ln" x1="258" y1="124" x2="214" y2="190" stroke-width="5"/>
      <rect class="part" x="186" y="182" width="34" height="20" rx="3"/>
      <line class="acc" x1="172" y1="208" x2="196" y2="262" stroke-width="7"/>
      <circle class="part" cx="172" cy="208" r="12"/>
      <circle class="part" cx="196" cy="262" r="12"/>
      <path class="hot" d="M262,110 C280,90 280,60 262,40"/>
      <text class="lbl" x="272" y="102">hanger /</text>
      <text class="lbl" x="272" y="116">B-knuckle</text>
      <text class="lbl-hot" x="270" y="44">cable</text>
      <text class="lbl" x="262" y="156">parallelogram</text>
      <text class="lbl" x="262" y="170">links + spring</text>
      <text class="lbl" x="120" y="214" text-anchor="end">guide pulley</text>
      <text class="lbl" x="214" y="266">tension pulley</text>
      <text class="lbl-acc" x="214" y="238">sprung cage</text>
      <text class="lbl" x="2" y="144">cassette</text>
    </g>
    <g transform="translate(330,0)">
      <text class="lbl-b" x="0" y="20">Rear view: the slant</text>
      <rect class="part" x="10" y="60" width="8" height="140"/>
      <rect class="part" x="30" y="72" width="8" height="128"/>
      <rect class="part" x="50" y="86" width="8" height="114"/>
      <rect class="part" x="70" y="100" width="8" height="100"/>
      <rect class="part" x="90" y="114" width="8" height="86"/>
      <rect class="part" x="110" y="126" width="8" height="74"/>
      <rect class="part" x="130" y="138" width="8" height="62"/>
      <rect class="part" x="150" y="150" width="8" height="50"/>
      <line class="ln" x1="0" y1="200" x2="200" y2="200"/>
      <line class="acc" x1="6" y1="44" x2="170" y2="134"/>
      <circle class="acc-fill" cx="14" cy="46" r="7"/>
      <circle class="acc-fill" cx="94" cy="92" r="7"/>
      <circle class="acc-fill" cx="154" cy="126" r="7"/>
      <text class="lbl" x="0" y="226">inboard (big cog)</text>
      <text class="lbl" x="120" y="226" >outboard</text>
      <text class="lbl-acc" x="40" y="250">guide pulley path follows the</text>
      <text class="lbl-acc" x="40" y="266">cog profile at a constant gap</text>
    </g>
  </svg>
  <figcaption>Left: cable tension swings the parallelogram inboard against its return spring; the sprung cage keeps the chain taut. Right: because the parallelogram's pivots are slanted, the guide pulley moves down-and-out as it moves across, tracking the cassette's cone shape.</figcaption>
</figure>
<ol>
  <li>The derailleur bolts to the frame's <strong>hanger</strong> through its upper (B) knuckle.</li>
  <li>Two parallel links connect it to the lower (P) knuckle, which carries the pulley <strong>cage</strong>. A parallelogram keeps the cage pointing the same way as it moves sideways.</li>
  <li>Pulling the cable swings the parallelogram inboard toward bigger cogs; a <strong>return spring</strong> pulls it outboard when cable is released (on "high-normal" designs, which are most common).</li>
  <li>The cage pivots on a spring at the P-knuckle, so the <strong>tension pulley</strong> takes up chain slack as the chain moves between cog sizes.</li>
  <li>The <strong>guide pulley</strong> leads the chain onto the target cog. The slanted parallelogram keeps it close to every cog, which makes shifts fast and precise.</li>
</ol>

<h2>Adjustments</h2>
<ul>
  <li><strong>Limit screws (H and L):</strong> mechanical stops that keep the cage from pushing the chain off the smallest cog or into the spokes.</li>
  <li><strong>B-tension screw:</strong> rotates the derailleur about the B-knuckle to set the gap between guide pulley and cogs, most critical on the largest cog.</li>
  <li><strong>Barrel adjuster:</strong> fine-tunes cable length so each click lands centered on a cog.</li>
</ul>

<h2>Indexed shifting and actuation ratio</h2>
<p>The shifter has a ratchet (Topic 5) that pulls or releases a fixed cable length per click. The derailleur's <strong>actuation ratio</strong> converts that to lateral movement:</p>
<div class="formula">lateral move per click = cable pull per click × actuation ratio</div>
<p>That must equal the cog pitch (center-to-center spacing, roughly 4 mm on modern cassettes). Different brands and generations use different cable pulls and ratios, which is why shifters and derailleurs from different systems often do not index correctly together.</p>

<h2>Other design points</h2>
<ul>
  <li><strong>Capacity:</strong> the cage must absorb the slack difference across all gear combinations: (largest − smallest rear cog) + (largest − smallest chainring), in teeth. Long cages handle more but hang lower.</li>
  <li><strong>Clutch:</strong> modern mountain and gravel derailleurs add a one-way friction clutch on the cage pivot. It resists the cage swinging forward on bumps, cutting chain slap and dropped chains, at the cost of slightly heavier shifting.</li>
  <li><strong>Front derailleurs</strong> use a cage that pushes the chain sideways with no pulleys; many modern bikes drop them for a single chainring and a wide-range cassette.</li>
  <li><strong>Electronic</strong> derailleurs replace the cable with a motor and gearbox, with indexing done in software.</li>
</ul>

<h2>Materials and manufacturing</h2>
<table>
  <tr><th>Part</th><th>Typical choice</th></tr>
  <tr><td>Knuckles and links</td><td>Forged or die-cast aluminum; steel on budget models; carbon on premium cages</td></tr>
  <tr><td>Pivot pins and springs</td><td>Steel and stainless</td></tr>
  <tr><td>Pulleys</td><td>POM or reinforced polymer with bushings or sealed bearings</td></tr>
  <tr><td>Hanger</td><td>A replaceable aluminum part designed to bend or break before the frame does</td></tr>
</table>

<h2>Failure modes</h2>
<ul>
  <li>Bent hanger: the most common cause of poor shifting after a fall.</li>
  <li>Cable friction or stretch: slow or misaligned indexing.</li>
  <li>Worn pivots: sloppy, imprecise shifts.</li>
  <li>Misadjusted limit screws: chain thrown into the spokes or off the small cog.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>Shift through the gears with the bike on a stand and watch the guide pulley move up and out as it moves across.</li>
    <li>Find the H, L and B screws on your derailleur and the replaceable hanger behind it.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'Why is a rear derailleur\'s parallelogram slanted?',
      options: [
        'To make it lighter',
        'So the guide pulley moves down and out as it moves inboard, keeping a constant gap to cogs of growing size',
        'To increase chain tension',
        'To make room for the cable',
      ],
      answer: 1,
      explain: 'The cassette is cone-shaped. The slant makes the guide pulley track that profile for consistent, fast shifts.',
    },
    {
      q: 'What does the B-tension screw adjust?',
      options: [
        'Cable tension',
        'The gap between the guide pulley and the cogs',
        'The outermost limit of travel',
        'Clutch friction',
      ],
      answer: 1,
      explain: 'It rotates the derailleur about its mounting knuckle, moving the guide pulley closer to or farther from the cogs.',
    },
    {
      q: 'What do the H and L limit screws prevent?',
      options: [
        'Chain stretch',
        'The cage moving beyond the smallest or largest cog (chain off the cassette or into the spokes)',
        'Over-tightening the cable',
        'Pulley wear',
      ],
      answer: 1,
      explain: 'They are hard stops at each end of the derailleur\'s travel.',
    },
    {
      q: 'A shifter pulls 3.0 mm of cable per click and the derailleur\'s actuation ratio is 1.3. How far does the cage move per click?',
      options: ['2.3 mm', '3.0 mm', '3.9 mm', '4.3 mm'],
      answer: 2,
      explain: '3.0 × 1.3 = 3.9 mm, which should match the cassette\'s cog pitch.',
    },
    {
      q: 'What does a clutch on a modern rear derailleur do?',
      options: [
        'Makes shifting lighter',
        'Adds friction to forward cage rotation, reducing chain slap and dropped chains on rough ground',
        'Locks the derailleur in one gear',
        'Disengages the drivetrain when coasting',
      ],
      answer: 1,
      explain: 'Bumps try to swing the cage forward and let the chain bounce. The one-way friction clutch resists that.',
    },
  ],
});
