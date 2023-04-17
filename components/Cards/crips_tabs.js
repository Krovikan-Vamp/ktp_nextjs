// Initialization for ES Users
import { useEffect } from "react";
import { Tab, initTE, } from "tw-elements";

const CRIPSTabs = () => {
    useEffect(() => {
        initTE({ Tab })
    }, [])

    const styles = {
        header_styles: `mt-2 block border-x-0 font-semibold border-b-2 border-t-0 border-transparent px-7 pb-2 pt-4 text-xs font-medium uppercase leading-tight text-slate-500 hover:isolate hover:border-transparent hover:bg-slate-100 focus:isolate data-[te-nav-active]:border-orange data-[te-nav-active]:text-orange dark:text-slate-700 dark:hover:bg-transparent dark:data-[te-nav-active]:border-orange-400 dark:data-[te-nav-active]:text-orange-700`,

        content_styles: `p-4 hidden opacity-0 bg-opacity-90 transition-opacity duration-150 ease-linear data-[te-tab-active]:block bg-slate-50 h-full rounded-b-lg`
    }

    return (<>
        {/* <!--Tabs navigation--> */}
        <ul
            className="flex flex-row h-12 pl-0 list-none bg-orange-200 border-b-0 rounded-t-lg"
            role="tablist"
            data-te-nav-ref>
            <li role="presentation">
                <a href="#tabs-home" className="mt-2 font-semibold block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-2 pt-4 text-xs uppercase leading-tight text-slate-500 hover:isolate hover:border-transparent hover:bg-slate-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-orange data-[te-nav-active]:text-orange dark:text-slate-700 dark:hover:bg-transparent dark:data-[te-nav-active]:border-orange-400 dark:data-[te-nav-active]:text-orange-700" data-te-toggle="pill" data-te-target="#tabs-home" data-te-nav-active role="tab" aria-controls="tabs-home" aria-selected="true">Concerns & Recommendations</a>
            </li>
            {/* <li role="presentation">
                <a href="#tabs-profile" className={styles.header_styles} data-te-toggle="pill" data-te-target="#tabs-profile" role="tab" aria-controls="tabs-profile" aria-selected="false">Recommendations</a>
            </li> */}
            <li role="presentation">
                <a href="#tabs-messages" className={styles.header_styles} data-te-toggle="pill" data-te-target="#tabs-messages" role="tab" aria-controls="tabs-messages" aria-selected="false">Initiatives</a>
            </li>
            <li role="presentation">
                <a href="#tabs-contact" className={styles.header_styles} data-te-toggle="pill" data-te-target="#tabs-contact" role="tab" aria-controls="tabs-contact" aria-selected="false">Proposals</a>
            </li>
        </ul>

        {/* <!--Tabs content--> */}
        <div className="h-full text-slate-800">
            <div
                className="hidden opacity-100 pl-4 pt-4 pr-2 bg-opacity-90 transition-opacity duration-150 ease-linear data-[te-tab-active]:block min-h-full bg-slate-50 w-full rounded-b-lg "
                id="tabs-home"
                role="tabpanel"
                aria-labelledby="tabs-home-tab"
                data-te-tab-active>

                <ul className="max-w-full space-y-2 list-inside dark:text-slate-700">
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-1.5 text-green-700 dark:text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <div className="flex justify-between w-full">
                            <div className="w-2/4">Outdated Windows 7 PC's </div>
                            <div className="items-center text-sm text-right text-slate-600">Respond by: 4/14/2023</div>
                            <div className="text-sm text-right text-slate-700 hover:underline hover:cursor-pointer">More {`>`}</div>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-1.5 text-green-700 dark:text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <div className="flex justify-between w-full">
                            <abbr className="w-2/4 no-underline" title="Users don't have MFA with way too much text">
                                <div style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>Users don't have MFA with way too much text </div>
                            </abbr>
                            <div className="items-center text-sm text-right text-slate-600">Respond by: 1/16/2021</div>
                            <div className="text-sm text-right text-slate-700 hover:underline hover:cursor-pointer">More {`>`}</div>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 mr-1.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                        <div className="flex justify-between w-full">
                            <div className="w-2/4">AWS Account too many users</div>
                            <div className="items-center text-sm text-right text-slate-600">Respond by: 12/4/2019</div>
                            <div className="text-sm text-right text-slate-700 hover:underline hover:cursor-pointer">More {`>`}</div>
                        </div>
                    </li>
                </ul>

            </div>
            <div
                className={`px-2 hidden opacity-0 bg-opacity-90 transition-opacity duration-150 ease-linear data-[te-tab-active]:block bg-slate-50 h-full rounded-b-lg`}
                id="tabs-messages"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab">
                <div className="flex flex-col justify-start w-full rounded-b-lg">

                    {/* Project 1 */}
                    <div className="flex flex-col p-4 space-y-2 border-b border-black justify-evenly">
                        <div className="flex flex-row justify-between">
                            <div className="justify-center lg:pt-1 text-md">New PC's for 13th floor</div>
                            <span className="p-2 text-sm font-semibold text-center text-green-700 align-middle bg-green-300 rounded-md">In progress: 76%</span>
                        </div>
                        <div className="h-4 bg-neutral-200 dark:bg-neutral-400">
                            <div className="w-3/4 h-full bg-green-600 " />
                        </div>
                    </div>

                    <div className="flex flex-col p-4 space-y-2 border-b border-black justify-evenly">
                        <div className="flex flex-row justify-between">
                            <div className="justify-center lg:pt-1 text-md">Migrate file server to cloud</div>
                            <span className="p-2 text-sm font-semibold text-center text-green-700 align-middle bg-green-300 rounded-md">In progress: 25%</span>
                        </div>
                        <div className="h-4 bg-neutral-200 dark:bg-neutral-400">
                            <div className="w-1/4 h-full bg-green-600 " />
                        </div>
                    </div>

                    <div className="flex flex-col p-4 space-y-2 justify-evenly">
                        <div className="flex flex-row justify-between">
                            <div className="justify-center lg:pt-1 text-md">Set up AD-Connect</div>
                            <span className="p-2 text-sm font-semibold text-center text-green-700 align-middle bg-green-300 rounded-md">In progress: 16%</span>
                        </div>
                        <div className="h-4 bg-neutral-200 dark:bg-neutral-400">
                            <div className="w-1/6 h-full bg-green-600 " />
                        </div>
                    </div>

                </div>
            </div>
            <div
                className={styles.content_styles}
                id="tabs-contact"
                role="tabpanel"
                aria-labelledby="tabs-contact-tab">
                Tab 4 content
            </div>
        </div>
    </>)
}

export default CRIPSTabs