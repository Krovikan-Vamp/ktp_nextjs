import dynamic from "next/dynamic";
import { dash_card_header } from "../dashboard";

const BudgetSummary = () => {

    var DoughnutChartComponent = dynamic(() => import("./chart"), {
        ssr: false,
    });
    return (
        <div className="pb-2 rounded-lg sm:my-4 lg:w-3/12 bg-slate-50 bg-opacity-90 sm:w-full">
            <div className={dash_card_header}>Technology Budget • 2023</div>
            <DoughnutChartComponent />
        </div>)
}

export { BudgetSummary }