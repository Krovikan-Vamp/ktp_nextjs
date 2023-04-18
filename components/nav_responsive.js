import dynamic from "next/dynamic"

const ResponsiveNav = () => {
    const Nav = dynamic(() => import("./dynamic_nav_loader"), {
        ssr: false
    })
    return (
        <Nav />
    )
}

export { ResponsiveNav }