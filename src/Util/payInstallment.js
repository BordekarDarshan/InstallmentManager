export const payInstallment = (
  index,
  setInstallmentStructure,
  installmentStructure,
  setPaidInstallment,
  paidInstallment,
  option
) => {
  installmentStructure.map((content, i, next) => {
    if (index === i) {
      if (content.value > content.installment) {
        // Tracker
        let mapTotalInstallment = installmentStructure
          .map((data) => data.installment)
          .reduce((prev, next) => prev + next, 0);

        // Input > Actual Amout
        if (content.value > mapTotalInstallment) {
          alert("exceed");
          return false;
        }

        // Input > next Installment.
        let extraPayment = content.value - content.installment;
        let elementNext = next[i + 1];
        if (extraPayment <= elementNext.installment) {
          content.installment = 0;
          elementNext.installment = elementNext.installment - extraPayment;
          setInstallmentStructure([...installmentStructure]);
        } else {
          for (let index = i; index < installmentStructure.length; index++) {
            if (index !== installmentStructure.length - 1) {
              let current = installmentStructure[index];
              let next = installmentStructure[index + 1];
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
              } else {
                let current = installmentStructure[index];

                if (current.id === installmentStructure.length - 1) {
                  current.installment = current.installment - current.value;
                }
                console.log("current", current, "Next", next);
                setInstallmentStructure([...installmentStructure]);
              }
            }
          }
        }
      }
    }
    return true;
  });
};
