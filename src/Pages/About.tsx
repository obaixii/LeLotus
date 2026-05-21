import { CTAAbout, HeroAbout, PhilosophyAbout, StatsStripAbout, ValuesAbout } from "../Components";

export default function About() {
    return (

        <div id="page-about" className="page">
            <HeroAbout />
            <PhilosophyAbout />
            <StatsStripAbout />
            <ValuesAbout />
            <CTAAbout />
        </div>
    )
}
