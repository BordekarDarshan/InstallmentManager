export const payInstallment = (index, setInstallmentStructure) => {
  setInstallmentStructure((installmentStructure) =>
    installmentStructure.map((content, i) => {
      if (content.installment < content.value) {
        let advance = content.value - content.installment;
        content.installment = content.installment - advance;
        return { ...content, installment: content.installment };
      }
      return { ...content };
    })
  );
};
