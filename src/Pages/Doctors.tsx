import { useState } from "react";
import { CTADoctors, DoctorsList, FilterTabsDoctor, HeroDoctors } from "../Components";

export default function Doctors() {
    const [active, setActive] = useState('all')

    return (
        <div id="page-doctors" className="page">
            <HeroDoctors />
            <section>
                <div className="container">
                    <FilterTabsDoctor active={active} setActive={setActive} />
                    <DoctorsList active={active} />
                    <CTADoctors />
                </div>
            </section>
        </div>
    );
}
