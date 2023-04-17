import { dash_card_header } from "../dashboard"

const ProjectsCard = () => {

    return (<div className="mt-4 text-gray-100 rounded-lg h-fit">
        <div className={dash_card_header}>Active Projects</div>
        <div className="flex flex-col justify-start w-full rounded-b-lg bg-opacity-90 min-h-fit bg-slate-600">

            {/* Project 1 */}
            <div className="flex flex-col p-4 space-y-1 border-b border-black justify-evenly">
                <div>New PC's for 13th floor</div>
                <div className="flex flex-row justify-between">
                    <div className="justify-between w-4/5 rounded-lg bg-neutral-200 dark:bg-neutral-400">
                        <div className="w-3/4 h-full bg-green-700 rounded-lg" />
                    </div>
                    <div className="font-bold">75%</div>
                </div>
            </div>

            <div className="flex flex-col p-4 space-y-1 border-b border-black justify-evenly">
                <div>New PC's for 13th floor</div>
                <div className="flex flex-row justify-between">
                    <div className="justify-between w-4/5 rounded-lg bg-neutral-200 dark:bg-neutral-400">
                        <div className="w-1/4 h-full bg-green-600 rounded-lg" />
                    </div>
                    <div className="font-bold">25%</div>
                </div>
            </div>

            <div className="flex flex-col p-4 space-y-1 justify-evenly">
                <div>New PC's for 13th floor</div>
                <div className="flex flex-row justify-between">
                    <div className="justify-between w-4/5 rounded-lg bg-neutral-200 dark:bg-neutral-400">
                        <div className="w-1/6 h-full bg-yellow-500 rounded-lg" />
                    </div>
                    <div className="font-bold">16%</div>
                </div>
            </div>

        </div>
    </div>)
}

export { ProjectsCard }