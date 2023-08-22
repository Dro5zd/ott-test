import {GlobalStyles} from "./styles/GlobalStyles";
import {Hero} from "./sections/Hero/Hero";
import {Header} from "./components/Header/Header";
import {HeroBg} from "./sections/Hero/Hero.styled";
import {Offer} from "./sections/Offer/Offer";

function App() {
    return (
        <>
            <GlobalStyles/>
            <HeroBg>
                <Header/>
                <Hero/>
                <Offer/>
            </HeroBg>
        </>
    );
}

export default App;
