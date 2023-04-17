import { useEffect } from "react";
import { Collapse, initTE } from "tw-elements"


const ServicesAccordion = () => {
    useEffect(() => {
        initTE({ Collapse })
    }, [])

    const styles = {
        button_styles: `group font-medium relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base        transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-slate-700 dark:bg-opacity-90 dark:text-white        [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary         [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-opacity-90 dark:[&:not([data-te-collapse-collapsed])]:bg-slate-800         dark:[&:not([data-te-collapse-collapsed])]:text-orange-300 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`,

        item_root_styles: `border border-t-0 border-slate-200 dark:border-slate-600 dark:bg-slate-400 bg-opacity-0`,

        label_span_styles: `ml-auto font-xl bg-opacity-50 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#ff6dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#ff7f80] motion-reduce:transition-none dark:fill-blue-200 dark:group-[[data-te-collapse-collapsed]]:fill-white`,

        content_styles: `!visible hidden bg-slate-50 text-slate-800 text-md rounded-b-lg bg-opacity-80 leading-relaxed`
    }
    return (
        <div id="accordionExample">
            {/* 1 */}
            <div
                className={styles.item_root_styles}>
                <h2 className="mb-0" id="headingOne">
                    <button
                        className={`${styles.button_styles}`}
                        type="button"
                        data-te-collapse-init
                        data-te-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        <abbr title="Service Active" className="no-underline"><span className="text-green-400 animate-pulse">•</span></abbr>&nbsp;Complete Managed IT Services
                        <span
                            className={styles.label_span_styles}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className={`!visible bg-slate-50 text-slate-800 text-md bg-opacity-80`}
                    data-te-collapse-item
                    data-te-collapse-show
                    aria-labelledby="headingOne"
                    data-te-parent="#accordionExample">
                    <div className="w-full px-5 py-4 leading-relaxed">
                        Complete Managed IT Services is a full service offering of Level 1 (help desk), Level 2 (system and network administration), and Level 3 (Project Management). All Managed Service clients get account management, a vCIO and a dedicated technical team that knows your network and users. We manage and support all aspects of IT, including 3rd party providers, security, cloud resources and hardware and software license renewals.
                        <br />
                        <div className="w-full text-sm text-right">Service status: <span className="font-semibold text-green-600">Active</span></div>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className={styles.item_root_styles}>
                <h2 className="mb-0" id="headingTwo">
                    <button
                        className={styles.button_styles}
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        <abbr title="Recommended for you" className="no-underline"><span className="font-bold text-yellow-500">•</span></abbr>&nbsp;Managed Telecommunication Services
                        <span
                            className={styles.label_span_styles}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className={styles.content_styles}
                    data-te-collapse-item
                    aria-labelledby="headingTwo"
                    data-te-parent="#accordionExample">
                    <div className="px-5 py-4">
                        Managed Telecommunications Services includes circuit provisioning, service turn ups, 24x7 monitoring and remediation. WAN connectivity is fully managed and supported, ensuring the appropriate connectivity for your data and voice networks with no downtime.
                        <br />
                        <div className="w-full text-sm text-right">Service status: <span className="font-bold text-yellow-500">Recommended</span></div>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div className={styles.item_root_styles}>
                <h2 className="mb-0" id="headingFour">
                    <button
                        className={styles.button_styles}
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour">
                        <abbr title="Recommended for you" className="no-underline"><span className="font-bold text-yellow-500">•</span></abbr>
                        &nbsp;Managed Security
                        <span
                            className={styles.label_span_styles}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </h2>
                <div
                    id="collapseFour" className={styles.content_styles}
                    data-te-collapse-item
                    aria-labelledby="headingFour"
                    data-te-parent="#accordionExample">
                    <div className="px-5 py-4">
                        Managed security services deliver a superior threat defense design using industry-leading security partners and technologies. We appropriately design and size layered security solutions for small and mid-sized company budgets, including low total cost of ownership to protect your network, data and users. This service provides managed firewalls and other security solutions, such as SPAM/Phishing email services, network security solutions, SOC services and endpoint security.
                        <br />
                        <div className="w-full text-sm text-right">Service status: <span className="font-bold text-yellow-500">Recommended</span></div>
                    </div>
                </div>
            </div>

            {/* 4 */}
            <div className={styles.item_root_styles}>
                <h2 className="mb-0" id="headingFive">
                    <button
                        className={styles.button_styles}
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive">
                        <abbr title="Recommended for you" className="no-underline"><span className="font-bold text-yellow-500">•</span></abbr>
                        &nbsp;Rapid Application Development
                        <span
                            className={styles.label_span_styles}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </h2>
                <div
                    id="collapseFive"
                    className={styles.content_styles}
                    data-te-collapse-item
                    aria-labelledby="headingFive"
                    data-te-parent="#accordionExample">
                    <div className="px-5 py-4">
                        Business in today's world is about innovation. System infrastructure, data security, and even how we view information continue to evolve on a near-daily basis. Data drives decisions, and better data helps with better decisions for your business. That's where Kobargo's rapid application development (RAD) elevates your team.
                        <br /><br />
                        Rapid Application Development services allow businesses to approach data in a more insightful and practical way and at a fraction of the time, it takes with traditional application development. Our ability to develop once and instantaneously render for web, tablet, and phone reduces the time to develop applications. Plus, with less time comes less cost.
                        <br />
                        <div className="w-full text-sm text-right">Service status: <span className="font-bold text-yellow-500">Recommended</span></div>
                    </div>
                </div>
            </div>

            {/* 5 */}
            <div className={`${styles.item_root_styles} rounded-b-xl`}>
                <h2 className="mb-0 accordion-header" id="headingThree">
                    <button
                        className={`${styles.button_styles} rounded-b-xl`}
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree">
                        <abbr title="Inactive" className="no-underline"><span className="font-bold text-red-400">•</span></abbr>&nbsp;Managed Cloud Services
                        <span
                            className={styles.label_span_styles}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className={styles.content_styles}
                    data-te-collapse-item
                    aria-labelledby="headingThree"
                    data-te-parent="#accordionExample">
                    <div className="px-5 py-4">
                        Managed Cloud Services are focused on Cloud platforms (Azure, AWS, Google), hosted applications and services to meet your business needs. Whether you have adopted a "Cloud First" strategy or utilize a hybrid solution, Kobargo designs, deploys and manages all your cloud resources and ensures that you company stays connected to the cloud safely and securely. Cloud services include printing, geo-redundant data centers, online email, storage, virtual servers and workstations, identity providers and online data backup (to name just a few).
                        <br />
                        <div className="w-full text-sm text-right">Service status: <span className="font-bold text-rose-500">Inactive</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesAccordion