export function moreInstallment(
  i,
  content,
  installmentStructure,
  setInstallmentStructure,
  setPaidInstallment,
  paidInstallment,
  next
) {
  // Input > next Installment.
  let extraPayment = content.value - content.installment;
  let elementNext = next[i + 1];

  if (extraPayment <= elementNext.installment) {
    content.installment = 0;
    installmentStructure.splice(i, 1);
    elementNext.installment = elementNext.installment - extraPayment;
  } else {
    for (let index = i; index < installmentStructure.length; index++) {
      if (index !== installmentStructure.length - 1) {
        let current = installmentStructure[index];
        let next = installmentStructure[index + 1];
        let adv = current.value - current.installment;
        if (adv < 0) {
          next.value = 0;
        } else {
          next.value = adv;
        }
        if (current.value >= current.installment) {
          current.installment = 0;
        }
        if (current.value <= current.installment) {
          current.installment = current.installment - current.value;
        }
      } else {
        let current = installmentStructure[index];
        if (index === installmentStructure.length - 1) {
          current.installment = current.installment - current.value;
        }
      }
    }
  }
  // Removes all element whose installments have already been paid in advance.
  let removePaidInstallment = installmentStructure.filter(
    (data) => data.installment !== 0
  );
  setInstallmentStructure([...removePaidInstallment]);
  setPaidInstallment([...paidInstallment, { ...content }]);
}
