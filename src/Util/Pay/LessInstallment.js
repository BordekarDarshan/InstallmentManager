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
  if (lessInstallmentFeature === "adjust") {
    if (index === installmentStructure.length - 1) {
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
    } else {
      let elementNext = next[i + 1];

      let remain = content.installment - content.value;
      elementNext.installment = elementNext.installment + remain;
      installmentStructure.splice(i, 1);
      setInstallmentStructure([...installmentStructure]);
      setPaidInstallment([...paidInstallment, { ...content }]);
    }
  }
  if (lessInstallmentFeature === "createNew") {
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
}
