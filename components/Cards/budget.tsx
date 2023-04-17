import dynamic from "next/dynamic";
import { dash_card_header } from "../dashboard";

const BudgetSummary = () => {

    var DoughnutChartComponent = dynamic(() => import("./chart"), {
        ssr: false,
    });
    return (
        <div className="w-3/12 pb-2 mt-4 rounded-lg bg-slate-50 bg-opacity-90">
            <div className={dash_card_header}>Technology Budget • 2023</div>
            <DoughnutChartComponent />
        </div>)
}

export { BudgetSummary }