export function doBreakdown(amount, breakdown, structure, setPaidInstallment) {
  const Amount = Number(amount);
  const Breakdown = Number(breakdown);
  const installment = Amount / Breakdown;

  const breakdownStructure = [...Array(Breakdown)].map((content, index) => {
    setPaidInstallment([]);
    return {
      id: index,
      installment: installment,
      value: 0,
    };
  });
  structure([...breakdownStructure]);

  return installment;
}
