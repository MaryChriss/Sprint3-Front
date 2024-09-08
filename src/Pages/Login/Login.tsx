import React from "react";
import LeftSection from "../../components/LeftSection/LeftSection";
import { Footer } from "../../components/Footer/Footer";
import { StyledName } from "./Login.style";


const App: React.FC = () => {
    return (
        <>
            <StyledName>Brain Drive</StyledName>
            <LeftSection />
            <Footer />
        </>
    );
};

export default App;
