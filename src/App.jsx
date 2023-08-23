import {GlobalStyles} from "./styles/GlobalStyles";
import {Hero} from "./sections/Hero/Hero";
import {Header} from "./components/Header/Header";
import {HeroBg} from "./sections/Hero/Hero.styled";
import {Offer} from "./sections/Offer/Offer";
import {TvChannels} from "./sections/TVChannels/TVChannels";
import {Devices} from "./sections/Devices/Devices";
import {Faq} from "./sections/FAQ/Faq";
import {Footer} from "./sections/Footer/Footer";
import {FooterBg} from "./sections/Footer/Footer.styled";

function App() {
    return (
        <>
            <GlobalStyles/>
            <HeroBg>
                <Header/>
                <Hero/>
                <Offer/>
                <TvChannels/>
                <Devices/>
            </HeroBg>
            <FooterBg>
                <Faq/>
                <Footer/>
            </FooterBg>
        </>
    );
}

export default App;
