export const payInstallment = (
  index,
  setInstallmentStructure,
  installmentStructure,
  setPaidInstallment,
  paidInstallment
) => {
  setInstallmentStructure([...installmentStructure]);

  setInstallmentStructure(
    installmentStructure.map((content, i, elements) => {
      if (index === i) {
        let next = elements[i + 1];
        if (content.installment < content.value) {
          let advance = content.value - content.installment;
          next.installment = next.installment - advance;
          setPaidInstallment([...paidInstallment, { ...content }]);
        }
        if (content.installment === content.value) {
          setPaidInstallment([...paidInstallment, { ...content }]);
        }
      }

      return { ...content };
    })
  );
};
