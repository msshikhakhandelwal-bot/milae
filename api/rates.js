// Gives the website today's exchange rates (how much 1 US dollar is worth in other money).
// Vercel keeps the answer for a day, so the rates update daily.
module.exports = async (req, res) => {
  try {
    const r = await fetch('https://open.er-api.com/v6/latest/USD');
    const j = await r.json();
    if (j.result !== 'success' || !j.rates) throw new Error('bad rates');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=86400');
    res.status(200).json({ updated: j.time_last_update_utc, rates: j.rates });
  } catch (e) {
    res.setHeader('Cache-Control', 'no-store');
    res.status(502).json({ error: 'rates unavailable' });
  }
};
