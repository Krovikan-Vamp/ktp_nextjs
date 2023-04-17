
const ContactsComponent = () => {
    const cardParentStyles = `flex flex-col border-b-2 bg-opacity-80 border-slate-900
                            bg-slate-700 md:max-w-xl md:flex-row`
    return (
        <div className="flex flex-col mt-2 rounded-tl-lg rounded-tr-lg scroll-smooth max-h-64">
            <div className="p-2 text-xl font-semibold text-center bg-orange-200 border-b-2 rounded-tl-lg rounded-tr-lg border-b-orange-500">Contacts</div>

            {/* Contact list container */}
            <div className="overflow-y-scroll bg-opacity-40 bg-slate-300 scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-orange-400">
                <div className={cardParentStyles}>
                    <img
                        height="12"
                        width="12"
                        className="object-cover w-1/6 m-1 rounded-full"
                        src="https://picsum.photos/200"
                        alt="" />
                    <div className="flex flex-col justify-start p-2">
                        <div
                            className="text-lg font-medium dark:text-slate-50">
                            Zackery Hatch - <span className="text-green-400">Active</span>
                        </div>
                        {/* <p className="mb-4 text-base text-slate-600 dark:text-slate-200">
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </p> */}
                        <div className="text-sm text-slate-500 dark:text-slate-200">
                            zhatch@kobargo.com • (646) 741-5050
                        </div>
                    </div>
                </div>

                <div className={cardParentStyles}>
                    <img
                        className="object-cover w-1/6 m-1 rounded-full"
                        src="https://picsum.photos/400"
                        alt="" />
                    <div className="flex flex-col justify-start p-2">
                        <div
                            className="text-lg font-medium dark:text-slate-50">
                            Brook Longbine - <span className="text-yellow-400">Away</span>
                        </div>
                        {/* <p className="mb-4 text-base text-slate-600 dark:text-slate-200">
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </p> */}
                        <div className="text-sm text-slate-500 dark:text-slate-200">
                            blongbine@kobargo.com • (646) 741-5050
                        </div>
                    </div>
                </div>

                <div className={cardParentStyles}>
                    <img
                        className="object-cover w-1/6 m-1 rounded-full"
                        src="https://picsum.photos/300"
                        alt="" />
                    <div className="flex flex-col justify-start p-2">
                        <div
                            className="text-lg font-medium dark:text-slate-50">
                            Charles Beers - <span className="text-rose-400">Busy</span>
                        </div>
                        {/* <p className="mb-4 text-base text-slate-600 dark:text-slate-200">
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </p> */}
                        <div className="text-sm text-slate-500 dark:text-slate-200">
                            cbeers@kobargo.com • (646) 741-5050
                        </div>
                    </div>
                </div>

                <div className={cardParentStyles}>
                    <img
                        className="object-cover w-1/6 m-1 rounded-full"
                        src="https://picsum.photos/500"
                        alt="" />
                    <div className="flex flex-col justify-start p-2">
                        <div
                            className="text-lg font-medium dark:text-slate-50">
                            Ryan Morrell - <span className="text-green-400">Active</span>
                        </div>
                        {/* <p className="mb-4 text-base text-slate-600 dark:text-slate-200">
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </p> */}
                        <div className="text-sm text-slate-500 dark:text-slate-200">
                            rmorrell@kobargo.com • (646) 741-5050
                        </div>
                    </div>
                </div>

                <div className={cardParentStyles}>
                    <img
                        className="object-cover w-1/6 m-1 rounded-full"
                        src="https://picsum.photos/600"
                        alt="" />
                    <div className="flex flex-col justify-start p-2">
                        <div
                            className="text-lg font-medium dark:text-slate-50">
                            Yuval Goren - <span className="text-green-400">Active</span>
                        </div>
                        {/* <p className="mb-4 text-base text-slate-600 dark:text-slate-200">
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </p> */}
                        <div className="text-sm text-slate-500 dark:text-slate-200">
                            ygoren@kobargo.com • (646) 741-5050
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ContactsComponent }