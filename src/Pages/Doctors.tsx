import { CTADoctors, DoctorsList, FilterTabsDoctor, HeroDoctors } from "../Components";

export default function Doctors() {
    return (
        <div id="page-doctors" className="page">
            <HeroDoctors />

            <section>
                <div className="container">
                    <FilterTabsDoctor />

                    <DoctorsList />

                    <CTADoctors />
                </div>
            </section>
        </div>)
}
