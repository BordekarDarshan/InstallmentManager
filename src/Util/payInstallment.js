export const payInstallment = (index, setInstallmentStructure) => {
  setInstallmentStructure((installmentStructure) =>
    installmentStructure.map((content, i, elements) => {
      console.log(content, index);
      if (index === content.id) {
        let next = elements[i + 1];
        if (content.installment < content.value) {
          let advance = content.value - content.installment;
          next.installment = content.installment - advance;
          installmentStructure.shift();
        }
      }

      return { ...content };
    })
  );
};
