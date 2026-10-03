// Hand-drawn doodle library. Every doodle shares a 100×100 viewBox and is
// drawn with `currentColor` strokes, so one stroke weight and one rough/chalk
// filter keep the whole set consistent. Paths are intentionally imperfect.

export const doodles = {
  robot: `
    <path d="M29 31 q-1 -2 2 -2 h38 q4 0 3 4 l-1 30 q0 3 -3 3 h-37 q-3 0 -3 -3 z"/>
    <path d="M50 29 V19"/><circle cx="50.5" cy="15.5" r="3.6"/>
    <circle cx="40" cy="44" r="4.4"/><circle cx="61" cy="43.5" r="4.4"/>
    <path d="M40.5 55 q9.5 6.5 19 -0.5"/>
    <path d="M28.5 43 h-7 M21 38 v10 M72 43 h7 M79.5 38 v10"/>
    <path d="M36 66 l1 12 h26 l1 -12"/>
    <path d="M43 78 v9 M57 78 v9 M38 87.5 h9 M53 87.5 h9"/>
    <path d="M45 71 h10"/>`,

  mug: `
    <path d="M23 40 q21 -2 43 0 l-2 31 q-1 11 -12 11 h-16 q-11 0 -12 -11 z"/>
    <path d="M66 47 q14 -1 14 10 q0 11 -15 11"/>
    <path d="M35 31 q-5 -6 0 -12 q4 -5 0 -10 M46 31 q-5 -6 0 -12 q4 -5 0 -10 M57 31 q-5 -6 0 -12"/>
    <path d="M44.5 57 q-5 -6 -9 0 q4 7 9 10 q5 -3 9 -10 q-4 -6 -9 0z"/>
    <path d="M16 86 q34 -4 68 0"/>`,

  floppy: `
    <path d="M21 19 l50 -1 l10 10 l-1 53 q0 2 -2 2 h-55 q-2 0 -2 -2 z"/>
    <path d="M33 19 v18 q0 2 2 2 h26 q2 0 2 -2 v-18"/>
    <path d="M53 23 v11"/>
    <path d="M29 51 q20 -1 42 0 v31 M29 51 v31"/>
    <path d="M35 60 h28 M35 67 h22 M35 74 h12"/>`,

  plane: `
    <path d="M12 51 L87 21 L63 81 L48 59 Z"/>
    <path d="M87 21 L48 59 L46 75 L56 64"/>
    <path d="M10 76 q10 -3 14 5 q5 7 16 1" stroke-dasharray="2 6"/>`,

  catLaptop: `
    <path d="M17 77 h66 l6 8 q-38 2 -78 0 z"/>
    <path d="M24 49 q26 -2 52 0 l-1 28 h-50 z"/>
    <path d="M31 58 h13 M31 64 h21 M31 70 h9 M47 70 h10"/>
    <path d="M33 49 q-4 -11 6 -14 q12 -4 19 2 q8 6 5 12"/>
    <path d="M30.5 36 q-3 -9 4 -10 q5 -2 9 3 q3 4 0 8"/>
    <path d="M31 28 l-2 -9 l7 6 M41 26 l3 -8 l2 9"/>
    <circle cx="35" cy="31" r="0.9" fill="currentColor"/><circle cx="40" cy="31" r="0.9" fill="currentColor"/>
    <path d="M37 34 l0.5 1"/>
    <path d="M63 47 q11 2 11 -8 q0 -7 6 -9"/>`,

  plant: `
    <path d="M33 66 h34 l-5 20 q-12 2 -24 0 z"/>
    <path d="M31 66 q19 -2 38 0"/>
    <path d="M50 66 q-2 -18 0 -36"/>
    <path d="M50 54 q-21 -1 -23 -19 q17 0 23 19z"/>
    <path d="M50 46 q19 -4 23 -21 q-19 2 -23 21z"/>
    <path d="M50 32 q-7 -10 0 -19 q7 9 0 19z"/>
    <path d="M38 77 q2 2 4 0 M55 79 q2 2 4 0"/>`,

  duck: `
    <path d="M35 48 q-14 3 -13 16 q2 19 28 19 q29 0 31 -19 q1 -11 -10 -10 q-9 1 -15 -2"/>
    <circle cx="44" cy="37" r="12.5"/>
    <path d="M32 40 q-10 -1 -11 4 q5 5 13 1"/>
    <circle cx="41.5" cy="34" r="1.6" fill="currentColor"/>
    <path d="M47 65 q11 -9 22 1 q-10 8 -22 -1z"/>
    <path d="M14 88 q10 -4 20 0 t20 0 t20 0 t18 0"/>`,

  chip: `
    <rect x="28" y="28" width="44" height="44" rx="5"/>
    <rect x="38.5" y="38" width="23" height="24" rx="2.5"/>
    <path d="M36 28 v-10 M46 28 v-9 M55 28 v-10 M64 28 v-9 M36 72 v10 M46 72 v9 M55 72 v10 M64 72 v9 M28 36 h-10 M28 46 h-9 M28 55 h-10 M28 64 h-9 M72 36 h10 M72 46 h9 M72 55 h10 M72 64 h9"/>
    <path d="M50 43 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2z"/>`,

  flask: `
    <path d="M41 15 q9 -1 18 0"/>
    <path d="M44 16 v24 l-20 36 q-3 8 6 8 h40 q9 0 6 -8 l-20 -36 v-24"/>
    <path d="M30 67 q10 -6 20 0 t20 0"/>
    <circle cx="46" cy="75" r="2.6"/><circle cx="57" cy="72" r="1.8"/><circle cx="52" cy="58" r="2"/><circle cx="50" cy="47" r="1.4"/>
    <path d="M64 12 q4 -5 9 -1 M70 20 q4 -2 6 1"/>`,

  map: `
    <path d="M13 28 l23 -8 l26 8 l25 -8 l-1 52 l-24 8 l-26 -8 l-23 8 z"/>
    <path d="M36 20 v52 M62 28 v52"/>
    <path d="M21 62 q8 -15 20 -7 q10 6 18 -9 q6 -9 13 -13" stroke-dasharray="3 4.5"/>
    <path d="M71 25 l7 7 M78 25 l-7 7"/>
    <circle cx="21" cy="63" r="2.4"/>`,

  bird: `
    <path d="M24 60 q2 -23 27 -24 q14 0 20 10 l12 -3 l-10 9 q-2 21 -28 22 q-14 0 -21 -14z"/>
    <path d="M37 54 q13 -11 25 3 q-14 7 -25 -3z"/>
    <circle cx="64" cy="45" r="1.6" fill="currentColor"/>
    <path d="M24 60 q-8 -2 -12 4 q7 2 12 -1"/>
    <path d="M44 74 l-1 10 M53 74 l1 10"/>
    <path d="M18 85 q34 -3 66 1"/>`,

  flower: `
    <circle cx="50" cy="40" r="6.5"/>
    <path d="M50 33 q-9 -14 0 -21 q9 7 0 21z"/>
    <path d="M56 37 q10 -12 19 -6 q-4 11 -19 6z"/>
    <path d="M55 46 q15 3 13 13 q-10 3 -13 -13z"/>
    <path d="M45 46 q-3 15 -13 13 q-2 -10 13 -13z"/>
    <path d="M44 37 q-15 -6 -19 -6 q5 -9 19 6z"/>
    <path d="M50 47 q-4 20 1 40"/>
    <path d="M50 70 q-14 -5 -18 -16 q14 2 18 16z"/>
    <path d="M51 78 q12 -6 17 -15 q-12 1 -17 15z"/>`,

  sprout: `
    <path d="M50 85 q-1 -16 0 -30"/>
    <path d="M50 61 q-22 1 -25 -22 q23 0 25 22z"/>
    <path d="M50 55 q3 -23 27 -25 q0 23 -27 25z"/>
    <path d="M39 50 l-6 -6 M62 44 l7 -6"/>
    <path d="M24 86 q26 -7 52 0"/>`,

  blocks: `
    <rect x="17" y="58" width="27" height="25" rx="2.5"/>
    <rect x="50" y="58" width="27" height="25" rx="2.5"/>
    <path d="M36 32 l24 -4 l4 24 l-24 4 z"/>
    <path d="M25 66 l6 9 l6 -9 M58 75 v-9 q5 -3 9 0 v9"/>
    <path d="M45 38 h8 M49 34 v10"/>
    <path d="M73 20 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2z"/>`,

  battery: `
    <rect x="18" y="35" width="56" height="31" rx="5"/>
    <path d="M74 44 h5 q2 0 2 2 v9 q0 2 -2 2 h-5"/>
    <path d="M31 60 q1 -20 28 -19 q-1 20 -28 19z"/>
    <path d="M31 60 l18 -11"/>
    <path d="M22 79 l4 4 M50 80 v6 M74 79 l-4 4"/>`,

  arrow: `
    <path d="M8 34 q20 -22 42 -2 q16 15 38 4"/>
    <path d="M79 30 l10 6 l-11 6"/>`,

  arrowDown: `
    <path d="M30 8 q-14 30 10 46 q20 13 10 36"/>
    <path d="M42 82 l8 10 l7 -11"/>`,

  star: `
    <path d="M50 14 l9 25 l26 1 l-21 16 l8 26 l-22 -15 l-22 15 l8 -26 l-21 -16 l26 -1z"/>`,

  sparkle: `
    <path d="M50 12 q4 34 38 38 q-34 4 -38 38 q-4 -34 -38 -38 q34 -4 38 -38z"/>`,

  owl: `
    <path d="M28 30 q22 -14 44 0 q6 24 0 44 q-22 14 -44 0 q-6 -20 0 -44z"/>
    <path d="M28 30 l-3 -11 l12 8 M72 30 l3 -11 l-12 8"/>
    <circle cx="40" cy="42" r="7"/><circle cx="60" cy="42" r="7"/>
    <circle cx="40" cy="42" r="1.8" fill="currentColor"/><circle cx="60" cy="42" r="1.8" fill="currentColor"/>
    <path d="M47 51 l3 5 l3 -5z"/>
    <path d="M38 62 q3 3 6 0 M47 66 q3 3 6 0 M56 62 q3 3 6 0"/>
    <path d="M20 84 h60 M42 74 l-2 10 M58 74 l2 10"/>`,

  bulb: `
    <path d="M50 14 q-20 0 -21 21 q0 12 10 20 q4 4 4 10 h14 q0 -6 4 -10 q10 -8 10 -20 q-1 -21 -21 -21z"/>
    <path d="M43 70 h14 M44 76 h12 M47 82 h6"/>
    <path d="M45 52 q5 -10 0 -16 q5 4 10 0 q-5 6 0 16"/>
    <path d="M18 24 l-6 -4 M82 24 l6 -4 M14 42 h-6 M86 42 h6"/>`,

  medal: `
    <path d="M36 12 l10 26 M64 12 l-10 26"/>
    <path d="M30 12 h12 M58 12 h12"/>
    <circle cx="50" cy="60" r="22"/>
    <circle cx="50" cy="60" r="15"/>
    <path d="M50 51 l3 6 l6 1 l-4.5 4 l1 6.5 l-5.5 -3 l-5.5 3 l1 -6.5 l-4.5 -4 l6 -1z"/>`,

  trophy: `
    <path d="M32 18 h36 q0 30 -18 36 q-18 -6 -18 -36z"/>
    <path d="M32 24 h-11 q-1 16 15 19 M68 24 h11 q1 16 -15 19"/>
    <path d="M50 54 v14 M38 70 h24 l3 12 h-30 z"/>
    <path d="M45 30 l3 -3 v14"/>`,

  ribbon: `
    <circle cx="50" cy="40" r="20"/>
    <path d="M50 26 q10 0 12 10"/>
    <path d="M38 56 l-8 30 l11 -6 l6 10 l5 -29 M62 56 l8 30 l-11 -6 l-6 10 l-5 -29"/>
    <path d="M45 41 l4 4 l8 -9"/>`,

  heart: `
    <path d="M50 82 q-34 -22 -34 -44 q0 -16 16 -16 q12 0 18 12 q6 -12 18 -12 q16 0 16 16 q0 22 -34 44z"/>`,

  book: `
    <path d="M14 26 q18 -6 36 4 v54 q-18 -10 -36 -4 z"/>
    <path d="M86 26 q-18 -6 -36 4 v54 q18 -10 36 -4 z"/>
    <path d="M22 38 q10 -2 20 2 M22 47 q10 -2 20 2 M58 40 q10 -4 20 -2 M58 49 q10 -4 20 -2"/>`,

  satellite: `
    <rect x="40" y="40" width="20" height="20" rx="3" transform="rotate(45 50 50)"/>
    <path d="M28 28 l-14 14 l10 10 l14 -14z M72 72 l14 -14 l-10 -10 l-14 14z"/>
    <path d="M60 40 l8 -8 M70 28 q6 2 4 8 M76 20 q12 4 8 16"/>`,

  mushroom: `
    <path d="M18 52 q2 -32 32 -32 q30 0 32 32 q-32 6 -64 0z"/>
    <path d="M40 54 q-2 18 -4 28 h28 q-2 -10 -4 -28"/>
    <circle cx="38" cy="36" r="4"/><circle cx="58" cy="32" r="3"/><circle cx="66" cy="44" r="2.5"/>`,

  // ── polaroid scenes (drawn in chalk on dark photo paper) ──
  portrait: `
    <path d="M30 40 q-2 -24 20 -25 q22 1 21 25 q1 14 4 26 q-12 4 -16 -6"/>
    <path d="M30 40 q-1 16 -5 26 q12 4 16 -6"/>
    <path d="M35 42 q0 -18 15 -18 q15 0 15 18 q0 16 -15 17 q-15 -1 -15 -17z"/>
    <path d="M36 31 q10 2 18 -6 q4 6 11 7"/>
    <circle cx="44" cy="43" r="4.5"/><circle cx="57" cy="43" r="4.5"/><path d="M48.5 43 h4"/>
    <path d="M45 52 q5 4 10 0"/>
    <path d="M24 92 q2 -22 26 -24 q24 2 26 24"/>
    <path d="M60 80 h14 v10 q0 4 -4 4 h-6 q-4 0 -4 -4z M74 83 q5 0 4 4 q0 3 -4 3"/>
    <path d="M65 76 q-2 -3 0 -5 M69 76 q-2 -3 0 -5"/>`,

  stage: `
    <path d="M30 34 q0 -12 10 -12 q10 0 10 12 q0 10 -10 11 q-10 -1 -10 -11z"/>
    <path d="M28 66 q1 -18 12 -18 q11 0 12 18"/>
    <path d="M50 52 l12 -10 M60 40 q4 -4 6 0 q2 4 -3 5z"/>
    <path d="M22 66 h46 l-4 10 h-38 z"/>
    <path d="M74 20 l6 -6 M80 30 h8 M74 40 l6 6"/>
    <path d="M10 92 q4 -10 10 -10 q6 0 10 10 M34 92 q4 -10 10 -10 q6 0 10 10 M58 92 q4 -10 10 -10 q6 0 10 10 M80 92 q4 -10 9 -10"/>
    <circle cx="20" cy="78" r="4"/><circle cx="44" cy="78" r="4"/><circle cx="68" cy="78" r="4"/>`,

  gradCap: `
    <path d="M12 38 l38 -16 l38 16 l-38 16 z"/>
    <path d="M28 46 v18 q22 12 44 0 v-18"/>
    <path d="M88 38 v20 M86 58 l2 8 l2 -8"/>`,

  yt: `
    <rect x="16" y="26" width="68" height="48" rx="12"/>
    <path d="M44 38 v24 l20 -12 z"/>`,
};
