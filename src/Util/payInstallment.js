export const payInstallment = (
  index,
  setInstallmentStructure,
  installmentStructure,
  setPaidInstallment,
  paidInstallment,
  option
) => {
  installmentStructure.map((content, i, elements) => {
    if (index === i) {
      if (content.value > content.installment) {
        let next = elements[i + 1];
        let advance = content.value - content.installment;
        if (advance > next.installment) {
          for (let index = 0; index < installmentStructure.length; index++) {
            if (index !== installmentStructure.length - 1) {
              let current = installmentStructure[index];
              let next = installmentStructure[index + 1];

              let adv = current.value - current.installment;
              if (next.value >= 0) {
                next.value = adv;

                if (current.value > current.installment) {
                  current.installment = 0;
                }
                if (current.value < current.installment) {
                  current.installment = current.installment - current.value;
                }
              }
              setInstallmentStructure([...installmentStructure]);

              console.log("current", current, "next", next);
            }
          }
        } else {
          let next = elements[i + 1];
          let advance = content.value - content.installment;
          next.installment = next.installment - advance;
          setInstallmentStructure([...installmentStructure]);
          setPaidInstallment([...paidInstallment, { ...content }]);
        }
      }
      if (content.installment === content.value) {
        setPaidInstallment([...paidInstallment, { ...content }]);
      }
      if (content.installment > content.value) {
        if (option === "adjust") {
          let next = elements[i + 1];
          let remain = content.installment - content.value;
          next.installment = next.installment + remain;
          setInstallmentStructure([...installmentStructure]);
          setPaidInstallment([...paidInstallment, { ...content }]);
        }
        if (option === "createNew") {
          let remain = content.installment - content.value;
          setInstallmentStructure([
            ...installmentStructure,
            { id: 4, installment: remain, value: "" },
          ]);
        }
      }
    }
    return true;
  });
};
