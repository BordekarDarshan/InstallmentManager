export const payInstallment = (
  index,
  setInstallmentStructure,
  installmentStructure,
  setPaidInstallment,
  paidInstallment,
  lessInstallmentFeature
) => {
  installmentStructure.map((content, i, next) => {
    if (index === i) {
      // Tracker
      let mapTotalInstallment = installmentStructure
        .map((data) => data.installment)
        .reduce((prev, next) => prev + next, 0);

      // Input > Actual Amout
      if (content.value > mapTotalInstallment) {
        alert("exceed");
        return false;
      }

      if (content.value > content.installment) {
        if (index === installmentStructure.length - 1) {
          alert("exceed");
          return false;
        }
        // Input > next Installment.
        let extraPayment = content.value - content.installment;
        let elementNext = next[i + 1];

        if (extraPayment <= elementNext.installment) {
          content.installment = 0;
          installmentStructure.splice(i, 1);
          elementNext.installment = elementNext.installment - extraPayment;
          setInstallmentStructure([...installmentStructure]);
          setPaidInstallment([...paidInstallment, { ...content }]);
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
              }
              setInstallmentStructure([...installmentStructure]);
              setPaidInstallment([...paidInstallment, { ...content }]);
            } else {
              let current = installmentStructure[index];

              if (current.id === installmentStructure.length - 1) {
                current.installment = current.installment - current.value;
              }

              setInstallmentStructure([...installmentStructure]);
              setPaidInstallment([...paidInstallment, { ...content }]);
            }
          }
          let a = installmentStructure.filter((data) => data.installment !== 0);
          setInstallmentStructure([...a]);
        }
      }
      // Input === next Installment.
      if (content.installment === content.value) {
        installmentStructure.splice(i, 1);
        setInstallmentStructure([...installmentStructure]);
        setPaidInstallment([...paidInstallment, { ...content }]);
      }
      // Input < next Installment.
      if (content.installment > content.value) {
        console.log(content);
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
    }

    return true;
  });
};
