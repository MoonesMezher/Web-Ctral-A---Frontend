# Cinematic cover — shot brief & generation prompts

Target: one 1080 × 1350 (4:5) frame, photorealistic, publishable as-is.
Two stages: **generate the photograph**, then **composite the headline** with `overlay.html`.

---

## 1. The shot

**Scene.** An engineer-architect's studio at dusk. A long walnut desk seen from a low three-quarter
angle, camera roughly at desk height so the laptop reads as a silhouette against the room rather
than a box in the middle of the frame. Blueprint paper sits foreground-left, partially in shadow,
its pencil annotations catching the warm light. The laptop is open at a slight angle, screen facing
away from camera, its dashboard glow landing on the paper and on the front edge of the desk.

**Light.** Two sources, one meaning each:
- **Warm golden, hard, from camera-left** — a window at low sun. It rakes across the paper, picks up
  dust, and stops before it reaches the right third.
- **Cool electric blue, soft, from camera-right** — the monitor plus a distant blue source. It fills
  the shadows and gives the navy side of the frame its colour without ever becoming a "neon" effect.

The two lights must **meet** in the middle of the desk, on the blueprint. That meeting point is the
story: idea on the warm side, product on the cool side.

**Composition.** Upper 40 % deliberately quiet — a dim wall, an out-of-focus shelf edge, negative
space. All the information lives in the lower half. Nothing crosses the centre line at head height.
Shoot the frame so the headline has a calm, dark field to sit on; the overlay adds a scrim, but a
clean plate is better than a rescued one.

**Tone.** Editorial, restrained, no people, no props for the sake of props. One pencil, one cup,
one ruler — nothing else.

---

## 2. Positive prompt

> Cinematic editorial photograph, portrait 4:5. An engineer's studio at dusk, a long walnut desk
> photographed from a low three-quarter angle at desk height, shallow depth of field. On the desk:
> a hand-drawn systems blueprint on drafting paper with fine pencil annotations and faint
> handwritten notes, a matte dark laptop open at a slight angle displaying a refined analytics
> dashboard with a delicate line chart, a brass ruler, one sharpened pencil, a small ceramic cup.
> Warm golden low-sun light rakes in from the left, catching the paper edge and floating dust; a
> cool electric-blue glow from the monitor fills the right side of the frame. The two lights meet
> on the blueprint. Deep navy shadows, warm golden highlights, cool blue accents, natural neutral
> wood and paper tones. The upper third of the frame is quiet, uncluttered, dim — reserved negative
> space. Shot on 35 mm at f/2.0, subtle film grain, soft falloff, natural restrained colour grade,
> realistic materials and tactile texture, editorial magazine photography, moody and inviting.
> No people, no text, no logos.

## 3. Negative prompt

> people, hands, faces, cartoon, illustration, vector art, 3d render, plastic icons, floating ui
> cards, holographic overlays, sci-fi interface, stock-photo smiles, cluttered desk, neon rainbow,
> heavy lens flare, hdr, oversaturated, cgi, distorted geometry, warped laptop, gibberish text,
> watermark, logo, signature, frame, border, collage, multiple images

## 4. Engine settings

| Engine | Settings |
|---|---|
| Midjourney | `--ar 4:5 --style raw --s 150 --v 7` — then `--no` the negative list |
| Flux 1.1 Pro | aspect 4:5, guidance 3.0–3.5, 28–36 steps |
| Firefly / Photoshop | generate at 4:5, then Generative Expand only if you need the top third calmer |
| Ideogram | skip — its typography will compete with your overlay |

Generate 6–8 candidates. Judge them on **lamp direction and the quiet top third**, not on detail;
the detail survives downscaling, wrong light does not.

**Grade after generation:** lift navy shadows toward `#0B1220`, keep the gold around `#E8B36A`,
suppress all greens, add 2–4 % grain, and darken the top 25 % by roughly 8 % so white type holds.

---

## 5. Compositing the headline

Open `overlay.html`, drag the generated frame onto the stage, download the PNG.

- Type: IBM Plex Sans Arabic, 600 / 700, three lines, right-aligned to a 88 px margin.
- Colour: `#FFFFFF`, no gradients on the type.
- Scrim: single top-down linear shadow, no decorative gradient.
- The overlay draws at exactly 1080 × 1350 — no rescaling, no interpolation.

Arabic is set with `direction: rtl` and right alignment so the shaping and the ? mark land
correctly; do not letter-space Arabic and do not centre it.
