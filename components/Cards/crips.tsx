import { dash_card_header } from "../dashboard"
import dynamic from "next/dynamic"


const CRIPSComponent = () => {

    var TabsComponent = dynamic(() => import(`./crips_tabs`), {
        ssr: false
    })
    return (<div className="flex flex-col justify-start mt-4 rounded-lg w-fit">
        <TabsComponent />
    </div>)
}

export { CRIPSComponent }