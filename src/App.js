import {GlobalStyles} from "./styles/GlobalStyles";
import {Hero} from "./sections/Hero/Hero";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <>
            <GlobalStyles/>
            <Header/>
            <Hero/>
        </>
    );
}

export default App;
