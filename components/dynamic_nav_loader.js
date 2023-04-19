import { useEffect } from "react"
import { Sidenav, initTE } from "tw-elements"

const ReponsiveNavContent = () => {
    useEffect(() => {
        console.log(`HELLO????`)
        initTE({ Sidenav })
        document
            .getElementById("slim-toggler")
            .addEventListener("click", () => {
                const instance = Sidenav.getInstance(
                    document.getElementById("sidenav-4")
                );
                instance.toggleSlim();
                instance.changeMode(`push`)
            });
        const instance = Sidenav.getInstance(document.getElementById("sidenav-4"));
        console.log(instance)
    }, [])

    const styles = {
        span_styles: `mr-4 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300`,
        svg_styles: `w-6 h-6`
    }
    return (<>
        {/* <!-- Sidenav --> */}
        <nav
            id="sidenav-4"
            className="group fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-slim='true']:hidden data-[te-sidenav-slim-collapsed='true']:w-[77px] data-[te-sidenav-slim='true']:w-[77px] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-slate-800 [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='false']]:hidden [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='true']]:[display:unset]"
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
            data-te-sidenav-mode="push"
            data-te-sidenav-slim="true"
            data-te-sidenav-content="#slim-content"
            data-te-sidenav-CloseOnEsc="true"
            data-te-sidenav-slim-collapsed="true">
            <div className="flex flex-col justify-between h-full">
                <ul className="relative m-0 list-none px-[0.2rem] " data-te-sidenav-menu-ref>
                    <li className="relative">
                        <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-3 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10" data-te-sidenav-link-ref>
                            <span className={styles.span_styles}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.2"
                                    stroke="currentColor"
                                    className={styles.svg_styles}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                </svg>
                            </span>
                            <span
                                className="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                                data-te-sidenav-slim="false"
                            >Link 1</span>
                        </a>
                    </li>
                    <li className="relative">
                        <a
                            className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-3 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            data-te-sidenav-link-ref>
                            <span className={styles.span_styles}>
                                <svg width="700pt" className="fill-orange-400" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" >
                                    <g>
                                        <path strokeWidth="1.2" d="m449.3 406.91h-18.637c0.57813-34.883 18.367-70.398 35.629-104.76 17.914-35.688 36.449-72.586 36.449-109.83 0-82.621-67.219-149.84-149.83-149.84-82.621 0-149.83 67.215-149.83 149.84 0 37.516 18.738 75.137 36.859 111.52 17.035 34.211 34.609 69.559 35.195 103.07h-18.609c-13.184 0-23.902 10.719-23.902 23.902s10.723 23.902 23.902 23.902h12.512c1.0078 43.191 35.168 73.203 83.875 73.203 48.703 0 82.867-30.012 83.883-73.203h12.512c13.184 0 23.902-10.719 23.902-23.902s-10.727-23.902-23.906-23.902zm-199.34-108.06c-17.543-35.223-35.684-71.645-35.684-106.53 0-76.445 62.188-138.64 138.63-138.64s138.63 62.195 138.63 138.64c0 34.586-17.129 68.695-35.262 104.8-10.695 21.301-21.578 43.035-28.723 65.094h-57.434c3.5547-4.4336 5.7695-9.9805 5.7695-16.09v-91.016c0-11.434-7.5078-21.055-17.812-24.473l36.883-31.793c2.3398-2.0156 2.6055-5.5547 0.58203-7.8945-2.0273-2.3477-5.5625-2.6094-7.9023-0.58203l-37 31.898-38.355-31.961c-2.3789-1.9805-5.9062-1.6562-7.8867 0.71875-1.9805 2.375-1.6562 5.9062 0.71875 7.8867l37.734 31.445c-10.785 3.125-18.738 12.98-18.738 24.758v91.023c0 6.1094 2.2188 11.652 5.7695 16.09h-51.734c-0.066407 0-0.11719 0.035157-0.17969 0.039063-7.0703-21.332-17.629-42.578-28.008-63.422zm174.29 74.574c-2.8828 11.09-4.6211 22.262-4.7812 33.488h-133.14c-0.17188-11.133-2-22.309-5-33.488zm-88.938-27.289v-91.02c0-8.0977 6.5898-14.688 14.688-14.688s14.688 6.5898 14.688 14.688v91.023c0 8.0977-6.5898 14.688-14.688 14.688s-14.688-6.5938-14.688-14.691zm17.598 170.58c-42.102 0-71.652-25.406-72.676-62.004h20.641v19.207c0 3.0977 2.5078 5.6016 5.6016 5.6016 3.0898 0 5.6016-2.5039 5.6016-5.6016v-19.207h79.535v19.207c0 3.0977 2.5039 5.6016 5.6016 5.6016s5.6016-2.5039 5.6016-5.6016v-19.207h22.77c-1.0273 36.594-30.578 62.004-72.676 62.004zm96.391-73.207h-192.78c-7 0-12.699-5.6992-12.699-12.699s5.6992-12.699 12.699-12.699h192.78c7 0 12.699 5.6992 12.699 12.699 0 6.9961-5.7031 12.699-12.703 12.699z" />
                                    </g>
                                </svg>
                            </span>
                            <span
                                className="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                                data-te-sidenav-slim="false"
                            >Category 1</span
                            >
                            <span
                                className="absolute right-0 ml-auto mr-[0.5rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                                data-te-sidenav-rotate-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </a>
                        <ul
                            className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                            data-te-sidenav-collapse-ref>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                >Link 2</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                >Link 3</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li className="relative">
                        <a
                            className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-3 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            data-te-sidenav-link-ref>
                            <span className={styles.span_styles}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className={styles.svg_styles}>
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span
                                className="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                                data-te-sidenav-slim="false"
                            >Category 2</span
                            >
                            <span
                                className="absolute right-0 ml-auto mr-[0.5rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                                data-te-sidenav-rotate-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </a>
                        <ul
                            className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                            data-te-sidenav-collapse-ref>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                >Link 4</a
                                >
                            </li>
                            <li className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    data-te-sidenav-link-ref
                                >Link 5</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="flex flex-row flex-wrap justify-between">

                    {/* <!-- Toggler --> */}
                    <button
                        className="inline-block w-full p-4 font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-orange-500 shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg visited:rotate-180"
                        aria-haspopup="true"
                        id="slim-toggler">
                        {`X`}
                    </button>
                </div>
            </div>
        </nav>
        {/* <!-- Sidenav --> */}

        <div id="slim-content" className="flex !pl-[77px] h-24 fixed bottom-4 space-x-2 right-5 ">
            {/* <!-- Toggler --> */}
            <button
                className="inline-block px-3 mt-10 mr-1 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-orange-500 rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg"
                data-te-sidenav-toggle-ref
                data-te-target="#sidenav-4"
                aria-controls="#sidenav-4"
                aria-haspopup="true">
                <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5">
                        <path
                            fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </button>
            {/* <!-- Toggler --> */}
            {/* <button
                className="mt-10 inline-block rounded bg-orange-500 px-3 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg"
                aria-haspopup="true"
                id="slim-toggler">
                Toggle Slim
            </button> */}
        </div>
    </>)
}

export default ReponsiveNavContent