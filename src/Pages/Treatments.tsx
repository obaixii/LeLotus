import { HeroTreatments, FiltersTabsTreatment, TreatmentsList, CTATreatments } from "../Components";

export default function Treatments() {


    return (
        <div id="page-treatments" className="page">

            <HeroTreatments />
            <section>
                <div className="container">
                    <FiltersTabsTreatment />
                    <TreatmentsList />
                </div>
            </section>

            <CTATreatments />
        </div>
    )
}