export const payInstallment = (
  index,
  setInstallmentStructure,
  installmentStructure
) => {
  setInstallmentStructure([...installmentStructure]);

  setInstallmentStructure(
    installmentStructure.map((content, i, elements) => {
      if (index === i) {
        let next = elements[i + 1];
        if (content.installment < content.value) {
          let advance = content.value - content.installment;
          next.installment = next.installment - advance;
        }
      } else {
        return { ...content };
      }

      return { ...content };
    })
  );
};
