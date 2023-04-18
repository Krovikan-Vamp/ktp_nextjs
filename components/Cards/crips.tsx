import { dash_card_header } from "../dashboard"
import dynamic from "next/dynamic"


const CRIPSComponent = () => {

    var TabsComponent = dynamic(() => import(`./crips_tabs`), {
        ssr: false
    })
    return (<div className="flex flex-col justify-start rounded-lg sm:my-4 w-fit">
        <TabsComponent />
    </div>)
}

export { CRIPSComponent }