# Milae website

This is the website for Milae, a new tech brand started by a brother and sister, with help from their mom. Its products have not launched yet. Keep things simple, and explain changes in kid-friendly words.

## How this site works

- The whole website is one file: `index.html` (HTML, CSS and JavaScript together). Keep it that way.
- It is hosted on Vercel at milae-delta.vercel.app. Every push to the `main` branch goes live automatically.
- Pages (Home, About, Explore, Shop, Smile & PlantAI, Contact) are sections in index.html, shown one at a time by the `go()` function.
- Product pictures are drawn with SVG by JavaScript functions: `wsvg` (watch), `psvg` (phone back), `fsvg` (phone front with Luxury OS), `I` (app icons), `chip` (Spark chip).
- It must look good on phones AND laptops. On laptops (wider than 1000px) there is a separate layout in the `@media (min-width:1000px)` block.
- Always test: no JavaScript errors, nothing wider than the screen on a 390px phone.
- Visitor counter: Vercel Web Analytics, loaded by the two `/_vercel/insights` script lines near the top of index.html. Analytics must also be switched on in the Vercel dashboard (Project → Analytics → Enable).

## Brand

- Name: Milae (logo written MILΛE, the A has no middle line). Motto: For The People.
- Colours: aqua `#3CC8D8` (logo), gold `#D4AF37` (thin line under the logo), black text, white background.
- Fonts: Georgia for headings, system font for text.
- Email: milaeelectronics@gmail.com
- Never put the kids' real names anywhere on the site.
- A note at the top says products have not launched yet. Keep it.

## Products

- Luxury Watch One: $135 (₹12,000). Coming 2027. Colours Black, Royal Gold, Light Blue. 570 mAh battery, about 4 days, charges in about 1.5 hours (magnetic). Swim-proof. Qualcomm Snapdragon W5. PlantAI built in.
- Luxury Watch One Edge: $180 (₹16,000). Same, plus a faster chip and access to other AIs.
- Luxury One (phone): from $600 (₹53,000), 256 GB $625. Coming 2028. 6.1-inch screen, 5,000 mAh, 5G, 3 cameras, wireless + USB-C charging, waterproof, fingerprint, Luxury OS, Translator Mode. Colours Black, Lavender, Forest Green, Light Blue, Yellow.
- Luxury One Edge (phone): from $650 (₹57,000), 256 GB $675. 6.3-inch screen, 5,500 mAh (about 2 hours to charge), 5G-Advanced, faster chip.
- Smile: the voice assistant ("Hey Smile"), powered by PlantAI, Milae's own AI. Comes with every Milae product (not sold in the shop).
- Spark chips: Milae's own future chips. Coming someday.
- Only the watches are in the Shop. Buying is a preview only: nothing is really bought.
- Secret, NOT on the website: Milae Taker AC (2031), Luxury Fold and Luxury Flip phones.

## To-do list

1. ~~Visitor counter: add Vercel Web Analytics.~~ Done (switch it on in the Vercel dashboard).
2. Prices: dollars first, then the visitor's own currency in brackets, e.g. $600 (₹53,000). Find the country with Vercel's `x-vercel-ip-country` header (small Vercel function). Live exchange rates, updated daily. A "Show prices in" picker. If the country can't be found, show only dollars.
3. Contact form: send messages to milaeelectronics@gmail.com (for example with Formspree).
4. Notify Me (Shop): save emails of people who want to know when watches launch.
5. Later: Continue with Google sign-in, a custom domain (milaeworld.com), "and Dad" in Special Thanks, and PlantAI at plantai.milaeworld.com.
