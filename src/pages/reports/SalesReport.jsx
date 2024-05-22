import React from "react";
import { SalesReportCard } from "./../../components/index";
import { salesReportData } from "./../../utils/mockData";
export const SalesReport = () => {
  return (
    <div>
      {salesReportData.length > 0 &&
        salesReportData.map((Voucher) => (
          <SalesReportCard key={Voucher._id} data={Voucher} />
        ))}
    </div>
  );
};
