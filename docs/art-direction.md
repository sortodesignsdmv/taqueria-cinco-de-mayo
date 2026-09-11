# Original imagery

Created with the built-in image-generation tool and converted to optimized WebP for the website. Original size: 1536×1024 each. The original generated assets are illustrative, not documentary photographs. The user subsequently supplied restaurant photography and an aguas frescas poster, now incorporated below.

## public/images/tacos.webp

Prompt: Premium editorial food photograph-style illustrative image for a Mexican taqueria: inviting close three-quarter overhead of authentic carne asada and al pastor corn tortilla tacos with chopped cilantro and onion, lime wedges, small red salsa bowl on deep terracotta earthenware plate, saturated chili red/rust backdrop, appetizing natural side light, real texture, crisp detail, intimate crop. Composition food dominates central/right area. Landscape 1536×1024. No text, logos, hands, watermark, or UI. Illustrative food imagery, not documentation of an actual restaurant.

## public/images/folk-art.webp

Prompt: Landscape Mexican folk-art illustration on rich turquoise #087e80 field, gorgeous hand-painted stylized floral and botanical flourishes, marigolds, citrus, chili pepper and a central decorative sun medallion. Warm yellow, red, ivory, and green palette. Bold screenprint texture, sophisticated playful artisan feel. Flat painted graphic composition, balanced abundant ornamental forms. 1536×1024. No text, letters, logos, watermark, or UI.

## public/images/quesabirria.webp

Prompt: Landscape 1536×1024 illustrative premium editorial food photography of three crispy golden quesabirria tacos filled with melted cheese and beef, on a ceramic plate with small consommé dipping bowl, cilantro/onion and lime garnish, on vibrant marigold yellow tabletop. Natural appetizing side light, authentic food textures, rich toasted tortilla surfaces and succulent filling. Close three-quarter overhead composition with plate filling frame. No text, logos, hands, watermark, or UI. Illustrative food imagery, not a photograph of an actual restaurant.


## User-supplied images

- `public/images/restaurant-tacos.jpg`: copied unchanged from `C:/Users/fwaah/Downloads/IMG_3610.jpg`. Replaces the generated taco photograph on Home, Menu, and About. CSS frames the food without altering the original image or baking the screenshot lettering into a new asset.
- `public/images/aguas-frescas-summer.jpg`: copied unchanged from `C:/Users/fwaah/Downloads/IMG_3609.jpg`. Full poster appears in the Home refresh feature and Menu drinks section, with a full-size image link and HTML flavor labels/order links.

The refresh feature borrows turquoise, hibiscus pink, and sunny yellow from the supplied poster. Headline: Come refresh yourself. Supporting line: A little summer in every sip. No promotional price, expiration date, or seasonal availability has been invented.

The generated quesabirria image remains illustrative and is identified in the footer; the generated folk-art panel remains decorative. The earlier generated taco asset is retained but no longer referenced by the pages.

## Fiesta vector icons and motion

Original SVG food icons (taco, burrito, quesadilla, agua fresca, plate, bowl, heart, location) were authored in response to the explicit vector-art request. File: public/fiesta-icons.svg. Shared decorations: src/components/fiesta.js. Navigation, topic labels, menu entries, and headings reuse the same icons. A seven-color papel picado garland sways slowly at the top of the main pages. Faint food doodles drift at the viewport edges; mobile shows fewer doodles. Decorations are hidden from assistive technology and do not capture pointer input.

Reference reviewed: https://casa-sol-blooms-nextjs.vercel.app/ — slow bobbing, swaying, and understated peripheral line art informed the motion approach; its artwork was not copied. The footer Pause animations control persists the preference locally. System reduced-motion settings disable motion automatically. No new image-generation or animation dependency was added.
