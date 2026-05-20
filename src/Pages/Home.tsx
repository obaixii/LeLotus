
import { AboutHome, CTAHome, HeroHome, TreatmentsHome, TrustBarHome, WhyUsHome } from "../Components/index.tsx";

export default function Home() {
    return (
        <div>
            <HeroHome />
            <TrustBarHome />
            <AboutHome />
            <TreatmentsHome />
            <WhyUsHome />
            <CTAHome />
        </div>
    )
}
