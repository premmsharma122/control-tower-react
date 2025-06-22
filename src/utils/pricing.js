export function calculateDynamicPrice(distanceKm, riskLevel) {
  const baseRate = 10; // ₹ per km
  let multiplier = 1;

  if (riskLevel === 'Medium') multiplier = 1.2;
  if (riskLevel === 'High') multiplier = 1.5;

  const price = distanceKm * baseRate * multiplier;
  return {
    price: Math.round(price),
    multiplier,
    rateUsed: baseRate
  };
}
