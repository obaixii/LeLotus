import { useState } from "react";
import { CTABA, FilterTabsBA, GridBA, HeroBA } from "../Components";

export default function BeforeAfter() {
    const [active, setActive] = useState('all')

    return (
        <div id="page-before-after" className="page">
            <HeroBA />
            <section>
                <div className="container">
                    <FilterTabsBA active={active} setActive={setActive} />
                    <GridBA active={active} onBrowseAll={() => setActive('all')} />                    <CTABA />
                </div>
            </section>
        </div>
    );
}
