import { dash_card_header } from "../dashboard"

const Contracts = () => {

    return (<div className="lg:w-4/12 sm:my-4 sm:w-full">
        <div className={dash_card_header} >Contracts</div>
        <div className="rounded-b-lg bg-slate-50 bg-opacity-90">
            <ul className="overflow-y-auto max-h-72 scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-orange-400 scrollbar-track-rounded-lg">
                <li className="flex flex-col w-full p-4 border-b-2 border-opacity-100 border-neutral-500">
                    <div className="flex flex-row justify-between pl-1">
                        <div className="text-lg font-medium">Meraki VPN Licenses</div>
                        <abbr title="Renewal Date" className="text-sm text-gray-500">4/17/2023</abbr>
                    </div>
                    <div className="flex flex-row justify-start space-x-2 overflow-x-auto">
                        <div className="p-2 text-xs text-gray-700 bg-green-300 rounded-full">Hardware</div>
                        <div style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }} className="p-2 text-xs text-gray-700 rounded-full bg-sky-200">VPN Licenses</div>
                        <div className="p-2 text-xs text-gray-700 rounded-full bg-rose-200">Expring soon</div>
                    </div>
                </li>
                <li className="flex flex-col w-full p-4 border-b-2 border-opacity-100 border-neutral-500">
                    <div className="flex flex-row justify-between pl-1">
                        <div className="text-lg font-medium">Lenovo PC Warranty</div>
                        <abbr title="Renewal Date" className="text-sm text-gray-500">5/20/2024</abbr>
                    </div>
                    <div className="flex flex-row justify-start space-x-2 overflow-x-auto">
                        <div className="p-2 text-xs text-gray-700 bg-green-300 rounded-full">Hardware</div>
                        <div style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }} className="p-2 text-xs text-gray-700 bg-yellow-200 rounded-full">Warranty</div>
                        <div style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }} className="p-2 text-xs text-gray-700 rounded-full bg-sky-200">Laptop</div>
                        <div className="p-2 text-xs text-gray-700 rounded-full bg-rose-200">Overdue</div>
                    </div>
                </li>
                <li className="flex flex-col w-full p-4 border-b-2 border-opacity-100 border-neutral-500">
                    <div className="flex flex-row justify-between pl-1">
                        <div className="text-lg font-medium">Microsoft CALs renewal</div>
                        <abbr title="Renewal Date" className="text-sm text-gray-500">4/20/2023</abbr>
                    </div>
                    <div className="flex flex-row justify-start space-x-2 overflow-x-auto">
                        <div className="p-2 text-xs text-gray-700 bg-green-300 rounded-full">Software</div>
                        <div style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }} className="p-2 text-xs text-gray-700 bg-yellow-200 rounded-full">Windows</div>
                        <div className="p-2 text-xs text-gray-700 rounded-full bg-rose-200">Overdue</div>
                    </div>
                </li>
                <li className="flex flex-col w-full p-4">
                    <div className="flex flex-row justify-between pl-1">
                        <div className="text-lg font-medium">Meraki VPN Licenses</div>
                        <abbr title="Renewal Date" className="text-sm text-gray-500">4/17/2023</abbr>
                    </div>
                    <div className="flex flex-row justify-start space-x-2 overflow-x-auto">
                        <div className="p-2 text-xs text-gray-700 bg-green-300 rounded-full">Hardware</div>
                        <div style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }} className="p-2 text-xs text-gray-700 bg-yellow-200 rounded-full">VPN Licenses</div>
                        <div className="p-2 text-xs text-gray-700 rounded-full bg-rose-200">Overdue</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>)
}

export { Contracts }