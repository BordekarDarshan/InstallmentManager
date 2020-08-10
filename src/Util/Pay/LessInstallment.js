export function lessInstallment(
  i,
  content,
  installmentStructure,
  setInstallmentStructure,
  setPaidInstallment,
  paidInstallment,
  lessInstallmentFeature,
  index,
  next
) {
  let createNewInstallmentParam = [
    content,
    installmentStructure,
    setInstallmentStructure,
    i,
    setPaidInstallment,
    paidInstallment,
  ];
  let addjustInNextInstallmentParam = [
    next,
    content,
    installmentStructure,
    setInstallmentStructure,
    i,
    setPaidInstallment,
    paidInstallment,
  ];
  if (lessInstallmentFeature === "adjust") {
    if (index === installmentStructure.length - 1) {
      createNewInstallment(...createNewInstallmentParam);
    } else {
      addjustInNextInstallment(...addjustInNextInstallmentParam);
    }
  }
  if (lessInstallmentFeature === "createNew") {
    createNewInstallment(...createNewInstallmentParam);
  }
}

// Create New Installment Feature
function createNewInstallment(
  content,
  installmentStructure,
  setInstallmentStructure,
  i,
  setPaidInstallment,
  paidInstallment
) {
  let remain = content.installment - content.value;

  installmentStructure.splice(i, 1);
  setInstallmentStructure([
    ...installmentStructure,
    {
      id: installmentStructure.length,
      installment: remain,
      value: 0,
    },
  ]);

  setPaidInstallment([...paidInstallment, { ...content }]);
}

// Adjust in next Installment Feature
function addjustInNextInstallment(
  next,
  content,
  installmentStructure,
  setInstallmentStructure,
  i,
  setPaidInstallment,
  paidInstallment
) {
  let elementNext = next[i + 1];

  let remain = content.installment - content.value;
  elementNext.installment = elementNext.installment + remain;
  installmentStructure.splice(i, 1);
  setInstallmentStructure([...installmentStructure]);
  setPaidInstallment([...paidInstallment, { ...content }]);
}
