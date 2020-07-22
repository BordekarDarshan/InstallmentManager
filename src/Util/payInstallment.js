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
        let next = elements[i + 1];
        if (content.installment < content.value) {
          let advance = content.value - content.installment;
          next.installment = next.installment - advance;
          setPaidInstallment([...paidInstallment, { ...content }]);
        }
        if (content.installment === content.value) {
          setPaidInstallment([...paidInstallment, { ...content }]);
        }
        if (content.installment > content.value) {
          if (option === "adjust") {
            console.log(option);
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
