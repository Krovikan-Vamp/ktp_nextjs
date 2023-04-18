"use client"
import anime from "animejs"
import Image from "next/image"
import { useState, useEffect } from "react"
import logoIcon from "assets/images/bulb.svg"

const SplashScreen = ({ finishLoading }) => {
    const [isMounted, setMounted] = useState(false)

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading()
        })
        var path = anime.path(`path`)

        loader.add({
            targets: `path`,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInQuad',
            duration: 1000,
            direction: 'alternate',
        }).add({
            targets: `.welcome_text`,
            duration: 750,
            translateX: 10,
            opacity: 1,
            easing: `linear`,
            delay: anime.stagger(250)
        }).add({
            targets: `.webname`,
            duration: 750,
            opacity: 1,
            easing: `linear`,
            endDelay: 750
        })
        // .add({
        //     targets: `path`,
        //     fillOpacity: 1,
        //     duration: 1000
        // })
    }

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(false), 10)
        animate()
        return () => clearTimeout(timeout)
    })
    return (<div className="flex items-center justify-center w-full h-screen overflow-hidden" isMounted={isMounted}>
        {/* <Image id="logo" src={logoIcon} width={200} height={200} alt="Bullshit" /> */}
        <svg id="logo" fill-opacity={0} stroke="orange" fill="orange" className="w-1/2 m-auto stroked_path" width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <path d="m449.3 406.91h-18.637c0.57813-34.883 18.367-70.398 35.629-104.76 17.914-35.688 36.449-72.586 36.449-109.83 0-82.621-67.219-149.84-149.83-149.84-82.621 0-149.83 67.215-149.83 149.84 0 37.516 18.738 75.137 36.859 111.52 17.035 34.211 34.609 69.559 35.195 103.07h-18.609c-13.184 0-23.902 10.719-23.902 23.902s10.723 23.902 23.902 23.902h12.512c1.0078 43.191 35.168 73.203 83.875 73.203 48.703 0 82.867-30.012 83.883-73.203h12.512c13.184 0 23.902-10.719 23.902-23.902s-10.727-23.902-23.906-23.902zm-199.34-108.06c-17.543-35.223-35.684-71.645-35.684-106.53 0-76.445 62.188-138.64 138.63-138.64s138.63 62.195 138.63 138.64c0 34.586-17.129 68.695-35.262 104.8-10.695 21.301-21.578 43.035-28.723 65.094h-57.434c3.5547-4.4336 5.7695-9.9805 5.7695-16.09v-91.016c0-11.434-7.5078-21.055-17.812-24.473l36.883-31.793c2.3398-2.0156 2.6055-5.5547 0.58203-7.8945-2.0273-2.3477-5.5625-2.6094-7.9023-0.58203l-37 31.898-38.355-31.961c-2.3789-1.9805-5.9062-1.6562-7.8867 0.71875-1.9805 2.375-1.6562 5.9062 0.71875 7.8867l37.734 31.445c-10.785 3.125-18.738 12.98-18.738 24.758v91.023c0 6.1094 2.2188 11.652 5.7695 16.09h-51.734c-0.066407 0-0.11719 0.035157-0.17969 0.039063-7.0703-21.332-17.629-42.578-28.008-63.422zm174.29 74.574c-2.8828 11.09-4.6211 22.262-4.7812 33.488h-133.14c-0.17188-11.133-2-22.309-5-33.488zm-88.938-27.289v-91.02c0-8.0977 6.5898-14.688 14.688-14.688s14.688 6.5898 14.688 14.688v91.023c0 8.0977-6.5898 14.688-14.688 14.688s-14.688-6.5938-14.688-14.691zm17.598 170.58c-42.102 0-71.652-25.406-72.676-62.004h20.641v19.207c0 3.0977 2.5078 5.6016 5.6016 5.6016 3.0898 0 5.6016-2.5039 5.6016-5.6016v-19.207h79.535v19.207c0 3.0977 2.5039 5.6016 5.6016 5.6016s5.6016-2.5039 5.6016-5.6016v-19.207h22.77c-1.0273 36.594-30.578 62.004-72.676 62.004zm96.391-73.207h-192.78c-7 0-12.699-5.6992-12.699-12.699s5.6992-12.699 12.699-12.699h192.78c7 0 12.699 5.6992 12.699 12.699 0 6.9961-5.7031 12.699-12.703 12.699z" />
        </svg>
        <div className="flex flex-col w-1/2 my-auto text-6xl text-gray-300">
            <div>
                <div className="inline-flex w-1/4 mr-3 opacity-0 welcome_text">Welcome</div>
                <div className="inline-flex w-1/4 ml-3 opacity-0 welcome_text">to</div>
            </div>
            <div className="inline-flex translate-x-1 opacity-0 text-8xl webname">Infra<div className="inline-flex text-orange-400">PEEK</div></div>
        </div>

    </div>)
}

export { SplashScreen }