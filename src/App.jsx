import {GlobalStyles} from "./styles/GlobalStyles";
import {Hero} from "./sections/Hero/Hero";
import {Header} from "./components/Header/Header";
import {HeroBg} from "./sections/Hero/Hero.styled";
import {Offer} from "./sections/Offer/Offer";
import {TvChannels} from "./sections/TVChannels/TVChannels";
import {Devices} from "./sections/Devices/Devices";

function App() {
    return (
        <>
            <GlobalStyles/>
            <HeroBg>
                <Header/>
                <Hero/>
                <Offer/>
            </HeroBg>
            <TvChannels/>
            <Devices/>
        </>
    );
}

export default App;
