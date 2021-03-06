import { lessInstallment } from "./Pay/LessInstallment";
import { moreInstallment } from "./Pay/MoreInstallment";
import { equalInstallment } from "./Pay/EqualInstallment";
import { InstallmentMoreThanTotal } from "./Pay/InstallmentMoreThanTotal";

export const payInstallment = (
  index,
  setInstallmentStructure,
  installmentStructure,
  setPaidInstallment,
  paidInstallment,
  lessInstallmentFeature
) => {
  installmentStructure.forEach((content, currentIndex, next) => {
    const moreInstallmentParam = [
      currentIndex,
      content,
      installmentStructure,
      setInstallmentStructure,
      setPaidInstallment,
      paidInstallment,
      next,
    ];
    const equalInstallmentParam = [
      currentIndex,
      content,
      installmentStructure,
      setInstallmentStructure,
      setPaidInstallment,
      paidInstallment,
    ];
    const lessInstallmentParam = [
      currentIndex,
      content,
      installmentStructure,
      setInstallmentStructure,
      setPaidInstallment,
      paidInstallment,
      lessInstallmentFeature,
      index,
      next,
    ];

    if (index === currentIndex) {
      // Tracker
      let totalAmount = InstallmentMoreThanTotal(installmentStructure);

      // Input > Actual Amount
      if (content.value > totalAmount) {
        alert("Enter a Valid Amount");
        return false;
      }

      // Input > Installment.
      if (content.value > content.installment) {
        moreInstallment(...moreInstallmentParam);
      }

      // Input === next Installment.
      if (content.installment === content.value) {
        equalInstallment(...equalInstallmentParam);
      }

      // Input < Installment.
      if (content.installment > content.value) {
        lessInstallment(...lessInstallmentParam);
      }
    }
  });
};
