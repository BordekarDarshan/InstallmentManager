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
  installmentStructure.map((content, i, next) => {
    if (index === i) {
      // Tracker
      let mapTotalInstallment = InstallmentMoreThanTotal(installmentStructure);

      // Input > Actual Amount
      if (content.value > mapTotalInstallment) {
        return false;
      }

      // Input > Installment.
      if (content.value > content.installment) {
        moreInstallment(
          i,
          content,
          installmentStructure,
          setInstallmentStructure,
          setPaidInstallment,
          paidInstallment,
          index,
          next
        );
      }

      // Input === next Installment.
      if (content.installment === content.value) {
        equalInstallment(
          i,
          content,
          installmentStructure,
          setInstallmentStructure,
          setPaidInstallment,
          paidInstallment
        );
      }

      // Input < Installment.
      if (content.installment > content.value) {
        lessInstallment(
          i,
          content,
          installmentStructure,
          setInstallmentStructure,
          setPaidInstallment,
          paidInstallment,
          lessInstallmentFeature,
          index,
          next
        );
      }
    }
    return true;
  });
};
