import { useState } from "react"
import { HeroTreatments, CTATreatments, FiltersTabsTreatment, TreatmentsList } from "../Components"

export default function Treatments() {
    const [active, setActive] = useState('all')

    return (
        <div id="page-treatments" className="page">
            <HeroTreatments />
            <section>
                <div className="container">
                    <FiltersTabsTreatment active={active} setActive={setActive} />
                    <TreatmentsList active={active} />
                </div>
            </section>
            <CTATreatments />
        </div>
    );
}