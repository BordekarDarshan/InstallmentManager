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
      if (content.id === installmentStructure.length - 1) {
        if (content.value > content.installment) {
          alert(`You entered more than ${content.installment}`);
          content.value = content.installment;
          setInstallmentStructure([...installmentStructure]);
        }
      }
      if (content.value > content.installment) {
        let next = elements[i + 1];
        let advance = content.value - content.installment;
        if (advance > next.installment) {
          for (let index = 0; index < installmentStructure.length; index++) {
            if (index !== installmentStructure.length - 1) {
              let current = installmentStructure[index];
              let next = installmentStructure[index + 1];

              if (current.value >= 1) {
                let adv = current.value - current.installment;
                if (adv < 0) {
                  next.value = 0;
                } else {
                  next.value = adv;
                }

                if (current.value >= current.installment) {
                  current.installment = 0;
                }
                if (current.value <= current.installment) {
                  current.installment = current.installment - current.value;
                }
              }
            } else {
              let current = installmentStructure[index];

              if (current.id === installmentStructure.length - 1) {
                current.installment = current.installment - current.value;
              }

              setInstallmentStructure([...installmentStructure]);
            }
          }
        } else {
          let next = elements[i + 1];
          let advance = content.value - content.installment;
          next.installment = next.installment - advance;
          console.log([installmentStructure]);

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
            { id: installmentStructure.length, installment: remain, value: "" },
          ]);
        }
      }
    }
    return true;
  });
};
