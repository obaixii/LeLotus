import { FormBooking, HeroBooking, InfoBooking } from "../Components";
export default function Booking() {


    return (
        <div id="page-booking" className="page">
            <HeroBooking />
            <section>
                <div className="container">
                    <div className="booking-layout">
                        <FormBooking />
                        <InfoBooking />
                    </div>
                </div>
            </section>
        </div>)
}
