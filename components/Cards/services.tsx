import dynamic from "next/dynamic"
import { dash_card_header } from "../dashboard";

const ServicesSummary = () => {
    var AccordionComponents = dynamic(() => import(`./accordion_services`), {ssr: false});

    return (
        <div className="z-20 mt-4 rounded-lg">
            <div className={dash_card_header}>Kobargo Services</div>
            <AccordionComponents />
        </div>
    )
}

export {ServicesSummary}