export const payInstallment = (
  index,
  setInstallmentStructure,
  installmentStructure,
  setPaidInstallment,
  paidInstallment,
  option
) => {
  setInstallmentStructure(
    installmentStructure.map((content, i, elements) => {
      if (index === i) {
        if (content.value > content.installment) {
          let next = elements[i + 1];
          let nextn = elements[i + 2];
          let advance = content.value - content.installment;
          if (advance > next.installment) {
            next.installment = 0;
            nextn.value = advance - nextn.installment;
          } else {
            next.installment = next.installment - advance;
          }

          setPaidInstallment([...paidInstallment, { ...content }]);
        }
        if (content.installment === content.value) {
          setPaidInstallment([...paidInstallment, { ...content }]);
        }
        if (content.installment > content.value) {
          if (option === "adjust") {
            let next = elements[i + 1];
            let remain = content.installment - content.value;
            next.installment = next.installment + remain;
            setPaidInstallment([...paidInstallment, { ...content }]);
          }
          if (option === "createNew") {
          }
        }
      }

      return { ...content };
    })
  );
};
