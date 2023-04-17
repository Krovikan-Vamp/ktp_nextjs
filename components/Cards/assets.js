import { dash_card_header } from "../dashboard";

const AssetSummary = () => {
    const styles = {
        outer_box: '',
        inner_box_number: 'w-full lg:text-4xl md:text-2xl sm:text-lg text-center pt-2',
        inner_box_label: 'w-full text-center p-2 text-gray-800'
    }
    return (
        <div className="flex flex-col mt-4 rounded-lg lg:w-3/12 sm:w-full bg-opacity-90 bg-slate-50">
            <div className={dash_card_header}>Assets</div>

            {/* Content */}
            <div className="flex flex-row flex-wrap h-full">
                {/* Box 1 */}
                <div className="flex flex-col justify-center w-1/2 border-b-2 border-r-2 border-collapse border-slate-400">
                    <div className={styles.inner_box_number}>127</div>
                    <div className={styles.inner_box_label}>Desktops</div>
                </div>
                {/* Box 2 */}
                <div className="flex flex-col justify-center w-1/2 border-b-2 border-collapse border-slate-400">
                    <div className={styles.inner_box_number}>7</div>
                    <div className={styles.inner_box_label}>Servers</div>
                </div>
                {/* Box 3 */}
                <div className="flex flex-col justify-center w-1/2 border-r-2 border-collapse border-slate-400">
                    <div className={styles.inner_box_number}>34</div>
                    <div className={styles.inner_box_label}>EoL Assets</div>
                </div>
                {/* Box 4 */}
                <div className="flex flex-col justify-center w-1/2 border-collapse border-slate-400">
                    <div className={styles.inner_box_number}>9</div>
                    <div className={styles.inner_box_label}>Networking</div>
                </div>
            </div>
        </div>)
}

export { AssetSummary }