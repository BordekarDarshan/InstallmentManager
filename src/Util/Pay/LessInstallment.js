export function lessInstallment(
  currentIndex,
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
    currentIndex,
    setPaidInstallment,
    paidInstallment,
  ];
  let addjustInNextInstallmentParam = [
    next,
    content,
    installmentStructure,
    setInstallmentStructure,
    currentIndex,
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
  currentIndex,
  setPaidInstallment,
  paidInstallment
) {
  let remain = content.installment - content.value;

  installmentStructure.splice(currentIndex, 1);
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
  currentIndex,
  setPaidInstallment,
  paidInstallment
) {
  let elementNext = next[currentIndex + 1];

  let remain = content.installment - content.value;
  elementNext.installment = elementNext.installment + remain;
  installmentStructure.splice(currentIndex, 1);
  setInstallmentStructure([...installmentStructure]);
  setPaidInstallment([...paidInstallment, { ...content }]);
}
