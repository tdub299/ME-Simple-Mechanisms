Registry.registerTopic('lesson-1', {
  n: 3,
  title: 'Peristaltic pumps',
  family: 'Fluid handling',
  readTime: 10,
  source: 'doc',
  summary:
    'A peristaltic pump moves fluid by squeezing a flexible tube shut and rolling the pinch point along it. The fluid only ever touches the tube, which makes the tube both the pump\'s best feature and its main wear part.',
  body: `
<h2>How it works</h2>
<figure class="diagram">
  <svg viewBox="0 0 520 320" role="img" aria-label="Peristaltic pump head: a three-roller rotor squeezes a tube against a curved occlusion bed">
    <path class="hatch" d="M260,277 A117,117 0 0 1 260,43 L260,28 A132,132 0 0 0 260,292 Z"/>
    <path class="tube-o" d="M470,268 L260,268 A108,108 0 0 1 260,52 L470,52"/>
    <path class="tube-i" d="M470,268 L260,268 A108,108 0 0 1 260,52 L470,52"/>
    <circle class="part" cx="260" cy="160" r="76"/>
    <circle class="part" cx="212.5" cy="242.3" r="19"/>
    <circle class="part" cx="212.5" cy="77.7" r="19"/>
    <circle class="part" cx="355" cy="160" r="19"/>
    <line class="thin" x1="260" y1="160" x2="212.5" y2="242.3"/>
    <line class="thin" x1="260" y1="160" x2="212.5" y2="77.7"/>
    <line class="thin" x1="260" y1="160" x2="355" y2="160"/>
    <circle class="solid" cx="260" cy="160" r="6"/>
    <path class="acc arr-acc" d="M215,185 A50,50 0 0 1 235,117"/>
    <path class="fl-line arr-fl" d="M360,52 L440,52"/>
    <path class="fl-line arr-fl" d="M440,268 L360,268"/>
    <text class="lbl-b" x="380" y="36">Outlet</text>
    <text class="lbl-b" x="380" y="300">Inlet (suction)</text>
    <text class="lbl" x="18" y="140">Trapped</text>
    <text class="lbl" x="18" y="156">"pillow"</text>
    <line class="thin" x1="78" y1="150" x2="150" y2="160"/>
    <text class="lbl" x="34" y="34">Occlusion bed</text>
    <line class="thin" x1="120" y1="40" x2="190" y2="58"/>
    <text class="lbl" x="380" y="166">Roller</text>
    <text class="lbl-acc" x="268" y="208">rotor</text>
  </svg>
  <figcaption>Each roller pinches the tube shut against the occlusion bed. Rotation carries the trapped pillow of fluid from the inlet (bottom) to the outlet (top).</figcaption>
</figure>
<ol>
  <li>A rotor carrying two or more rollers (or sliding shoes) presses a tube against a curved track (the occlusion bed).</li>
  <li>Each roller fully pinches the tube, trapping a "pillow" of fluid between it and the next roller.</li>
  <li>As the rotor turns, the pillow is pushed toward the outlet.</li>
  <li>Behind each roller the tube springs back to round, creating suction that draws in fresh fluid. This is why the pump self-primes and can run dry.</li>
</ol>
<p>Flow is close to positive displacement:</p>
<div class="formula">Q ≈ <span class="frac"><span>π d<sub>i</sub><sup>2</sup></span><span>4</span></span> · L · N</div>
<p>where d<sub>i</sub> is tube bore, L is tube length swept per revolution and N is speed. Real flow is lower and drifts with back pressure, inlet suction, tube wear and temperature, so precise dosing pumps are calibrated per tube.</p>

<h2>Key design parameters</h2>
<ul>
  <li><strong>Occlusion.</strong> The gap between roller and track is set slightly smaller than twice the tube wall thickness. Too loose and fluid slips back (flow falls with pressure); too tight and tube life collapses and spallation (shedding of tube particles) rises.</li>
  <li><strong>Wall thickness.</strong> Thicker walls recover faster and handle more suction and pressure. 1.6 mm (1/16 in) walls are a common lab standard; industrial hose pumps use reinforced walls of 5–15 mm.</li>
  <li><strong>Roller count.</strong> More rollers mean smaller pillows and less pulsation, but more compression cycles per revolution and shorter tube life. Lab heads typically use 3–8 rollers; some heads offset two tubes by half a roller pitch to smooth flow.</li>
  <li><strong>Pressure capability.</strong> Tube pumps typically handle up to about 2–8 bar. Shoe-type hose pumps, with the hose in a lubricant-filled housing, reach roughly 15 bar and pump abrasive slurries.</li>
  <li><strong>Speed vs life.</strong> Tube life is counted in compression cycles; running a bigger tube slower usually lasts far longer than a small tube fast.</li>
</ul>

<h2>Why engineers choose it</h2>
<ul>
  <li>No seals, valves or wetted moving parts: no contamination, easy sterile changeover.</li>
  <li>Low shear, gentle on blood cells, live cultures and shear-sensitive polymers.</li>
  <li>Handles slurries, abrasives and gas-liquid mixes.</li>
  <li>Reversible, self-priming, dry-running.</li>
</ul>
<p>The costs are pulsating flow, periodic tube replacement, limited pressure and flow that drifts as the tube ages.</p>

<h2>Where you see it</h2>
<table>
  <tr><th>Application</th><th>Notes</th></tr>
  <tr><td>Dialysis and heart-lung blood pumps</td><td>Roller pumps with careful occlusion setting to limit hemolysis</td></tr>
  <tr><td>Infusion pumps (linear peristaltic)</td><td>A camshaft drives a row of fingers that press sequentially on an IV line</td></tr>
  <tr><td>Lab dosing and bioprocessing</td><td>Single-use tubing sets, pharma-grade TPE or silicone</td></tr>
  <tr><td>Food and beverage dosing</td><td>Sanitary, easy cleaning</td></tr>
  <tr><td>Mining and wastewater (hose pumps)</td><td>Abrasive slurries, lime, sludge</td></tr>
  <tr><td>Appliances (dishwashers, coffee machines)</td><td>Cheap small pumps for detergent or descaler dosing</td></tr>
</table>
<p>Linear peristaltic pumps deserve a note: instead of rotating rollers, a cam stack drives 10 or more fingers in a traveling wave against a flat plate. They fit a disposable IV set into a clamshell door, which is why most hospital large-volume infusion pumps use them.</p>

<h2>Tubing materials</h2>
<table>
  <tr><th>Material</th><th>Strengths</th><th>Limits</th></tr>
  <tr><td>Platinum-cured silicone</td><td>Biocompatible, wide temperature range, good recovery</td><td>Gas permeable, weak against solvents and abrasion, more spallation</td></tr>
  <tr><td>Polypropylene-based TPE (e.g. PharMed BPT)</td><td>Long life, low spallation, low permeability</td><td>Opaque, stiffer</td></tr>
  <tr><td>PVC (e.g. Tygon formulations)</td><td>Clear, cheap</td><td>Plasticizer extraction, shorter life</td></tr>
  <tr><td>Norprene / EPDM-PP TPE</td><td>Chemical and weather resistance</td><td>Opaque</td></tr>
  <tr><td>Fluoroelastomer (Viton)</td><td>Aggressive solvents and acids</td><td>Expensive, short life</td></tr>
  <tr><td>Natural rubber / NBR (reinforced hose)</td><td>Abrasion resistance in hose pumps</td><td>Limited chemical resistance</td></tr>
</table>
<p>Tubing is extruded to tight bore and wall tolerances (wall variation changes flow and occlusion directly). Silicone is cured in line and then post-cured to drive off volatiles for medical and food grades.</p>

<h2>Pump head materials and manufacturing</h2>
<ul>
  <li>Rollers: stainless steel, or acetal or PPS on low-cost heads, often on small ball bearings.</li>
  <li>Rotor and housing: die-cast or machined aluminum on industrial heads; PPS, PBT or PC moldings on lab and OEM heads.</li>
  <li>The occlusion bed is often adjustable or spring-loaded, which compensates for tube wall variation.</li>
  <li>Drives: stepper motors on dosing pumps (fine speed control), gearmotors on fixed-speed and industrial units.</li>
</ul>

<h2>Failure modes</h2>
<ul>
  <li>Tube fatigue and rupture, often signaled first by falling flow.</li>
  <li>Compression set: the tube stops recovering fully, so suction and flow drop.</li>
  <li>Spallation: particles shed into the fluid, critical in medical and pharma.</li>
  <li>Tube walking: the tube creeps through the head; clamps or molded collars on tubing sets prevent it.</li>
</ul>

<div class="notice">
  <h3>Things to notice next time</h3>
  <ul>
    <li>On a dialysis machine or lab pump, look for how the tube is located and how occlusion is set (screw, spring, or fixed bed).</li>
    <li>An infusion pump's door hides the finger stack; the disposable set is designed around it.</li>
  </ul>
</div>
`,
  quiz: [
    {
      q: 'Why can a peristaltic pump self-prime and run dry without damage?',
      options: [
        'It has a built-in check valve at the inlet',
        'The tube springs back to round behind each roller, creating suction, and there are no seals to burn',
        'The rollers are lubricated by the pumped fluid',
        'The motor reverses automatically when dry',
      ],
      answer: 1,
      explain: 'Tube recovery behind each roller pulls fluid in. Nothing wetted rubs or seals, so dry running does no harm.',
    },
    {
      q: 'What happens if occlusion is set too tight?',
      options: [
        'Fluid slips back and flow falls with pressure',
        'Pulsation disappears',
        'Tube life collapses and spallation increases',
        'The pump can no longer self-prime',
      ],
      answer: 2,
      explain: 'Over-squeezing the tube crushes the wall each pass. That shortens fatigue life and sheds particles. Too loose is the case where fluid slips back.',
    },
    {
      q: 'Moving from 3 rollers to 6 rollers on the same head mainly:',
      options: [
        'Reduces pulsation but shortens tube life',
        'Increases flow per revolution',
        'Raises maximum pressure to about 15 bar',
        'Eliminates the need to calibrate',
      ],
      answer: 0,
      explain: 'Smaller pillows mean smoother flow. But the tube is squeezed twice as often per revolution, so it fatigues sooner.',
    },
    {
      q: 'Using Q ≈ (π d²/4)·L·N, roughly what happens to flow if you double the tube bore and keep everything else the same?',
      options: ['It doubles', 'It halves', 'It stays the same', 'It roughly quadruples'],
      answer: 3,
      explain: 'Flow scales with bore area, which goes with d². Doubling d gives about 4× the flow.',
    },
    {
      q: 'Why do most hospital large-volume infusion pumps use linear peristaltic mechanisms?',
      options: [
        'They reach higher pressures than any other pump',
        'A finger stack can act on a disposable IV set in a clamshell door, and fluid never touches the pump',
        'They produce perfectly smooth, non-pulsating flow',
        'They need no motor',
      ],
      answer: 1,
      explain: 'The disposable set keeps the pump sterile and makes changeover easy. The pump presses on the line from outside.',
    },
  ],
});
