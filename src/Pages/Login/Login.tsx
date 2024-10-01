import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import LeftSection from "../../components/LeftSection/LeftSection";
import { StyledName } from "./Login.style";


const App: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <StyledName onClick={handleClick}>Brain Drive</StyledName>
            <LeftSection />
            <Footer />
        </>
    );
};

export default App;
