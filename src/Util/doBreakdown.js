export function doBreakdown(amount, breakdown, structure) {
  const Amount = Number(amount);
  const Breakdown = Number(breakdown);
  const installment = Amount / Breakdown;

  const breakdownStructure = [...Array(Breakdown)].map((content, index) => {
    return {
      id: index,
      installment: installment,
      value: "",
    };
  });
  structure([...breakdownStructure]);

  return installment;
}
