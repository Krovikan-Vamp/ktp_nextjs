import { AssetSummary } from "./Cards/assets.js"
import { BudgetSummary } from "./Cards/budget.tsx"
import { ContactsComponent } from "./Cards/contacts.tsx"
import { Contracts } from "./Cards/contracts.tsx"
import { CRIPSComponent } from "./Cards/crips.tsx"
import { ProjectsCard } from "./Cards/projects.tsx"
import { ServicesSummary } from "./Cards/services.tsx"

const dash_card_header = `p-2 m-0 font-semibold text-center bg-orange-200 border-b-2 
                        border-orange-500 rounded-t-lg border-opacity-60 
                        text-slate-800 sm:text-md md:text-lg lg:text-xl min-h-12`

const Dashboard = () => {
    const topbar_styles = 'flex flex-row justify-between w-full p-auto text-gray-200 text-xl text-gray-200 bg-slate-700 '

    return (<div className="flex w-full h-screen">

        <div className="w-9/12 h-screen overflow-y-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-orange-400 scrollbar-thumb-rounded-full">
            {/* Greeting */}
            <div className={`${topbar_styles} top-0 sticky pl-4`}>


                <p className="my-auto font-semibold">Good afternoon, Kobargo</p>
                <div className="my-auto">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>


            <div className="flex flex-row flex-wrap justify-between px-4">
                <AssetSummary />
                <BudgetSummary />
                <CRIPSComponent />
                <Contracts />
            </div>
        </div>

        {/* Start Right Panel */}
        <div className="w-3/12 overflow-y-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-orange-400 scrollbar-thumb-rounded-full">
            <div className={`flex flex-row justify-end w-full p-1 text-gray-200 text-3xl bg-slate-700 sticky top-0 z-50`}>
                <div className="my-auto text-lg">
                    <div className="flex">
                        <img className="object-cover w-12 h-12 rounded-full" src="https://picsum.photos/100" alt="" />

                        {/* Text */}
                        <div className="flex flex-col justify-center px-2">
                            <p className="font-normal text-md hover:underline hover:cursor-pointer">Kobargo Support - <span className="text-green-400">Active</span></p>
                            <p className="text-sm font-light text-gray-300">Support Engineer</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="z-30 flex flex-col px-4 pb-4 space-y-4 h-fit">
                {/* Services */}
                <ServicesSummary />
                {/* Projects */}
                <ProjectsCard />
                {/* Contacts */}
                <ContactsComponent />
            </div>
        </div>
    </div>)
}

export { Dashboard, dash_card_header }