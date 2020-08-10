export function equalInstallment(
  index,
  content,
  installmentStructure,
  setInstallmentStructure,
  setPaidInstallment,
  paidInstallment
) {
  installmentStructure.splice(index, 1);
  setInstallmentStructure([...installmentStructure]);
  setPaidInstallment([...paidInstallment, { ...content }]);
}
