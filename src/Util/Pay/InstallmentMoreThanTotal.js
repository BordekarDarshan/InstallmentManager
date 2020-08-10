export function InstallmentMoreThanTotal(installmentStructure) {
  return installmentStructure
    .map((data) => data.installment)
    .reduce((prev, next) => prev + next, 0);
}
