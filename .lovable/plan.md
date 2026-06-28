## Goal
Replace the current "Operating Footprint — Where We Operate" 4-column text grid with a clean, institutional graphic that visually communicates Ravencourt's operating regions.

## Decisions made (user deferred choices)
- **Graphic style:** A minimal, institutional SVG world map with highlighted continental zones.
- **Interactivity:** Hovering a highlighted region reveals its description and label.
- **Aesthetic:** Matches the site's existing visual discipline — warm stone background, charcoal/ink, serif headings, generous spacing, no visual noise.

## Implementation

1. Build a custom lightweight SVG world map in `src/routes/index.tsx`
   - Simplified, abstract continents (Europe/Africa/Middle East, North America, partial Asia) to avoid cartographic detail overload.
   - Highlight zones: Europe (primary), MENA, North America, and Select Global Markets as subtle fills or rings.
   - Milan as a small anchor point/dot with a label.

2. Reflow the `Footprint` section layout
   - Keep the existing `SectionHeader` eyebrow/title and intro paragraph.
   - Add the map graphic centered below the intro.
   - Place region labels and short descriptors around or below the map, tied to the highlighted zones.
   - On hover/focus of a zone, surface the corresponding description and emphasize the label.

3. Interactions
   - Hover on an SVG region path: fill opacity shifts to brand bronze/ink, tooltip-style card or adjacent label reveals the region description.
   - Keep motion subtle (opacity and transform transitions, no aggressive animation).
   - Ensure keyboard accessibility for region focus states.

4. Responsive behavior
   - Desktop: map graphic + labels in a side-by-side or balanced layout.
   - Tablet: stacked but still graphic-led.
   - Mobile: map scales down, labels stack beneath, interactions become tap-to-reveal.

5. Preserve existing copy
   - Reuse the current Europe, MENA, North America, and Select Global Markets text.
   - Keep the intro sentence: "Ravencourt is Milan-based, with cross-border coverage across Europe, MENA, North America, and select global markets."

6. Technical approach
   - Inline SVG with Tailwind classes and minimal CSS custom properties.
   - No new dependencies required.
   - Verify the section still anchors correctly via `#footprint`.

## Files touched
- `src/routes/index.tsx` — update the `Footprint` component.
- `src/styles.css` — only if new semantic tokens are needed (prefer existing `--ink`, `--bronze`, `--rule`, and `--background`).

## Outcome
A more visual, institutional "Where We Operate" section that feels like a private-markets advisory report graphic while retaining all existing content.